import React from "react";
import { ValidatorForm } from "react-material-ui-form-validator";
import Text from "../Input/Text";
import { Alert, MenuItem, Select, Typography } from "@mui/material";
import PrimaryButton from "../Buttons/PrimaryButton";

const CargarSaldo = ({
  classesUserData,
  handleMoneyChange,
  classes,
  listCurrenciesToMap,
  cargarSaldoBody,
  handleMoneySubmit,
  cotClp,
  cotPen,
  textError,
  openMessageTextError,
  disabledCargarButton,
}) => {
  const { currency, money } = cargarSaldoBody;

  return (
    <div
      className={classesUserData}
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        color: "white",
        textAlign: "center",
      }}
    >
      <div>
        <Typography variant="h3" align="center" color="white" fontWeight={600}>
          Ingresar dinero a la cuenta
        </Typography>

        <ValidatorForm
          onSubmit={handleMoneySubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "25px",
            borderTop: "1px solid grey",
            borderBottom: "1px solid grey",
            padding: "15px 0 15px 0",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10px"
          }}
        >
          <div>
            <Typography
              variant="h6"
              align="center"
              color="gray"
              fontWeight={400}
            >
              Cotizacion actual:
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "5px",
                color: "#9eee52",
              }}
            >
              <Typography variant="body1">1 USD ≈ {cotClp} CLP</Typography>
              <Typography variant="body1"> / </Typography>
              <Typography variant="body1">
                1 USD {cotClp} ≈ {cotPen} PEN
              </Typography>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "1%",
              width: "60%",
              minWidth: "250px"
            }}
          >
            <Select
              classes={{
                icon: classes.icon,
                select: classes.selectStyles,
              }}
              onChange={handleMoneyChange}
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
            <div style={{ flexGrow: 1 }}>
              <Text
                onChange={handleMoneyChange}
                name="money"
                value={money}
                validators={["required"]}
                errorMessages={["Campo requerido"]}
                required
                type="number"
              />
            </div>
          </div>
          <div style={{ minWidth: "300px", width: "30%" }}>
            <PrimaryButton
              className={classes.buttonStyles}
              variant="contained"
              type="submit"
              disabled={money === "0" || money === 0 || disabledCargarButton}
              fullWidth
              text={
                <Typography fontWeight={500} fontSize="1.5rem">
                  Cargar
                </Typography>
              }
            />
          </div>
        </ValidatorForm>
        {openMessageTextError && <Alert severity="error">{textError}</Alert>}
      </div>
    </div>
  );
};

export default CargarSaldo;
