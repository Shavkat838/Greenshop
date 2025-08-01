"use client"

import { setVisible } from "@/redux/slices/userSlice"
import { AppDispatch, RootState } from "@/redux/store"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { toast } from "react-toastify"

export default function Checkout() {

  const {carts}=useSelector((state:RootState)=>state.carts)
  const dispatch=useDispatch<AppDispatch>()

  const router=useRouter()


  function umumiyPul(){
    let natija=0
      for(let i=0;i<carts.length;i++){
        natija=natija+carts[i].quantity*carts[i].product.price;
      }
   return natija;
  }



  function toCheckout(){
    if(!localStorage.getItem("id")){
      toast.info("Avval ro`yxatdan o`ting")
      dispatch(setVisible(true))
      return
    }
    router.push("/shop")
  }

  


  

  return (
    <div className="sm:ml-[89px] ml-0 sm:max-w-[328px] max-w-[414px]  mb-[10px] fixed sm:z-0 sm:static bottom-0  z-50 bg-white  w-full  ">
      <h1 className="text-[18px] hidden sm:block  leading-[16px] font-bold  text-[#3D3D3D] ">
        Cart Totals
      </h1>
      <div className="mt-[11px] max-w-[328px] hidden sm:block w-full border-[0.3px]  border-[#46A35880]"></div>
      <p className="text-[14px] hidden sm:block leading-[16px] text-[#3D3D3D]  font-normal mt-[11px] ">
        Coupon Apply
      </p>
      <div className="sm:max-w-[332px] max-w-[358px] shadow-md sm:shadow-none sm:rounded-none rounded-[40px] sm:border sm:rounded-bl-[3px] sm:rounded-tl-[3px] border-[#46A358] mt-[8px] w-full sm:h-[40px] h-[50px] flex justify-between">
        <input
          className="sm:ml-[20px]  px-[10px] ml-0 placeholder:pl-[20px]   w-full text-[#A5A5A5] text-[14px] leading-[15px] font-normal"
          type="text"
          placeholder="Enter coupen code here..."
        />
        <button  className="sm:max-w-[102px] cursor-pointer  max-w-[97px]  h-[50px] sm:rounded-none   rounded-[40px]  sm:rounded-br-[3px] sm:rounded-tr-[3px] w-full sm:h-[40px] bg-[#46A358] text-white  text-[15px] leading-[15px] font-bold">
          Apply
        </button>
      </div>
      <div className="mt-[30px]  sm:max-w-[328px] max-w-[358px]  w-full">
        <div className="flex  sm:max-w-[328px] max-w-[358px]  w-full justify-between ">
          <p className="sm:text-[14px] text-[15px]  sm:leading-[15px] leading-[16px] font-normal text-[#3D3D3D] ">
            Subtotall
          </p>
          <p className="sm:text-[18px]  text-[16px] leading-[16px] font-medium  text-[#3D3D3D]  ">
            ${umumiyPul()}
          </p>
        </div>
        <div className="flex mt-[15px] sm:max-w-[328px] max-w-[358px]  w-full justify-between ">
          <p className=" text-[15px] sm:text-[14px]  leading-[16px] sm:leading-[15px] font-normal text-[#3D3D3D] ">
            Coupen Discount
          </p>
          <p className="sm:text-[15px] text-[16px] leading-[16px] font-normal text-[#3D3D3D] ">
            (-) 00.00
          </p>
        </div>
        <div className="flex mt-[21px] sm:max-w-[328px] max-w-[358px] w-full justify-between ">
          <p className="sm:text-[14px]  text-[15px]   leading-[16px]  sm:leading-[15px] font-normal text-[#3D3D3D] ">
            Shiping
          </p>
          <p className="text-[16px]  sm:text-[18px] leading-[16px] font-medium text-[#3D3D3D] ">
            $16.00
          </p>
        </div>
        <div className="flex mt-[25px] sm:mt-[50px] max-w-[358px]  sm:max-w-[328px] w-full justify-between ">
          <p className="text-[16px] leading-[16px] font-bold text-[#3D3D3D] ">
            Total
          </p>
          <p className="text-[18px] leading-[16px] font-bold text-[#46A358] ">
            ${carts.length === 0 ? 0 : umumiyPul() + 16.0}
          </p>
        </div>
        <button  onClick={toCheckout} className="sm:max-w-[332px] max-w-[358px]    cursor-pointer w-full  h-[60px] sm:h-[40px] bg-[#46A358]  rounded-[40px] sm:rounded-[3px] text-white  text-[15px] leading-[16px] mt-[29px] font-bold ">
          Proced To Checkout
        </button>
        <p  onClick={()=>router.push("/more")} className="text-center hidden  sm:block cursor-pointer text-[#46A358]  text-[15px] leading-[16px] font-normal mt-[14px] ">
          Continue Shopping
        </p>
      </div>
    </div>
  )
}
