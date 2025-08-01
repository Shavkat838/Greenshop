import { Users } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";



type StateType={
   visible:boolean;
   saveLoading:boolean;
   loginvisible:boolean
   saveError:null
   localId:number;
   getLoading:boolean;
   getError:null;
   editLoading:boolean
   editError:null,
}





const initialState:StateType={
    visible:false,
    loginvisible:false,
    saveLoading:false,
    saveError:null,
    localId:0,
    getLoading:false,
    getError:null,
    editLoading:false,
    editError:null,
}


const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        // Rodal visible
        setVisible:(state,action)=>{
           state.visible=action.payload;
        },
        setloginVisible:(state,action)=>{
            state.loginvisible=action.payload
        },
        // get localstorageId
        getId:(state)=>{
          if(localStorage.getItem("id")){
            state.localId=parseInt(localStorage.getItem("id")!)
          }else{
            state.localId=0;
          }
        },
        // save User
        saveUserStart:(state)=>{
         state.saveLoading=true
        },
        saveUserSuccess:(state,action)=>{
           localStorage.setItem("id",action.payload)
           state.localId=action.payload;
           state.saveLoading=false,
           state.saveError=null
        },
        saveUserError:(state,action)=>{
            state.saveError=action.payload
            state.saveLoading=false
        },
        // login

        getUserstart:(state)=>{
            state.getLoading=true
        },
        getUsersSuccess:(state,action)=>{
           localStorage.setItem("id",action.payload)
           state.localId=action.payload;
           state.getLoading=false;
           state.getError=null;
        },
        getUsersError:(state,action)=>{
           state.getLoading=false
           state.getError=action.payload
        },
        editUserStart:(state)=>{
           state.editLoading=true
        },
        editUersuccess:(state)=>{
            state.editLoading=false;
            state.editError=null
        },
        editUserError:(state,action)=>{
            state.editLoading=false
            state.editError=action.payload;
        }
    }
})


export default userSlice.reducer;
export const  {setVisible,saveUserError,saveUserStart,editUersuccess, editUserError, editUserStart,saveUserSuccess,setloginVisible,getId,getUsersError, getUsersSuccess,getUserstart}=userSlice.actions;