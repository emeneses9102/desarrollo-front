import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import RoundedButton from "../Buttons/RoundedButton";
import { BiTransfer, BiDownload } from "react-icons/bi";

const CardHome = ({ classesListItem, setRenderConditional }) => {
  return (
    <Card className={classesListItem} sx={{ maxWidth: 380 }}>
      <CardContent
        style={{ margin: "auto", display: "flex", flexDirection: "column" }}
      >
        <div
          style={{
            height: "30%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "5px",
          }}
        >
          <RoundedButton
            text="Enviar dinero"
            icon={<BiTransfer size={25} />}
            onClick={() => setRenderConditional("Enviar dinero")}
          />
          {/* <RoundedButton
            text="Solicitar"
            icon={<BiUserPlus size={25} Ingresar dinero />}
          /> */}
          <RoundedButton
            text="Ingresar Dinero"
            icon={<BiDownload size={25} />}
            onClick={() => setRenderConditional("Ingresar dinero")}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default CardHome;
