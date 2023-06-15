import { RootReducer } from '../store'
import { useSelector } from 'react-redux'
import { useGetProdutosQuery } from '../services/api'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import * as S from './styles'

// type Props = {
//   produtos: ProdutoType[]
//   favoritos: ProdutoType[]
//   favoritar: (produto: ProdutoType) => void
// }

const ProdutosComponent = () => {
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)
  const { data: produtos, isLoading } = useGetProdutosQuery()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            // favoritar={favoritar}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
