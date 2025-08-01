
import { createSlice } from "@reduxjs/toolkit";





interface InitialStateType{
       formData:{
        price:string;
        categoryId:string;
        description:string;
        id:number;
        images:string[];
        name:string
       };
       isSaveLoading:boolean;
       isSaveError:null;
       isDeleteLoading:boolean;
       isDeleteError:null;
       editCategoryId:number;
       isEditLoading:boolean;
       isEditError:null;
       imageLoading:boolean;
       searchValue:string;
}


const initialState:InitialStateType={
    formData:{
        price:"",
        categoryId:"",
        description:"",
        id:0,
        images:[],
        name:"",
    },
    isSaveError:null,
    isSaveLoading:false,
    isDeleteError:null,
    isDeleteLoading:false,
    editCategoryId:-1,
    isEditError:null,
    isEditLoading:false,
    imageLoading:false,
    searchValue:"",
}

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        // inputdan qiymatlarni olish
      getFormData:(state,action)=>{
              state.formData={...state.formData,[action.payload.key]:action.payload.value}  
      },
    //   images arr qiymatlari
    getImage:(state,action)=>{
        state.formData.images.push(action.payload)
    },
    oneImageDelete:(state,action)=>{
        state.formData.images.splice(action.payload,1);
    },
    //   clear input 
    clearFormData:(state)=>{
       state.formData=initialState.formData
    },
    // Save product
    saveProductStart:(state)=>{
        state.isSaveLoading=true
    },
    saveProductSuccess:(state)=>{
        state.isSaveLoading=false;
        state.isSaveError=null;
    },
    saveProductError:(state,action)=>{
        state.isSaveLoading=false,
        state.isSaveError=action.payload
    },
// delete product
 deleteProductStart:(state)=>{
      state.isDeleteLoading=true
 },
 deleteProductSuccess:(state)=>{
    state.isDeleteLoading=false
    state.isDeleteError=null
 },
deleteProductError:(state,action)=>{
    state.isDeleteLoading=false;
    state.isDeleteError=action.payload
},

// editingId

editingId:(state,action)=>{
    state.editCategoryId=action.payload.id
    state.formData=action.payload
},

// edit product
editProductStart:(state)=>{
     state.isEditLoading=true
},

editProductSuccess:(state)=>{
    state.isEditLoading=false
    state.isEditError=null
    state.editCategoryId=-1
},

editProductError:(state,action)=>{
  state.isEditLoading=false
  state.isEditError=action.payload
  state.editCategoryId=-1
},
// image loading

imageLoadingStart:(state)=>{
    state.imageLoading=true
},
imageLoadingFinish:(state)=>{
    state.imageLoading=false
},
searchProduct:(state,action)=>{
    state.searchValue=action.payload;
}
},
    
})





export const {imageLoadingFinish, searchProduct,  oneImageDelete, imageLoadingStart, getImage, saveProductStart,saveProductSuccess,saveProductError,getFormData,clearFormData,deleteProductError,deleteProductStart,deleteProductSuccess,editProductError,editProductStart,editProductSuccess,editingId} = productSlice.actions;
export  default productSlice.reducer;


