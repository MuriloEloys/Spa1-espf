import Cabecalho from "./components/cabecalho"
import Conteudo from "./components/Conteudo"
import Rodape from "./components/Rodape"

export default function App(){

  return(
    <>
    <h1>App - Componente principal</h1>
    <div>

    <Cabecalho/>

    <Conteudo/>

    <Rodape/>
    </div>
    </>
  )
}