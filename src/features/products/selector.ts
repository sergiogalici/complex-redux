import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectUsers = (state: RootState) => state.products

export const selectAllProducts = createSelector(selectUsers, ({ allProducts }) => allProducts)