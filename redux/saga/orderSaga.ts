import { put, takeEvery } from "redux-saga/effects";
import { saveOrderError, saveOrdersStart, saveOrdersSuccess, updateOrderError, updateOrderStart, updateOrderSuccess } from "../slices/orderSlice";
import axios from "axios";
import { Orders } from "@prisma/client";

type SaveActionType={
    type:string,
    payload:Orders
}

type UpdateActionType = {
  type: string;
  payload: Orders;
};




function* workSaveOrder(action:SaveActionType){
    try {
          yield put(saveOrdersStart())
          const orders:Orders=yield axios.post('/api/orders',action.payload)
          if(!orders){
            alert("nomalum xatolik")
            return
          }
          yield put(saveOrdersSuccess())
    } catch (error) {
        yield put(saveOrderError(error+""))
    }
}


function* workEditOrder(action:UpdateActionType){
    try {
        yield put(updateOrderStart())
       const orders:Orders=yield axios.put(`/api/orders/${action.payload.id}`,action.payload)
       if(!orders){
        alert("Nomalum xatolik")
        return
       }
       yield put(updateOrderSuccess())
    } catch (error) {
        yield put(updateOrderError(error+""))
    }
}



export function* orderSaga(){
    yield  takeEvery("SAVE/ORDER",workSaveOrder)
    yield  takeEvery("EDIT/ORDER",workEditOrder)
}