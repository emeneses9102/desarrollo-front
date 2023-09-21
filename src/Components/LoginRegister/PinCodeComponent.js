import React, { useState, useEffect } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import { Grid, Button, Typography } from "@mui/material";
import { bodyPinCode as bodyPinCodeS } from "./LoginRegisterHelpers";
import { PinInput } from "react-input-pin-code";

const PinCodeComponent = ({
  handleSubmit,
  handleSubmitSendPin,
  bodyPinCode = bodyPinCodeS,
  blockButtons,
  handleLogout,
  classes
}) => {
  const [values, setValues] = useState(['', '', '','']);
  const [seconds, setSeconds] = useState(60);
  const [activedTimer, setactivedTimer] = useState(false)

  useEffect(() => {
    bodyPinCode.pincode = values.join("");
  }, [bodyPinCode, values]);

  useEffect(() => {
    const interval = setInterval(() => {
      var counter = seconds => seconds - 1
      if(counter === 0) {
        setactivedTimer(false)
        clearInterval(interval)
      }else{
        setSeconds(counter)
      }
    }, 1000);
  }, []);

  const activetimer = () => {
    setSeconds(60)
    setactivedTimer(true)
  }

  const sendPincode = () =>{
    activetimer()
    handleSubmitSendPin()
  }
  
  return (
    <Grid>
      <ValidatorForm onSubmit={handleSubmit} className={classes.formValidator}>
        <div>
          <PinInput
            values={values}
            size="lg"
            onChange={(value, index, values) => setValues(values)}
            name="pincode"
            required
          />
        </div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {seconds > 0 && activedTimer ? <Typography>En
            {' ' + seconds} segundos se habilitará el link
          </Typography>:
          <Button
            onClick={sendPincode}
            variant="text"
            size="large"
            className={`${classes.textButtonStyles}`}
            style={{ textDecoration: "underline" }}
          >
            Volver a Enviar al Correo
          </Button> }
        </div>
        <br />
        <Button
          className={classes.buttonStyles}
          variant="contained"
          color="primary"
          type="submit"
          disabled={blockButtons}
          fullWidth
          
          // onClick={() => history("/home")}
        >
          <Typography fontWeight={500} fontSize="1.5rem">
            Confirmar
          </Typography>
        </Button>
        <Button
          className={classes.buttonStyles}
          variant="contained"
          type="button"
          color="secondary"
          style={{ height:'100%' }}
          disabled={blockButtons}
          fullWidth
          onClick={handleLogout}
        >
          <Typography fontWeight={500} fontSize="1.5rem">
            Volver a Iniciar Sesión
          </Typography>
        </Button>
      </ValidatorForm>
    </Grid>
  );
};

export default PinCodeComponent;
