import { put, takeEvery } from "redux-saga/effects";
import { editUersuccess, editUserError, editUserStart, getUsersError, getUsersSuccess, getUserstart, saveUserStart, saveUserSuccess } from "../slices/userSlice";
import axios  from "axios";
import { saveProductError } from "../slices/productSlice";
import { toast } from "react-toastify";
 


type Users = {
  data: {
    id: number;
    lastname: string;
    firstname: string;
    username: string;
    phone: string;
    photo: string;
    email: string;
    password: string;
    role:string;
  };
};



interface SaveActiontype {
  type: string;
  payload: {
    id:number;
    lastname: string;
    firstname: string;
    username: string;
    phone: string;
    photo: string;
    email: string;
    password: string;
  };
}

interface GetActionType{
  type:string;
  payload:{
    password:string;
    email:string
  };
}

function* workSaveUser(action: SaveActiontype) {
  try {
    yield put(saveUserStart());
    const users:Users=yield axios.post("/api/users", action.payload);
    if(!users){
      return 
    }
    yield put(saveUserSuccess(users.data));
  } catch (error: unknown) {
    yield put(saveProductError(error));
  }
}


function* workFetchUser(action:GetActionType){
try {
  yield put(getUserstart())
  const users:Users=yield axios.get(`/api/users?email=${action.payload.email}`)
  if(!users){
    toast.error("Siz hali ro`yxatdan otmagansiz")
    return
  }
  if(users.data.password!==action.payload.password){
    toast.error("Kiritgan email yoki parol xato")  
    return
  }
  yield put(getUsersSuccess(users.data.id))
} catch (error:any) {
  if(error.response.status===404){
        toast.error("Siz hali ro`yxatdan otmagansiz");
        return;
  }
  yield put(getUsersError(error))
}
}


function* workPutUser(action:SaveActiontype){
try {
  yield put(editUserStart())
  yield axios.put(`/api/users/${action.payload.id}`,action.payload)
  yield put(editUersuccess())
} catch (error) {
  yield put(editUserError(error+""))
}
}

export function* userSaga(){
    yield takeEvery("SAVE/USER",workSaveUser)
    yield takeEvery("GET/USER",workFetchUser)
    yield takeEvery("EDIT/USER",workPutUser)
}