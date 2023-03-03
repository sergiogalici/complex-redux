import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const createFiltersSelector = (reducerName: keyof Omit<RootState, "carts">) => ({
    selectFilters: createSelector(
        (state: RootState) => state[reducerName].filters,
        (filters) => filters.selected
    ),
    selectAllSelected: createSelector(
        (state: RootState) => state[reducerName].filters,
        (filters) => filters.allSelected
    )
})

export const productsFiltersSelector = createFiltersSelector("products")
export const usersFiltersSelector = createFiltersSelector("users")