import Navbar from "../../components/Navbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { NavLink, useHistory } from "react-router-dom";
import useStyles from "./style";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Loading from "../../components/Loading";
import SnackbarAlert from "../../components/SnackbarAlert";


export default function CriarModulo() {
  const classes = useStyles();
  const { register, handleSubmit, reset } = useForm();
  const { token } = useAuth();
  const [erro, setErro] = useState('');
  const [openLoading, setOpenLoading] = useState(false);
  const history = useHistory();


  async function onSubmit(data) {
    setErro('');

    if(!data.nome) {
      return setErro('O campo nome é obrigatório.')
    }
    
    try{
      setOpenLoading(true);
      const resposta = await fetch(`https://desafioverzel-api.herokuapp.com/modulos`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json',
        }
      });

      const resultado = await resposta.json();
      setOpenLoading(false);

      if(!resposta.ok) {
        reset({})
        return setErro(resultado);
      }

      history.push('/modulos');

    }catch(error) {
      reset({})
      setOpenLoading(false);
      return setErro(error.message)
    }
  }

  return (
    <div className={classes.body}>
      <Navbar />
      <div className={classes.containerEditar}>
        <Typography variant="h4" component="h2" className={classes.subtitulo}>
          Criar módulo
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              className={classes.input}
              id="nome"
              label="Nome do módulo"
              {...register("nome")}
              InputLabelProps={{
                shrink: true,
                classes: {
                  root: classes.cssLabel,
                }
              }}
              InputProps={{
                classes: {
                  root: classes.cssLabel,
                }
              }}
            />
          <Divider className={classes.divider}/>
          <div className={classes.botoes}>
            <NavLink className={classes.cor} to="/modulos">
              CANCELAR
            </NavLink>
            <Button
              type="submit"
              className={classes.background}
              variant="contained"
              color="primary"
            >
              CRIAR MÓDULO
            </Button>
          </div>
        </form>
      </div>
      <Loading open={openLoading} />
      <SnackbarAlert erro={erro}/>
    </div>
  );
}