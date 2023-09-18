import Cabecalho from "./components/cabecalho"
import Conteudo from "./components/Conteudo"
import Rodape from "./components/Rodape"
import viteLogo from "./assets/vite.svg"
import style from "./App.module.css";
import { Outlet } from "react-router-dom";

export default function App(){

  let viteLogoAlt = "Vite Logo"

  return(
    <>
      <h1 className={style.titulo}>App - Componente principal</h1>
      <div className={style.container}>

        <Cabecalho/>

        <Outlet/>

        <Rodape/>
      </div>
    </>
  )
}