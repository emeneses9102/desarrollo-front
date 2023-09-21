import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Avatar from "@mui/material/Avatar";
import CardHome from "./HomeCard";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import CardTransferencias from "./CardTransferencias";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { logOut, updateUser } from "../../redux/actions/users";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import UserProfileComponent from "../ProfileUser/UserProfileComponent";
import CardUserData from "./CardUserData";
import {
  formatDate,
  getCalculation,
  listAllCurrencies,
  listCurrencies,
  mostrarValoresConMiles,
  redondearValores,
  selectBancos,
  selectCurrencyByCountry,
} from "../LoginRegister/LoginRegisterHelpers";
import useWindowDimensions from "../../Hooks/useWindowDimensions";
import PaidIcon from "@mui/icons-material/Paid";
import CargarSaldo from "../CargarDinero/CargarSaldo";
import {
  cargarSaldoUser,
  enviarTransferencia,
  getAllTransferByUser,
  handleCloseAlertTransf,
  obtenerInfoUsuario,
} from "../../redux/actions/transfers";
import {
  BiTransfer,
  BiDownload,
  BiUser,
  BiHome,
  BiLogOut,
} from "react-icons/bi";
import RoundedButton from "../Buttons/RoundedButton";
import { SwipeableDrawer, Backdrop, CircularProgress } from "@mui/material";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import Logotipo from "../../Images/Logotipo4.png";
import Swal from "sweetalert2";
import CardHomeVerInfo from "./CarVerInfo";
import EnviarDinero from "./EnviarDinero";

