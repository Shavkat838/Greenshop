"use client"
import { Products } from "@prisma/client"
import AdProduct from "./Admin-product"
import { useSelector } from "react-redux"
import { RootState } from "@/redux/store"
import { FaSpinner } from "react-icons/fa"

type ProductProps={
  products:Products[]
}

export default function ProductData({products}:ProductProps) {

  const {isDeleteLoading}=useSelector((state:RootState)=>state.productsSlice)

  if (products.length===0){
    return <><h1 className="text-2xl">Hozircha hech qanday mahsulot yoq</h1></>
  }

  if(isDeleteLoading===true){
    return (
      <div className="max-w-[868px] w-full min-h-auto flex justify-center ">
           <FaSpinner size={24} color="grey" className="animate-spin" />
      </div>
    );
  }
  
  return (
    <div className="max-w-[868px] w-full min-h-auto flex flex-wrap gap-[30px]">
      {
        products.map((item,index)=>(
          <AdProduct key={index+1}  {...item}  />
        ))
      }
    </div>
  )
}
