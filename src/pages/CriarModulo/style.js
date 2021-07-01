import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    background: "#1c0c3f",
    minHeight: "100vh"
  },
  subtitulo: {   
    color: "white"
  },
  containerEditar: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: "78px 0 25px 212px",
    height: "100vh",
    justifyContent: "space-between",
  },
  input: {
    width: 392,
    marginBottom: 200,
  },
  botoes: {
    display: "flex",
    gap: 24,
    alignItems: "center",
    marginTop: 80,
  },
  cor: {
    color: "#007DFF",
  },
  background: {
    backgroundColor: "#007DFF",
  },
  cssLabel: {
    color: "white"
  },
  divider: {
    backgroundColor: "rgb(37, 203, 211)"
  }

}));

export default useStyles;