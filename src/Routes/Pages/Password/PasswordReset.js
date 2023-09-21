import React, { useEffect, useState } from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import { passwordReset } from "../../../Components/LoginRegister/LoginRegisterHelpers";
import { BsFillShieldLockFill } from "react-icons/bs";
import Text from "../../../Components/Input/Text";
import { Typography } from "@mui/material";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import {
  clearPasswordFlag,
  handlePasswordChange,
} from "../../../redux/actions/users";
import { useNavigate } from "react-router";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

const PasswordReset = () => {
  const { passwordChanged } = useSelector((state) => state.users);
  const { width } = useWindowDimensions();
  const history = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState(passwordReset);
  const [validProcess, setValidProcess] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = window.location.search.split("=")[1];

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setPassword({
      ...password,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await dispatch(
        handlePasswordChange({ password: password.password1, token })
      );

      setValidProcess(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    ValidatorForm.addValidationRule(
      "check password2",
      (password2) => password2 === password.password1
    );
  }, [password]);

  return (
    <div
      style={{
        flexGrow: "1",
        height: "100vh",
        margin: "-8px",
        backgroundColor: "rgb(0 0 0 / 60%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: `${validProcess ? "auto" : width > 500 ? "40%" : "90%"}`,
          maxWidth: `${!validProcess && "500px"}`,
          height: "auto",
          backgroundColor: "#28282A",
          padding: "20px",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!passwordChanged ? (
          <>
            <BsFillShieldLockFill size={60} color="#5966BA" />
            <Typography
              fontWeight={500}
              variant="h3"
              color="white"
              align="center"
            >
              Introduce tu nueva contraseña
            </Typography>
            <ValidatorForm
              onSubmit={handleSubmit}
              style={{
                width: "100%",
                display: "grid",
                gap: "15px",
                color: "white",
                borderTop: "1px solid grey",
                borderBottom: "1px solid grey",
                padding: "15px 0 15px 0",
              }}
            >
              <Text
                label="Nueva contraseña"
                name="password1"
                value={password.password1}
                onChange={handleChange}
                required
                validators={["required"]}
                type="password"
                errorMessages={["Campo requerido"]}
              />
              <Text
                label="Repite tu nueva contraseña"
                name="password2"
                value={password.password2}
                onChange={handleChange}
                required
                validators={["required", "check password2"]}
                type="password"
                errorMessages={[
                  "Campo requerido",
                  "Las contraseñas no coinciden",
                ]}
              />
              <PrimaryButton
                text={
                  <Typography fontWeight={500} fontSize="1.5rem">
                    {loading ? "Cargando..." : "Cambiar contraseña"}
                  </Typography>
                }
                disabled={
                  loading ||
                  password.password1.length === 0 ||
                  password.password2.length === 0 ||
                  password.password1 !== password.password2
                }
                type="submit"
              />
            </ValidatorForm>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <BsFillShieldLockFill size={60} color="#5966BA" />
            <Typography
              fontWeight={500}
              variant="h4"
              color="white"
              align="center"
            >
              ¡Contraseña modificada correctamente!
            </Typography>
            <div style={{ width: "60%" }}>
              <PrimaryButton
                text={
                  <Typography fontWeight={500} fontSize="1.5rem">
                    Volver al inicio
                  </Typography>
                }
                onClick={() => {
                  history("/");
                  dispatch(clearPasswordFlag());
                }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordReset;
