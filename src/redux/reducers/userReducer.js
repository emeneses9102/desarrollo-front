import {
  REGISTER_USER_START,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  CLOSE_ALERTS,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  LOGOUT_USER_SUCCESS,
  PIN_CODE_FAILURE,
  PIN_CODE_SUCCESS,
  PIN_CODE_START,
  // GET_USER_PROFILE_DATA_START,
  // GET_USER_PROFILE_DATA_SUCCESS,
  // GET_USER_PROFILE_DATA_FAILURE,
  PROFILE_USER_START,
  PROFILE_USER_SUCCESS,
  PROFILE_USER_FAILURE,
  UPDATE_USER_START,
  UPDATE_USER_SUCCESS, // ACTUALIZAR DATA DE USUARIOS -> TO-DO
  UPDATE_USER_FAILURE,
  CARGAR_SALDO_USER_SUCCESS,
  ENVIAR_TRANSFERENCIA_SUCCESS,
  SEND_PIN_START,
  SEND_PIN_SUCCESS,
  SEND_PIN_FAILURE,
  INVALID_EMAIL,
  VALID_EMAIL,
  CLEAR_VALID,
  PASSWORD_CHANGE,
  CLEAR_PASSWORD_CHANGE,
} from "../../Constants.js";

const initialState = {
  user: JSON.parse(localStorage.getItem("userData")) || {},
  userProfile: {},
  alertMessage: "",
  statusMessage: "",
  alertMessageLogout: "",
  statusMessageLogout: "",
  isDisLogging: false,
  validEmail: false,
  passwordChanged: false,
};
// asdjasjsad asdasasd
export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_USER_START: {
      return {
        ...state,
      };
    }
    case REGISTER_USER_SUCCESS: {
      return {
        ...state,
        user: payload,
        alertMessage: "Usuario registrado correctamente",
        statusMessage: "success",
      };
    }
    case INVALID_EMAIL: {
      return {
        ...state,
        alertMessage: "Email no encontrado",
        statusMessage: "error",
      };
    }
    case VALID_EMAIL: {
      return {
        ...state,
        validEmail: true,
      };
    }
    case CLEAR_VALID: {
      return {
        ...state,
        validEmail: false,
      };
    }
    case PASSWORD_CHANGE: {
      return {
        ...state,
        passwordChanged: true
      }
    }
    case CLEAR_PASSWORD_CHANGE: {
      return {
        ...state,
        passwordChanged: false
      }
    }
    case REGISTER_USER_FAILURE: {
      return {
        ...state,
        alertMessage: payload,
        statusMessage: "error",
      };
    }
    case LOGIN_USER_START: {
      return {
        ...state,
      };
    }
    case LOGIN_USER_SUCCESS: {
      const { firstname } = payload;
      return {
        ...state,
        user: payload,
        alertMessage: `¡Bienvenido/a nuevamente ${firstname} a Innova Pay!`,
        statusMessage: "success",
      };
    }
    case LOGIN_USER_FAILURE: {
      return {
        ...state,
        alertMessage: payload,
        statusMessage: "error",
      };
    }

    case PIN_CODE_START: {
      return {
        ...state,
      };
    }
    case PIN_CODE_SUCCESS: {
      return {
        ...state,
        user: payload,
        alertMessage: "El código pin es correcto",
        statusMessage: "success",
      };
    }
    case PIN_CODE_FAILURE: {
      return {
        ...state,
        alertMessage: payload,
        statusMessage: "error",
      };
    }

    case SEND_PIN_START: {
      return {
        ...state,
      };
    }
    case SEND_PIN_SUCCESS: {
      return {
        ...state,
      };
    }
    case SEND_PIN_FAILURE: {
      return {
        ...state,
        alertMessage: payload,
        statusMessage: "error",
      };
    }

    // case PIN_CODE_START: {
    //   return {
    //     ...state,
    //   };
    // }
    // case PIN_CODE_SUCCESS: {
    //   return {
    //     ...state,
    //     user: payload,
    //     alertMessage: "El código pin es correcto",
    //     statusMessage: "success",
    //   };
    // }
    // case PIN_CODE_FAILURE: {
    //   return {
    //     ...state,
    //     alertMessage: payload,
    //     statusMessage: "error",
    //   };
    // }

    case LOGOUT_USER: {
      return {
        ...state,
        user: {},
        userProfile: {},
        alertMessage: "",
        statusMessage: "",
        alertMessageLogout: "Se ha cerrado sesión correctamente.",
        statusMessageLogout: "success",
        isDisLogging: true,
      };
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        ...state,
        isDisLogging: false,
        alertMessageLogout: "",
        statusMessageLogout: "",
      };
    }
    case PROFILE_USER_START: {
      return {
        ...state,
      };
    }
    case PROFILE_USER_SUCCESS: {
      return {
        ...state,
        user: payload,
      };
    }
    case PROFILE_USER_FAILURE: {
      return {
        ...state,
      };
    }
    case UPDATE_USER_START: {
      return {
        ...state,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,
        user: { ...payload.user },
        alertMessage: "Información actualizada con éxito.",
        statusMessage: payload.status,
      };
    }
    case UPDATE_USER_FAILURE: {
      return {
        ...state,
      };
    }
    case CARGAR_SALDO_USER_SUCCESS: {
      return {
        ...state,
        user: payload.userNewData,
      };
    }
    case ENVIAR_TRANSFERENCIA_SUCCESS: {
      return {
        ...state,
        user: payload.userNewData,
      };
    }
    case CLOSE_ALERTS: {
      return {
        ...state,
        alertMessage: "",
        statusMessage: "",
        alertMessageLogout: "",
        statusMessageLogout: "",
      };
    }
    default:
      return state;
  }
}
