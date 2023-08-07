import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavState = {
  items: Produto[]
}

const initialState: FavState = {
  items: []
}

const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    favAdd: (state, action: PayloadAction<Produto>) => {
      const produto = state.items.find((item) => item.id === action.payload.id)

      if (!produto) {
        state.items.push(action.payload)
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        )
      }
    }
  }
})

export const { favAdd } = favSlice.actions
export default favSlice.reducer
