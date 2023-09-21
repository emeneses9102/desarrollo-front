import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PinCodeAuthComponent from "../../../Components/LoginRegister/PinCodeAuthComponent";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import Cards from "../../../Images/Cards.png";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Logotipo4 from "../../../Images/Logotipo4.png";
import "./stylepincode.css";

const Auth = () => {
  const history = useNavigate();
  const { user } = useSelector((state) => state.users);
  const validateSession = !user?.email;
  const mailOn = user?.mailOn;
  const { width } = useWindowDimensions();
  useEffect(() => {
    
    if (validateSession) {
      history("/");
    }else{
      if (mailOn) {
        history("/home");
      }
    }
    
  }, [history, validateSession, mailOn]);


  return (
    <>
      {width >= 1000 ? (
        <div style={{ display: "flex", margin: "-8px" }}>
          <div
            style={{
              backgroundColor: "rgb(0 0 0 / 60%)",
              width: "55%",
              minHeight: "100vh",
              boxShadow: "4px 0px 4px 2px rgba(0, 0, 0, 0.25)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "0 5px 5px 0",
              gap: "30px",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={Logotipo4} alt="logo" width="60%" />
              <Typography
                variant="h6"
                color="white"
                style={{ textAlign: "center" }}
              >
                Tu nueva billetera virtual.
              </Typography>
            </div>
            <img src={Cards} alt="cards" style={{ width: "80%" }} className="float"/>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "column",
              margin: "auto",
              width: "40%",
            }}
          >
            <PinCodeAuthComponent />
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <PinCodeAuthComponent />
        </div>
      )}
    </>
  );
};

export default Auth;
