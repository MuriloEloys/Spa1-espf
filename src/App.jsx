import Cabecalho from "./components/cabecalho"
import Conteudo from "./components/Conteudo"
import Rodape from "./components/Rodape"
import viteLogo from "./assets/vite.svg"

export default function App(){

  let viteLogoAlt = "Vite Logo"

  return(
    <>
    <h1>App - Componente principal</h1>
    <div>

    <Cabecalho/>

    <Conteudo viteLogoProps={viteLogo} viteLogoAlt={viteLogoAlt}/>

    <Rodape/>
    </div>
    </>
  )
}