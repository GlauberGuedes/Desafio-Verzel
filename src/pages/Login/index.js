import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import FormControl from "@material-ui/core/FormControl";
import useStyles from "./style";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useForm } from "react-hook-form";
import Loading from "../../components/Loading";
import Alert from "@material-ui/lab/Alert";
import { validarLogin } from "../../utils/validacao";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const [visivel, setVisivel] = useState(false);
  const [openLoading, setOpenLoading] = useState(false);
  const [erro, setErro] = useState("");
  const { setToken } = useAuth();
  //const history = useHistory();

  // useEffect(() => {
  //   if(token) {
  //     history.push('/produtos');
  //   }
  // }, [])

  const handleClickShowPassword = () => {
    setVisivel(!visivel);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  async function onSubmit(data) {
    setErro("");
    const loginValidado = validarLogin(data);

    if (loginValidado) {
      return setErro(loginValidado);
    }
    setOpenLoading(true);
    try {
      const resposta = await fetch("http://localhost:8000/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      });

      const dados = await resposta.json();

      setOpenLoading(false);
      if (!resposta.ok) {
        return setErro(dados);
      }
      setToken(dados.token);
      console.log(dados)

    } catch (error) {
      setOpenLoading(false);
      return setErro(error.message);
    }
  }

  return (
    <div className={classes.login}>
      <Typography variant="h3" component="h2" className={classes.tituloLogin}>
        Fazer login
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
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
          <InputLabel shrink={true} classes= {{root: classes.cssLabel}} htmlFor="standard-adornment-password">
            Senha
          </InputLabel>
          <Input
            classes= {{root: classes.cssLabel}}
            id="standard-adornment-password"
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
        {erro && <Alert severity="error">{erro}</Alert>}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Entrar
        </Button>
        <Typography variant="body2" component="p">
        Ainda não tem uma conta? <NavLink className={classes.link} to="/cadastro">Cadastre-se</NavLink>
        </Typography>
      </form>
      <Loading open={openLoading} />
    </div>
  );
}