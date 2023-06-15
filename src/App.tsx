import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  // function favoritar(produto: Produto) {
  //   if (favoritos.find((p) => p.id === produto.id)) {
  //     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
  //     setFavoritos(favoritosSemProduto)
  //   } else {
  //     setFavoritos([...favoritos, produto])
  //   }
  // }

  // function adicionarAoCarrinho() {
  //   console.log('teste')
  // }
  // function favoritar() {
  //   console.log('testeFavoritos')
  // }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
        // produtos={produtos}
        // favoritos={favoritos}
        // favoritar={favoritar}
        // adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </Provider>
  )
}

export default App
