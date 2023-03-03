import { FiltersState } from "./model"
import { createSlice, PayloadAction, SliceCaseReducers, ValidateSliceCaseReducers } from "@reduxjs/toolkit"

const initialFilterState: FiltersState = {
    filters: {
        selected: [],
        allSelected: false
    }
        
}

export const createSliceWithFilters = <
    T, Reducer extends SliceCaseReducers<T & FiltersState>
>({
    name,
    initialState,
    reducers
}: {
    name: string
    initialState: T
    reducers: ValidateSliceCaseReducers<T & FiltersState, Reducer>
}) => {
        return createSlice({
            name,
            initialState: { ...initialState, ...initialFilterState },
            reducers: {
                addToFilters: (state, { payload }: PayloadAction<unknown>) => {
                    state.filters.selected = [...state.filters.selected, payload]
            },
                allSelected: (state, { payload }: PayloadAction<boolean>) => {
                    state.filters.allSelected = payload
            },
            ...reducers
            
        }
    })
}
