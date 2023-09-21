/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthComponent from "../../../Components/LoginRegister/AuthComponent";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import Cards from "../../../Images/Cards.png";
import { useNavigate } from "react-router-dom";
import { handleCloseAlert, logOutSuccess } from "../../../redux/actions/users";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import useStyles from "../../../styles";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import SecondaryButton from "../../../Components/Buttons/SecondaryButton";
import Logotipo4 from "../../../Images/Logotipo4.png";

const Auth = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { width } = useWindowDimensions();

  const [openBackdrop, setOpenBackdrop] = useState(false);
  const [conditionalAuth, setConditionalAuth] = useState(null);

  const { user, isDisLogging, alertMessageLogout, statusMessageLogout } =
    useSelector((state) => state.users);
  const validateSession = !user?.email;
  const mailOn = user?.mailOn;

  const handleRouteChange = (validate = false) => {
    if (validate) {
      setTimeout(() => {
        history("/home");
      }, 2100);
    }
  };

  useEffect(() => {
    if (isDisLogging) {
      setOpenBackdrop(true);
    }
    if (validateSession === false && !isDisLogging) {
      handleRouteChange(true);
    }
    if (alertMessageLogout && statusMessageLogout) {
      setTimeout(() => {
        dispatch(logOutSuccess());
        dispatch(handleCloseAlert());
        setOpenBackdrop(false);
      }, 1800);
    }
  }, [handleRouteChange, history, validateSession]);

  const renderByConditional = () => {
    if (conditionalAuth) {
      return (
        <div style={{ width: "100%" }}>
          <AuthComponent conditionalAuth={conditionalAuth} />
        </div>
      );
    } else {
      return (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "20%",
              flexDirection: "column",
            }}
          >
            <img src={Logotipo4} alt="logo" width="90%" />
            <Typography
              variant="h6"
              color="white"
              style={{ textAlign: "center" }}
            >
              Tu nueva billetera virtual.
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexGrow: "1",
            }}
          >
            <img src={Cards} alt="cards" width="90%" className="float" />
          </div>
          <div
            style={{
              height: "30%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <PrimaryButton
              className={classes.buttonStyles}
              type="submit"
              fullWidth
              text={
                <Typography fontWeight={500} fontSize="1.5rem">
                  Inicia Sesión
                </Typography>
              }
              onClick={() => setConditionalAuth(1)}
            />
            <SecondaryButton
              className={classes.buttonStyles}
              type="submit"
              fullWidth
              text={
                <Typography fontWeight={500} fontSize="1.5rem">
                  Registrate ahora
                </Typography>
              }
              onClick={() => setConditionalAuth(2)}
            />
          </div>
        </>
      );
    }
  };

  return (
    <>
      {width >= 1000 ? (
        <div style={{ display: "flex", margin: "-8px" }}>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={openBackdrop}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <div
            style={{
              backgroundColor: "rgb(0 0 0 / 60%)",
              width: "55%",
              minHeight: "100vh",
              boxShadow: "4px 0px 4px 2px rgba(0, 0, 0, 0.25)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0 5px 5px 0",
              gap: "30px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={Logotipo4} alt="logo" width="60%" />
              <Typography
                variant="h6"
                color="white"
                style={{ textAlign: "center" }}
              >
                Tu nueva billetera virtual.
              </Typography>
            </div>
            <img
              src={Cards}
              alt="cards"
              style={{ width: "80%" }}
              className="float"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
              margin: "auto",
              width: "40%",
              maxHeight: "80vh",
            }}
          >
            <AuthComponent />
          </div>
        </div>
      ) : (
        <div
          style={{
            height: `${conditionalAuth ? "100vh" : "90vh"}`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minWidth: "200px",
            backgroundColor: `${conditionalAuth && "rgb(0 0 0 / 60%)"}`,
            margin: `${conditionalAuth && "-8px"}`,
          }}
        >
          {renderByConditional()}
        </div>
      )}
    </>
  );
};

export default Auth;
