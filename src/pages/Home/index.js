import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import SnackbarAlert from "../../components/SnackbarAlert";
import useAuth from "../../hooks/useAuth";
import "./style.css";

export default function Home() {
  const [modulos, setModulos] = useState([]);
  const [aulas, setAulas] = useState([]);
  const [erro, setErro] = useState("");
  const [openLoading, setOpenLoading] = useState(false);
  const [nomeModulo, setNomeModulo] = useState("");
  const { token } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if(token) {
      history.push('/home');
    }
  }, [])

  useEffect(() => {
    getModulos();
  }, []);

  async function getModulos() {
    setErro("");
    setOpenLoading(true);
    try {
      const resposta = await fetch("https://desafioverzel-api.herokuapp.com/modulos");

      const data = await resposta.json();
      setOpenLoading(false);

      setModulos(data);
    } catch (error) {
      setOpenLoading(false);
      return setErro(error.message);
    }
  }

  async function getAulas(nome) {
    setNomeModulo(nome);
    setErro("");
    setOpenLoading(true);
    try {
      const resposta = await fetch(`https://desafioverzel-api.herokuapp.com/aulas?modulo=${nome}`);

      const data = await resposta.json();
      setOpenLoading(false);

      setAulas(data);
    } catch (error) {
      setOpenLoading(false);
      return setErro(error.message);
    }
  }

  return (
    <div className="container">
      <div className="header">
        <h3>Desafio</h3>
        <nav>
          <Link className="link" to="/login">
            ENTRAR
          </Link>
          <Link className="link" to="/Cadastro">
            CADASTRE-SE
          </Link>
        </nav>
      </div>
      <div className="modulos">
        <h2>Módulos</h2>
        <p>Selecione o módulo para ver as aulas disponíveis:</p>
        <div className="listaModulos">
          {modulos.map((modulo) => {
            return (
              <button className={modulo.aulas.length === 0 ? "modulo-default" : "card-modulo"} onClick={() => getAulas(modulo.nome)}>
                <p>{modulo.nome}</p>
                {modulo.aulas.length > 0 ? (
                  <p>
                    {modulo.aulas.length}{" "}
                    {modulo.aulas.length > 1 ? "aulas" : "aula"}
                  </p>
                ) : (
                  ""
                )}
              </button>
            );
          })}
        </div>
        {nomeModulo && 
        <div className= "aulas">
          <h2>{nomeModulo}</h2>
          <p className= "aulas-p">Todas as aulas disponíveis nesse módulo:</p>
          <div className="lista-aulas">
            {aulas.map(aula => {
              return (
                <div className="card-aula">
                  <h4>{aula.nome}</h4>
                  <h5 className="data">
                    {new Date(aula.data).toLocaleString(undefined, {year:'numeric', month:'numeric', day: 'numeric'})} 
                    {" "}às{" "} 
                    {new Date(aula.data).toLocaleTimeString(undefined, {hour: 'numeric', minute: 'numeric'})}
                    </h5> 
                  <p style={{color: 'white'}}>Módulo: {aula.modulo}</p>
                </div>
              )
            })}
          </div>
        </div>}
      </div>
      <Loading open={openLoading} />
      <SnackbarAlert erro={erro} />
    </div>
  );
}
