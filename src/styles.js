import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  root: {
    marginTop: "7%",
  },
  paperStyles: {
    backgroundColor: "#28282A !important",
    padding: "7%",
    color: "white !important",
    borderRadius: "15px !important",
  },
  authStyles: {
    textAlign: "center",
  },
  authTitle: {
    fontWeight: "500",
  },
  buttonStyles: {
    textTransform: "none !important",
    height: "3rem",
    borderRadius: "10px",
  },
  secondaryButtonStyles: {
    backgroundColor: "#747478 !important",
    "&:hover": {
      backgroundColor: "black !important",
    },
    color: "white !important",
  },
  roundedButtonStyles: {
    borderRadius: "100% !important",
    backgroundColor: "#28282A !important",
    color: "white !important",
    padding: "18px !important",
    transition: "background 500ms !important",
    "&:hover": {
      backgroundColor: "black !important",
    },
  },
  inputStyles: {
    backgroundColor: "#000000",
    margin: "0 !important",
    borderRadius: "5px",
    color: "white !important",
  },
  textButtonStyles: {
    textTransform: "none !important",
    color: "white !important",
    "&:hover": {
      backgroundColor: "transparent !important",
    },
  },
  selectStyles: {
    backgroundColor: "#000000 !important",
    color: "white !important",
  },
  icon: { color: "white !important" },
  formValidator: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  formValidatorEditPc: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  testInputStyle: {
    backgroundColor: "#000000",
    margin: "0 !important",
    marginTop: "0px !important",
    borderRadius: "5px",
  },
  selectDocumentStyle: {
    maxWidth: "120px",
    minWidth: "35%",
    color: "white",
  },
  selectDocumentStyleIdNumber: {
    maxWidth: "120px",
    minWidth: "40%",
  },
  classesLabelText: {
    color: "white",
  },
  classesLabelTextIdType: {
    backgroundColor: "#000000",
    margin: "0 !important",
    maxWidth: "30%",
    borderRadius: "5px",
  },
  classesLabelTextIdNumber: {
    backgroundColor: "#000000",
    margin: "0 !important",
    maxWidth: "100%",
    borderRadius: "5px",
  },
  inputReadOnly: {
    backgroundColor: "#000000",
    margin: "2px 0px !important",
    borderRadius: "5px",
    width: "35%",
  },
  transferItem: {
    "&:hover": {
      backgroundColor: "#7474763d",
    },
  },
}));

export default useStyles;
