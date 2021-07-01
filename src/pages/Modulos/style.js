import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    background: "#1c0c3f",
    minHeight: "100vh",
  },
  modulos: {
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    padding: "78px 0 25px 212px",
    height: "100vh",
    justifyContent: "space-between",
  },
  button: {  
    width: 200,
    backgroundColor: "#007DFF",
  },
  subtitulo: { 
    color: "white",
  },
  listaCards: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    width: 201,
    minHeight: 70,
    borderRadius: 24,
    border: '1px solid rgb(67, 51, 118)',
    color: 'rgb(59, 212, 45)',
    background: "rgb(36, 18, 75)",
    cursor: 'pointer',
  },
  conteudoModulo: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  divider: {
    backgroundColor: "rgb(37, 203, 211)"
  },
  icone: {
    marginLeft: 'auto',
  }
}));

export default useStyles;