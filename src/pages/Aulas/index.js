import Navbar from "../../components/Navbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import useStyles from "./style";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import ModalDelete from "../../components/ModalDelete";
import { useHistory } from "react-router-dom";
import Loading from "../../components/Loading";
import SnackbarAlert from "../../components/SnackbarAlert";


export default function Aulas() {
  const classes = useStyles();
  const history = useHistory();
  const { token } = useAuth();
  const [erro, setErro] = useState("");
  const [openLoading, setOpenLoading] = useState(false);
  const [aulas, setAulas] = useState([]);

  useEffect(() => {
    getAulas();
  }, []);

  async function getAulas() {
    setErro("");
    setOpenLoading(true);
    try {
      const resposta = await fetch("https://desafioverzel-api.herokuapp.com/aulas");

      const data = await resposta.json();
      setOpenLoading(false);

      setAulas(data);
    } catch (error) {
      setOpenLoading(false);
      return setErro(error.message);
    }
  }
  
  return (
    <div className={classes.body}>
      <Navbar />
      <div className={classes.modulos}>
        <Typography variant="h4" component="h2" className={classes.subtitulo}>
          Suas aulas
        </Typography>
        <div className={classes.listaCards}>
          {aulas.map((aula) => {
            return (
              <div className={classes.card} key={aula.id} onClick={() => history.push(`./aulas/${aula.id}/editar`)}>
                <div className={classes.icone}>
                <ModalDelete id={aula.id} setErro={setErro} setOpenLoading={setOpenLoading} token={token} get={getAulas} nome='aulas'/>
                </div>
                  <h3>{aula.nome}</h3>
                  <h4 className={classes.data}>
                    {new Date(aula.data).toLocaleString(undefined, {year:'numeric', month:'numeric', day: 'numeric'})} 
                    {" "}às{" "} 
                    {new Date(aula.data).toLocaleString(undefined, {hour: 'numeric', minute: 'numeric'})}
                    </h4> 
                  <p style={{color: 'white'}}>Módulo: {aula.modulo}</p>              
              </div>
            );
          })}
        </div>
        <Divider className={classes.divider}/>
        <Button
          onClick={() => history.push(`/aulas/novo`)}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          ADICIONAR AULA
        </Button>
      </div>
      <Loading open={openLoading} />
      <SnackbarAlert erro={erro}/>
    </div>
  )
}