import { CartsState, CartType } from "./model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: CartsState = { carts: [] }

const cartsSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductsToCart: (state, {payload}: PayloadAction<CartType>) => {
            const existingCart = state.carts.some((cart) => cart.owner === payload.owner)
            const newCart = { owner: payload.owner, products: payload.products}
            
            state.carts = existingCart 
                ? [
                    ...state.carts.filter(cart => cart.owner !== payload.owner), 
                    newCart
                ]
                : [...state.carts, newCart]
        }
    }
})

export const cartActions = {
    ...cartsSlice.actions
}

export const cartsReducer = cartsSlice.reducer