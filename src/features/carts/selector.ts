import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectCarts = (state: RootState) => state.carts

export const selectAllCarts = createSelector(selectCarts, ({ carts }) => carts)

export const makeSelectCartByUsername = (username: string) => createSelector(selectAllCarts, (carts) => {
    return carts.find(cart => cart.owner.name === username)
})