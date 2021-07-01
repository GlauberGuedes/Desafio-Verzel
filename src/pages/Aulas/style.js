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
    justifyContent: 'space-between',
    padding: 10,
    width: 201,
    minHeight: 150,
    borderRadius: 24,
    border: '1px solid rgb(67, 51, 118)',
    color: 'rgb(59, 212, 45)',
    background: "rgb(36, 18, 75)",
    cursor: 'pointer',
  },
  divider: {
    backgroundColor: "rgb(37, 203, 211)"
  },
  icone: {
    marginLeft: 'auto',
  },
  data: {
    color: 'rgb(37, 203, 211)',
    border:'1px solid rgb(37, 203, 211)',
    borderRadius: 4,
    padding: 5,
    textAlign: 'center',
    margin: '15px 0 15px 0'
  }
}));

export default useStyles;