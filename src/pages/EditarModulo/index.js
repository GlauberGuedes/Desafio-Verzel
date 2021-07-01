import Navbar from "../../components/Navbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { NavLink,useParams, useHistory } from "react-router-dom";
import useStyles from "./style";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Loading from "../../components/Loading";
import SnackbarAlert from "../../components/SnackbarAlert";


export default function EditarProduto() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const { token } = useAuth();
  const [erro, setErro] = useState('');
  const [openLoading, setOpenLoading] = useState(false);
  const { id } = useParams();
  const history = useHistory();


  async function onSubmit(data) {
    setErro('');
    
    try{
      setOpenLoading(true);
      const resposta = await fetch(`http://localhost:8000/modulos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-type': 'application/json',
        }
      });

      const resultado = await resposta.json();
      setOpenLoading(false);

      if(!resposta.ok) {
        return setErro(resultado);
      }

      history.push('/produtos');

    }catch(error) {
      setOpenLoading(false);
      return setErro(error.message)
    }
  }

  return (
    <div className={classes.body}>
      <Navbar />
      <form className={classes.modulos} onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h4" component="h2" className={classes.subtitulo}>
          Editar módulo
        </Typography>
        <div className={classes.containerEditar}>
            <TextField
              className={classes.input}
              id="nome"
              label="Nome do produto"
              {...register("nome")}
              InputLabelProps={{
                shrink: true,
              }}
            />
        </div>
        <Divider />
        <div className={classes.botoes}>
          <NavLink className={classes.cor} to="/produtos">
            CANCELAR
          </NavLink>
          <Button
            type="submit"
            className={classes.background}
            variant="contained"
            color="primary"
          >
            SALVAR ALTERAÇÕES
          </Button>
        </div>
      </form>
      <Loading open={openLoading} />
      <SnackbarAlert erro={erro}/>
    </div>
  );
}