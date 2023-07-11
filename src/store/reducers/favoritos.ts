import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type favoritosState = {
  itens: Produto[]
}

const initialState: favoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const produtoExistente = state.itens.find((p) => p.id === produto.id)

      if (produtoExistente) {
        state.itens = state.itens.filter((p) => p.id !== produto.id)
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export interface AppState {
  favoritos: favoritosState
}

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
