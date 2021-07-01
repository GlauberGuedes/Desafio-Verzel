import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 50,
    marginTop: 100,
  },
  appbar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1c0c3f",
    borderRadius: "0px 0px 32px 0px",
    border: "1px solid rgb(37, 203, 211)",
    width: 138,
    minHeight: "100vh",
    left: 0,
  },
  close: {
    all: "unset",
    cursor: "pointer",
  },
  cursor: {
    cursor: "pointer",
    color: "white"
  },
}));

export default useStyles;