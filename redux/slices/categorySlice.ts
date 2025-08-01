import {createSlice} from "@reduxjs/toolkit"
import { setTimeout } from "timers";


interface InitialStateType{
    id:number;
    title:string;
    isLoading:boolean;
    isError:null;
    editingId:number;
    filteredId:number;


}

const initialState:InitialStateType={
    id:0,
    title:"",
    isLoading:false,
    isError:null,
    editingId:-1, 
    filteredId:-1,

}

const categorySlice=createSlice({
    name:"category",
    initialState,
    reducers:{
        //  Input qiymatlarini olish
        setTitle:(state,action)=>{
               state.title=action.payload
        },
        // Qoshgandan song inputni boshatib qoyish
       clearTitle:(state)=>{
            state.title=""
       },
    //    categoriya edit qilish jarayoni
      editCategoryStart:(state)=>{
           state.isLoading=true
      },
      editCategorySuccess:(state)=>{
        state.isLoading=false
        state.editingId=-1
        state.isError=null
      },
      editCategoryError:(state,action)=>{
        state.isLoading=false
        state.isError=action.payload
        state.editingId=-1
      },
      resetEditCategory:(state,action)=>{
        state.editingId = action.payload.id;
        state.title = action.payload.title;
      },
    //  filter qilish jarayoni
    filterCategory:(state,action)=>{
      if(action.payload===-1){
       state.filteredId=-1
      }else{
        state.filteredId = action.payload;
      }
    }
    }
})

export const {setTitle,clearTitle, filterCategory, resetEditCategory,editCategoryError,editCategoryStart,editCategorySuccess}=categorySlice.actions;

export default categorySlice.reducer;