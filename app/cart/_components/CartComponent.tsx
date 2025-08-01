"use client"
import { deleteAllCart, deleteCart, handleQuantity } from "@/redux/slices/cartSlice";
import { AppDispatch, RootState } from "@/redux/store";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartSceleton from "./Cart-sceleton";



export default function CartComponent() {
  const {carts}=useSelector((state:RootState)=>state.carts)
  const dispatch=useDispatch<AppDispatch>()
  const [loading,setLoading]=useState(true)

useEffect(()=>{
  setTimeout(() => {
      setLoading(false)
  }, 1000);
},[])
  


  if(carts.length===0){
   return <h1 className="text-center sm:mt-[100px]">Hozirda hech qanday cart mahsulotlaringiz yoq</h1>
  }

  if(loading){
    return < CartSceleton />
  }
  return (
    <div className="max-w-[782px] w-full flex flex-col  gap-[20px] sm:gap-[10px] min-h-auto mt-[13px]">
      {/* Cart mahsulotlar */}

      {carts.map((item, index) => (
        <div
          key={index + 1}
          className="sm:max-w-[782px]   max-w-[385px] h-[100px]  border sm:border-none  rounded-[5px]  items-center    w-full sm:h-[70px] flex"
        >
          <Image
            src={item.product.images[0]}
            alt="photo"
            width={100}
            height={100}
            className="sm:w-[70px] h-[90px] sm:h-[70px]  "
            unoptimized
          />
          <div className="ml-[14px]  flex flex-col   h-[80px]   sm:h-[70px] sm:justify-center justify-between   gap-0  sm:gap-[6px]">
            <h1 className="text-[15px] sm:text-[16px] leading-[16px] text-[#3D3D3D] font-medium">
              {item.product.name}
            </h1>
            <p className="text-[12px] sm:text-[14px] mt-[5px] sm:mt-0  w-[140px] sm:w-full leading-[16px] font-normal text-[#727272] ">
              SKU: {4343545454}
            </p>
            <div className="w-[80px] sm:hidden  h-[70px]  flex  justify-between items-center">
              <button
                onClick={() =>
                  dispatch(
                    handleQuantity({ id: item.product.id, param: "MINUS" })
                  )
                }
                className="w-[21px] h-[25px] cursor-pointer rounded-[29px] bg-[#46A358] flex items-center justify-center  "
              >
                <p className="text-white w-[7px] -mt-[3px] text-center ">-</p>
              </button>
              <p className="text-[17px] leading-[10px] font-normal text-[#3D3D3D] ">
                {item.quantity}
              </p>
              <button
                onClick={() =>
                  dispatch(
                    handleQuantity({ id: item.product.id, param: "PLUS" })
                  )
                }
                className="w-[21px] h-[25px] cursor-pointer rounded-[29px] bg-[#46A358] flex items-center justify-center  "
              >
                <p className="text-white  -mt-[3px] text-center ">+</p>
              </button>
            </div>
          </div>
          <div className="ml-[100px] w-[30px] h-[70px] hidden sm:flex items-center justify-center">
            <p className="text-[16px] max-w-[56px]  w-full leading-[16px]  font-medium text-[#727272]  ">
              ${item.product.price}
            </p>
          </div>
          <div className="max-w-[80px] w-full hidden  h-[70px]   ml-[92px]  sm:flex  sm:justify-between items-center">
            <button
              onClick={() =>
                dispatch(
                  handleQuantity({ id: item.product.id, param: "MINUS" })
                )
              }
              className="w-[21px] h-[25px] cursor-pointer rounded-[29px] bg-[#46A358] flex items-center justify-center  "
            >
              <p className="text-white w-[7px] -mt-[3px] text-center ">-</p>
            </button>
            <p className="text-[17px] leading-[10px] font-normal text-[#3D3D3D] ">
              {item.quantity}
            </p>
            <button
              onClick={() =>
                dispatch(handleQuantity({ id: item.product.id, param: "PLUS" }))
              }
              className="w-[21px] h-[25px] cursor-pointer rounded-[29px] bg-[#46A358] flex items-center justify-center  "
            >
              <p className="text-white  -mt-[3px] text-center ">+</p>
            </button>
          </div>
          <div className="w-[61px]  h-[70px] flex  items-center justify-center    sm:ml-[82px]">
            <p className="sm:w-[61px] h-[16px] font-bold text-[16px]  leading-[16px] text-[#46A358]  ">
              ${item.quantity * item.product.price}
            </p>
          </div>
          <div className="max-w-[24px] h-[70px] cursor-pointer flex items-center justify-center ml-[10px]   sm:ml-[50px]">
            <Image
              onClick={() => dispatch(deleteCart(item.product.id))}
              src={"/deleteicon.svg"}
              alt="photo"
              width={24}
              height={24}
            />
          </div>
        </div>
      ))}
      <div className="max-w-full flex justify-end px-[20px]">
        <button
          onClick={() => dispatch(deleteAllCart())}
          className="max-w-[140px] w-full h-[40px] rounded-[6px] hover:bg-white hover:border hover:border-green-500  hover:text-[#46A358] bg-[#46A358] text-[16px] leading-[20px] font-bold cursor-pointer text-center text-white mt-[15px]  sm:mt-[44px]"
        >
          Delete all
        </button>
      </div>
    </div>
  );
}



