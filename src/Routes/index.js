import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Auth from "./Pages/Auth/Auth";
import Configuration from "./Pages/Config/ConfigurationComponent";
import PinCode from "./Pages/PinCode/PinCode";
import Home from "./Pages/Home";
import PasswordReset from "./Pages/Password/PasswordReset.js";
import { useSelector } from "react-redux";
import Inicio from "./Pages/Inicio/Inicio";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Emergencias from "./Pages/Emergencias/Emergencias";
import Alertas from "./Pages/Alertas/Alertas";
import Visor from "./Pages/Visor/Visor";
import Flujo from "./Pages/Flujo/Flujo";

const Routes = () => {
  const { user } = useSelector((state) => state.users);
  const userTest = { ...user, permissions: { profilename: "admin", id: 2 } };
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path="/auth" element={<Auth />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/validate" element={<PinCode />} />
        <Route
          exact
          path="/configs"
          element={<Configuration userData={userTest} />}
        />
        <Route exact path="/password" element={<PasswordReset />} />
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/manejo-emergencia" element={<Emergencias />} />
        <Route exact path="/alertas" element={<Alertas />} />
        <Route exact path="/visor" element={<Visor />} />
        <Route exact path="/flujo" element={<Flujo />} />
      </Switch>
      <Footer/>
    </>
  );
};
// COMMENT
export default Routes;
