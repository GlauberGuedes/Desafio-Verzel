import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useStyles from "./style";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const classes = useStyles();
  const { setToken } = useAuth();

  function deslogar () {
    setToken('');
  }

  return (
    <AppBar position="fixed" className={classes.appbar}>
      <Toolbar className={classes.nav}>
        <NavLink to="/modulos" className={classes.cursor}>Módulos</NavLink>
        <NavLink to="/aulas" className={classes.cursor}>Aulas</NavLink>
        <button className={classes.close} onClick={deslogar}>Sair</button>
      </Toolbar>
    </AppBar>
  );
}