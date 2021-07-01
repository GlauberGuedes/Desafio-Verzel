import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container:{
    width: 'min-content',
  },
  deleteIcon: {
    color: "black",
    zIndex: 2,
  },
  botoes: {
    display: "flex",
    justifyContent: "space-between",
    gap: 10,
    padding: 20,
    marginTop: 20,
  },
}));

export default useStyles;