import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cadastro: {
    placeContent: "center",
    minHeight: "100vh",
    background: "#1c0c3f",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },
  tituloCadastro: {
    color: "rgb(37, 203, 211)"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    maxWidth: 392,
    maxHeight: 851,
    padding: "80px 86px 88px 86px",
    border: "1px solid rgb(37, 203, 211)",
    borderRadius: 16,
    boxShadow:
      "0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)",
  },
  titulo: {
    marginBottom: 88,
  },
  input: {
    marginBottom: 40,
    width: "100%",
  },
  button: {
    marginBottom: 24,
    width: 136,
  },
  link: {
    color: "green"
  },
  cssLabel: {
    color: "white"
  }
}));

export default useStyles;