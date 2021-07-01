import Navbar from "../../components/Navbar";
import "./style.css";

export default function HomeAdm() {
  return (
    <div className="container">
      <Navbar  />
      <div className="conteudo">
        <h1>Bem vindo!</h1>
        <h3>Área administrativa</h3>
      </div>
    </div>
  )
}