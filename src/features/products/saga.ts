import { takeLatest, delay, put } from "redux-saga/effects";
import { withLoading } from "../loading/saga";
import { productActions } from "./reducer";

function* fetchItemsSaga() {
  yield delay(3000);
  yield put(productActions.addProduct({ title: "new item" }));
}

export function* itemsSaga() {
  yield takeLatest(
    productActions.fetchProducts.toString(),
    withLoading("items", fetchItemsSaga)
  );
}