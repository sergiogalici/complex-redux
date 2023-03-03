import { UsersState, UserType } from "./model";
import { PayloadAction } from "@reduxjs/toolkit"
import { createSliceWithFilters } from "../filters/reducer";

const initialState: UsersState = { allUsers: [] }

const usersSlice = createSliceWithFilters({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, {payload}: PayloadAction<UserType>) => {
            state.allUsers = [...state.allUsers, payload]
        }
    }
})

export const userActions = {
    ...usersSlice.actions
}

export const usersReducer = usersSlice.reducer