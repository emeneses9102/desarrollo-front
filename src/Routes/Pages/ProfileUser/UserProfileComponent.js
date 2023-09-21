import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useStyles from "../../../styles";

const UserProfileComponent = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();

  const { user } = useSelector((state) => state.users);
  const isUserLoggedIn = user?.email;
  const mailOn = user?.mailOn;

  useEffect(() => {
    if (isUserLoggedIn) {
      if (!mailOn) {
        history("/validate");
      }
    }
  }, [user, isUserLoggedIn, history, dispatch, mailOn]);

  return (
    <Grid>
      <Typography className={classes.typographyColor}>
        Página del perfil de: ${user.username}
      </Typography>
    </Grid>
  );
};

export default UserProfileComponent;
