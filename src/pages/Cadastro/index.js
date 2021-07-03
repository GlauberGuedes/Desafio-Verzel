import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import useStyles from "./style";
import { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Loading from "../../components/Loading";
import { useForm } from "react-hook-form";
import Alert from '@material-ui/lab/Alert';
import { validarCadastro } from '../../utils/validacao';
import useAuth from "../../hooks/useAuth";

export default function Cadastro() {
  const classes = useStyles();
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [visivel, setVisivel] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  const [erro, setErro] = useState('');
  const { token } = useAuth();

  useEffect(() => {
    if(token) {
      history.push('/home');
    }
  }, [])

  const handleClickShowPassword = () => {
    setVisivel(!visivel);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function onSubmit(data) {
    setErro('');
    const cadastroValidado = validarCadastro(data);
    
    if(cadastroValidado) {
      return setErro(cadastroValidado);
    }
    
    setOpenLoading(true);

    const dados = {
      nome: data.nome,
      email: data.email,
      senha: data.senha
    }
    try{
      const resposta = await fetch('https://desafioverzel-api.herokuapp.com/cadastro', {
        method: 'POST',
        body: JSON.stringify(dados),
        headers: {
          'Content-type': 'application/json'
        }
      });

      const informacoesApi = await resposta.json();
      
      setOpenLoading(false);
      if(!resposta.ok) {
        return setErro(informacoesApi);
      }

      history.push('/');
    }catch(error) {
      setOpenLoading(false);
      setErro(error.message);
    }
  }

  return (
    <div className={classes.cadastro}>
      <Loading open={openLoading} />
      <Typography variant="h3" component="h2" className={classes.tituloCadastro}>
        Fazer cadastro
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={classes.input}
          id="nome"
          label="Seu nome"
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
        <TextField
          className={classes.input}
          id="email"
          label="E-mail"
          {...register("email")}
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
        <FormControl className={classes.input}>
          <InputLabel shrink={true} classes= {{root: classes.cssLabel}} htmlFor="senha">
            Senha
          </InputLabel>
          <Input
            classes= {{root: classes.cssLabel}}
            id="senha"
            {...register("senha")}
            type={visivel ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  className={classes.cssLabel}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {visivel ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.input}>
          <InputLabel shrink={true} classes= {{root: classes.cssLabel}} htmlFor="senha-repetida">
            Repita a senha
          </InputLabel>
          <Input
            classes= {{root: classes.cssLabel}}
            id="senha-repetida"
            {...register("senhaRepetida")}
            type={visivel ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  className={classes.cssLabel}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {visivel ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {erro && <Alert severity="error">{erro}</Alert>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          CRIAR CONTA
        </Button>
        <Typography variant="body2" component="p">
          Já possui uma conta? <NavLink className={classes.link} to="/login">ACESSE</NavLink>
        </Typography>
      </form>
      <Loading open={openLoading}/>
    </div>
  );
}