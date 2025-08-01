"use client"
import { Product } from '@/helpers/types';
import React from 'react'
import { FaRegUser } from 'react-icons/fa';
import {  MdIncompleteCircle, MdOutlinePhone } from 'react-icons/md';


interface orderItem{
  product:Product,
  quantity:number,
}



type OrderType={
data: {
    id: number;
    order: orderItem[];
    userInformation:{
      lastname:string;
      email:string;
      phone:string;
    };
    status: string;
    userId: number;
}[]
}

export default function OrderComponent({data}:OrderType) {
  const id = localStorage.getItem("id") && parseInt(localStorage.getItem("id")!);
  const currentOrders=data.filter((c)=>c.userId===id)

  
    function umumiysumma(id: number):number {
      let natija = 0;
      const currentOrder = data.find((c) => c.id === id);
      if (!currentOrder) {
        return 0;
      }
      for (let i = 0; i < currentOrder.order.length; i++) {
        natija +=
          currentOrder.order[i].product.price *
          currentOrder.order[i].quantity;
      }
      return natija;
    }


  return (
    <div className="max-w-[868px]  w-full min-h-screen  sm:flex">
      <div className="w-full min-h-auto flex flex-col gap-[20px] sm:hidden  ">
        {currentOrders.map((item, index) => (
          <div
            key={index + 1}
            className="max-w-[300px] w-full   p-3  bg-gray-300 rounded-md"
          >
            <h3 className="px-2 text-[18px] text-gray-900 flex  items-center ">
              <FaRegUser color="black" className="mr-2" size={20} />
              {item.userInformation.lastname}
            </h3>
            <h4 className="px-2 text-[18px] my-1 text-gray-900  flex items-center ">
              <MdOutlinePhone size={20} className="mr-2" />
              {item.userInformation.phone}
            </h4>
            <h4 className="px-2 text-[18px] text-gray-900  flex items-center ">
              <MdIncompleteCircle size={20} className="mr-2" />
              {item.status==="NEW"?"YANGI":item.status==="MIDDLE"?"JARAYONDA":"TAYYOR"}
            </h4>
            <div className="max-w-[250px] w-full my-1 min-h-[150px] bg-gray-100 rounded-md shadow-md p-2  ml-2 mt-2">
              {item.order.map((itm, ind) =>
                itm && itm.product ? (
                  <div
                    key={ind + 1}
                    className="w-full h-[30px] flex justify-between items-center px-2 "
                  >
                    <h1 className="text-[18px] w-[200px] line-clamp-1 ">
                      {itm.product.name}
                    </h1>
                    <p className="text-[18px] text-blue-400">{itm.quantity}x</p>
                  </div>
                ) : (
                  <div key={ind + 1}>Mahsulot topilmadi</div>
                )
              )}
            </div>
            <h1 className="ml-2 text-[24px]">
              Total{" "}
              <span className="ml-[10px] text-slate-900 ">
                {umumiysumma(item.id) + 16}$
              </span>
            </h1>
          </div>
        ))}
      </div>

      <div className="max-w-[280px] hidden  w-full py-1 px-1 border-r-2 border-r-gray-400 sm:flex flex-col gap-3">
        <h1 className="text-[18px]  font-bold leading-16 text-bold text-center ">
          YANGI
        </h1>
        {currentOrders
          .filter((c) => c.status === "NEW")
          .map((item, index) => (
            <div
              key={index + 1}
              className="max-w-[270px] w-full   p-2  bg-gray-300 rounded-md"
            >
              <h3 className="px-2 text-[18px] text-gray-900 flex  items-center ">
                <FaRegUser color="black" className="mr-2" size={20} />
                {item.userInformation.lastname}
              </h3>
              <h4 className="px-2 text-[18px] text-gray-900  flex items-center ">
                <MdOutlinePhone size={20} className="mr-2" />
                {item.userInformation.phone}
              </h4>
              <div className="max-w-[250px] w-full min-h-[150px] bg-gray-100 rounded-md shadow-md p-2  ml-2 mt-2">
                {item.order.map((itm, ind) =>
                  itm && itm.product ? (
                    <div
                      key={ind + 1}
                      className="w-full h-[30px] flex justify-between items-center px-2 "
                    >
                      <h1 className="text-[18px] w-[200px] line-clamp-1 ">
                        {itm.product.name}
                      </h1>
                      <p className="text-[18px] text-blue-400">
                        {itm.quantity}x
                      </p>
                    </div>
                  ) : (
                    <div key={ind + 1}>Mahsulot topilmadi</div>
                  )
                )}
              </div>
              <h1 className="ml-2 text-[24px]">
                Total{" "}
                <span className="ml-[10px] text-slate-900 ">
                  {umumiysumma(item.id) + 16}$
                </span>
              </h1>
            </div>
          ))}
      </div>
      <div className="max-w-[280px]  hidden w-full py-1 px-1 border-r-2 border-r-gray-400 sm:flex flex-col gap-3">
        <h1 className="text-[18px]  font-bold leading-16 text-bold text-center ">
          JARAYONDA
        </h1>
        {currentOrders
          .filter((c) => c.status === "MIDDLE")
          .map((item, index) => (
            <div
              key={index + 1}
              className="max-w-[270px] w-full   p-2  bg-gray-300 rounded-md"
            >
              <h3 className="px-2 text-[18px] text-gray-900 flex  items-center ">
                <FaRegUser color="black" className="mr-2" size={20} />
                {item.userInformation.lastname}
              </h3>
              <h4 className="px-2 text-[18px] text-gray-900  flex items-center ">
                <MdOutlinePhone size={20} className="mr-2" />
                {item.userInformation.phone}
              </h4>
              <div className="max-w-[250px] w-full min-h-[150px] bg-gray-100 rounded-md shadow-md p-2  ml-2 mt-2">
                {item.order.map((itm, ind) =>
                  itm && itm.product ? (
                    <div
                      key={ind + 1}
                      className="w-full h-[30px] flex justify-between items-center px-2 "
                    >
                      <h1 className="text-[18px] w-[200px] line-clamp-1 ">
                        {itm.product.name}
                      </h1>
                      <p className="text-[18px] text-blue-400">
                        {itm.quantity}x
                      </p>
                    </div>
                  ) : (
                    <div key={ind + 1}>Mahsulot topilmadi</div>
                  )
                )}
              </div>
              <h1 className="ml-2 text-[24px]">
                Total{" "}
                <span className="ml-[10px] text-slate-900 ">
                  {umumiysumma(item.id) + 16}$
                </span>
              </h1>
            </div>
          ))}
      </div>
      <div className="max-w-[280px] hidden w-full py-1 px-1 border-r-2 border-r-gray-400 sm:flex flex-col gap-3">
        <h1 className="text-[18px]  font-bold leading-16 text-bold text-center ">
          TAYYOR
        </h1>
        {currentOrders
          .filter((c) => c.status === "COMPLETED")
          .map((item, index) => (
            <div
              key={index + 1}
              className="max-w-[270px] w-full   p-2  bg-gray-300 rounded-md"
            >
              <h3 className="px-2 text-[18px] text-gray-900 flex  items-center ">
                <FaRegUser color="black" className="mr-2" size={20} />
                {item.userInformation.lastname}
              </h3>
              <h4 className="px-2 text-[18px] text-gray-900  flex items-center ">
                <MdOutlinePhone size={20} className="mr-2" />
                {item.userInformation.phone}
              </h4>
              <div className="max-w-[250px] w-full min-h-[150px] bg-gray-100 rounded-md shadow-md p-2  ml-2 mt-2">
                {item.order.map((itm, ind) =>
                  itm && itm.product ? (
                    <div
                      key={ind + 1}
                      className="w-full h-[30px] flex justify-between items-center px-2 "
                    >
                      <h1 className="text-[18px] w-[200px] line-clamp-1 ">
                        {itm.product.name}
                      </h1>
                      <p className="text-[18px] text-blue-400">
                        {itm.quantity}x
                      </p>
                    </div>
                  ) : (
                    <div key={ind + 1}>Mahsulot topilmadi</div>
                  )
                )}
              </div>
              <h1 className="ml-2 text-[24px]">
                Total{" "}
                <span className="ml-[10px] text-slate-900 ">
                  {umumiysumma(item.id) + 16}$
                </span>
              </h1>
            </div>
          ))}
      </div>
    </div>
  );
}
