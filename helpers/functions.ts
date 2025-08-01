import { getCarts } from "@/redux/slices/cartSlice";
import { getLike } from "@/redux/slices/likesSlice";
import { AppDispatch,  } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";




function  useEffektHooks(loading:boolean,error:null){
    const router = useRouter();
    useEffect(()=>{
    if(!loading&&error===null){
             router.refresh()
        }
    },[error,loading])
}  


export function localstorageGet(){
    const dispatch=useDispatch<AppDispatch>()
    useEffect(()=>{
        dispatch(getCarts())
    },[])
}


export function likeProductsRefresh(){
    const dispatch = useDispatch<AppDispatch>();
    useEffect(()=>{
     if(localStorage.getItem("likes")){
      dispatch(getLike())
     }
    },[])
}



export default useEffektHooks

