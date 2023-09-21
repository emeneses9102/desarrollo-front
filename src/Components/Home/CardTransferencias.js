import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Backdrop, Fade, Modal, Tab, Tabs } from "@mui/material";
import {
  AiOutlineIssuesClose,
  AiOutlineCloseCircle,
  AiOutlineCheckCircle,
  AiOutlineMail,
} from "react-icons/ai";
import moment from "moment";
import { Box } from "@mui/system";
import useStyles from "../../styles";
import {
  BiMap,
  BiDollarCircle,
  BiCalendar,
  BiCloudDownload,
  BiMailSend,
} from "react-icons/bi";
import SecondaryButton from "../Buttons/SecondaryButton";
import PrimaryButton from "../Buttons/PrimaryButton";

const style = {
  position: "absolute",
  top: "35%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#28282A",
  boxShadow: 24,
  p: 4,
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
};

const TransferListItem = ({ transfer, setInfo }) => {
  const { monto, receptorId, emisorId, estado, currency, fecha, transfertype } =
    transfer;

  return (
    <ListItem
      alignItems="center"
      onClick={() => setInfo(transfer)}
      style={{ cursor: "pointer" }}
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            border: "2px solid #5966BA",
            height: "3rem",
            width: "3rem",
          }}
        >
          {transfertype === "Transferencia"
            ? `${receptorId.firstname[0]}${receptorId.lastname[0]}`
            : `${emisorId.firstname[0]}${emisorId.lastname[0]}`}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
            }}
          >
            {estado === "Aprobada" ? (
              <AiOutlineCheckCircle color="rgb(158, 238, 82)" size={20} />
            ) : estado === "Rechazada" ? (
              <AiOutlineCloseCircle color="red" size={20} />
            ) : (
              <AiOutlineIssuesClose color="orange" size={20} />
            )}
            <Typography
              variant="body1"
              style={{
                color: "white",
                alignContent: "center",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "cacl(100%)",
                display: "inline-block",
              }}
            >
              {transfertype === "Transferencia"
                ? `Enviaste dinero a ${receptorId.firstname} ${receptorId.lastname}`
                : `${emisorId.firstname} ${emisorId.lastname} te envió dinero`}
            </Typography>
          </div>
        }
        secondary={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "grey",
              gap: "3px",
              marginLeft: "0.18rem",
            }}
          >
            <AiOutlineMail />
            <Typography
              component="span"
              variant="body2"
              style={{
                alignContent: "center",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
                width: "calc(60%)",
                display: "inline-block",
              }}
            >
              {transfertype === "Transferencia"
                ? receptorId.email
                : emisorId.email}
            </Typography>
          </div>
        }
      />
      <ListItemText>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
          }}
        >
          <Typography
            sx={{ display: "inline-block" }}
            component="span"
            variant="body2"
            style={{
              color: `${estado === "Aprobada" ? "rgb(158, 238, 82)" : "red"}`,
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "20px",
              textAlign: "center",
              display: "flex",
              justifyContent: "flex-end",
              whiteSpace: "nowrap",
            }}
          >
            {`${currency} ${monto}`}
          </Typography>
          <Typography
            component="span"
            variant="body2"
            style={{
              color: "gray",
              display: "flex",
              justifyContent: "flex-end",
              whiteSpace: "nowrap",
            }}
          >
            {moment(fecha).format("DD/MM/YYYY h:mm[Hs.]")}
          </Typography>
        </div>
      </ListItemText>
    </ListItem>
  );
};

