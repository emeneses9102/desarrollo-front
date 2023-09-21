import React, { useEffect } from "react";
import HomeComponent from "../../../Components/Home/HomeComponent";
// import { useNavigate } from "react-router-dom";
import "./fix.css";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./fix.css";
import {
  cargarCotizacionHoy,
  getAllTransferByUser,
} from "../../../redux/actions/transfers";
import { getDataUser } from "../../../redux/actions/users";
const Home = () => {
  // const classes = useStyles();
  const history = useNavigate();
  const dispatch = useDispatch();
  const {
    cotizacionPen,
    cotizacionClp,
    alertMessageTransferencia,
    statusMessageTransferencia,
    transferenciasEnviadas,
    transferenciasRecibidas,
  } = useSelector((state) => state.transfers);
  const { user } = useSelector((state) => state.users);
  const validateSession = !user?.email;
  const mailOn = user?.mailOn;

  // let apiCotizacionURL =
  //   "http://api.exchangeratesapi.io/v1/latest?access_key=88437766abda8b5fbf048bc60b900882";

  useEffect(() => {
    //   if (cotizacionSol === 0 && cotizacionClp === 0) {
    //     async function Data() {
    //       const valorCotizacionHoy = await axios.get(apiCotizacionURL);
    //       setCotizacionClp(valorCotizacionHoy.data.rates["CLP"]);
    //       setCotizacionSol(valorCotizacionHoy.data.rates["PEN"]);
    //     }
    //     Data();
    //   }
    dispatch(cargarCotizacionHoy());
    dispatch(getDataUser());
    dispatch(getAllTransferByUser({ userId: user.id }));
  }, [dispatch, user.id]);

  useEffect(() => {
    if (validateSession) {
      history("/");
    } else {
      if (mailOn) {
        history("/home");
      } else {
        history("/validate");
      }
    }
  }, [history, validateSession, mailOn]);

  return (
    <div style={{ display: "flex", margin: "-8px" }}>
      <HomeComponent
        cotizaciones={{
          cotizacionPen,
          cotizacionClp,
        }}
        alertMessageTransferencia={alertMessageTransferencia}
        statusMessageTransferencia={statusMessageTransferencia}
        transferenciasEnviadas={transferenciasEnviadas}
        transferenciasRecibidas={transferenciasRecibidas}
      />
    </div>
  );
};

export default Home;
