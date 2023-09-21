import React from "react";
import {
  ValidatorForm,
  // TextValidator
} from "react-material-ui-form-validator";
import { Button, Typography } from "@mui/material";
import { bodyLoginDefault } from "./LoginRegisterHelpers";
import Text from "../Input/Text";
import PrimaryButton from "../Buttons/PrimaryButton";

const LoginComponent = ({
  handleInputChange,
  handleSubmit,
  bodyLogin = bodyLoginDefault,
  blockButtons,
  classes,
  handleHelperChange,
  loginRegisterRender,
}) => {
  // MÉTODOS
  // FIN DE MÉTODOS

  // DESTRUCTURING DE DATA
  const { email, password } = bodyLogin;
  // FIN DESTRUCTURING DE DATA.
  
  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit}>
        <div style={{ textAlign: "left" }}>
          <Text
            onChange={handleInputChange}
            validators={["required", "isEmail"]}
            errorMessages={["Campo requerido", "El email no es válido"]}
            value={email}
            name="email"
            label="Correo"
            required
          />
          <br />
          <Text
            onChange={handleInputChange}
            validators={["required"]}
            errorMessages={["Campo requerido"]}
            value={password}
            name="password"
            type="password"
            label="Contraseña"
            required
          />
          <div style={{ width: "max-content", display: "flex" }}>
            <Button
              variant="text"
              size="large"
              className={`${classes.textButtonStyles}`}
              style={{
                textDecoration: "underline",
                padding: "0",
                fontWeight: "400",
              }}
              onClick={() => handleHelperChange("auth", 3)}
            >
              ¿Olvidaste tu contraseña?
            </Button>
          </div>
        </div>
        <br />
        <div style={{ maxWidth: "100%" }}>
          <PrimaryButton
            className={classes.buttonStyles}
            variant="contained"
            type="submit"
            disabled={blockButtons}
            text={
              <Typography fontWeight={500} fontSize="1.5rem">
                Iniciar Sesión
              </Typography>
            }
          />
          <Typography
            style={{ color: "#A1A1A1", textAlign: "center", marginTop: "10px" }}
          >
            <b>¿No tienes una cuenta?</b>{" "}
            <a
              onClick={() => {
                handleHelperChange("auth", loginRegisterRender === 1 ? 2 : 1);
              }}
              href="#"
              style={{ textDecoration: "none", color: "gray" }}
            >
              ¡Registrate ahora!
            </a>
          </Typography>
        </div>
      </ValidatorForm>
    </div>
  );
};

export default LoginComponent;