const TransferModal = ({ open, handleClose, transferInfo }) => {
  const {
    monto,
    receptorId,
    emisorId,
    estado,
    currency,
    fecha,
    transfertype,
    numeroOperacion,
  } = transferInfo;

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Avatar
              sx={{
                border: "4px solid #5966BA",
                height: "6rem",
                width: "6rem",
              }}
            >
              {transfertype === "Transferencia"
                ? `${receptorId?.firstname[0]}${receptorId?.lastname[0]}`
                : `${emisorId?.firstname[0]}${emisorId?.lastname[0]}`}
            </Avatar>
            <div>
              <Typography fontWeight={500} fontSize={"1.5rem"} align="center">
                {transfertype === "Transferencia"
                  ? `Enviaste dinero a ${receptorId?.firstname} ${receptorId?.lastname}`
                  : `${emisorId?.firstname} ${emisorId?.lastname} te envió dinero`}
              </Typography>
              <Typography
                fontWeight={400}
                fontSize={"1.1rem"}
                align="center"
                color="gray"
              >
                #{numeroOperacion}
              </Typography>
              <Typography
                fontWeight={300}
                fontSize={"1.1rem"}
                align="center"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {estado === "Aprobada" ? (
                  <AiOutlineCheckCircle color="rgb(158, 238, 82)" size={20} />
                ) : estado === "Rechazada" ? (
                  <AiOutlineCloseCircle color="red" size={20} />
                ) : (
                  <AiOutlineIssuesClose color="orange" size={20} />
                )}
                {estado}
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "95%",
                backgroundColor: "#232325",
              }}
            >
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #28282A",
                  padding: "7px",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BiDollarCircle size={25} />
                  <Typography variant="h6" fontWeight={300}>
                    Monto
                  </Typography>
                </div>
                <div style={{ textAlign: "right", flexGrow: 1 }}>
                  <Typography
                    sx={{ display: "inline-block" }}
                    component="span"
                    variant="body2"
                    style={{
                      color: `${
                        estado === "Aprobada" ? "rgb(158, 238, 82)" : "red"
                      }`,
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "20px",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "flex-end",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {`${currency} ${monto}`}
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #28282A",
                  padding: "7px",
                }}
              >
                <div
                  style={{
                    width: "30%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BiCalendar size={25} />
                  <Typography variant="h6" fontWeight={300}>
                    Fecha
                  </Typography>
                </div>
                <div style={{ textAlign: "right", flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={300}>
                    {moment(fecha).format("DD/MM/YYYY h:mm[Hs.]")}
                  </Typography>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  borderBottom: "1px solid #28282A",
                  padding: "7px",
                }}
              >
                <div
                  style={{
                    width: "50%",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <BiMap size={25} />
                  <Typography variant="h6" fontWeight={300}>
                    Ubicacion
                  </Typography>
                </div>
                <div style={{ textAlign: "right", flexGrow: 1 }}>
                  <Typography variant="h6" fontWeight={300}>
                    {transfertype === "Transferencia"
                      ? receptorId.ubicacion
                      : emisorId.ubicacion}
                  </Typography>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "5px", width: "100%" }}>
              <SecondaryButton
                text={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BiCloudDownload size={25} />
                    <Typography variant="h6" fontWeight={300}>
                      Exportar CSV
                    </Typography>
                  </div>
                }
              />
              <SecondaryButton
                text={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BiMailSend size={25} />
                    <Typography variant="h6" fontWeight={300}>
                      Enviar al mail
                    </Typography>
                  </div>
                }
              />
            </div>
            <div style={{ display: "flex", width: "100%" }}>
              <PrimaryButton
                text={
                  <Typography
                    variant="h6"
                    fontWeight={400}
                    fontSize={"1.5rem"}
                    onClick={handleClose}
                  >
                    Confirmar
                  </Typography>
                }
              />
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

const CardTransferencias = ({
  classes,
  mobile = false,
  transferenciasEnviadas,
  transferenciasRecibidas,
}) => {
  const infoData = {
    monto: 0,
    emisorId: {
      email: "",
      firstname: "",
      lastname: "",
      ubicacion: "",
      img: "",
    },
    receptorId: {
      email: "",
      firstname: "",
      lastname: "",
      ubicacion: "",
      img: "",
    },
    estado: "",
    currency: "",
    fecha: "",
    transfertype: "",
    numeroOperacion: "",
  };

  const getInfoTransferencia = transferenciasEnviadas?.length
    ? transferenciasEnviadas[0]
    : infoData;

  const getInfoDeposito = transferenciasRecibidas?.length
    ? transferenciasRecibidas[0]
    : infoData;

  const [tab, setTab] = useState(1);

  const [modal, setModal] = useState({
    info: tab === 1 ? getInfoTransferencia : getInfoDeposito,
    open: false,
  });

  const { transferItem } = useStyles();

  const handleChange = (_e, value) => {
    setTab(value);
  };
  return (
    <>
      <TransferModal
        open={modal.open}
        handleClose={() => setModal({ ...modal, open: false })}
        transferInfo={modal.info}
      />
      <div>
        <Tabs value={tab} onChange={handleChange} centered variant="fullWidth">
          <Tab
            value={1}
            label="Transferencias"
            className={classes.tabMovimientos}
          />
          <Tab value={2} label="Depositos" className={classes.tabMovimientos} />
        </Tabs>
        <div
          style={{
            maxHeight: `${mobile ? "49vh" : "75vh"}`,
            height: "max-content",
            overflowY: "scroll",
            overflowX: "hidden",
          }}
        >
          <List className={classes.cardPropTransfUser}>
            {(tab === 2 ? transferenciasRecibidas : transferenciasEnviadas)?.map(
              (t, i) => {
                return (
                  <>
                    <div
                      style={{ margin: "8px", display: "flex" }}
                      key={"#" + i}
                      className={transferItem}
                    >
                      <TransferListItem
                        transfer={t}
                        setInfo={(e) => setModal({ open: true, info: e })}
                      />
                    </div>
                    {i ===
                      (tab === 2
                        ? transferenciasRecibidas
                        : transferenciasEnviadas
                      )?.length -
                        1 && (
                      <ListItem
                        style={{
                          margin: "8px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                        key={i + "#"}
                      >
                        <Typography color="gray" style={{ minWidth: "100%" }}>
                          Fin de la lista.
                          {tab === 1 && "¿Deseas hacer otra transferencia?"}
                        </Typography>
                      </ListItem>
                    )}
                  </>
                );
              }
            )}
          </List>
        </div>
      </div>
    </>
  );
};

export default CardTransferencias;
