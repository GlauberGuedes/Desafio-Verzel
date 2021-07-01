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


export default function HomeAdm() {
  const classes = useStyles();
  const history = useHistory();
  const { token } = useAuth();
  const [erro, setErro] = useState("");
  const [openLoading, setOpenLoading] = useState(false);
  const [modulos, setModulos] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  async function getProducts() {
    setErro("");
    setOpenLoading(true);
    try {
      const resposta = await fetch("http://localhost:8000/modulos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await resposta.json();
      setOpenLoading(false);

      setModulos(data);
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
          Seus módulos
        </Typography>
        <div className={classes.listaCards}>
          {modulos.map((modulo) => {
            return (
              <div className={classes.card} key={modulo.id} onClick={() => history.push(`./modulos/${modulo.id}/editar`)}>
                <div className={classes.icone}>
                <ModalDelete id={modulo.id} setErro={setErro} setOpenLoading={setOpenLoading} token={token} getProducts={getProducts}/>
                </div>
                <div className={classes.conteudoModulo}>
                  <h3>{modulo.nome}</h3>
                  <h4>02 Aulas</h4>
                </div>
              </div>
            );
          })}
        </div>
        <Divider className={classes.divider}/>
        <Button
          onClick={() => history.push(`/modulos/novo`)}
          variant="contained"
          color="primary"
          className={classes.button}
        >
          ADICIONAR MÓDULO
        </Button>
      </div>
      <Loading open={openLoading} />
      <SnackbarAlert erro={erro}/>
    </div>
  )
}