import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CartState = {
  items: Produto[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartAdd: (state, action: PayloadAction<Produto>) => {
      const produto = state.items.find((item) => item.id === action.payload.id)

      if (!produto) {
        state.items.push(action.payload)
      } else {
        alert('Item já adicionado')
      }
    }
  }
})

export const { cartAdd } = cartSlice.actions
export default cartSlice.reducer
