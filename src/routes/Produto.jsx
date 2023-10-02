import { Link } from "react-router-dom"
import { ListaProduto } from "../components/ListaProdutos";
import style from "./Produtos.module.css";
import {AiTwotoneEdit as Editar} from "react-icons/ai"
import { useEffect, useState } from "react";

export default function Produtos() {
  document.title = "Lista de Produtos";
  const[listaProdutosApi,setListaProdutosApi ] = useState([]);
  useEffect(()=>{
    //Realizando o REQUEST
    fetch("http://localhost:5000/produtos")
    //Recebendo o response e transformando em json
    .then((response)=> response.json())
    //Exibindo os dados no console
    .then((response)=> setListaProdutosApi(response))
    //Exibir caso ocorra alguim erro
    .catch(error=>console.log(error));
    
  },[])

  return (
    <div>
      <h1>Produtos</h1>

      <table className={style.tblEstilo}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>
            <th>EDITAR</th>
          </tr>
        </thead>

        <tbody>
          {ListaProduto.map((item, indice) => (
            <tr key={indice} className={style.lineTbl}>
              <td>{item.id}</td>
              <td>{item.nome}</td>
              <td>{item.desc}</td>
              <td>{item.preco}</td>
              <td><Link to={`/editar/produtos/${item.id}`}><Editar/></Link> </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5}>
              PRODUTOS INFORMÁTICOS - QTD = {ListaProduto.length}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
