import * as React from "react";
import StepperEnviarDinero from "./StepperEnviarDinero";

const EnviarDinero = ({
  classesUserData,
  userEmisor,
  activeStep,
  setActiveStep,
  classes,
  handleChange,
  handleEmailChange,
  emailToReceptor,
  handleEmailSubmit,
  handleNext,
  handleBack,
  handleTransferChange,
  userReceptor,
  bodyTransferencia,
  listCurrenciesToMap,
  errorAlertTransferencia,
  errorTransferencia,
  handleAmountSubmit,
  handleTransferenciaSubmit,
  listAllCurrencies,
  cotPen,
  cotClp
}) => {
  return (
    <div>
      <StepperEnviarDinero
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        classes={classes}
        handleChange={handleChange}
        handleEmailChange={handleEmailChange}
        emailToReceptor={emailToReceptor}
        handleEmailSubmit={handleEmailSubmit}
        handleNext={handleNext}
        handleBack={handleBack}
        userEmisor={userEmisor}
        handleTransferChange={handleTransferChange}
        userReceptor={userReceptor}
        bodyTransferencia={bodyTransferencia}
        listCurrenciesToMap={listCurrenciesToMap}
        listAllCurrencies={listAllCurrencies}
        errorAlertTransferencia={errorAlertTransferencia}
        errorTransferencia={errorTransferencia}
        handleAmountSubmit={handleAmountSubmit}
        handleTransferenciaSubmit={handleTransferenciaSubmit}
        cotPen={cotPen}
        cotClp={cotClp}
      />
    </div>
  );
};
export default EnviarDinero;
