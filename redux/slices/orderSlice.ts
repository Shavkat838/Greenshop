import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";



type StateType={
    saveLoading:boolean,
    saveError:null,
    formdata:{
       firstname:string,
       lastname:string,
       country:string,
       city:string,
       description:string,
       email:string;
       phone:string
    }
    updateLoading:boolean;
    updateError:null;
}
const initialState:StateType={
    saveLoading:false,
    saveError:null,
    formdata:{
         city:"",
         country:'',
         description:"",
         email:"",
         firstname:"",
         lastname:"",
         phone:""
    },
    updateError:null,
    updateLoading:false
}

const orderSlice=createSlice({name:"orders",
    initialState,
    reducers:{
        // save orders
       saveOrdersStart:(state)=>{
           state.saveLoading=true
       },
       saveOrdersSuccess:(state)=>{
            state.saveLoading=false;
            state.saveError=null
            toast.success("Xaridingiz uchun rahmat. Tez orada tayyor boladi!")
       },
       saveOrderError:(state,action)=>{
          state.saveLoading=false
          state.saveError=action.payload
       },

    //    getformdata
    getFormData:(state,action)=>{
        state.formdata={...state.formdata,[action.payload.key]:action.payload.value}
    },
    resetFormdata:(state)=>{
        state.formdata=initialState.formdata;
    },

    // update order 
    updateOrderStart:(state)=>{
         state.updateLoading=true
    },
    updateOrderSuccess:(state)=>{
        state.updateLoading=false
        state.updateError=null
    },
    updateOrderError:(state,action)=>{
        state.updateError=action.payload
        state.updateLoading=false
    }
    }
})



export default  orderSlice.reducer
export const  {saveOrderError,saveOrdersStart, updateOrderError, updateOrderStart,updateOrderSuccess ,saveOrdersSuccess,getFormData,resetFormdata}=orderSlice.actions