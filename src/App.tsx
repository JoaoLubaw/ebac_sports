import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { RootReducer } from './store'
import { useSelector } from 'react-redux'
import { useGetProdutosQuery } from './services/api'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const cartItems = useSelector((state: RootReducer) => state.cart.items)
  const favItems = useSelector((state: RootReducer) => state.fav.items)
  const ProductsItems = useGetProdutosQuery()
  const products = ProductsItems.data ?? []

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favItems} itensNoCarrinho={cartItems} />
        <Produtos produtos={products} favoritos={favItems} />
      </div>
    </>
  )
}

export default App
