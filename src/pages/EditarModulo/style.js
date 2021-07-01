import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    background: "#EEEEEE",
  },
  modulos: {
    padding: "78px 0 25px 212px",
  },
  subtitulo: {
    marginBottom: 57,
  },
  containerEditar: {
    display: "flex",
    gap: 166,
    marginBottom: 48,
  },
  input: {
    marginBottom: 48,
    width: 392,
  },
  botoes: {
    display: "flex",
    gap: 24,
    alignItems: "center",
    marginTop: 41,
  },
  cor: {
    color: "#007DFF",
  },
  background: {
    backgroundColor: "#007DFF",
  },
}));

export default useStyles;