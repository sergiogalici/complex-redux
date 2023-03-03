import { configureStore } from '@reduxjs/toolkit'
import { cartsReducer } from './carts/reducer'
import { loadingReducer } from './loading/reducer'
import { productsReducer } from './products/reducer'
import { usersReducer } from './users/reducer'

const rootReducer = {
    users: usersReducer,
    products: productsReducer,
    carts: cartsReducer,
    loading: loadingReducer
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
  })

export type RootState = ReturnType<typeof store.getState>