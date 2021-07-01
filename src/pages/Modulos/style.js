import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  body: {
    background: "#1c0c3f",
    minHeight: "100vh",
  },
  produtos: {
    padding: "78px 0 25px 212px",
  },
  button: {
    marginTop: 58,
    width: 200,
    backgroundColor: "#007DFF",
  },
  subtitulo: {
    marginBottom: 37,
    color: "white",
  },
  listaCards: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: 201,
    minHeight: 70,
    marginBottom: 13,
    borderRadius: 24,
    border: '1px solid rgb(67, 51, 118)',
    color: 'rgb(59, 212, 45)',
    background: "rgb(36, 18, 75)",
  },
  
}));

export default useStyles;