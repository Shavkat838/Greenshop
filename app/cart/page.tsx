"use client"
import { IoChevronBackOutline } from "react-icons/io5";
import CartComponent from "./_components/CartComponent";
import Checkout from "./_components/Checkout";
import { useRouter } from "next/navigation";
export default function CartPage() {
  const router=useRouter()
  return (
    <div className="sm:max-w-[1200px]   w-full   mx-auto px-[15px] sm:px-0   flex flex-col ">
      <p className=" text-[#3D3D3D]  hidden  sm:block  text-[15px]  mt-[36px] leading-[15px] font-medium">
        Shop/Cart
      </p>
      <div className="max-w-full mt-[42px]  flex gap-[124px]  sm:hidden items-center">
        <div
          onClick={() => router.back()}
          className="cursor-pointer  w-[35] flex items-center justify-center   h-[35] bg-white  border  rounded-full "
        >
          <IoChevronBackOutline size={20} className="text-[#3D3D3D]" />
        </div>
        <h1 className="text-[20px]  leading-[16px] font-bold text-[#3D3D3D]">
          Cart
        </h1>
      </div>
      <div className="max-w-[1200px] w-full   h-[448px] flex flex-col ">
        <div className="max-w-[1200px] w-full  sm:flex   sm:justify-between mt-[35px]">
          <div className="max-w-[782px] w-full min-h-auto mb-[500px] sm:mb-0 ">
            <div className="max-w-[782px] hidden   w-full sm:flex">
              <p className="text-[16px] leading-[16px] text-[#3D3D3D] font-medium  ">
                Products
              </p>
              <p className="text-[16px] leading-[16px] text-[#3D3D3D] font-medium ml-[225px]  ">
                Price
              </p>
              <p className="text-[16px] leading-[16px] text-[#3D3D3D] font-medium ml-[90px]  ">
                Quantity
              </p>
              <p className="text-[16px] leading-[16px] text-[#3D3D3D] font-medium  ml-[90px] ">
                Total
              </p>
            </div>
            <div className="max-w-[782px] w-full  hidden sm:block  border-[0.3px] border-[#46A35880] mt-[11px]"></div>
            <CartComponent />
          </div>
          {/* checkout qismi */}
          <Checkout />
        </div>
      </div>
    </div>
  );
}
