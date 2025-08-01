import { Products } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";


interface Type{
    likes:Products[]
}

  
const   initialState:Type={
    likes:[]
}
    

const likeSlice=createSlice({
    name:"likes",
    initialState,
    reducers:{
        getLike:(state)=>{
          if(localStorage.getItem("likes")){
            state.likes=JSON.parse(localStorage.getItem("likes")!)
          }
        },
      saveLike:(state,action)=>{
        if(state.likes.find((c)=>c.id===action.payload.id)){
            state.likes=state.likes.filter((c)=>c.id!==action.payload.id)
        }else{
            state.likes.push(action.payload)
        }
        localStorage.setItem("likes",JSON.stringify(state.likes))
      }
    }
})


export default  likeSlice.reducer
export const {saveLike,getLike}=likeSlice.actions