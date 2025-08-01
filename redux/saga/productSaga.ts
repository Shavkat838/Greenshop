import { Products } from "@prisma/client";
import axios from "axios";
import {  put, takeEvery } from "redux-saga/effects";
import { deleteProductError, deleteProductStart, deleteProductSuccess, editProductError, editProductStart, editProductSuccess, saveProductError, saveProductStart, saveProductSuccess } from "../slices/productSlice";




interface SaveActionType{
    type:string,
    payload:Products
}


interface DeleteActionType{
   type:string
   payload:number;
}

interface EditActionType{
    type:string;
    payload:Products

}

function* workProductSave(action:SaveActionType){

try {
    yield put(saveProductStart());
    yield axios.post("api/products",action.payload)
    yield put(saveProductSuccess());
} catch (error) {
    yield put(saveProductError(error)); 
}
}



function* workPoductDelete(action:DeleteActionType){
    try {
        yield put(deleteProductStart())
        yield axios.delete(`api/products/${action.payload}`)
        yield put(deleteProductSuccess())
    } catch (error) {
        yield put(deleteProductError(error+""))        
    }
}



function* workPoductUpdate(action:EditActionType){
  try {
    yield put(editProductStart())
    yield axios.put(`api/products/${action.payload.id}`,action.payload)
    yield put(editProductSuccess())
  } catch (error) {
    yield put(editProductError(error))
  }
}

export function* productSaga(){
    yield takeEvery("PRODUCT/SAVE",workProductSave)
    yield takeEvery("PRODUCT/DELETE",workPoductDelete)
    yield takeEvery("PRODUCT/EDIT",workPoductUpdate)
}