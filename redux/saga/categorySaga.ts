import { put, takeEvery } from "redux-saga/effects";
import {
  editCategoryError,
  editCategoryStart,
  editCategorySuccess,
} from "../slices/categorySlice";
import axios from "axios";

interface EditCategoryAction {
  type: string;
  payload: {
    id: number;
    title: string;
  };
}

function* workCategoryedit(action: EditCategoryAction) {
  try {
    yield put(editCategoryStart());
    yield axios.put(`api/categories/${action.payload.id}`, action.payload);
    yield put(editCategorySuccess());
  } catch (error) {
    yield put(editCategoryError(error));
  }
}

export function* categorySaga() {
  yield takeEvery("CATEGORY/PUT", workCategoryedit);
}
