import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Avatar,
} from "@mui/material";

const CarUserData = ({ classesUserData, user }) => {
  const { firstname, lastname, idnumber, country } = user;
  return (
    <Card className={classesUserData}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardContent style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginRight: "8px" }}>
            <Avatar style={{ width: "80px", height: "80px", border: "2px solid #5966BA" }}>
              {firstname ? firstname[0] : "I" + lastname ? lastname[0] : "P"}
            </Avatar>
          </div>
          <div>
            <Typography style={{ fontSize: "30px", color: "white" }}>
              {firstname + " " + lastname}
            </Typography>
            <Typography style={{ fontSize: "23px", color: "white" }}>
              {idnumber + " - " + country}
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
export default CarUserData;
