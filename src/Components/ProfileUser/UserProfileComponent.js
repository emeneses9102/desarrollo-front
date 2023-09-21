import React, { useEffect } from "react";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import useStyles from "../../styles";
import Text from "../Input/Text";

import { ValidatorForm } from "react-material-ui-form-validator";
import {
  countryList,
  dateFormatter,
  emailRegexValidations,
  listDocuments,
  selectBancos,
} from "../LoginRegister/LoginRegisterHelpers";
import AssignmentIcon from "@mui/icons-material/Assignment";

const UserProfileComponent = ({
  userProfile,
  handleChange,
  handleSubmit,
  edit,
  onEdit,
  mobile = false,
}) => {
  const classes = useStyles();

  const user = userProfile;
  const {
    firstname,
    lastname,
    email,
    idnumber,
    cci,
    accountNumber,
    birthday,
    country,
    bank,
    idtype,
  } = user;

  const bankList = selectBancos(country);

  useEffect(() => {
    ValidatorForm.addValidationRule(
      "email validator with steroids",
      (emailInput) => emailRegexValidations(emailInput)
    );
  }, []);

  const customWidth = mobile ? "100%" : "45%";

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" style={{ color: "white" }}>
          Tu información
        </Typography>
        <div style={{ color: "white" }}>
          <Button
            style={{ backgroundColor: "#5966BA", color: "white" }}
            startIcon={<AssignmentIcon />}
            onClick={onEdit}
          >
            {edit ? "Cancelar" : "Editar información"}
          </Button>
        </div>
      </div>
      <div>
        <ValidatorForm
          onSubmit={handleSubmit}
          className={
            mobile ? classes.formValidator : classes.formValidatorEditPc
          }
        >
          <div style={{ width: `${customWidth}`, marginTop: "1%" }}>
            {edit ? (
              <Text
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["Campo requerido"]}
                value={firstname}
                name="firstname"
                label="Nombre(s)"
                required
                classeslabeltext={classes.classesLabelText}
              />
            ) : (
              <Text
                value={firstname}
                readOnly={true}
                name="firstname"
                label="Nombre(s)"
                classesRewrited={classes.inputReadOnly}
                classeslabeltext={classes.classesLabelText}
              />
            )}
          </div>
          <div style={{ width: `${customWidth}`, marginTop: "1%" }}>
            {edit ? (
              <>
                <InputLabel id="demo-simple-select-country">
                  <Typography
                    variant="body1"
                    component="div"
                    className={classes.classesLabelText}
                  >
                    País de residencia <span style={{ color: "red" }}>*</span>
                  </Typography>
                </InputLabel>
                <Select
                  style={{
                    width: "100%",
                    marginTop: "-1px",
                  }}
                  labelId="demo-simple-select-country"
                  id="demo-simple-select-country"
                  value={country}
                  defaultValue={country}
                  name="country"
                  label="País de residencia"
                  classeslabeltext={classes.classesLabelText}
                  onChange={handleChange}
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
              </>
            ) : (
              <Text
                value={country}
                readOnly={true}
                name="country"
                label="País de residencia"
                classeslabeltext={classes.classesLabelText}
              />
            )}
          </div>
          <div style={{ width: `${customWidth}`, marginTop: "1%" }}>
            {edit ? (
              <Text
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["Campo requerido"]}
                value={lastname}
                name="lastname"
                label="Apellido(s)"
                classeslabeltext={classes.classesLabelText}
                required
              />
            ) : (
              <Text
                value={lastname}
                readOnly={true}
                name="lastname"
                label="Apellido(s)"
                classeslabeltext={classes.classesLabelText}
              />
            )}
          </div>
          <div style={{ width: `${customWidth}`, marginTop: "1%" }}>
            {edit ? (
              <>
                <InputLabel id="demo-simple-select-bank">
                  <Typography
                    variant="body1"
                    className={classes.classesLabelText}
                  >
                    Banco <span style={{ color: "red" }}>*</span>
                  </Typography>
                </InputLabel>
                <Select
                  style={{
                    width: "100%",
                    marginTop: "-1px",
                  }}
                  labelId="demo-simple-select-bank"
                  id="demo-simple-select-bank"
                  value={bank}
                  defaultValue={bank}
                  name="bank"
                  label="Banco"
                  classeslabeltext={classes.classesLabelText}
                  onChange={handleChange}
                  classes={{
                    icon: classes.icon,
                    select: classes.selectStyles,
                  }}
                >
                  {bankList.map((banco, bancoIndex) => {
                    const { bank: nameBank, codigoSwift: codigoSwiftValue } =
                      banco;
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
              </>
            ) : (
              <Text
                value={bank.bank}
                readOnly={true}
                name="bank"
                label="Banco"
                classeslabeltext={classes.classesLabelText}
              />
            )}
          </div>

          <div style={{ width: `${customWidth}`, marginTop: "1%" }}>
            {edit ? (
              <Text
                onChange={handleChange}
                validators={["required", "email validator with steroids"]}
                errorMessages={["Campo requerido", "Correo no válido"]}
                value={email}
                type="email"
                name="email"
                label="Correo"
                classeslabeltext={classes.classesLabelText}
                required
              />
            ) : (
              <Text
                value={email}
                readOnly={true}
                name="email"
                label="Correo"
                classeslabeltext={classes.classesLabelText}
              />
            )}
          </div>
          <div style={{ width: `${customWidth}`, marginTop: "1%" }}>
            {edit ? (
              <Text
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["Campo requerido"]}
                value={accountNumber}
                name="accountNumber"
                label="Número de cuenta"
                classeslabeltext={classes.classesLabelText}
                required
              />
            ) : (
              <Text
                value={accountNumber}
                readOnly={true}
                name="accountNumber"
                label="Número de cuenta"
                classeslabeltext={classes.classesLabelText}
              />
            )}
          </div>
          <div style={{ width: `${customWidth}`, marginTop: "1%" }}>
            {edit ? (
              <Text
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["Campo requerido"]}
                value={birthday}
                name="birthday"
                type="date"
                label="Fecha de nacimiento"
                classeslabeltext={classes.classesLabelText}
                required
              />
            ) : (
              <Text
                value={dateFormatter(birthday).replaceAll("-", "/")}
                readOnly={true}
                name="birthday"
                type="date"
                label="Fecha de nacimiento"
                classeslabeltext={classes.classesLabelText}
              />
            )}
          </div>
          <div style={{ width: `${customWidth}`, marginTop: "1%" }}>
            {edit ? (
              <Text
                onChange={handleChange}
                validators={["required"]}
                errorMessages={["Campo requerido"]}
                value={cci}
                name="cci"
                label="CCI"
                classeslabeltext={classes.classesLabelText}
                required
              />
            ) : (
              <Text
                value={cci}
                readOnly={true}
                name="cci"
                label="CCI"
                classeslabeltext={classes.classesLabelText}
              />
            )}
          </div>
          <div style={{ width: `${customWidth}`, marginTop: "1%" }}>
            <InputLabel id="demo-simple-select-document">
              <Typography variant="body1" className={classes.classesLabelText}>
                Documento {edit && <span style={{ color: "red" }}>*</span>}
              </Typography>
            </InputLabel>
            {edit ? (
              <>
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
                    onChange={handleChange}
                    className={classes.selectDocumentStyle}
                    defaultValue={idtype}
                    value={idtype}
                    name="idtype"
                    labelId="demo-simple-select-document"
                    id="demo-simple-select-document"
                  >
                    {listDocuments.map((element, indexDoc) => {
                      const { value: val, idtype: documentType } = element;
                      return (
                        <MenuItem key={indexDoc + val} value={documentType}>
                          {documentType}
                        </MenuItem>
                      );
                    })}
                  </Select>
                  <div style={{ flexGrow: "1" }}>
                    <Text
                      onChange={handleChange}
                      validators={["required"]}
                      errorMessages={["Campo requerido"]}
                      value={idnumber}
                      name="idnumber"
                      classeslabeltext={classes.classesLabelText}
                      required
                    />
                  </div>
                </div>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  gap: "1%",
                }}
              >
                <div style={{ width: "35%" }}>
                  <Text value={idtype} readOnly={true} name="idtype" />
                </div>
                <div style={{ flexGrow: "1" }}>
                  <Text value={idnumber} readOnly={true} name="idnumber" />
                </div>
              </div>
            )}
          </div>
          {edit && (
            <div
              style={{
                width: `${mobile ? "100%" : "30%"}`,
                marginTop: "3%",
              }}
            >
              <Button
                className={classes.buttonStyles}
                variant="contained"
                type="submit"
                disabled={!edit}
                fullWidth
              >
                <Typography fontWeight={500} fontSize="1.5rem">
                  Guardar cambios
                </Typography>
              </Button>
            </div>
          )}
        </ValidatorForm>
      </div>
    </div>
  );
};

export default UserProfileComponent;
