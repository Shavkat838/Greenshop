"use client"
import { setVisible } from '@/redux/slices/userSlice';
import { AppDispatch } from '@/redux/store';
import Image from 'next/image';
import {  usePathname, useRouter } from 'next/navigation';
import React from 'react'
import { useDispatch } from 'react-redux';


export default function Mobilefooter() {
  const pathname=usePathname()

    const router=useRouter()
    const dispatch=useDispatch<AppDispatch>()

    function goPage(param:string){
        switch (param) {
            case "home":
                router.push("/")
                break;
            case "like":
               if (!localStorage.getItem("id")) {
                dispatch(setVisible(true));
                return;
                }
                router.push("/wishlist")
                break;
            case "cart":
                router.push("/cart")
                break;
            case "user":
                if(!localStorage.getItem("id")){
                    dispatch(setVisible(true))
                    return
                }
                router.push("/users")
                break;
            default:
                break;
        }
    }
  return (
    <div className="max-w-[414px] w-full sm:hidden  bg-[#FFFFFF] h-[94px]    bottom-0  flex items-center justify-between fixed z-50 ">
      <div className="max-w-[190px] w-full flex items-center gap-[52px] px-[30px] ">
        <Image onClick={()=>goPage("home")} className='cursor-pointer  ' src={`${pathname==="/"?"/Home.svg":"/homegrey.png"}`} alt="home" width={20} height={20} />
        <Image onClick={()=>goPage("like")}  className={` ${pathname==="/wishlist"?"w-[20px] h-[20px] ":""} cursor-pointer`} src={`${pathname==="/wishlist"?"/likegreen.png":"/likefoter.svg"}`}  alt="home" width={17} height={17} />
      </div>
      <div className="max-w-[180px]   w-full flex items-center gap-[52px] px-[40px] ">
        <Image onClick={()=>goPage("cart")}  className='cursor-pointer' src={`${pathname==="/cart"?"/cartgreen.png":"/cartfoter.svg"}`}  alt="home" width={20} height={20} />
        <Image onClick={()=>goPage("user")}  className='cursor-pointer'src={`${pathname==="/users"?"/usergren.png":"/userfoter.svg"}`}  alt="home" width={19} height={19} />
      </div>
    </div>
  );
}
