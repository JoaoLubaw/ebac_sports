import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import { useDispatch } from 'react-redux'
import Produto from '../components/Produto'
import { cartAdd } from '../store/reducers/cart'
import { favAdd } from '../store/reducers/favs'

import * as S from './styles'
import { RootReducer } from '../store'

type Props = {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
}

const ProdutosComponent = ({ produtos, favoritos }: Props) => {
  const dispatch = useDispatch()

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)
    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            favoritar={() => dispatch(favAdd(produto))}
            aoComprar={() => dispatch(cartAdd(produto))}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
