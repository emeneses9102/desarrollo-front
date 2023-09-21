export const DEFAULT_COUNTRY = "SELECCIONAR PAÍS";

export const bodyLoginDefault = {
  email: "",
  password: "",
};

export const bodyPinCode = {
  iduser: 0,
  pincode: "",
};

export const sendPinCode = {
  iduser: 0,
};

export const passwordReset = {
  password1: "",
  password2: ""
}

export const DEFAULT_BANK = {
  codigoSwift: "DEFAULT",
  bank: "SELECCIONAR BANCO",
};
export const bodyRegisterDefault = {
  firstname: "",
  lastname: "",
  email: "",
  birthday: "",
  password: "",
  isAdmin: false,
  idnumber: "",
  idtype: "DNI",
  country: DEFAULT_COUNTRY,
  bank: DEFAULT_BANK,
  cci: "",
  accountNumber: "",
  codigoSwift: "DEFAULT",
};

export const countryListAlpha3 = {
  DEFAULT: DEFAULT_COUNTRY,
  CHL: "Chile",
  PER: "Peru",
};
const transformCountryObjectToArray = (obj) => {
  const newArray = [];
  for (const key in obj) {
    if (obj[key]) {
      newArray.push({ code: key, countryName: obj[key] });
    }
  }
  return newArray;
};
export const countryList = transformCountryObjectToArray(countryListAlpha3);

export const listDocuments = [
  { value: 1, idtype: "DNI" },
  {
    value: 2,
    idtype: "Cedula",
  },
  { value: 3, idtype: "Pasaporte" },
  { value: 4, idtype: "Carné de extranjeria" },
];
// TODOS LOS BANCOS DE CHILE CON CÓDIGO SWIFT
export const arrayBancosChile = [
  { codigoSwift: "BECHCLRM", bank: "Banco Del Estado De Chile" },
  { codigoSwift: "NACNCLRM", bank: "Banco de la Nación Argentina" },
  { codigoSwift: "BOTKCLRM", bank: "The Bank of Tokyo - Mitsubishi UFJ" },
  { codigoSwift: "BCHICLRM", bank: "Banco De Chile / Edwards" },
  { codigoSwift: "BCNPCLRM", bank: "Banco Paris" },
  { codigoSwift: "BHIFCLRM", bank: "Banco Bilbao Vizcaya Argentaria (BBVA)" },
  { codigoSwift: "BICECLRM", bank: "Banco Bice" },
  { codigoSwift: "BPENCLRM", bank: "Banco Penta" },
  { codigoSwift: "BSCHCLRM", bank: "Banco Santander" },
  { codigoSwift: "BSCLCLRM", bank: "Banco Security" },
  { codigoSwift: "CREDCLRM", bank: "Banco De Crédito e Inversiones (BCI)" },
  { codigoSwift: "FALACLRM", bank: "Banco Falabella" },
  { codigoSwift: "ITAUCLRM", bank: "Banco Itau Chile" },
  { codigoSwift: "MNEXCLRM", bank: "Banco Consorcio" },
  { codigoSwift: "RPLYCLRM", bank: "Banco Ripley" },
  { codigoSwift: "RABOCLRM", bank: "Rabobank Chile" },
  { codigoSwift: "BKSACLRM", bank: "Banco Scotiabank" },
  { codigoSwift: "CONBCLRM", bank: "Banco Corpbanca" },
  { codigoSwift: "BLICCLRM", bank: "HSBC Bank Chile" },
  { codigoSwift: "BRASCLRM", bank: "Banco Do Brasil" },
  { codigoSwift: "CHASCLRM", bank: "JP - Morgan Chase Bank" },
];

// TODOS LOS BANCOS DE PERÚ CON CÓDIGO SWIFT
export const arrayBancoPeru = [
  { codigoSwift: "AZTKPEPL", bank: "BANCO AZTECA DEL PERU, S.A." },
  { codigoSwift: "BCONPEPL", bank: "BANCO BBVA PERU" },
  { codigoSwift: "CRPEPEPL", bank: "BANCO CENTRAL DE RESERVA DEL PERU" },
  { codigoSwift: "BDCMPEPL", bank: "BANCO DE COMERCIO" },
  { codigoSwift: "BCPLPEPL", bank: "BANCO DE CREDITO DEL PERU" },
  { codigoSwift: "BANCPEPL", bank: "BANCO DE LA NACION" },
  { codigoSwift: "HBPEPEPL", bank: "BANCO GNB PERU SA" },
  { codigoSwift: "BIFSPEPL", bank: "BANCO INTERAMERICANO DE FINANZAS" },
  { codigoSwift: "BINPPEPL", bank: "BANCO INTERNACIONAL DEL PERU (INTERBANK)" },
  { codigoSwift: "FINAPEPL", bank: "BANCO PICHINCHA" },
  { codigoSwift: "BSAPPEPL", bank: "BANCO SANTANDER PERU S.A." },
  { codigoSwift: "BKCHPEPL", bank: "BANK OF CHINA (PERU) S.A." },
  { codigoSwift: "CAPOPEPL", bank: "CAMPOSOL" },
  { codigoSwift: "CVLIPEPL", bank: "CAVALI S.A. I.C.L.V." },
  { codigoSwift: "BELPPEPL", bank: "CETCO S.A." },
  { codigoSwift: "CITIPEPL", bank: "CITIBANK DEL PERU S.A." },
  { codigoSwift: "CAFCPEPL", bank: "CORPORACION ANDINA DE FOMENTO" },
  {
    codigoSwift: "COFDPEPL",
    bank: "CORPORACION FINANCIERA DE DESARROLLO S.A. - COFIDE",
  },
  { codigoSwift: "EGPSPEPL", bank: "ENEL GENERACION PERU S.A.A." },
  { codigoSwift: "ICBKPEPL", bank: "ICBC PERU BANK" },
  { codigoSwift: "CHASPEPL", bank: "JP MORGAN BANCO DE INVERSION" },
  { codigoSwift: "BSUDPEPL", bank: "SCOTIABANK PERU S.A.A." },
];

