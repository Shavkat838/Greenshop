"use client"
import { deleteAllCart } from '@/redux/slices/cartSlice';
import { resetFormdata } from '@/redux/slices/orderSlice';
import { getFormData } from '@/redux/slices/orderSlice';
import { AppDispatch, RootState } from '@/redux/store';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa';
import { IoChevronBackOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function ShopComponent() {
    const {carts}=useSelector((state:RootState)=>state.carts)
    const {saveLoading,saveError,formdata}=useSelector((state:RootState)=>state.orders)
    const {localId}=useSelector((state:RootState)=>state.users)
    const dispatch=useDispatch<AppDispatch>()
    const router=useRouter()

    
    function totalSum(){
        let summa=0
        for(let i=0;i<carts.length;i++){
            summa+=carts[i].quantity*carts[i].product.price
        }
        return summa
    }   


    function saveOrder(){
        if(formdata.city===""||formdata.country===""||formdata.description===""||formdata.email===""||formdata.firstname===""||formdata.lastname===""||formdata.phone===""){
          toast.info("Malumotlarni to`liqligicha kiriting!")
          return
        }

        if(carts.length===0){
          toast.error("Siz mahsulot tanlamagansiz!")
          router.push("/more")
          return 
        }

        const orderData={
          order:carts,
          userInformation:formdata,
          status:"NEW",
          userId:localId
        }
        dispatch({type:"SAVE/ORDER",payload:orderData})
        dispatch(resetFormdata())
        dispatch(deleteAllCart())
    }


    if(saveError!==null){
      toast.error("Kutilmagan xatolik")
      return
    }

  return (
    <div className="max-w-[1200px]  px-[15px] sm:px-0  w-full  mx-auto  sm:mt-[36px]">
      <div className="max-w-[1200px] w-full sm:flex  sm:mb-0   mb-[400px] justify-between  mt-[24px]  sm:mt-[54px]">
        <div className="max-w-[722px] w-full flex flex-col">
          <h1 className="text-[17px] hidden sm:block leading-[16px] font-bold text-[#3D3D3D]">
            Billing Address
          </h1>
                <div className="max-w-full    flex gap-[124px]  sm:hidden items-center">
                  <div
                    onClick={() => router.back()}
                    className="cursor-pointer  w-[35] flex items-center justify-center   h-[35] bg-white  border  rounded-full "
                  >
                    <IoChevronBackOutline size={20} className="text-[#3D3D3D]" />
                  </div>
                  <h1 className="text-[20px]  leading-[16px] font-bold text-[#3D3D3D]">
                    Adress
                  </h1>
                </div>
          {/* malumotlar */}
          <div className="max-w-[722px] w-full mt-[21px] sm:flex justify-between  ">
            <div className="sm:max-w-[350px] max-w-[356px]  w-full  flex flex-col gap-[10px] ">
              <div className="flex gap-[4px]">
                <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
                  First Name
                </p>
                <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
                  *
                </span>
              </div>
              <input
                value={formdata.firstname}
                onChange={(e) =>
                  dispatch(
                    getFormData({ key: "firstname", value: e.target.value })
                  )
                }
                type="text"
                className="sm:max-w-[350px]  max-w-[356px]  px-2 w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
              />
            </div>
            <div className="sm:max-w-[350px] max-w-[356px]  w-full  flex flex-col gap-[10px] mt-[10px] sm:mt-0 ">
              <div className="flex gap-[4px]">
                <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
                  Last Name
                </p>
                <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
                  *
                </span>
              </div>
              <input
                value={formdata.lastname}
                onChange={(e) =>
                  dispatch(
                    getFormData({ key: "lastname", value: e.target.value })
                  )
                }
                type="text"
                className="sm:max-w-[350px] max-w-[356px]  px-2 w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
              />
            </div>
          </div>
          <div className="max-w-[722px] w-full mt-[21px] sm:flex justify-between  ">
            <div className="sm:max-w-[350px] max-w-[356px]  w-full  flex flex-col gap-[10px] ">
              <div className="flex gap-[4px]">
                <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
                  Country / Region
                </p>
                <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
                  *
                </span>
              </div>
              <input
                value={formdata.country}
                onChange={(e) =>
                  dispatch(
                    getFormData({ key: "country", value: e.target.value })
                  )
                }
                type="text"
                className="sm:max-w-[350px] max-w-[356px] px-2 w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
              />
            </div>
            <div className="sm:max-w-[350px] max-w-[356px]  w-full  flex flex-col mt-[10px] sm:mt-0 gap-[10px] ">
              <div className="flex gap-[4px]">
                <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
                  Town / City
                </p>
                <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
                  *
                </span>
              </div>
              <input
                value={formdata.city}
                onChange={(e) =>
                  dispatch(getFormData({ key: "city", value: e.target.value }))
                }
                type="text"
                className="sm:max-w-[350px] max-w-[356px] w-full px-2 h-[40px] border border-[#EAEAEA]  rounded-[3px] "
              />
            </div>
          </div>
          <div className="max-w-[722px] w-full mt-[21px] sm:flex justify-between  ">
            <div className="sm:max-w-[350px] max-w-[356px]  w-full  flex flex-col gap-[10px] ">
              <div className="flex gap-[4px]">
                <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
                  Email address
                </p>
                <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
                  *
                </span>
              </div>
              <input
                value={formdata.email}
                onChange={(e) =>
                  dispatch(getFormData({ key: "email", value: e.target.value }))
                }
                type="text"
                className="sm:max-w-[350px] max-w-[356px] px-2 w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
              />
            </div>
            <div className="sm:max-w-[350px] max-w-[356px] w-full  flex flex-col mt-[10px] sm:mt-0 gap-[10px] ">
              <div className="flex gap-[4px]">
                <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
                  Phone Number
                </p>
                <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
                  *
                </span>
              </div>
              <input
                value={formdata.phone}
                onChange={(e) =>
                  dispatch(getFormData({ key: "phone", value: e.target.value }))
                }
                type="text"
                className="sm:max-w-[350px] max-w-[356px]  px-2 w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
              />
            </div>
          </div>
          <div className="sm:max-w-[350px]  max-w-[356px] w-full mt-[21px]  flex flex-col gap-[10px] ">
            <div className="flex gap-[4px]">
              <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
                Order notes (optional)
              </p>
            </div>
            <textarea
              value={formdata.description}
              onChange={(e) =>
                dispatch(
                  getFormData({ key: "description", value: e.target.value })
                )
              }
              className="sm:max-w-[350px] max-w-[356px] w-full p-2 h-[152px] border border-[#EAEAEA] rounded-[3px]  "
            ></textarea>
          </div>
        </div>
        <div className="max-w-[405px]  fixed sm:static   bg-white bottom-0  z-50 sm:z-0   w-full flex flex-col">
          <h1 className="text-[17px] hidden sm:block  leading-[16px] font-bold text-[#3D3D3D] ">
            Your Order
          </h1>
          <div className="max-w-[405px] hidden  w-full h-[37px]  sm:flex justify-between  border-b-[0.3px] border-b-[#3D3D3D]  items-center">
            <p className="text-[15px] leading-[16px] font-normal text-[#3D3D3D]">
              Products
            </p>
            <p className="text-[15px] leading-[16px] font-normal text-[#3D3D3D]">
              Subtotal
            </p>
          </div>
          {/*orderrlar chiziladi */}
          <div className="sm:max-w-[405px] w-full max-w-[366px]  h-[160px]  overflow-scroll overflow-x-hidden scrollbar-none sm:scrollbar-block  border-1 border-gray-100 mt-[11px] flex flex-col gap-[10px]">
            {carts.length > 0 ? (
              carts.map((item, index) => (
                <div key={index + 1} className="sm:max-w-[405px]  max-w-[366px]  h-[100px] w-full  flex ">
                  <Image
                    src={item.product.images[0]}
                    alt="photo"
                    width={70}
                    height={70}
                    unoptimized
                  />
                  <div className="ml-[24px] flex flex-col max-w-[250px] w-full justify-center   gap-[6px]">
                    <h1 className="text-[16px] leading-[16px] text-[#3D3D3D] font-medium">
                      {item.product.name}
                    </h1>
                    <p className="text-[14px]  leading-[14px] font-normal text-[#727272] ">
                      SKU:19957518
                    </p>
                  </div>
                  <div className="ml-[50px] max-w-[100px]  w-full  flex items-center justify-center">
                    <p className="text-[12px]   w-full leading-[14px]  font-normal text-[#727272]  ">
                      (x {item.quantity})
                    </p>
                  </div>
                  <div className="max-w-[61px]  h-[70px] flex items-center justify-center ml-[37px]">
                    <p className="w-[61px] h-[16px] font-bold text-[16px]  leading-[16px] text-[#46A358]  ">
                      ${item.product.price}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <h1>Sizda hech qanday mahsulot mavjud emas</h1>
              </div>
            )}
          </div>
          <div className="mt-[30px] sm:max-w-[405px] max-w-[356px] w-full  flex flex-col items-end">
            <div className="flex  sm:max-w-[321px] max-w-[356px]  w-full justify-between ">
              <p className="text-[14px] leading-[15px] font-normal text-[#3D3D3D] ">
                Subtotall
              </p>
              <p className="text-[18px] leading-[16px] font-medium  text-[#3D3D3D]  ">
                ${totalSum()}
              </p>
            </div>
            <div className="flex mt-[15px] sm:max-w-[321px] max-w-[356px] w-full justify-between ">
              <p className="text-[14px] leading-[15px] font-normal text-[#3D3D3D] ">
                Coupen Discount
              </p>
              <p className="text-[15px] leading-[16px] font-normal text-[#3D3D3D] ">
                (-) 00.00
              </p>
            </div>
            <div className="flex mt-[21px] max-w-[356px]  sm:max-w-[321px] w-full justify-between ">
              <p className="text-[14px] leading-[15px] font-normal text-[#3D3D3D] ">
                Shiping
              </p>
              <p className="text-[18px] leading-[16px] font-medium text-[#3D3D3D] ">
                $16.00
              </p>
            </div>
            <div className="flex mt-[25px]  sm:mt-[50px] sm:max-w-[321px] max-w-[356px] w-full justify-between ">
              <p className="text-[16px] leading-[16px] font-bold text-[#3D3D3D] ">
                Total
              </p>
              <p className="text-[18px] leading-[16px] font-bold text-[#46A358] ">
                ${carts.length === 0 ? 0 : totalSum() + 16.0}
              </p>
            </div>
            <button
              onClick={saveOrder}
              className="sm:max-w-[321px] max-w-[356px]  cursor-pointer w-full h-[60px]  mb-[10px] sm:mb-0  sm:h-[40px] flex items-center justify-center bg-[#46A358] rounded-[40px]  sm:rounded-[3px] text-white  text-[15px] leading-[16px] mt-[29px] font-bold "
            >
              {saveLoading ? (
                <FaSpinner size={20} className="animate-spin" />
              ) : (
                "Place order"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