const useStyles = makeStyles(() => ({
  gridComponent: {
    display: "flex",
    justifyContent: "space-between",
  },
  appBarNavStyle: {
    boxShadow: "none !important",
    background: "transparent !important",
  },
  principalComponentHome: {
    display: "flex",
    justifyContent: "center",
    marginTop: "2%",
    width: "70%",
    gap: "2%",
  },
  principalComponentAccount: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "12%",
  },
  root: {
    padding: "12px !important",
    height: "100vh",
  },
  cardTransferenciasUsuario: {
    background: "#28282A",
    borderRadius: "10px !important",
    height: "fit-content",
    width: "60%",
    overflow: "hidden",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  cardTransferenciasUsuarioMobile: {
    background: "#28282A",
    borderRadius: "10px 10px 0 0!important",
    width: "100%",
    flexGrow: "1"
  },
  cardInformacionUsuario: {
    backgroundColor: "#28282A !important",
    borderRadius: "10px !important",
  },
  cardActionUser: {
    backgroundColor: "#28282A !important",
    borderRadius: "10px !important",
  },
  cardInformacionCuenta: {
    backgroundColor: "#28282A !important",
    borderRadius: "10px !important",
  },
  tabMovimientos: {
    color: "white !important",
  },
  principalComponentAccountEdit: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "80%",
    maxHeight: "80vh",
  },
  principalComponentAccountEditMobile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "90%",
    maxHeight: "80vh",
  },
  panelUsuario: {
    background: "#28282A",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
    marginTop: "20px",
    padding: "2%",
    overflow: "auto",
  },
  panelUsuarioInfo: {
    backgroundColor: "#28282A !important",
    borderRadius: "10px",
  },
  panelUsuarioInfoCard: {
    backgroundColor: "#28282A !important",
    borderRadius: "10px",
    display: "flex",
  },
  principalComponentCargarSaldo: {
    display: "flex",
    justifyContent: "center",
    width: "50%",
    gap: "2%",
    flexDirection: "column",
    borderRadius: "10px",
  },
  principalComponentCargarSaldoMobile: {
    display: "flex",
    justifyContent: "center",
    width: "85%",
    gap: "2%",
  },
  panelCargarSaldo: {
    display: "flex",
    backgroundColor: "#28282A !important",
    height: "auto",
    minWidth: "100%",
    borderRadius: "10px",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
    padding: "20px",
  },

  //ESTILOS PARA CARGAR SALLDO
  icon: { color: "white !important" },
  selectStyles: {
    backgroundColor: "#000000 !important",
    color: "white !important",
  },
  selectDocumentStyle: {
    maxWidth: "120px",
    minWidth: "35%",
    color: "white",
  },
  testInputStyle: {
    backgroundColor: "#000000",
    margin: "0 !important",
    marginTop: "0px !important",
    maxWidth: "25%",
    borderRadius: "5px",
  },
  testInputStyleEnviarDinero: {
    backgroundColor: "#000000",
    marginLeft: "8%",
    marginTop: "0px !important",
    maxWidth: "70%",
    borderRadius: "5px",
  },
  buttonStyles: {
    textTransform: "none !important",
    borderRadius: "10px",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis !important",
    boxSizing: "content-box",
    overflowX: "hidden",
  },
  panelEnviarDinero: {
    backgroundColor: "#28282A !important",
    width: "50%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  panelEnviarDineroMobile: {
    backgroundColor: "#28282A !important",
    width: "85%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    boxShadow:
      "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
  },
  panelEnviarDineroMobileComponente: {
    width: "100%",
  },
  classesLabelText: {
    color: "white",
  },
  selectDocumentStyleEnviarDinero: {
    maxWidth: "100%",
    color: "white",
    marginRight: "8%",
  },
}));

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const HomeComponent = ({
  cotizaciones,
  alertMessageTransferencia,
  statusMessageTransferencia,
  transferenciasEnviadas,
  transferenciasRecibidas,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useNavigate();
  const hour = new Date().getHours();
  const { width } = useWindowDimensions();

  const checkTime = () => {
    if (hour <= 12) {
      return "Buenos días";
    } else if (hour >= 13 && hour <= 18) {
      return "Buenas tardes";
    } else if (hour > 18) {
      return "Buenas noches";
    }
  };
  // COTIZACIONES
  const { cotizacionClp, cotizacionPen } = cotizaciones;
  const cotClp = cotizacionClp;
  const cotPen = cotizacionPen;

  const [open, setOpen] = React.useState(false);
  const [renderConditional, setRenderConditional] = React.useState("Inicio");

  const [edit, setEdit] = React.useState(false);
  const { user } = useSelector((state) => state.users);
  const { userReceptor } = useSelector((state) => state.transfers);
  const selectBank = user?.country ? selectBancos(user.country) : [];
  const bancoUser = selectBank.find(
    (banco) => banco.codigoSwift === user.bank.codigoSwift
  );

  const [bodyUpdateUser, setBodyUpdateUser] = React.useState({
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    birthday: user?.birthday ? formatDate(user.birthday) : "",
    idnumber: user.idnumber,
    country: user.country,
    bank: bancoUser,
    cci: user?.bank ? user.bank.cci : "",
    accountNumber: user?.bank ? user.bank.accountNumber : "",
    idtype: user.idtype,
  });
  const userCurrency = user?.country
    ? selectCurrencyByCountry(user.country)
    : "USD";

  const currencyToChange = userCurrency;

  const [cargarSaldoBody, setCargarSaldoBody] = React.useState({
    email: user.email,
    idnumber: user.idnumber,
    country: user.country,
    cci: user?.bank ? user.bank.cci : "",
    accountNumber: user?.bank ? user.bank.accountNumber : "",
    money: 0,
    currency: currencyToChange,
  });
  const [textError, setTextError] = React.useState("");
  const [openMessageTextError, setOpenMessageTextError] = React.useState(false);
  const [disabledCargarButton, setDisableCargarButton] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const listCurrenciesB = listCurrencies(user.country);

  const [showCurrency, setShowCurrency] = React.useState(1);
  // setShowCurrency(2) // Muestra la moneda local
  const showActualCurrency = showCurrency === 2 ? currencyToChange : "USD";
  const showSecondCurrency = showCurrency === 1 ? currencyToChange : "USD";

  // CANTIDAD DE DINERO (DÓLAR Y MONEDA LOCAL)
  const moneyUser = mostrarValoresConMiles(user?.bank?.money);
  const moneyUsdUser = mostrarValoresConMiles(user?.bank?.moneyUsd);

  // MOSTRAR MONEDA PRINCIPAL Y SECUNDARIA
  const showActualMoney = showCurrency === 1 ? moneyUsdUser : moneyUser;
  const showSecondMoney = showCurrency === 2 ? moneyUsdUser : moneyUser;

  // TRANSFERENCIAS (ESTADOS, ETAPAS, MANEJO DE BACKDROP Y ALERTAS)
  const [emailToReceptor, setEmailToReceptor] = React.useState("");
  const [errorTransferencia, setErrorTransferencia] = React.useState("");
  const [errorAlertTransferencia, setErrorAlertTransferencia] =
    React.useState(false);

  const [bodyTransferencia, setBodyTransferencia] = React.useState({
    monto: "",
    montoReceptor: "",
    emailEmisor: user?.email ? user.email : "",
    emailReceptor: emailToReceptor,
    currency: userCurrency,
    currencyReceptor: userReceptor?.currency
      ? selectCurrencyByCountry(userReceptor.currency)
      : "USD",
    transfertype: "Transferencia",
    comision: "5",
  });

  // STEPPER STATES
  const [activeStep, setActiveStep] = React.useState(0);

  // TRANSFERENCIAS Y DEPÓSITOS.
  // getAllTransferByUser

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const validationAvatar = (arg1, arg2) => {
    if (arg1 && arg2) {
      return arg1[0] + arg2[0];
    } else {
      return "IP";
    }
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    if (e?.target) {
      const { value, name } = e?.target;
      setBodyUpdateUser({ ...bodyUpdateUser, [name]: value });
    }
  };

  const handleMoneyChange = (e) => {
    e.preventDefault();
    if (e?.target) {
      const { name, value } = e.target;
      setCargarSaldoBody({ ...cargarSaldoBody, [name]: value });
    }
  };

  const handleTransferChange = (e) => {
    e.preventDefault();
    if (e?.target) {
      const { name, value } = e.target;
      if (
        name === "currency" ||
        name === "currencyReceptor" ||
        name === "monto"
      ) {
        const comisionClp = Math.floor(5 * Number(cotClp));
        const comisionPen = Math.floor(5 * Number(cotPen));

        const obtenerCurrencyEmisor =
          name === "currency" ? value : bodyTransferencia.currency;
        const obtenerCurrencyReceptor =
          name === "currencyReceptor"
            ? value
            : bodyTransferencia.currencyReceptor;

        const montoEmisor = name === "monto" ? value : bodyTransferencia.monto;
        const montoTransfReceptor = bodyTransferencia?.montoReceptor;

        const objCalculos = {
          comisionClp: "" + comisionClp,
          comisionPen: "" + comisionPen,
          cotizPen: cotPen,
          cotizClp: cotClp,
          obtenerCurrencyEmisor,
          obtenerCurrencyReceptor,
          montoEmisor,
          montoTransfReceptor,
        };

        const actualizarMontos = getCalculation(objCalculos);
        if (actualizarMontos) {
          const {
            newMontoEmisor,
            newMontoTransfReceptor,
            newCurrency,
            newCurrencyReceptor,
          } = actualizarMontos;

          setBodyTransferencia({
            ...bodyTransferencia,
            monto: newMontoEmisor,
            montoReceptor: newMontoTransfReceptor,
            currency: newCurrency,
            currencyReceptor: newCurrencyReceptor,
          });
        }
      } else {
        setBodyTransferencia({ ...bodyTransferencia, [name]: value });
      }
    }
  };

  const handlerChangeData = (arg) => {
    if (arg.status === 200) {
      dispatch(getAllTransferByUser({ userId: user?.id }));
      setTimeout(() => {
        handleClickAction("Inicio");
        setActiveStep(0);
        setEmailToReceptor("");
        setBodyTransferencia({
          monto: "",
          montoReceptor: "",
          emailEmisor: user?.email ? user.email : "",
          emailReceptor: emailToReceptor,
          currency: userCurrency,
          currencyReceptor: userReceptor?.currency
            ? selectCurrencyByCountry(userReceptor.currency)
            : "USD",
          transfertype: "Transferencia",
          comision: "5",
        });
        setOpenAlert(false);
        Swal.fire(
          "Se ha realizado con éxito La transferencia. En breve podrá verla en la lista de transferencias.",
          "",
          "success"
        );
      }, 8000);
    }
  };

  const handleTransferenciaSubmit = () => {
    Swal.fire({
      title: `¿Está seguro de realizar la transferencia? Esta acción no es reversible.`,
      showCancelButton: true,
      confirmButtonText: "Enviar",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setOpenAlert(true);
        dispatch(enviarTransferencia(bodyTransferencia, handlerChangeData));
      }
    });
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    if (e?.target) {
      const { value } = e.target;
      setEmailToReceptor(value);
    }
  };

  const helperHandleEmailSubmit = () => {
    setOpenAlert(true);
    setTimeout(() => {
      handleNext();
    }, 3000);
    setTimeout(() => {
      setOpenAlert(false);
    }, 3100);
  };

  const handleBlockStep = (arg) => {
    const { status, message: messageDataError } = arg;
    if (status === 200) {
      helperHandleEmailSubmit();
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          messageDataError ||
          "El correo no se encuentra registrado en nuestro sistema",
      });
      return;
    }
  };

  const handleEmailSubmit = () => {
    if (!(user?.email === emailToReceptor)) {
      dispatch(obtenerInfoUsuario({ email: emailToReceptor }, handleBlockStep));
      setBodyTransferencia({
        ...bodyTransferencia,
        emailReceptor: emailToReceptor,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Debe colocar el correo de otro usuario",
      });
      return;
    }
  };

  const handleAmountSubmit = () => {
    let correctComision = "5";
    if (bodyTransferencia.currency === "USD") {
      if (Number(bodyTransferencia.monto) >= Number(user?.bank?.moneyUsd)) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Debe colocar un monto menor. Saldo en USD insuficiente",
        });
        return;
      }
    } else {
      if (
        bodyTransferencia.currency === "CLP" ||
        bodyTransferencia.currency === "PEN"
      ) {
        if (Number(bodyTransferencia.monto) > Number(user?.bank?.money)) {
          Swal.fire({
            icon: "error",
            title: "Error",
            text:
              "Debe colocar un monto menor. Saldo en " +
              bodyTransferencia.currency +
              " insuficiente",
          });
          return;
        }
      }
    }
    const cotPen2 = Number(bodyTransferencia.comision) * Math.floor(cotPen);
    const cotClp2 = Number(bodyTransferencia.comision) * Math.floor(cotClp);

    const encontrarComision = (curr) => {
      switch (curr) {
        case "USD": {
          correctComision = "5";
          break;
        }
        case "PEN": {
          correctComision = "" + cotPen2;
          break;
        }
        case "CLP": {
          correctComision = "" + cotClp2;
          break;
        }
        default: {
          break;
        }
      }
      return correctComision;
    };
    const comisionCorrecta = encontrarComision(bodyTransferencia.currency);
    setBodyTransferencia({ ...bodyTransferencia, comision: comisionCorrecta });
    helperHandleEmailSubmit();
  };

  const handleErrorCargarSaldo = () => {
    setOpenMessageTextError(true);
    setDisableCargarButton(true);
    setTimeout(() => {
      setOpenMessageTextError(false);
      setDisableCargarButton(false);
      setTextError("");
    }, 3000);
  };

  const handleMoneySubmit = () => {
    const { money: newMoneyQ, currency: currencyToFund } = cargarSaldoBody;
    let noSubmit = false;
    if (currencyToFund === "USD") {
      if (Number(newMoneyQ) > 500) {
        setTextError("Solo se puede cargar 500" + currencyToFund + " por vez.");
        noSubmit = true;
        handleErrorCargarSaldo();
      }
    }
    if (currencyToFund === "CLP") {
      let clpToUsd = Number(cotClp) * 500;
      if (Number(newMoneyQ) > clpToUsd) {
        setTextError(
          "Solo se puede cargar " +
            mostrarValoresConMiles(Math.floor(clpToUsd)) +
            "" +
            currencyToFund +
            " por vez."
        );
        noSubmit = true;
        handleErrorCargarSaldo();
      }
    }
    if (currencyToFund === "PEN") {
      let penToUsd = Number(cotPen) * 500;
      if (Number(newMoneyQ) > penToUsd) {
        setTextError(
          "Solo se puede cargar " +
            mostrarValoresConMiles(Math.floor(penToUsd)) +
            "" +
            currencyToFund +
            " por vez."
        );
        noSubmit = true;
        handleErrorCargarSaldo();
      }
    }
    if (!noSubmit) {
      Swal.fire({
        title: `¿Está seguro de cargar ${mostrarValoresConMiles(
          Math.floor(newMoneyQ)
        )}${currencyToFund} en su cuenta?`,
        showCancelButton: true,
        confirmButtonText: "Cargar",
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          setOpenAlert(true);
          const bodyCargarSaldo = {
            ...cargarSaldoBody,
          };
          dispatch(cargarSaldoUser(bodyCargarSaldo));
          setTimeout(() => {
            setOpenAlert(false);
            Swal.fire(
              "Se ha fondeado con éxito su cuenta. En breve podrá ver el nuevo saldo.",
              "",
              "success"
            );
          }, 3000);
          setCargarSaldoBody({ ...cargarSaldoBody, money: 0 });
        }
      });
    }

    // ACÁ ES DONDE SE EJECUTA EL CARGARSALDO:
  };

  const handleUpdateUser = () => {
    const {
      bank: { bank: newBankUser, codigoSwift: newCodigoSwift },
    } = bodyUpdateUser;
    const bodyUpdate = {
      ...bodyUpdateUser,
      bank: newBankUser,
      codigoSwift: newCodigoSwift,
      id: user.id,
    };
    dispatch(updateUser(bodyUpdate));
  };

  const { firstname, lastname } = user;
  const avatarTemp = validationAvatar(firstname, lastname);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleSwitchRenderIcon = (text) => {
    switch (text) {
      case "Salir": {
        return <BiLogOut size={25} />;
      }
      case "Inicio": {
        return <BiHome size={25} />;
      }
      case "Cuenta": {
        return <BiUser size={25} />;
      }
      case "Ingresar dinero": {
        return <BiDownload size={25} />;
      }
      case "Enviar dinero": {
        return <BiTransfer size={25} />;
      }
      default: {
        return <></>;
      }
    }
  };

  const handleClickAction = (text) => {
    switch (text) {
      case "Salir": {
        handleLogout();
        history("/");
        break;
      }
      case "Cuenta": {
        setRenderConditional(text);
        break;
      }
      case "Inicio": {
        setRenderConditional(text);
        break;
      }
      case "Ingresar dinero": {
        setRenderConditional(text);
        break;
      }
      case "Enviar dinero": {
        setRenderConditional(text);
        break;
      }
      default: {
        break;
      }
    }
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const MobileBase = ({ page }) => {
    return (
      <>
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            color: "white",
          }}
        >
          <div
            style={{
              height: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                color: "white",
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              {`¡Hola, ${firstname}!`}
            </Typography>
            <Avatar>{avatarTemp}</Avatar>
          </div>
          <div
            style={{
              flexGrow: "1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(0 0 0 / 60%)",
            }}
          >
            {page}
          </div>
        </div>
      </>
    );
  };

  const SendMoney = () => {
    return (
      <div className={classes.panelEnviarDineroMobile}>
        <EnviarDinero
          classesUserData={classes.panelEnviarDineroMobileComponente}
          userEmisor={user}
          userReceptor={userReceptor}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
          classes={classes}
          handleChange={handleTransferChange}
          handleEmailChange={handleEmailChange}
          emailToReceptor={emailToReceptor}
          handleEmailSubmit={handleEmailSubmit}
          handleNext={handleNext}
          handleBack={handleBack}
          handleTransferChange={handleTransferChange}
          bodyTransferencia={bodyTransferencia}
          listCurrenciesToMap={listCurrenciesB}
          errorAlertTransferencia={errorAlertTransferencia}
          errorTransferencia={errorTransferencia}
          handleAmountSubmit={handleAmountSubmit}
          handleTransferenciaSubmit={handleTransferenciaSubmit}
        />
      </div>
    );
  };

  const DepositMoney = () => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <div className={classes.principalComponentCargarSaldoMobile}>
          <CargarSaldo
            classesUserData={classes.panelCargarSaldo}
            cotizaciones={cotizaciones}
            handleMoneyChange={handleMoneyChange}
            classes={classes}
            listCurrenciesToMap={listCurrenciesB}
            cargarSaldoBody={cargarSaldoBody}
            handleMoneySubmit={handleMoneySubmit}
            cotClp={cotClp}
            cotPen={cotPen}
            textError={textError}
            disabledCargarButton={disabledCargarButton}
            openMessageTextError={openMessageTextError}
          />
        </div>
      </div>
    );
  };

  const handleSwitchRenderItem = (renderConditionalComponent) => {
    if (width > 900) {
      switch (renderConditionalComponent) {
        case "Inicio": {
          return (
            <div className={classes.principalComponentHome}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "30%",
                  gap: "2rem",
                }}
              >
                <div>
                  <CardHomeVerInfo
                    classesListItem={classes.cardInformacionUsuario}
                    showActualCurrency={showActualCurrency}
                    showSecondCurrency={showSecondCurrency}
                    showActualMoney={showActualMoney}
                    showSecondMoney={showSecondMoney}
                    showCurrency={showCurrency}
                    setShowCurrency={setShowCurrency}
                  />
                </div>
                <div>
                  <CardHome
                    classesListItem={classes.cardActionUser}
                    setRenderConditional={setRenderConditional}
                  />
                </div>
              </div>
              <div className={classes.cardTransferenciasUsuario}>
                <CardTransferencias
                  classesCardTransferencias={classes.cardPropTransfUser}
                  classes={classes}
                  transferenciasEnviadas={transferenciasEnviadas}
                  transferenciasRecibidas={transferenciasRecibidas}
                />
              </div>
            </div>
          );
        }
        case "Cuenta": {
          return (
            <div className={classes.principalComponentAccountEdit}>
              <div className={classes.panelUsuarioInfo}>
                <CardUserData
                  classesUserData={classes.panelUsuarioInfoCard}
                  user={user}
                />
              </div>
              <div className={classes.panelUsuario}>
                <UserProfileComponent
                  userProfile={bodyUpdateUser}
                  handleChange={handleOnChange}
                  handleSubmit={handleUpdateUser}
                  onEdit={() => setEdit(!edit)}
                  edit={edit}
                />
              </div>
            </div>
          );
        }
        case "Ingresar dinero": {
          return (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div className={classes.principalComponentCargarSaldo}>
                <CargarSaldo
                  classesUserData={classes.panelCargarSaldo}
                  cotizaciones={cotizaciones}
                  handleMoneyChange={handleMoneyChange}
                  classes={classes}
                  listCurrenciesToMap={listCurrenciesB}
                  cargarSaldoBody={cargarSaldoBody}
                  handleMoneySubmit={handleMoneySubmit}
                  cotClp={cotClp}
                  cotPen={cotPen}
                  textError={textError}
                  disabledCargarButton={disabledCargarButton}
                  openMessageTextError={openMessageTextError}
                />
              </div>
            </div>
          );
        }
        case "Enviar dinero": {
          return (
            <div className={classes.panelEnviarDinero}>
              <EnviarDinero
                classesUserData={classes.panelEnviarDineroComponente}
                userEmisor={user}
                userReceptor={userReceptor}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                classes={classes}
                handleChange={handleTransferChange}
                handleEmailChange={handleEmailChange}
                emailToReceptor={emailToReceptor}
                handleEmailSubmit={handleEmailSubmit}
                handleNext={handleNext}
                handleBack={handleBack}
                handleTransferChange={handleTransferChange}
                bodyTransferencia={bodyTransferencia}
                listCurrenciesToMap={listCurrenciesB}
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
        }
        default: {
          break;
        }
      }
    } else {
      // MOBILE RENDER COMPONENT
      switch (renderConditionalComponent) {
        case "Inicio": {
          return (
            <>
              <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
              >
                <List>
                  {["Inicio", "Cuenta", "Ingresar dinero", "Enviar dinero"].map(
                    (text, indexOpciones) => (
                      <ListItemButton
                        key={text + "#" + indexOpciones}
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                        onClick={() => {
                          handleClickAction(text);
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {handleSwitchRenderIcon(text)}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    )
                  )}
                </List>
                <Divider />
                <List>
                  {["Salir"].map((text, indexOpciones) => (
                    <ListItemButton
                      key={text + "#" + indexOpciones}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                      onClick={() => {
                        handleClickAction(text);
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {handleSwitchRenderIcon(text)}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </SwipeableDrawer>
              <div
                style={{
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    minHeight: "40%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <div
                    style={{
                      height: "25%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <IconButton
                      aria-label="open drawer"
                      onClick={handleDrawerOpen}
                      edge="start"
                      sx={{
                        color: "white",
                      }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                      {`¡Hola, ${firstname}!`}
                    </Typography>
                    <Avatar>{avatarTemp}</Avatar>
                  </div>

                  <div
                    style={{
                      flexGrow: "1",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h6" fontWeight={500}>
                      Dinero disponible
                    </Typography>

                    <Typography
                      variant="h3"
                      fontWeight={500}
                      style={{ marginLeft: "4%" }}
                    >
                      {showActualCurrency} {showActualMoney}
                      <IconButton
                        color="secondary"
                        style={{ color: "white" }}
                        aria-label="Mostrar otro saldo"
                        component="span"
                        onClick={() =>
                          setShowCurrency(showCurrency === 1 ? 2 : 1)
                        }
                      >
                        <SwapVertIcon />
                      </IconButton>
                    </Typography>
                    <div
                      style={{ display: "flex", color: "#9eee52", gap: "7px" }}
                    >
                      <Typography variant="body1" fontWeight={500}>
                        {showSecondCurrency} {showSecondMoney}
                      </Typography>
                    </div>
                  </div>
                  <div
                    style={{
                      height: "30%",
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <RoundedButton
                      text="Enviar dinero"
                      icon={<BiTransfer size={25} />}
                      onClick={() => setRenderConditional("Enviar dinero")}
                    />
                    {/* <RoundedButton
                      text="Solicitar"
                      icon={<BiUserPlus size={25} Ingresar dinero/>}
                    /> */}
                    <RoundedButton
                      text="Ingresar Dinero"
                      icon={<BiDownload size={25} />}
                      onClick={() => setRenderConditional("Ingresar dinero")}
                    />
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexGrow: 1,
                    flexDirection: "column",
                  }}
                >
                  <div className={classes.cardTransferenciasUsuarioMobile}>
                    <CardTransferencias
                      classesCardTransferencias={classes.cardPropTransfUser}
                      classes={classes}
                      mobile
                    />
                  </div>
                  <div
                    style={{
                      backgroundColor: "#28282A",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      outline: "1px solid grey",
                      padding: "10px"
                    }}
                  >
                    <img src={Logotipo} alt="logo" width="40%" />
                  </div>
                </div>
              </div>
            </>
          );
        }

        case "Cuenta": {
          return (
            <>
              <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
              >
                <List>
                  {["Inicio", "Cuenta", "Ingresar dinero", "Enviar dinero"].map(
                    (text, indexOpciones) => (
                      <ListItemButton
                        key={text + "#" + indexOpciones}
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                        onClick={() => {
                          handleClickAction(text);
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {handleSwitchRenderIcon(text)}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    )
                  )}
                </List>
                <Divider />
                <List>
                  {["Salir"].map((text, indexOpciones) => (
                    <ListItemButton
                      key={text + "#" + indexOpciones}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                      onClick={() => {
                        handleClickAction(text);
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {handleSwitchRenderIcon(text)}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </SwipeableDrawer>
              <div
                style={{
                  height: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  color: "white",
                }}
              >
                <div
                  style={{
                    height: "10%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <IconButton
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                      color: "white",
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap component="div">
                    {`¡Hola, ${firstname}!`}
                  </Typography>
                  <Avatar>{avatarTemp}</Avatar>
                </div>
                <div
                  style={{
                    flexGrow: "1",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgb(0 0 0 / 60%)",
                  }}
                >
                  <div
                    className={
                      width < 900
                        ? classes.principalComponentAccountEditMobile
                        : classes.principalComponentAccountEdit
                    }
                  >
                    <div className={classes.panelUsuarioInfo}>
                      <CardUserData
                        classesUserData={classes.panelUsuarioInfoCard}
                        user={user}
                      />
                    </div>
                    <div className={classes.panelUsuario}>
                      <UserProfileComponent
                        userProfile={bodyUpdateUser}
                        handleChange={handleOnChange}
                        handleSubmit={handleUpdateUser}
                        onEdit={() => setEdit(!edit)}
                        edit={edit}
                        mobile
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }
        case "Ingresar dinero": {
          return (
            <>
              <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
              >
                <List>
                  {["Inicio", "Cuenta", "Ingresar dinero", "Enviar dinero"].map(
                    (text, indexOpciones) => (
                      <ListItemButton
                        key={text + "#" + indexOpciones}
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                        onClick={() => {
                          handleClickAction(text);
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {handleSwitchRenderIcon(text)}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    )
                  )}
                </List>
                <Divider />
                <List>
                  {["Salir"].map((text, indexOpciones) => (
                    <ListItemButton
                      key={text + "#" + indexOpciones}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                      onClick={() => {
                        handleClickAction(text);
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {handleSwitchRenderIcon(text)}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </SwipeableDrawer>
              <MobileBase page={<DepositMoney />} />
            </>
          );
        }
        case "Enviar dinero": {
          return (
            <>
              <SwipeableDrawer
                anchor="left"
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
              >
                <List>
                  {["Inicio", "Cuenta", "Ingresar dinero", "Enviar dinero"].map(
                    (text, indexOpciones) => (
                      <ListItemButton
                        key={text + "#" + indexOpciones}
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                        onClick={() => {
                          handleClickAction(text);
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                        >
                          {handleSwitchRenderIcon(text)}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          sx={{ opacity: open ? 1 : 0 }}
                        />
                      </ListItemButton>
                    )
                  )}
                </List>
                <Divider />
                <List>
                  {["Salir"].map((text, indexOpciones) => (
                    <ListItemButton
                      key={text + "#" + indexOpciones}
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                      }}
                      onClick={() => {
                        handleClickAction(text);
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : "auto",
                          justifyContent: "center",
                        }}
                      >
                        {handleSwitchRenderIcon(text)}
                      </ListItemIcon>
                      <ListItemText
                        primary={text}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </SwipeableDrawer>
              <MobileBase page={<SendMoney />} />
            </>
          );
        }
        default:
          break;
      }
    }
  };

  React.useEffect(
    () => {
      if (!user?.email) {
        history("/");
      }
    },
    [history, user?.email],
    dispatch
  );

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openAlert}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {width > 900 ? (
        <Box
          sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
          style={{ maxHeight: "100vh", overflowY: "auto" }}
        >
          <AppBar
            style={{ position: "relative" }}
            open={open}
            className={classes.appBarNavStyle}
          >
            <Toolbar className={classes.gridComponent}>
              <div>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </div>
              <div>
                <Typography variant="h6" noWrap component="div">
                  {`¡${checkTime()}, ${firstname}!`}
                </Typography>
              </div>
              <div>
                <Avatar>{avatarTemp}</Avatar>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              {open && (
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
              )}
            </DrawerHeader>
            <Divider />
            <List>
              {["Inicio", "Cuenta", "Ingresar dinero", "Enviar dinero"].map(
                (text, indexOpciones) => (
                  <ListItemButton
                    key={text + "#" + indexOpciones}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                    onClick={() => {
                      handleClickAction(text);
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {handleSwitchRenderIcon(text)}
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: open ? 1 : 0 }}
                    />
                  </ListItemButton>
                )
              )}
            </List>
            <Divider />
            <List>
              {["Salir"].map((text, indexOpciones) => (
                <ListItemButton
                  key={text + "#" + indexOpciones}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => {
                    handleClickAction(text);
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {handleSwitchRenderIcon(text)}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              ))}
            </List>
          </Drawer>
          <Box
            style={{
              scrollBehaviour: "smooth",
              backgroundColor: "rgb(0 0 0 / 60%)",
              display: "flex",
              justifyContent: "center",
              height: "100vh",
              alignItems: `${
                renderConditional === "Inicio"
                  ? "flex-start"
                  : renderConditional && "center"
              }`,
            }}
          >
            <DrawerHeader />
            {handleSwitchRenderItem(renderConditional)}
          </Box>
        </Box>
      ) : (
        <>{handleSwitchRenderItem(renderConditional)}</>
      )}
    </>
  );
};
export default HomeComponent;
