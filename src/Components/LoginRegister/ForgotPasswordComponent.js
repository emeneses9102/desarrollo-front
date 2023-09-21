import { Button, Typography } from "@mui/material";
import React from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import { useDispatch, useSelector } from "react-redux";
import { clearValid } from "../../redux/actions/users";
import PrimaryButton from "../Buttons/PrimaryButton";
import Text from "../Input/Text";

const ForgotPasswordComponent = ({
  handleSubmit,
  handleChange,
  email,
  helperChange,
  classes,
}) => {
  const { validEmail } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  return (
    <>
      {!validEmail ? (
        <div>
          <Typography variant="h6" fontWeight={400} align="center">
            Por favor, escribe tu e-mail
          </Typography>
          <ValidatorForm
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ width: "70%" }}>
              <Text
                onChange={handleChange}
                required
                value={email}
                validators={["required", "isEmail"]}
                errorMessages={["Campo requerido", "El email no es válido"]}
              />
            </div>
            <div style={{ width: "50%" }}>
              <PrimaryButton
                text={
                  <Typography fontWeight={500} fontSize="1.5rem">
                    Confirmar
                  </Typography>
                }
                type="submit"
                disabled={email.length === 0}
              />
            </div>
            <Button
              variant="text"
              size="large"
              className={`${classes.textButtonStyles}`}
              style={{
                textDecoration: "underline",
                padding: "0",
                fontWeight: "400",
              }}
              onClick={() => {
                helperChange("auth", 1);
              }}
            >
              <Typography variant="body2" color="whitesmoke">
                Volver al inicio de sesión
              </Typography>
            </Button>
          </ValidatorForm>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <div>
            <Typography variant="h5" fontWeight={500}>
              Un link de recuperación fue enviado a tu email.
            </Typography>
            <Typography variant="h6" fontWeight={400} color="gray">
              (Recuerda checkear tu casilla de spam)
            </Typography>
          </div>
          <Button
            variant="text"
            size="large"
            className={`${classes.textButtonStyles}`}
            style={{
              textDecoration: "underline",
              padding: "0",
              fontWeight: "400",
            }}
            onClick={handleSubmit}
          >
            <Typography variant="body2" color="whitesmoke">
              ¿No lo encuentras? Reenviar correo
            </Typography>
          </Button>
          <PrimaryButton
            text={
              <Typography fontWeight={500} fontSize="1.5rem">
                Volver al inicio de sesión
              </Typography>
            }
            onClick={() => {
              helperChange("auth", 1);
              dispatch(clearValid());
            }}
          />
        </div>
      )}
    </>
  );
};

export default ForgotPasswordComponent;
