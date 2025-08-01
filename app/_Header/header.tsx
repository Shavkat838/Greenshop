"use client"
import { localstorageGet } from "@/helpers/functions";
import { getId, setVisible } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { usePathname} from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { CiLogin, CiLogout, CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";




export default function Header() {
const pathname=usePathname()
localstorageGet()
const {carts}=useSelector((state:RootState)=>state.carts)
const {localId}=useSelector((state:RootState)=>state.users)
const dispatch=useDispatch<AppDispatch>()
const router=useRouter()

const userPage=["/adress","/orders",'/users',"/wishlist","/shop"]



useEffect(()=>{
  if(!localStorage.getItem("id")){
    if(localStorage.getItem("admin")){
      return
    }
    checkUser()
  }
},[pathname])


function checkUser(){
  if(userPage.includes(pathname)){
    router.push("/")
    return
  }
}







  return (
    <div className="hidden sm:flex  max-w-[1200] w-full h-[53px] mx-auto  items-start  mt-[10px] justify-between">
      <Link href={"/"}>
        <Image
          className="cursor-pointer"
          src={"/Logo.svg"}
          alt="photo"
          width={150}
          height={34}
        />
      </Link>
      <div className="max-w-[325px] w-full  h-[45px] flex  justify-between items-center">
        <Link href={"/"}>
          <p
            className={`text-[16px] flex items-center   h-[60px] ${
              pathname === "/"
                ? "font-bold text-black border-b-3 border-b-[#46A358]"
                : "font-normal text-[#3D3D3D"
            }   cursor-pointer ]`}
          >
            Home
          </p>
        </Link>
        <Link href={"/more"}>
          <p
            className={`text-[16px] flex items-center   h-[60px] ${
              pathname === "/more"
                ? "font-bold text-black border-b-3 border-b-[#46A358]"
                : "font-normal text-[#3D3D3D"
            }   cursor-pointer ]`}
          >
            Products
          </p>
        </Link>
        <p
          className={`text-[16px] flex items-center   h-[60px] ${
            pathname === "/blogs"
              ? "font-bold text-black border-b-3 border-b-[#46A358]"
              : "font-normal text-[#3D3D3D"
          }   cursor-pointer ]`}
        >
          Blogs
        </p>
      </div>
      <div className="max-w-[210px]  w-full h-[45px]  flex justify-end gap-[20px] items-center">
        {localId!==0 && (
          <Link href={"/users"}>
            <Image
              className="cursor-pointer"
              src={"/userlogo.svg"}
              alt="photo"
              width={22}
              height={22}
            />
          </Link>
        )}
        <Link href={"/cart"}>
          <div className="relative">
            <CiShoppingCart
              size={26}
              className="w-[29px] cursor-pointer h-[24px]"
            />
            <div className="w-[13px] h-[13px] absolute top-0 right-0 text-[16px] rounded-full bg-[#46A358] text-center  ">
              <p className="text-[10px] text-white text-center">
                {carts.length}
              </p>
            </div>
          </div>
        </Link>
        {localId===0 ? (
          <button
            onClick={() => {
              dispatch(setVisible(true));
            }}
            className=" max-w-[100px] cursor-pointer w-full h-[35px] text-white bg-[#46A358] rounded-[6px] flex justify-center gap-[8px] items-center"
          >
            <CiLogin size={20} />
            Kirish
          </button>
        ) : (
          <button
            onClick={() => {
              localStorage.removeItem("id");
              dispatch(getId())
              router.push("/")
            }}
            className="max-w-[100px] cursor-pointer w-full h-[35px] text-white bg-[#46A358] rounded-[6px] flex justify-center gap-[8px] items-center"
          >
            <CiLogout size={20} />
            Chiqish
          </button>
        )}
      </div>
    </div>
  );
}

