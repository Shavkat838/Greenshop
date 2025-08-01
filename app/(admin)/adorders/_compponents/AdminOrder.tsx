"use client"
import useEffektHooks from '@/helpers/functions';
import { AppDispatch, RootState } from '@/redux/store';
import { Products } from '@prisma/client';
import React, { useState } from 'react'
import { CgSpinner } from 'react-icons/cg';
import { FaRegUser } from 'react-icons/fa'
import { MdOutlinePhone } from 'react-icons/md'
import { SiPinboard } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';




interface PropsType{
     data:{
       id: number;
       order: { product: Products; quantity: number }[];
       userInformation: {
         lastname: string;
         email: string;
         phone: string;
       };
       status: string;
       userId: number;
     }[]
}




export default function AdminOrder({data}:PropsType) {
  const [dragId,setdragId]=useState<number>()

  const dispatch=useDispatch<AppDispatch>()
  const {updateError,updateLoading}=useSelector((state:RootState)=>state.orders)

  useEffektHooks(updateLoading,updateError)


    function totalsumma(id:number){
        let natija=0;
        const currentOrder=data.find((c)=>c.id===id)
        if(!currentOrder){
            return 0
        }
        for (let i=0;i<currentOrder!.order.length;i++){
                natija+=currentOrder!.order[i].product.price*currentOrder!.order[i].quantity;     
        }
        return natija
    }


  function ruhsat(e:React.DragEvent<HTMLDivElement>){
    e.preventDefault()
  }



  function dropedOrder(status:"NEW"|"MIDDLE"|"COMPLETED"){
      const currentData=data.find((item)=>item.id===dragId)
      if(!currentData){
        return
      }
      dispatch({type:"EDIT/ORDER",payload:{...currentData,status:status}})
  } 









  if(updateLoading){
    return <div className='max-w-full min-h-screen  flex items-center justify-center'>< CgSpinner size={60} className='animate-spin' /></div>
  }

  return (
    <div className="max-w-[868px] w-full min-h-screen flex">
      <div className="max-w-[280px] w-full py-1 px-1 border-r-2 border-r-gray-400 flex flex-col gap-3">
        <h1 className="text-[18px]  font-bold leading-16 text-bold text-center ">
          YANGI
        </h1>
        <div
          onDragOver={(event) => ruhsat(event)}
          onDrop={() => dropedOrder("NEW")}
          className="max-w-full min-h-[500px] flex flex-col gap-[10px]"
        >
          {data
            .filter((item) => item.status === "NEW")
            .map((c) => (
              <div
                draggable
                onDrag={() => setdragId(c.id)}
                key={c.id}
                className="max-w-[270px] w-full   p-2  bg-gray-300 rounded-md"
              >
                <h3 className="px-2 text-[18px] text-gray-900 flex  items-center ">
                  <FaRegUser color="black" className="mr-2" size={20} />
                  {c.userInformation.lastname}
                </h3>
                <h4 className="px-2 text-[18px] text-gray-900  flex items-center ">
                  <MdOutlinePhone size={20} className="mr-2" />
                  {c.userInformation.phone}
                </h4>
                <div className="max-w-[250px] w-full min-h-[150px] bg-gray-100 rounded-md shadow-md p-2  ml-2 mt-2">
                  {c.order.map((pro) => (
                    <div
                      key={pro.product!.id}
                      className="w-full h-[30px] flex justify-between items-center px-2 "
                    >
                      <h1 className="text-[18px] w-[200px] line-clamp-1 ">
                        {pro.product!.name}
                      </h1>
                      <p className="text-[18px] text-blue-400">
                        {pro.quantity}
                      </p>
                    </div>
                  ))}
                </div>
                <h1 className="ml-2 text-[24px]">
                  Total
                  <span className="ml-[10px] text-slate-900 ">
                    {totalsumma(c.id) + 16}
                  </span>
                </h1>
              </div>
            ))}
        </div>
      </div>
      <div className="max-w-[280px] w-full py-1 px-1 border-r-2 border-r-gray-400 flex flex-col gap-3">
        <h1 className="text-[18px]  font-bold leading-16 text-bold text-center ">
          JARAYONDA
        </h1>
        <div
          onDragOver={(event) => ruhsat(event)}
          onDrop={() => dropedOrder("MIDDLE")}
          className="max-w-full min-h-[500px] flex flex-col gap-[10px]"
        >
          {data
            .filter((item) => item.status === "MIDDLE")
            .map((c) => (
              <div
                draggable
                onDrag={() => setdragId(c.id)}
                key={c.id}
                className="max-w-[270px] w-full   p-2  bg-gray-300 rounded-md"
              >
                <h3 className="px-2 text-[18px] text-gray-900 flex  items-center ">
                  <FaRegUser color="black" className="mr-2" size={20} />
                  {c.userInformation.lastname}
                </h3>
                <h4 className="px-2 text-[18px] text-gray-900  flex items-center ">
                  <MdOutlinePhone size={20} className="mr-2" />
                  {c.userInformation.phone}
                </h4>
                <div className="max-w-[250px] w-full min-h-[150px] bg-gray-100 rounded-md shadow-md p-2  ml-2 mt-2">
                  {c.order.map((pro) => (
                    <div
                      key={pro.product!.id}
                      className="w-full h-[30px] flex justify-between items-center px-2 "
                    >
                      <h1 className="text-[18px] w-[200px] line-clamp-1 ">
                        {pro.product!.name}
                      </h1>
                      <p className="text-[18px] text-blue-400">
                        {pro.quantity}
                      </p>
                    </div>
                  ))}
                </div>
                <h1 className="ml-2 text-[24px]">
                  Total{" "}
                  <span className="ml-[10px] text-slate-900 ">
                    {totalsumma(c.id) + 16}
                  </span>
                </h1>
              </div>
            ))}
        </div>
      </div>
      <div className="max-w-[280px] w-full py-1 px-1 border-r-2 border-r-gray-400 flex flex-col gap-3">
        <h1 className="text-[18px]  font-bold leading-16 text-bold text-center ">
          TAYYOR
        </h1>
        <div
          onDragOver={(event) => ruhsat(event)}
          onDrop={() => dropedOrder("COMPLETED")}
          className="max-w-full min-h-[500px] flex flex-col gap-[10px]"
        >
          {data
            .filter((item) => item.status === "COMPLETED")
            .map((c) => (
              <div
                draggable
                onDrag={() => setdragId(c.id)}
                key={c.id}
                className="max-w-[270px] w-full   p-2  bg-gray-300 rounded-md"
              >
                <h3 className="px-2 text-[18px] text-gray-900 flex  items-center ">
                  <FaRegUser color="black" className="mr-2" size={20} />
                  {c.userInformation.lastname}
                </h3>
                <h4 className="px-2 text-[18px] text-gray-900  flex items-center ">
                  <MdOutlinePhone size={20} className="mr-2" />
                  {c.userInformation.phone}
                </h4>
                <div className="max-w-[250px] w-full min-h-[150px] bg-gray-100 rounded-md shadow-md p-2  ml-2 mt-2">
                  {c.order.map((pro) => (
                    <div
                      key={pro.product!.id}
                      className="w-full h-[30px] flex justify-between items-center px-2 "
                    >
                      <h1 className="text-[18px] w-[200px] line-clamp-1 ">
                        {pro.product!.name}
                      </h1>
                      <p className="text-[18px] text-blue-400">
                        {pro.quantity}
                      </p>
                    </div>
                  ))}
                </div>
                <h1 className="ml-2 text-[24px]">
                  Total
                  <span className="ml-[10px] text-slate-900 ">
                    {totalsumma(c.id) + 16}
                  </span>
                </h1>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
