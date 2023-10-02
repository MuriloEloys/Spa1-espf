import { useParams } from 'react-router-dom'
import { ListaProduto } from '../components/ListaProdutos';

export default function EditarProdutos() {

    const {id} = useParams();

    document.title = "Editar Produtos " + id;

    const produtoRecuperadoPorId = ListaProduto.filter(item => item.id == parseInt(id))[0];


  return (
    <div>
        <h1>Editar Produtos</h1>
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
              <legend>Produto Selecionado</legend>
              <div>
                <label htmlFor="">Nome :</label>
                <input type="text" name='nome' placeholder='Digite o nome do Produto.'/>
              </div>
              
              <div>
                <label htmlFor="">Descrição :</label>
                <input type="text" name='desc' placeholder='Digite a descrição do produto.'/>
              </div>
              <div>
                <label htmlFor="">Preço :</label>
                <input type="text" name='preco' placeholder='Digite o preço do produto.'/>
              </div>
              <div>
                <button>EDITAR</button>
              </div>

            </fieldset>
          </form>
        </div>
        
    </div>
  )
}
