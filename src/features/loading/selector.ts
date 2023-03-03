import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selectLoading = ({ loading }: RootState) => loading;

export const makeSelectIsLoading = (key: string) =>
  createSelector(selectLoading, (substate) => substate[key]);

export const selectAreProductsLoading = makeSelectIsLoading("products");