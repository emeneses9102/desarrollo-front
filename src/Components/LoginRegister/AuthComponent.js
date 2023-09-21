import React, { useState, useEffect } from "react";
import LoginComponent from "./LoginComponent";
import RegisterComponent from "./RegisterComponent";
import {
  // Button,
  // IconButton,
  Grid,
  Typography,
  Paper,
  Alert,
  Button,
} from "@mui/material";
import useStyles from "../../styles";
import {
  bodyLoginDefault,
  bodyRegisterDefault,
  arrayBancosChile,
  arrayBancoPeru,
  DEFAULT_BANK,
  DEFAULT_COUNTRY,
  listDocuments,
} from "./LoginRegisterHelpers";
import {
  registerUser,
  handleCloseAlert,
  loginUser,
  sendPasswordReset,
} from "../../redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import ForgotPasswordComponent from "./ForgotPasswordComponent";

const AuthComponent = ({ conditionalAuth }) => {
  // MÉTODOS O VARIABLES EXTRAS:
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useNavigate();
  const storageLoginOrRegister = localStorage.getItem("authComponent");
  // FIN MÉTODOS O VARIABLES  EXTRAS:

  // ESTADOS DEL COMPONENTE
  const [condLoginRegister, setCondLoginRegister] = useState(
    conditionalAuth
      ? conditionalAuth
      : storageLoginOrRegister
      ? Number(storageLoginOrRegister)
      : 1
  );
  const [bodyLogin, setBodyLogin] = useState(bodyLoginDefault);
  const [bodyRegister, setBodyRegister] = useState(bodyRegisterDefault);
  const [bodyForgot, setBodyForgot] = useState("");
  const [blockButtons, setBlockButtons] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [bankList, setBankList] = useState([DEFAULT_BANK]);
  const [acceptTermCond, setAcceptTermCond] = useState(false);
  // APARECER LOADER
  const [openBackdrop, setOpenBackdrop] = useState(false);
  // ESTADOS DEL COMPONENTE
  // ESTADOS DE REDUX
  const {
    statusMessage,
    alertMessage,
    alertMessageLogout,
    statusMessageLogout,
    validEmail,
  } = useSelector((state) => state.users);

  // ------------------

  // CICLOS DE VIDA
  useEffect(() => {
    if (alertMessage && statusMessage) {
      setTimeout(() => {
        openAlertMessages();
        setBlockButtons(true);
      }, 1);
    }
    if (alertMessageLogout && statusMessageLogout) {
      setTimeout(() => {
        openAlertMessages();
        setBlockButtons(true);
      }, 1);
    }
    if (openAlert) {
      setTimeout(() => {
        dispatch(handleCloseAlert());
        setBlockButtons(false);
      }, 2000);
    }
  }, [
    alertMessage,
    alertMessageLogout,
    dispatch,
    history,
    openAlert,
    statusMessage,
    statusMessageLogout,
  ]);

  const openAlertMessages = () => {
    setOpenAlert(true);
  };

  const handleHelperChange = (type, data) => {
    switch (type) {
      case "auth": {
        if (typeof data === "number" && Number(data) !== condLoginRegister) {
          setCondLoginRegister(data);
        }
        break;
      }
      // GUARDAR EN MEMORIA LOS OBJETOS AL REGISTRARSE (TO-DO)
      case "register": {
        break;
      }
      default:
        break;
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e?.target) {
      const { value, name } = e?.target;
      switch (condLoginRegister) {
        case 1: {
          setBodyLogin({ ...bodyLogin, [name]: value });
          break;
        }
        case 2: {
          if (name === "country") {
            switch (value) {
              case "Chile": {
                setOpenBackdrop(true);
                setBankList(arrayBancosChile);
                setTimeout(() => {
                  setOpenBackdrop(false);
                }, 100);
                break;
              }
              case "Peru": {
                setOpenBackdrop(true);
                setBankList(arrayBancoPeru);
                setTimeout(() => {
                  setOpenBackdrop(false);
                }, 100);
                break;
              }
              default: {
                break;
              }
            }
          }
          if (name === "bank") {
            // const { codigoSwift, bank } = value;
            setBodyRegister({ ...bodyRegister, bank: value });
          } else {
            setBodyRegister({ ...bodyRegister, [name]: value });
          }
          break;
        }
        case 3: {
          setBodyForgot(value);
          break;
        }
        default: {
          break;
        }
      }
    }
  };

  const handleSubmit = async () => {
    try {
      setOpenBackdrop(true);
      let text = "";
      switch (condLoginRegister) {
        case 1: {
          dispatch(loginUser(bodyLogin));
          break;
        }
        case 2: {
          const {
            bank: { bank, codigoSwift },
            country,
            accountNumber,
            idtype,
          } = bodyRegister;
          let newAccountNumber = accountNumber;
          let bodyRegisterCopy = {
            ...bodyRegister,
            bank,
            codigoSwift,
            accountNumber: newAccountNumber,
            idtype,
          };
          if (codigoSwift === DEFAULT_BANK.codigoSwift) {
            text = "Seleccione un Banco.";
          }
          if (country === DEFAULT_COUNTRY) {
            text = "Seleccione un país.";
          }
          if (text === "") {
            dispatch(registerUser(bodyRegisterCopy));
          } else {
            console.log("TEXT: ", text);
          }
          break;
        }
        case 3: {
          await dispatch(sendPasswordReset(bodyForgot));
          break;
        }
        default: {
          break;
        }
      }
      setOpenBackdrop(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {openAlert ? (
        <Grid className={classes.root}>
          <Alert severity={statusMessage || statusMessageLogout}>
            {alertMessage || alertMessageLogout}
          </Alert>
        </Grid>
      ) : (
        <Grid style={{ marginTop: "-7%" }}></Grid>
      )}
      <Paper className={`${classes.paperStyles} ${useStyles.authStyles}`}>
        <Grid
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div>
            <Typography className={classes.authTitle} variant="h3">
              {condLoginRegister === 1
                ? "Ingresar"
                : condLoginRegister === 2
                ? "Registrarse"
                : "Recuperar contraseña"}
            </Typography>
            {condLoginRegister === 2 && (
              <Typography style={{ color: "#A1A1A1", textAlign: "center" }}>
                <b>¿Ya tienes una cuenta?</b>{" "}
                <a
                  onClick={() => {
                    handleHelperChange("auth", condLoginRegister === 1 ? 2 : 1);
                  }}
                  style={{ textDecoration: "none", color: "gray" }}
                  href="#"
                >
                  ¡Inicia sesión!
                </a>
              </Typography>
            )}
          </div>
        </Grid>
        <br />
        {condLoginRegister === 1 ? (
          <LoginComponent
            handleInputChange={handleChange}
            handleSubmit={handleSubmit}
            bodyLogin={bodyLogin}
            blockButtons={blockButtons}
            classes={classes}
            handleHelperChange={handleHelperChange}
            loginRegisterRender={condLoginRegister}
          />
        ) : condLoginRegister === 2 ? (
          <div
            id="scrollregister"
            style={{
              maxHeight: "60vh",
              overflowY: "auto",
              padding: "7px",
            }}
          >
            <div>
              <RegisterComponent
                handleInputChange={handleChange}
                handleSubmit={handleSubmit}
                bodyRegister={bodyRegister}
                handleDateChange={handleChange}
                blockButtons={blockButtons}
                classes={classes}
                bankList={bankList}
                acceptTermCond={acceptTermCond}
                setAcceptTAndC={setAcceptTermCond}
              />
            </div>
          </div>
        ) : (
          <div style={{ width: "100%" }}>
            <ForgotPasswordComponent
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              email={bodyForgot}
              helperChange={handleHelperChange}
              classes={classes}
            />
          </div>
        )}
      </Paper>
    </div>
  );
};

export default AuthComponent;
