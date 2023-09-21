import React from "react";
import { Button } from "@mui/material";
import useStyles from "../../styles";

const SecondaryButton = ({
  onClick,
  text,
  disabled,
  variant = "contained",
  style,
  size,
  fullWidth = true,
  type
}) => {
  const classes = useStyles();
  //Mandar texto con typography asi se maneja el texto que quieras
  return (
    <Button
      className={classes.buttonStyles}
      onClick={onClick}
      disabled={disabled}
      variant={variant}
      style={style}
      size={size}
      fullWidth={fullWidth}
      type={type}
      color="secondary"
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;
