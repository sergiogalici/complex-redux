import { createSelector } from '@reduxjs/toolkit'
import { UserType } from './model'
import { RootState } from '../store'

const selectUsers = (state: RootState) => state.users

export const selectAllUsers = createSelector(selectUsers, ({ allUsers }) => allUsers)