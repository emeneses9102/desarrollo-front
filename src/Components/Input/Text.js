import { TextField, Typography } from "@mui/material";
import React from "react";
import { TextValidator } from "react-material-ui-form-validator";
import useStyles from "../../styles";
const Text = ({
  onChange,
  validators = [],
  errorMessages = [],
  value = "",
  name = "",
  color = "primary",
  type = "",
  label = "",
  required = false,
  fullWidth = true,
  classesRewrited = "",
  classeslabeltext = "",
  readOnly = false,
}) => {
  const { inputStyles } = useStyles();
  return (
    <div style={{ width: `${fullWidth && "100%"}` }}>
      {label.length > 0 && (
        <Typography variant="body1" className={classeslabeltext}>
          {label}{" "}
          {name !== "email" && name !== "password" && required ? (
            <span style={{ color: "red" }}>*</span>
          ) : (
            <></>
          )}
        </Typography>
      )}
      {readOnly === false ? (
        <TextValidator
          margin="normal"
          color={color}
          required={required}
          autoFocus
          onChange={onChange}
          name={name}
          value={value}
          validators={[...validators]}
          errorMessages={[...errorMessages]}
          type={type}
          className={classesRewrited ? classesRewrited : inputStyles}
          fullWidth={fullWidth}
        />
      ) : (
        <TextField
          id="demo-simple-select-label"
          color={color}
          defaultValue={value}
          autoFocus
          fullWidth={fullWidth}
          className={classesRewrited ? classesRewrited : inputStyles}
          InputProps={{
            readOnly: true,
          }}
          margin="normal"
          onChange={onChange}
          name={name}
          value={value}
          type={type}
        />
      )}
    </div>
  );
};

export default Text;
