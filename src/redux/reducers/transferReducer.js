import {
  CARGAR_SALDO_USER_START,
  CARGAR_SALDO_USER_SUCCESS,
  CARGAR_SALDO_USER_FAILURE,
  CLOSE_ALERTS_TRANSFERENCIA,
  COTIZACIONES_START,
  COTIZACIONES_SUCCESS,
  COTIZACIONES_FAILURE,
  ENVIAR_TRANSFERENCIA_START,
  ENVIAR_TRANSFERENCIA_SUCCESS,
  ENVIAR_TRANSFERENCIA_FAILURE,
  OBTENER_INFO_USUARIO_START,
  OBTENER_INFO_USUARIO_SUCCESS,
  OBTENER_INFO_USUARIO_FAILURE,
  OBTENER_TRANSFERENCIAS_USUARIO_START,
  OBTENER_TRANSFERENCIAS_USUARIO_SUCCESS,
  OBTENER_TRANSFERENCIAS_USUARIO_FAILURE,
} from "../../Constants.js";

const initialState = {
  transfer: {},
  cargarSaldo: {},
  alertMessage: "",
  statusMessage: "",
  statusMessageTransferencia: "",
  alertMessageTransferencia: "",
  userReceptor: {},
  transferenciasEnviadas: [],
  transferenciasRecibidas: [],
};
// asdjasjsad
export default function transferReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case CARGAR_SALDO_USER_START: {
      return {
        ...state,
      };
    }
    case CARGAR_SALDO_USER_SUCCESS: {
      return {
        ...state,
        alertMessage:
          "Se ha cargado el saldo con éxito. Pronto lo verá en su cuenta.",
        statusMessage: payload.status,
      };
    }
    case CARGAR_SALDO_USER_FAILURE: {
      return {
        ...state,
        alertMessage: payload,
        statusMessage: 400,
      };
    }
    case COTIZACIONES_START: {
      return {
        ...state,
      };
    }
    case COTIZACIONES_SUCCESS: {
      const { cotizacionClp, cotizacionPen } = payload;
      return {
        ...state,
        cotizacionClp,
        cotizacionPen,
      };
    }
    case COTIZACIONES_FAILURE: {
      return {
        ...state,
      };
    }
    case ENVIAR_TRANSFERENCIA_START: {
      return {
        ...state,
      };
    }
    case ENVIAR_TRANSFERENCIA_SUCCESS: {
      return {
        ...state,
        messageTransfer: payload.message,
        statusTransfer: payload.status,
      };
    }
    case ENVIAR_TRANSFERENCIA_FAILURE: {
      return {
        ...state,
      };
    }
    case OBTENER_INFO_USUARIO_START: {
      return {
        ...state,
        userReceptor: {},
        statusMessageTransferencia: "",
        alertMessageTransferencia: "",
      };
    }
    case OBTENER_INFO_USUARIO_SUCCESS: {
      return {
        ...state,
        userReceptor: payload,
        statusMessageTransferencia: 200,
        alertMessageTransferencia: "",
      };
    }
    case OBTENER_INFO_USUARIO_FAILURE: {
      return {
        ...state,
        statusMessageTransferencia: 400,
        alertMessageTransferencia: payload,
      };
    }
    case OBTENER_TRANSFERENCIAS_USUARIO_START: {
      return {
        ...state,
      };
    }
    case OBTENER_TRANSFERENCIAS_USUARIO_SUCCESS: {
      return {
        ...state,
        transferenciasEnviadas: payload.transferenciasEnviadas,
        transferenciasRecibidas: payload.transferenciasRecibidas,
      };
    }
    case OBTENER_TRANSFERENCIAS_USUARIO_FAILURE: {
      return {
        ...state,
      };
    }
    case CLOSE_ALERTS_TRANSFERENCIA: {
      return {
        ...state,
        alertMessageTransferencia: "",
        statusMessageTransferencia: "",
      };
    }
    default:
      return state;
  }
}
