import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useStyles from "../../../styles";

const ConfigurationComponent = ({
  userData: { permissions: { profilename: role = "guest", id = 1 } = {} } = {},
}) => {
  const history = useNavigate();
  const classes = useStyles();

  const [render, setRender] = useState(true);

  useEffect(() => {
    if (id === 1 && role === "guest") {
      setRender(false);
      setTimeout(() => {
        history("/");
      }, 150);
    }
  }, [history, id, render, role]);

  return render ? (
    <Grid>
      <Typography variant="body2" className={classes.typographyColor}>
        Here you can make changes in the configuration
      </Typography>
    </Grid>
  ) : (
    <>You don't have access to be here.</>
  );
};

export default ConfigurationComponent;
