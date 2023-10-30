import { Link, useLocation } from "react-router-dom";
import "./Cabecalho.scss";

export default function Cabecalho() {
const rotaAtual = useLocation();

  return (
    <>
      <header className="cabecalho">
        <h1>Vite+React coded by - RM552117</h1>
        <nav>
          <ul>
            <li><Link to="/" className={rotaAtual.pathname == "/" ? "active" : ""}>Home</Link> </li>
            <li><Link to="/produtos" className={rotaAtual.pathname == "/produtos" ? "active" : ""}>Produtos</Link> </li>
            <li><Link to="/editar/produtos/1">Editar Produtos</Link> </li>
            <li><Link to="/login" className={rotaAtual.pathname == "/login" ? "active" : ""}>Login</Link> </li>
            {/* <li><Link to="/excluir">Excluir Produtos</Link></li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}
