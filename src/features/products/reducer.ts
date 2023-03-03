import { ProductsState, ProductType } from "./model";
import { PayloadAction, createAction } from "@reduxjs/toolkit"
import { createSliceWithFilters } from "../filters/reducer";

const initialState: ProductsState = { allProducts: [] }

const productsSlice = createSliceWithFilters({
    name: "products",
    initialState,
    reducers: {
        addProduct: (state, {payload}: PayloadAction<ProductType>) => {
            state.allProducts = [...state.allProducts, payload]
        }
    }
})

export const productActions = {
    ...productsSlice.actions,
    fetchProducts: createAction("products/fetchProducts")
}

export const productsReducer = productsSlice.reducer