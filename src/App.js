import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import HomeAdm from "./pages/HomeAdm";
import Modulos from "./pages/Modulos";
import EditarModulo from "./pages/EditarModulo";
import CriarModulo from "./pages/CriarModulo";
import CriarAula from "./pages/CriarAula";
import EditarAula from "./pages/EditarAula";
import Aulas from "./pages/Aulas";
import useAuth from "./hooks/useAuth";

function App() {
  function RotasProtegidas(props) {
    const { token } = useAuth();
    return (
      <Route render={() => (token ? props.children : <Redirect to="/" />)} />
    );
  }

  return (
    <AuthContextProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <RotasProtegidas>
          <Route path="/home" component={HomeAdm} />
          <Route path="/modulos" exact component={Modulos} />
          <Route path="/modulos/:id/editar" component={EditarModulo} />
          <Route path="/modulos/novo" component={CriarModulo} />
          <Route path="/aulas" exact component={Aulas} />
          <Route path="/aulas/novo" component={CriarAula} />
          <Route path="/aulas/:id/editar" component={EditarAula} />
          </RotasProtegidas>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
