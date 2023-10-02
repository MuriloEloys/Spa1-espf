import React from 'react'
import { useParams } from 'react-router-dom'
import { ListaProduto } from '../components/ListaProdutos';


export default function ExcluirProdutos() {

    const {id} = useParams();

    document.title = "Excluir Produtos " + id;

    const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id))[0];


  return (
    <div>
        <button onClick={id=1}>Escolha o produto 1</button>
        <button onClick={id=2}>Escolha o produto 2</button>
        <button onClick={id=3}>Escolha o produto 3</button>
        <h1>Excluir Produtos</h1>
        <h2>Produto selecinado : {id}</h2>
        <h2>Poduto nome : {produtoRecuperadoPorId.nome}
        </h2>
        <h2>Poduto descrição : {produtoRecuperadoPorId.desc}
        </h2>
        <h2>Produto preço : {produtoRecuperadoPorId.preco}
        </h2>
        <div>
          <form >
            <fieldset>
                <button onClick={ListaProduto.pop=id}>Excluir Produtos</button>
            </fieldset>
          </form>
        </div>
        
    </div>
  )
}