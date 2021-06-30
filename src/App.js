import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
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
            
          </RotasProtegidas>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
