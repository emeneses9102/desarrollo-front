import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider, IconButton } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const CardHomeVerInfo = ({
  classesListItem,
  showActualCurrency,
  showSecondCurrency,
  showActualMoney,
  showSecondMoney,
  showCurrency,
  setShowCurrency,
}) => {
  return (
    <Card className={classesListItem} sx={{ maxWidth: 380 }}>
      <CardContent style={{ margin: "auto" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ color: "white", margin: "8px" }}
        >
          Dinero disponible
          <IconButton
            color="secondary"
            style={{ color: "white", marginleft: "10%" }}
            aria-label="Mostrar otro saldo"
            component="span"
            onClick={() => setShowCurrency(showCurrency === 1 ? 2 : 1)}
          >
            <SwapVertIcon />
          </IconButton>
        </Typography>

        <Divider style={{ backgroundColor: "white" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div>
            <Typography
              variant="body2"
              fontWeight={500}
              style={{
                color: "white",
                margin: "8px",
                fontSize: "26px",
              }}
            >
              {showActualCurrency + " " + showActualMoney}
            </Typography>
          </div>

          <div
            style={{
              color: "#9eee52",
              gap: "7px",
            }}
          >
            <Typography
              variant="body1"
              fontWeight={500}
              style={{ marginLeft: "3%" }}
            >
              {showSecondCurrency + " " + showSecondMoney}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardHomeVerInfo;
