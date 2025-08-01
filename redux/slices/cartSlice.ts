import { Products } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";


type InitialStateType = {
  carts: {
    product: Products;
    quantity: number;
  }[];
loading:boolean;
};

const initialState:InitialStateType={
 carts:[],
 loading:false
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        
   getCarts:(state)=>{ 
    const localCarts = localStorage.getItem("carts");
    if (localCarts) {
      state.carts=JSON.parse(localCarts) 
    }   
   },

    // save Carts
    saveCart:(state,action)=>{
      const localCarts = localStorage.getItem("carts");
      if (localCarts) {
        state.carts=JSON.parse(localCarts);
      }   
       const handleCart=state.carts.find((c)=>c.product.id===action.payload.product.id)
       if(!handleCart){
         state.carts.push(action.payload)
       }else {
        handleCart.quantity+=action.payload.quantity
       }
       localStorage.setItem("carts", JSON.stringify(state.carts));
    },


    // deleteCarts
    deleteCart:(state,action)=>{
      state.carts=state.carts.filter((c)=>c.product.id!==action.payload)
      localStorage.setItem("carts",JSON.stringify(state.carts))
    },
    deleteAllCart:(state)=>{
      localStorage.removeItem("carts")
      state.carts=[]
    },
    handleQuantity:(state,action)=>{
     const resultedCart=state.carts.find((c)=>c.product.id===action.payload.id)
     if(!resultedCart){
      return
     }
      if(action.payload.param=="MINUS"){
          if(resultedCart.quantity===1){
            return
          }
          resultedCart.quantity--;
      }else {
        resultedCart.quantity++
      }
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    }
})


export const {saveCart,getCarts,deleteCart,deleteAllCart,handleQuantity}=cartSlice.actions
export default cartSlice.reducer;