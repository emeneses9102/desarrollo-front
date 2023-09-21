import {
  CARGAR_SALDO_USER_START,
  CARGAR_SALDO_USER_SUCCESS,
  CARGAR_SALDO_USER_FAILURE,
  COTIZACIONES_START,
  COTIZACIONES_SUCCESS,
  COTIZACIONES_FAILURE,
  ENVIAR_TRANSFERENCIA_START,
  ENVIAR_TRANSFERENCIA_SUCCESS,
  ENVIAR_TRANSFERENCIA_FAILURE,
  OBTENER_INFO_USUARIO_START,
  OBTENER_INFO_USUARIO_SUCCESS,
  OBTENER_INFO_USUARIO_FAILURE,
  CLOSE_ALERTS_TRANSFERENCIA,
  OBTENER_TRANSFERENCIAS_USUARIO_START,
  OBTENER_TRANSFERENCIAS_USUARIO_SUCCESS,
  OBTENER_TRANSFERENCIAS_USUARIO_FAILURE,
} from "../../Constants";
import { api } from "../../Services/api";

export const getAllTransferByUser = (data) => async (dispatch) => {
  dispatch({ type: OBTENER_TRANSFERENCIAS_USUARIO_START });
  try {
    const headers = { "Content-Type": "application/json" };

    const res = await api.post(
      "/api/transferencias/transferencias-historico",
      data,
      {
        headers,
      }
    );
    if (res.status === 200) {
      dispatch({
        // transferenciasEnviadas
        type: OBTENER_TRANSFERENCIAS_USUARIO_SUCCESS,
        payload: res.data,
      });
    }
    return res.data;
  } catch (error) {
    dispatch({
      type: OBTENER_TRANSFERENCIAS_USUARIO_FAILURE,
      payload: error?.response?.data || "Error cargando saldo.",
    });
  }
};

export const cargarCotizacionHoy = () => async (dispatch) => {
  //
  dispatch({ type: COTIZACIONES_START });
  try {
    const headers = { "Content-Type": "application/json" };

    const res = await api.get("/api/transferencias/cotizacion-dia", {
      headers,
    });
    if (res.status === 200) {
      const { cotizacionClp, cotizacionPen } = res.data;

      dispatch({
        type: COTIZACIONES_SUCCESS,
        payload: {
          cotizacionClp,
          cotizacionPen,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: COTIZACIONES_FAILURE,
      payload: error?.response?.data || "Error cargando saldo.",
    });
  }
};

export const cargarSaldoUser = (data) => async (dispatch) => {
  dispatch({ type: CARGAR_SALDO_USER_START });
  try {
    const tokenObj = JSON.parse(localStorage.getItem("userToken"));
    const { token } = tokenObj;
    const headers = { "Content-Type": "application/json", "auth-token": token };
    const res = await api.post("/api/transferencias/cargar-saldo", data, {
      headers,
    }); //  // ACTUALIZAR DATA DE USUARIOS -> TO-DO
    if (res.status === 200) {
      const {
        firstname,
        lastname,
        idnumber,
        idtype,
        email,
        country,
        birthday,
        id,
        bank,
        isAdmin,
        mailOn,
      } = res.data;
      localStorage.setItem(
        "userData",
        JSON.stringify({
          firstname,
          lastname,
          idnumber,
          idtype,
          email,
          country,
          birthday,
          id,
          bank,
          isAdmin,
          mailOn,
        })
      );
      dispatch({
        type: CARGAR_SALDO_USER_SUCCESS,
        payload: {
          status: res.status,
          userNewData: res.data,
        },
      });
    }
  } catch (error) {
    dispatch({
      type: CARGAR_SALDO_USER_FAILURE,
      payload: error?.response?.data || "Error cargando saldo.",
    });
  }
};

// {
//   monto: "400",
//   emailEmisor: "fmatus188@gmail.com",
//   emailReceptor: "admin@innovapay.com",
//   currency: 'USD',
//   transfertype: 'Transferencia',
//   comision: "5",
// }

export const enviarTransferencia = (data, handler) => async (dispatch) => {
  dispatch({ type: ENVIAR_TRANSFERENCIA_START });
  try {
    const tokenObj = JSON.parse(localStorage.getItem("userToken"));
    const { token } = tokenObj;
    const headers = { "Content-Type": "application/json", "auth-token": token };
    const res = await api.post(
      "/api/transferencias/enviar-transferencia",
      data,
      {
        headers,
      }
    ); //  // ACTUALIZAR DATA DE USUARIOS -> TO-DO
    if (res.status === 200) {
      const {
        user: {
          firstname,
          lastname,
          idnumber,
          idtype,
          email,
          country,
          birthday,
          id,
          bank,
          isAdmin,
          mailOn,
        },
        message: messageSuccess,
      } = res.data;
      localStorage.setItem(
        "userData",
        JSON.stringify({
          firstname,
          lastname,
          idnumber,
          idtype,
          email,
          country,
          birthday,
          id,
          bank,
          isAdmin,
          mailOn,
        })
      );
      handler({ status: res.status });
      dispatch({
        type: ENVIAR_TRANSFERENCIA_SUCCESS,
        payload: {
          status: res.status,
          userNewData: res.data.user,
          message: messageSuccess,
        },
      });
    }
  } catch (error) {
    handler({ status: 400 });

    dispatch({
      type: ENVIAR_TRANSFERENCIA_FAILURE,
      payload: error?.response?.data || "Error cargando saldo.",
    });
  }
};

export const obtenerInfoUsuario = (data, handler) => async (dispatch) => {
  dispatch({ type: OBTENER_INFO_USUARIO_START });
  try {
    const headers = { "Content-Type": "application/json" };

    const res = await api.post("/api/transferencias/obtener-info", data, {
      headers,
    });
    if (res.status === 200) {
      handler({ status: res.status, message: "" });
      dispatch({
        type: OBTENER_INFO_USUARIO_SUCCESS,
        payload: res.data,
      });
    }
    return res.data;
  } catch (error) {
    handler({
      status: 400,
      message: error?.response?.data || "Error al cargar data del usuario",
    });

    dispatch({
      type: OBTENER_INFO_USUARIO_FAILURE,
      payload: error?.response?.data || "Error cargando saldo.",
    });
  }
};

export const handleCloseAlertTransf = () => async (dispatch) => {
  dispatch({ type: CLOSE_ALERTS_TRANSFERENCIA });
};
