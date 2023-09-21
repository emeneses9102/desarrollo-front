import {
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  CLOSE_ALERTS,
  LOGOUT_USER_SUCCESS,
  PROFILE_USER_START,
  PROFILE_USER_SUCCESS,
  PROFILE_USER_FAILURE,
  PIN_CODE_SUCCESS,
  PIN_CODE_FAILURE,
  PIN_CODE_START,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS, // ACTUALIZAR DATA DE USUARIOS -> TO-DO
  UPDATE_USER_FAILURE,
  SEND_PIN_FAILURE,
  SEND_PIN_SUCCESS,
  SEND_PIN_START,
  INVALID_EMAIL,
  VALID_EMAIL,
  CLEAR_VALID,
  PASSWORD_CHANGE,
  CLEAR_PASSWORD_CHANGE,
} from "../../Constants"; //asdsad
import { api } from "../../Services/api";

export const registerUser = (data) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_START });
  try {
    const res = await api.post(`/api/auth/signup`, data);
    if (res.status === 200) {
      const { token } = res.data;
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
      localStorage.setItem("userToken", JSON.stringify({ token }));
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: {
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
      });
    }
  } catch (error) {
    let errorMessage = "";
    if (error) {
      errorMessage = error.response.data;
    }
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload: errorMessage,
    });
  }
};

export const loginUser = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_START });
  const tokenObj = JSON.parse(localStorage.getItem("userToken"));
  let tokenLogIn = "";
  if (tokenObj) {
    tokenLogIn = tokenObj.token;
  }
  const headers = {
    "Content-Type": "application/json",
    "auth-token": tokenLogIn,
  };
  try {
    const res = await api.post(`/api/auth/signin`, data, { headers });

    if (res.status === 200) {
      let {
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
        token,
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
      localStorage.setItem(
        "userToken",
        JSON.stringify(tokenLogIn ? { tokenLogIn } : { token })
      );
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: {
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
      });
    }
  } catch (error) {
    let errorMessage = "";
    if (error) {
      errorMessage = error.response.data;
    }
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: errorMessage,
    });
  }
};

export const getDataUser = () => async (dispatch) => {
  dispatch({ type: PROFILE_USER_START });
  const tokenObj = JSON.parse(localStorage.getItem("userToken"));
  const { token } = tokenObj;
  const headers = { "Content-Type": "application/json", "auth-token": token };
  try {
    const res = await api.get(`/api/users/profile-user`, { headers });
    // console.log(res);
    if (res.status === 200) {
      // PROFILE_USER_SUCCESS
      let {
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
        type: PROFILE_USER_SUCCESS,
        payload: {
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
      });
    }
  } catch (e) {
    let errorMessage = "";
    if (e) {
      errorMessage = e.response.data;
    }
    dispatch({
      type: PROFILE_USER_FAILURE,
      payload: errorMessage,
    });
  }
};

export const authPincode = (data) => async (dispatch) => {
  dispatch({ type: PIN_CODE_START });
  const tokenObj = JSON.parse(localStorage.getItem("userToken"));
  const { token } = tokenObj;
  const headers = { "Content-Type": "application/json", "auth-token": token };
  try {
    const res = await api.post(`/api/auth/authpincode`, data, { headers });

    if (res.status === 200) {
      let {
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
      localStorage.setItem("userToken", JSON.stringify({ token }));
      dispatch({
        type: PIN_CODE_SUCCESS,
        payload: {
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
      });
    }
  } catch (error) {
    let errorMessage = "";
    if (error) {
      errorMessage = error.response.data;
    }
    dispatch({
      type: PIN_CODE_FAILURE,
      payload: errorMessage,
    });
  }
};

export const sendPincode = (data) => async (dispatch) => {
  dispatch({ type: SEND_PIN_START });
  const tokenObj = JSON.parse(localStorage.getItem("userToken"));
  const { token } = tokenObj;
  const headers = { "Content-Type": "application/json", "auth-token": token };
  try {
    const res = await api.post(`/api/auth/sendpincode`, data, { headers });
    if (res.status === 200) {
      dispatch({
        type: SEND_PIN_SUCCESS,
      });
    }
  } catch (error) {
    let errorMessage = "";
    if (error) {
      errorMessage = error.response.data;
    }
    dispatch({
      type: SEND_PIN_FAILURE,
      payload: errorMessage,
    });
  }
};

export const updateUser = (data) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_START });
  try {
    const tokenObj = JSON.parse(localStorage.getItem("userToken"));
    const { token } = tokenObj;
    const headers = { "Content-Type": "application/json", "auth-token": token };
    // console.log("asd", token);
    const res = await api.put("/api/users/update-user", data, { headers }); //  // ACTUALIZAR DATA DE USUARIOS -> TO-DO
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
        type: UPDATE_USER_SUCCESS,
        payload: {
          status: res.status,
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
        },
      });
    }
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAILURE,
      payload: error?.response?.data || "Error actualizando la información.",
    });
  }
};

export const logOut = () => async (dispatch) => {
  localStorage.removeItem("userToken");
  localStorage.removeItem("userData");
  dispatch({ type: LOGOUT_USER });
};

export const logOutSuccess = () => (dispatch) => {
  dispatch({ type: LOGOUT_USER_SUCCESS });
};

export const handleCloseAlert = () => (dispatch) => {
  dispatch({ type: CLOSE_ALERTS });
};

export const clearValid = () => (dispatch) => {
  dispatch({ type: CLEAR_VALID });
};

export const sendPasswordReset = (email) => async (dispatch) => {
  try {
    const headers = { "Content-Type": "application/json" };
    const {
      data: { forgetpassword },
    } = await api.post(
      "/api/auth/validateEmailforgotPassword",
      { email },
      headers
    );
    if (forgetpassword) {
      dispatch({ type: VALID_EMAIL });
    }
    return;
  } catch (err) {
    dispatch({ type: INVALID_EMAIL });
    return;
  }
};

export const handlePasswordChange = (data) => async (dispatch) => {
  try {
    const headers = { "Content-Type": "application/json" };
    const { data: resData } = await api.put(
      "/api/auth/createNewpassword",
      data,
      { headers }
    );
    if (resData === "Nueva Contraseña Registrada") {
      dispatch({ type: PASSWORD_CHANGE });
    }
    return;
  } catch (err) {
    console.log(err);
  }
};

export const clearPasswordFlag = () => (dispatch) => {
  dispatch({ type: CLEAR_PASSWORD_CHANGE });
};
