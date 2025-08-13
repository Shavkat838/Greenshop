"use client"
import { getId } from "@/redux/slices/userSlice";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CiHeart, CiLogin, CiUser } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { useDispatch } from "react-redux";




export default function UserSidebar() {
  const router=useRouter()
  const dispatch=useDispatch<AppDispatch>()
  const pathname=usePathname()
  return (
    <div className="max-w-[310px] w-full  bg-[#FBFBFB]">
      <h1 className="text-[18px] leading-[16px] font-[#3D3D3D] p-[18px] font-bold">
        My Account
      </h1>
      <Link href={"/users"}>
        <div className={`max-w-[310px] h-[39px]  cursor-pointer ${pathname==="/users" ?   "bg-white  border-l-3 border-l-[#46A358] " : "" }  w-full flex px-[18px] items-center mt-[5px]  gap-[12px]`}>
        <CiUser  className={`w-[18px] h-[18px]  ${pathname==="/users"  ?" text-[#46A358] ":"text-[#727272]"} `}   />
          <p className={`text-[15px]  ${pathname==="/users" ? "text-[#46A358] font-bold ": "text-[#727272]  font-normal"}   leading-[45px]   `}>
            Account Details
          </p>
        </div>
      </Link>
      <Link href={"/orders"}>
        <div className={`max-w-[310px] h-[39px]  ${pathname==="/orders" ? "bg-white  border-l-3 border-l-[#46A358]": ""}  cursor-pointer w-full flex items-center px-[18px] mt-[5px] gap-[12px]`}>
        <LuShoppingCart className={`w-[18] h-[18]  ${pathname==="/orders"?"text-[#46A358]":" text-[#727272]"} `} />
          <p className={`text-[15px]  ${pathname==='/orders' ? "text-[#46A358] font-bold":"text-[#727272]  font-normal" } leading-[45px]`}>
            Orders
          </p>
        </div>
      </Link>
      <Link href={"/wishlist"}>
        <div className={`max-w-[310px] h-[39px] ${pathname==="/wishlist" ? "bg-white  border-l-3 border-l-[#46A358]": ""}   cursor-pointer w-full flex items-center px-[18px] gap-[12px] mt-[5px]`}>
        <CiHeart className={`w-[18] h-[18]  ${pathname==="/wishlist"?"text-[#46A358]":" text-[#727272]"} `} />
          <p className={`text-[15px]  ${pathname==='/wishlist' ? "text-[#46A358] font-bold":"text-[#727272]  font-normal" } leading-[45px]`}>
            Wishlist
          </p>
        </div>
      </Link>
      <div className="max-w-[307px] w-full border-[0.3px] mt-[25px] border-[#46A35880]"></div>
      <button className="max-w-[78px] w-full cursor-pointer  h-[20px] mt-[21px] ml-[25px] flex justify-between items-center">
        <CiLogin size={20} className="text-[#46A358]" />
        <p    onClick={() => {
                      localStorage.removeItem("id");
                      localStorage.removeItem("role")
                      dispatch(getId())
                      router.push("/")
        }} className="text-[15px] leading-[15px]  font-bold text-[#46A358]">
          Loguot
        </p>
      </button>
    </div>
  );
}
