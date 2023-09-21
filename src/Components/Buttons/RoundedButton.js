import { Button, Typography } from "@mui/material";
import React from "react";
import useStyles from "../../styles";

const RoundedButton = ({ icon, onClick, disabled, text }) => {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Button
        className={classes.roundedButtonStyles}
        onClick={onClick}
        disabled={disabled}
      >
        {icon}
      </Button>
      <Typography variant="caption" color={"white"}>{text}</Typography>
    </div>
  );
};

export default RoundedButton;
