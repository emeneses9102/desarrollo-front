import React, {
  //  useState
  //  ,
  useEffect,
} from "react";
import {
  ValidatorForm,
  // TextValidator
} from "react-material-ui-form-validator";
import {
  Grid,
  Button,
  Select,
  // FormControl,
  // InputLabel,
  // Box,
  // Input,
  MenuItem,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import {
  bodyRegisterDefault,
  countryList,
  DEFAULT_COUNTRY,
  DEFAULT_BANK,
  listDocuments,
  emailRegexValidations,
  validateLengthCci,
  validateFormatCci,
  validateLengthAN,
  validateDocumentLength,
} from "./LoginRegisterHelpers";
import Text from "../Input/Text";

const RegisterComponent = ({
  handleInputChange,
  handleSubmit,
  bodyRegister = bodyRegisterDefault,
  handleDateChange,
  blockButtons,
  acceptTermCond,
  setAcceptTAndC,
  classes,
  bankList,
}) => {
  // MÉTODOS
  // FIN DE MÉTODOS

  // DESTRUCTURING DE DATA
  useEffect(() => {
    const elementScrollregister = document.getElementById("scrollregister");
    if (elementScrollregister) {
      elementScrollregister.scrollTop = 0;
    }
    ValidatorForm.addValidationRule(
      "email validator with steroids",
      (emailInput) => emailRegexValidations(emailInput)
    );
    ValidatorForm.addValidationRule("validate format cci", (cciInput) =>
      validateFormatCci(cciInput)
    );
    ValidatorForm.addValidationRule("validateLengthCci", (cciInputLength) =>
      validateLengthCci(cciInputLength)
    );
    ValidatorForm.addValidationRule("validatelengthan", (accountNumberInput) =>
      validateLengthAN(accountNumberInput)
    );
    ValidatorForm.addValidationRule("validatedocumentlenth", (documentLength) =>
      validateDocumentLength(documentLength)
    );
  }, []);

  const {
    firstname,
    lastname,
    cci,
    birthday,
    country,
    email,
    password,
    idnumber,
    idtype,
    accountNumber,
    bank,
    // codigoSwift,
  } = bodyRegister;

  return (
    <div>
      <ValidatorForm onSubmit={handleSubmit} className={classes.formValidator}>
        <Text
          onChange={handleInputChange}
          validators={["required"]}
          errorMessages={["Campo requerido"]}
          value={firstname}
          name="firstname"
          label="Nombre(s)"
          required
        />
        <Text
          label="Apellido(s)"
          onChange={handleInputChange}
          name="lastname"
          value={lastname}
          validators={["required"]}
          errorMessages={["Campo requerido"]}
          required
        />
        <Text
          label="Correo"
          onChange={handleInputChange}
          name="email"
          value={email}
          type="email"
          validators={["required"]}
          errorMessages={["Campo requerido"]}
          required
        />
        <Text
          label="Contraseña"
          onChange={handleInputChange}
          name="password"
          value={password}
          validators={["required"]}
          type="password"
          errorMessages={["Campo requerido"]}
          required
        />
        <Text
          label="Fecha de nacimiento"
          onChange={handleInputChange}
          name="birthday"
          value={birthday}
          validators={["required"]}
          errorMessages={["Campo requerido"]}
          required
          type="date"
        />
        <Typography variant="body1">
          Documento <span style={{ color: "red" }}>*</span>
        </Typography>
        <div
          style={{
            display: "flex",
            gap: "1%",
          }}
        >
          <Select
            classes={{
              icon: classes.icon,
              select: classes.selectStyles,
            }}
            onChange={handleInputChange}
            className={classes.selectDocumentStyle}
            defaultValue={idtype}
            name="idtype"
            value={idtype}
          >
            {listDocuments.map((element, indexDoc) => {
              const { value: val, idtype: documentType } = element;
              return (
                <MenuItem key={indexDoc + "#" + val} value={documentType}>
                  {documentType}
                </MenuItem>
              );
            })}
          </Select>
          <div style={{ flexGrow: 1 }}>
            <Text
              onChange={handleInputChange}
              name="idnumber"
              value={idnumber}
              validators={["required", "validatedocumentlenth"]}
              errorMessages={[
                "Campo requerido",
                `El/La ${idtype} no puede ser mayor a 12 dígitos`,
              ]}
              required
              type="text"
              classesRewrited={classes.testInputStyle}
            />
          </div>
        </div>
        <div>
          <Typography variant="body1">
            País de residencia <span style={{ color: "red" }}>*</span>
          </Typography>
          <Select
            style={{
              width: "100%",
              marginTop: "0.7rem",
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={country}
            defaultValue={DEFAULT_COUNTRY}
            name="country"
            label="country"
            onChange={handleInputChange}
            classes={{
              icon: classes.icon,
              select: classes.selectStyles,
            }}
          >
            {countryList.map((countryItem, index) => {
              const { code, countryName } = countryItem;
              return (
                <MenuItem value={countryName} key={code + "#" + index}>
                  {countryName}
                </MenuItem>
              );
            })}
          </Select>
        </div>
        <div>
          <Typography variant="body1">
            Banco <span style={{ color: "red" }}>*</span>
          </Typography>
          <Select
            style={{
              width: "100%",
              marginTop: "0.7rem",
            }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={bank}
            defaultValue={DEFAULT_BANK}
            name="bank"
            label="bank"
            onChange={handleInputChange}
            classes={{
              icon: classes.icon,
              select: classes.selectStyles,
            }}
          >
            {bankList.map((banco, bancoIndex) => {
              const { bank: nameBank, codigoSwift: codigoSwiftValue } = banco;
              return (
                <MenuItem
                  value={banco}
                  key={codigoSwiftValue + "#" + bancoIndex}
                >
                  {nameBank}
                </MenuItem>
              );
            })}
          </Select>
        </div>

        <Text
          label="Numero de cuenta"
          onChange={handleInputChange}
          name="accountNumber"
          value={accountNumber}
          validators={["required", "validate format cci", "validatelengthan"]}
          errorMessages={[
            "Campo requerido",
            "Formato de número de cuenta inválido",
            "El número de cuenta bancaria debe ser de 12 dígitos",
          ]}
          required
        />
        <Text
          label="CCI (Numero de cuenta interbancario)"
          onChange={handleInputChange}
          name="cci"
          value={cci}
          validators={["required", "validate format cci", "validateLengthCci"]}
          errorMessages={[
            "Campo requerido",
            "Formato de CCI inválido",
            "El CCI debe contener 20 dígitos",
          ]}
          required
        />
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "flex-start",
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={acceptTermCond}
                onClick={() => setAcceptTAndC(!acceptTermCond)}
              />
            }
            label="Acepto los terminos y condiciones"
          />
        </div>
        <Button
          className={classes.buttonStyles}
          variant="contained"
          type="submit"
          disabled={!acceptTermCond || blockButtons}
          fullWidth
        >
          <Typography fontWeight={500} fontSize="1.5rem">
            Registrate ahora
          </Typography>
        </Button>
      </ValidatorForm>
    </div>
  );
};

export default RegisterComponent;
