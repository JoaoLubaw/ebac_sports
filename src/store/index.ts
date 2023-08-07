import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cart'
import favReducer from './reducers/favs'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