export const emailRegexValidations = (emailInput) => {
  const emailToLowerCase = emailInput.toLowerCase();
  const regexEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const secondRegexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,9})+$/;
  const emailValidator = emailToLowerCase.toLowerCase().includes("@")
    ? emailToLowerCase.split("@")
    : emailToLowerCase.split(".");
  const urlEmailValidator = emailValidator[1]?.split(".");
  if (
    !regexEmail.test(emailToLowerCase) ||
    !secondRegexEmail.test(emailToLowerCase) ||
    urlEmailValidator[0]?.length > 40 ||
    emailValidator[2]?.length > 3 ||
    urlEmailValidator[1]?.length > 20 ||
    urlEmailValidator.length > 3 ||
    emailValidator.length > 3
  ) {
    return false;
  }
  return true;
};

export const selectBancos = (country) => {
  switch (country) {
    case "Chile": {
      return arrayBancosChile;
    }
    case "Peru": {
      return arrayBancoPeru;
    }
    default: {
      break;
    }
  }
};

export const dateFormatter = (date) => date?.split("-")?.reverse()?.join("-");
export const formatDate = (date) => {
  return date.split("T")[0];
};

export const validateFormatCci = (arg) => {
  const newArg = Number(arg);
  if (!isNaN(newArg)) {
    if (typeof newArg === "number") {
      return true;
    }
  } else {
    return false;
  }
};

export const validateLengthCci = (arg) => {
  if (arg.length === 20) {
    return true;
  } else if (arg.length !== 20) {
    return false;
  }
};

export const validateLengthAN = (arg) => {
  if (arg.length === 12) {
    return true;
  } else {
    return false;
  }
};

export const validateDocumentLength = (arg) => {
  if (arg.length > 12) {
    return false;
  } else {
    return true;
  }
};

// FECHAS
let today = new Date();

let dd = String(today.getDate()).padStart(2, "0");
let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
let yyyy = today.getFullYear();

today = dd + "/" + mm + "/" + yyyy;

export const todayDate = today;

export const redondearValores = (arg) => {
  if (arg) {
    return arg.toFixed(2);
  }
};

export const listCurrencies = (country) => {
  if (country === "Peru") {
    return ["PEN", "USD"];
  }
  if (country === "Chile") {
    return ["CLP", "USD"];
  }
};

export const listAllCurrencies = ["USD", "PEN", "CLP"];

export const selectCurrencyByCountry = (country) => {
  const currencies = {
    Peru: "PEN",
    Chile: "CLP",
  };
  return currencies[country];
};

export const mostrarValoresConMiles = (arg) => {
  if (arg) {
    var actual = arg.toString().replace(/\./g, "").replace("$", "");
    return new Intl.NumberFormat("es-AR").format(actual);
  }
};

export const calcularCotizacion = (curr, currRec, cotiClp, cotiPen) => {
  if (
    (curr === "CLP" && currRec === "USD") ||
    (curr === "USD" && currRec === "CLP")
  ) {
    return `1 USD ≈ ${Number(cotiClp)} CLP`;
  }

  if (
    (curr === "PEN" && currRec === "USD") ||
    (curr === "USD" && currRec === "PEN")
  ) {
    return `1 USD ≈ ${Number(cotiPen)} PEN`;
  }

  if (curr === "CLP" && currRec === "PEN") {
    return `1 PEN ≈ ${Number(cotiClp) / Number(cotiPen)} CLP`;
  }

  if (curr === "PEN" && currRec === "CLP") {
    return `1 CLP ≈ ${Number(cotiPen) / Number(cotiClp)} PEN`;
  }
};

