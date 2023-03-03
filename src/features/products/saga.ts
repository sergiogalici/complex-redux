import { takeLatest, delay, put } from "redux-saga/effects";
import { withLoading } from "../loading/saga";
import { productActions } from "./reducer";

function* fetchProductsSaga() {
  yield delay(3000);
  console.log("we are in fetch products")
  yield put(productActions.addProduct({ title: "new item" }));
}

export function* itemsSaga() {
  yield takeLatest(
    productActions.fetchProducts.toString(),
    withLoading("items", fetchProductsSaga)
  );
}