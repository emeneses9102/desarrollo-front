import React, { useState, useEffect } from "react";
import PinCodeComponent from "./PinCodeComponent";
import { Grid, Typography, Paper, Alert } from "@mui/material";
import useStyles from "../../styles";
import { bodyPinCode } from "./LoginRegisterHelpers";
import {
  authPincode,
  handleCloseAlert,
  sendPincode,
  logOut,
} from "../../redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const PinCodeAuthComponent = () => {
  // MÉTODOS O VARIABLES EXTRAS:
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useNavigate();
  const { user } = useSelector((state) => state.users);
  const iduser = user ? user.id : 0;

  const [bodyPincode, setPincode] = useState(bodyPinCode);
  const [blockButtons, setBlockButtons] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  // APARECER LOADER
  const [openBackdrop, setOpenBackdrop] = useState(false);

  const { statusMessage, alertMessage } = useSelector((state) => state.users);

  useEffect(() => {
    if (alertMessage && statusMessage) {
      setTimeout(() => {
        openAlertMessages();
        setBlockButtons(true);
      }, 1);
    }
    if (openAlert) {
      setTimeout(() => {
        dispatch(handleCloseAlert());
        setBlockButtons(false);
      }, 990);
    }

    if (statusMessage === "success") {
      setTimeout(() => {
        history("/home");
      }, 1000);
    }
  }, [alertMessage, dispatch, history, openAlert, statusMessage]);

  const openAlertMessages = () => {
    setOpenAlert(true);
  };

  const handleSubmit = async () => {
    setOpenBackdrop(true);
    bodyPinCode.iduser = iduser;
    dispatch(authPincode(bodyPinCode));
    setOpenBackdrop(false);
  };

  const handleSubmitSendPin = async () => {
    setOpenBackdrop(true);
    bodyPinCode.iduser = iduser;
    dispatch(sendPincode(bodyPinCode));
    setOpenBackdrop(false);
  };

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {openAlert && (
        <Grid className={classes.root}>
          <Alert severity={statusMessage}>{alertMessage}</Alert>
        </Grid>
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
            <Typography className={classes.authTitle} variant="h4">
              Confirmar Pin al Correo
            </Typography>
          </div>
        </Grid>
        <br />
        <PinCodeComponent
          handleSubmitSendPin={handleSubmitSendPin}
          bodyPinCode={bodyPincode}
          handleSubmit={handleSubmit}
          blockButtons={blockButtons}
          classes={classes}
          handleLogout={handleLogout}
        />
      </Paper>
    </div>
  );
};

export default PinCodeAuthComponent;