export const getCalculation = ({
  comisionClp,
  comisionPen,
  cotizPen,
  cotizClp,
  obtenerCurrencyEmisor,
  obtenerCurrencyReceptor,
  montoEmisor,
  montoTransfReceptor,
}) => {
  let newObj = {
    newMontoEmisor: montoEmisor,
    newMontoTransfReceptor: montoTransfReceptor,
    newCurrency: obtenerCurrencyEmisor,
    newCurrencyReceptor: obtenerCurrencyReceptor,
  };

  let currencyChangeCase = `${obtenerCurrencyEmisor} to ${obtenerCurrencyReceptor}`;
  let newMontoTransfReceptor = "";
  switch (currencyChangeCase) {
    case "PEN to PEN": {
      // CASO DE ENVÍO DE SOLES A SOLES:
      let convertPenToPen = Math.floor(
        Number(montoEmisor) - Number(comisionPen)
      );
      newMontoTransfReceptor = "" + convertPenToPen;

      newObj = {
        ...newObj,
        newMontoTransfReceptor,
      };
      break;
    }
    case "USD to USD": {
      // CASO DE ENVÍO DE USD A USD
      let convertUsdToUsd = Math.floor(Number(montoEmisor) - 5);

      newMontoTransfReceptor = "" + convertUsdToUsd;

      newObj = {
        ...newObj,
        newMontoTransfReceptor,
      };
      break;
    }
    case "CLP to CLP": {
      // CASO DE ENVIO DE CLP A CLP
      let convertClpToClp = Math.floor(
        Number(montoEmisor) - Number(comisionClp)
      );

      newMontoTransfReceptor = "" + convertClpToClp;

      newObj = {
        ...newObj,
        newMontoTransfReceptor,
      };
      break;
    }
    case "PEN to USD": {
      // CALCULOS PEN TO USD

      // CONVERTIR SOLES A DÓLARES
      let convertPenToUSD = Math.floor(
        (Number(montoEmisor) - Number(comisionPen)) / Number(cotizPen)
      );

      // CALCULAR EL MONTO EN DÓLARES MENOS LA COMISIÓN DE 5 USD
      newMontoTransfReceptor = "" + convertPenToUSD;

      newObj = {
        ...newObj,
        newMontoTransfReceptor,
      };
      break;
    }
    case "PEN to CLP": {
      // CALCULOS PEN TO CLP

      // CONVERTIR SOLES A DÓLARES
      let convertPenToUSD = Math.floor(
        (Number(montoEmisor) - Number(comisionPen)) / Number(cotizPen)
      );

      // CONVERTIR DÓLARES A PESOS CHILENOS
      let convertUSDToCLP = Math.floor(convertPenToUSD * cotizClp);

      // CALCULAR PESOS CHILENOS - COMISIÓN EN PESOS CHILENOS Y ARMAR OBJETO PARA ACTUALIZAR MONTOS.
      newMontoTransfReceptor = "" + convertUSDToCLP;
      newObj = {
        ...newObj,
        newMontoTransfReceptor,
      };
      break;
    }
    case "CLP to USD": {
      // CALCULOS CLP TO USD

      // CONVERTIR CLP A DÓLARES (DESCONTÁNDOLE LA COMISIÓN EN CLP)
      let convertirCLPToUSD = Math.floor(
        (Number(montoEmisor) - Number(comisionClp)) / Number(cotizClp)
      );

      // ARMAR OBJETO PARA ACTUALIZAR VALORES
      newMontoTransfReceptor = "" + convertirCLPToUSD;
      newObj = {
        ...newObj,
        newMontoTransfReceptor,
      };

      break;
    }
    case "CLP to PEN": {
      // CALCULOS CLP TO PEN

      // CONVERTIR CLP A DÓLARES
      let convertCLPToUSD = Math.floor(
        (Number(montoEmisor) - Number(comisionClp)) / Number(cotizClp)
      );
      // CONVERTIR DÓLARES A PESOS PERUANOS
      let convertUSDToPEN = Math.floor(convertCLPToUSD * Number(cotizPen));
      // CALCULAR PESOS CHILENOS - COMISIÓN EN PESOS CHILENOS Y ARMAR OBJETO PARA ACTUALIZAR MONTOS.
      newMontoTransfReceptor = "" + convertUSDToPEN;
      newObj = {
        ...newObj,
        newMontoTransfReceptor,
      };
      break;
    }
    case "USD to PEN": {
      // CALCULOS USD TO PEN

      // CONVERTIR DÓLARES A PEN (DESCONTÁNDOLE LA COMISIÓN EN USD)
      let convertirUSDToPEN = Math.floor(
        (Number(montoEmisor) - 5) * Number(cotizPen)
      );

      // ARMAR OBJETO PARA ACTUALIZAR VALORES
      newMontoTransfReceptor = "" + convertirUSDToPEN;
      newObj = {
        ...newObj,
        newMontoTransfReceptor,
      };
      break;
    }
    case "USD to CLP": {
      // CALCULOS USD TO CLP

      // CONVERTIR DÓLARES A CLP (DESCONTÁNDOLE LA COMISIÓN EN USD)
      let convertirUSDToCLP = Math.floor(
        (Number(montoEmisor) - 5) * Number(cotizClp)
      );

      // ARMAR OBJETO PARA ACTUALIZAR VALORES
      newMontoTransfReceptor = "" + convertirUSDToCLP;
      newObj = {
        ...newObj,
        newMontoTransfReceptor,
      };
      break;
    }
    default: {
      break;
    }
  }
  return newObj;
};
