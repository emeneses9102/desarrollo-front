import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Typography from "@mui/material/Typography";
import { ValidatorForm } from "react-material-ui-form-validator";
import Text from "../Input/Text";
import {
  calcularCotizacion,
  emailRegexValidations,
  listCurrencies,
  mostrarValoresConMiles,
} from "../LoginRegister/LoginRegisterHelpers";
import { MenuItem, Select, Alert, Button } from "@mui/material";
import { useSelector } from "react-redux";
import PrimaryButton from "../Buttons/PrimaryButton";
import useWindowDimensions from "../../Hooks/useWindowDimensions";

const steps = ["Información receptor", "Seleccionar moneda", "Confirmar datos"];

const StepperEnviarDinero = ({
  activeStep,
  setActiveStep,
  classes,
  handleChange,
  handleEmailChange,
  emailToReceptor,
  handleEmailSubmit,
  handleNext,
  handleBack,
  userEmisor,
  handleTransferChange,
  bodyTransferencia,
  listCurrenciesToMap,
  listAllCurrencies,
  handleAmountSubmit,
  handleTransferenciaSubmit,
  cotPen,
  cotClp,
}) => {
  const { width } = useWindowDimensions();
  const {
    userReceptor,
    alertMessageTransferencia,
    statusMessageTransferencia,
  } = useSelector((state) => state.transfers);

  const { firstname, lastname, idnumber, country, idtype } = userReceptor;
  const { monto, currency, currencyReceptor, montoReceptor } =
    bodyTransferencia;
  const {
    bank: { money: moneyEmisor, moneyUsd: moneyUsdEmisor },
  } = userEmisor;
  const [elMontoMinimo, setElMontoMinimo] = React.useState("20 USD");

  const listCurrenciesReceptor = listCurrencies(country);
  const validacionUsdOrLocalCurrency = (currency) => {
    switch (currency) {
      case "USD": {
        return Number(monto) > Number(moneyUsdEmisor);
      }
      case "CLP": {
        return Number(monto) > Number(moneyEmisor);
      }
      case "PEN": {
        return Number(monto) > Number(moneyEmisor);
      }
      default: {
        break;
      }
    }
  };

  const disabledButton = validacionUsdOrLocalCurrency(currency);

  const convertirMonto = (c) => {
    switch (c) {
      case "USD": {
        return "USD 5.00";
      }
      case "CLP": {
        let clpCom = `CLP ${mostrarValoresConMiles(
          Math.floor(5 * Number(cotClp))
        )}`;

        return clpCom;
      }
      case "PEN": {
        let penCom = `PEN ${mostrarValoresConMiles(
          Math.floor(5 * Number(cotPen))
        )}`;
        return penCom;
      }
      default: {
        break;
      }
    }
  };

  React.useEffect(() => {
    ValidatorForm.addValidationRule(
      "email validator with steroids",
      (emailInput) => emailRegexValidations(emailInput)
    );
    ValidatorForm.addValidationRule("calcularDinero", (dineroInput) => {
      if (currency === "USD") {
        setElMontoMinimo("20 USD");
        return Number(dineroInput) >= 20;
      } else if (currency === "CLP") {
        setElMontoMinimo(Math.floor(20 * Number(cotClp)) + " CLP");
        return Number(dineroInput) >= Math.floor(20 * Number(cotClp));
      } else if (currency === "PEN") {
        setElMontoMinimo(Math.floor(20 * Number(cotPen)) + " PEN");
        return Number(dineroInput) >= Math.floor(20 * Number(cotPen));
      }
    });
  }, [cotClp, cotPen, currency]);

  const infoObj = {
    0: "Por empezar, indica el correo de tu destinatario (Es necesario que el usuario tenga su cuenta activada)",
    1: "Selecciona el monto y moneda a transferir (Recuerda que cada transferencia tiene un costo de USD 5)",
    2: "Antes de enviar tu transferencia revisa si está todo bien.",
  };

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h3"
            align="center"
            color="white"
            fontWeight={600}
          >
            Enviar dinero
          </Typography>
          {width > 700 && (
            <div
              style={{
                width: "70%",
                overflow: "auto",
              }}
            >
              <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                    <Step key={label} {...stepProps} style={{ color: "white" }}>
                      <StepLabel {...labelProps}>
                        <Typography color="white" fontWeight={500}>
                          {label}
                        </Typography>
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </div>
          )}

          <Typography
            variant="body1"
            align="center"
            color="white"
            fontWeight={500}
          >
            {infoObj[activeStep]}
          </Typography>
        </div>
        <br />
        {activeStep === 0 ? (
          <ValidatorForm
            onSubmit={handleEmailSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <div style={{ display: "flex", width: "40%", minWidth: "300px" }}>
              <Text
                onChange={handleEmailChange}
                name="email"
                value={emailToReceptor}
                type="email"
                validators={["required", "email validator with steroids"]}
                errorMessages={["Campo requerido", "Correo no válido"]}
                classeslabeltext={classes.classesLabelText}
                required
              />
            </div>
            <div
              style={{
                minWidth: "300px",
                width: "35%",
              }}
            >
              <PrimaryButton
                type="submit"
                text={
                  <Typography fontWeight={500} fontSize="1.5rem">
                    Buscar usuario
                  </Typography>
                }
              />
            </div>
          </ValidatorForm>
        ) : activeStep === 1 ? (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            ></div>
            <div>
              <ValidatorForm
                onSubmit={handleAmountSubmit}
                style={{
                  borderTop: "2px solid grey",
                  borderBottom: "2px solid grey",
                  padding: "15px 0 17px 0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "25px",
                  }}
                >
                  <Typography
                    fontWeight={500}
                    fontSize="1.5rem"
                    color="#5966BA"
                  >
                    Tu envias:
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      minWidth: "300px",
                      width: "40%",
                    }}
                  >
                    <Select
                      classes={{
                        icon: classes.icon,
                        select: classes.selectStyles,
                      }}
                      onChange={handleTransferChange}
                      className={classes.testInputStyle}
                      defaultValue={currency}
                      name="currency"
                      value={currency}
                    >
                      {listCurrenciesToMap.map((currencyC, indexCur) => {
                        return (
                          <MenuItem key={indexCur + "#"} value={currencyC}>
                            {currencyC}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    <Text
                      onChange={handleTransferChange}
                      name="monto"
                      value={monto}
                      type="number"
                      validators={["required", "calcularDinero"]}
                      errorMessages={[
                        "Campo requerido",
                        "El monto mínimo es " + elMontoMinimo,
                      ]}
                      classeslabeltext={classes.classesLabelText}
                      required
                    />
                  </div>
                  <Typography
                    fontWeight={500}
                    fontSize="1.5rem"
                    color="#5966BA"
                  >
                    {`${firstname} ${lastname} recibe:`}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      minWidth: "300px",
                      width: "40%",
                    }}
                  >
                    <Select
                      classes={{
                        icon: classes.icon,
                        select: classes.selectStyles,
                      }}
                      onChange={handleTransferChange}
                      className={classes.testInputStyle}
                      defaultValue={currencyReceptor}
                      name="currencyReceptor"
                      value={currencyReceptor}
                    >
                      {listCurrenciesReceptor.map((currencyC, indexCur) => {
                        return (
                          <MenuItem key={indexCur + "#"} value={currencyC}>
                            {currencyC}
                          </MenuItem>
                        );
                      })}
                    </Select>
                    <Text
                      onChange={handleTransferChange}
                      name="montoReceptor"
                      value={
                        Number(montoReceptor) <= 0 ? 0 : Number(montoReceptor)
                      }
                      type="number"
                      readOnly={true}
                      classeslabeltext={classes.classesLabelText}
                    />
                  </div>

                  {statusMessageTransferencia === 400 ? (
                    <Alert severity="error">{alertMessageTransferencia}</Alert>
                  ) : (
                    <>
                      <div style={{ width: "30%", minWidth: "300px" }}>
                        <PrimaryButton
                          disabled={
                            disabledButton || statusMessageTransferencia === 400
                          }
                          type="submit"
                          text={
                            <Typography fontWeight={500} fontSize="1.5rem">
                              {disabledButton
                                ? "Saldo insuficiente"
                                : "Confirmar"}
                            </Typography>
                          }
                        />
                      </div>
                    </>
                  )}
                </div>
              </ValidatorForm>
            </div>
          </>
        ) : activeStep === 2 ? (
          <>
            <ValidatorForm
              onSubmit={handleTransferenciaSubmit}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column ",
                alignItems: "center",
                borderTop: "2px solid grey",
                borderBottom: "2px solid grey",
                padding: "15px 5px 17px 5px",
              }}
            >
              <div style={{ width: "100%", borderBottom: "1px solid grey" }}>
                <Typography color="gray" variant="h6">
                  Vas a transferir:
                </Typography>
                <Typography variant="h3" color="#5966BA">
                  {currency} {mostrarValoresConMiles(monto)}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    marginBottom: "10px",
                    width: "100%",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Typography variant="body1" color="white" fontWeight={500}>
                      Comisión:
                    </Typography>

                    <Typography variant="body1" color="white">
                      {convertirMonto(currency)}
                    </Typography>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Typography variant="body1" color="white" fontWeight={500}>
                      Monto a enviar:
                    </Typography>

                    <Typography variant="body1" color="white">
                      {currencyReceptor} {mostrarValoresConMiles(montoReceptor)}
                    </Typography>
                  </div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <Typography variant="body1" color="white" fontWeight={500}>
                      Cambio:
                    </Typography>

                    <Typography variant="body1" color="white">
                      {calcularCotizacion(
                        currency,
                        currencyReceptor,
                        cotClp,
                        cotPen
                      )}
                    </Typography>
                  </div>
                </div>
              </div>
              <div style={{ width: "100%", marginTop: "15px" }}>
                <Typography color="gray" variant="h6">
                  Para:
                </Typography>
                <Typography variant="h4" color="white">
                  {firstname + " " + lastname}
                </Typography>
                <Typography variant="h6" color="white" fontWeight={400}>
                  {idtype + ": " + idnumber + " - " + country}
                </Typography>
              </div>

              <div style={{ width: "40%", marginTop: "15px" }}>
                <PrimaryButton
                  type="submit"
                  text={
                    <Typography fontWeight={500} fontSize="1.5rem">
                      {activeStep === 2 ? "Enviar" : ""}
                    </Typography>
                  }
                />
              </div>
            </ValidatorForm>
          </>
        ) : (
          <></>
        )}
      </div>

      {activeStep !== 0 && (
        <>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
              style={{ color: "white" }}
            >
              Volver
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
          </Box>
        </>
      )}
    </>
  );
};

export default StepperEnviarDinero;
