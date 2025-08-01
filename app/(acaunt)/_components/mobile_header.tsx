"use client"
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5';
import Menubar from './menubar';

export default function Mobileheader() {
  const router=useRouter()
  const pathname=usePathname()
  useEffect(()=>{
    if(pathname==="/wishlist"){
        setPageName("Likes")
    }
    else if(pathname==="/users"){
        setPageName("Users")
    }
    else {
        setPageName("Orders")
    }


  },[pathname])
  const [pageName,setPageName]=useState<string>("Users")
  return (
    <div className="max-w-full     flex justify-between    sm:hidden items-center mb-[20px]">
      <div
        onClick={() => router.push("/")}
        className="cursor-pointer  w-[35] flex items-center justify-center   h-[35] bg-white  border  rounded-full "
      >
        <IoChevronBackOutline size={20} className="text-[#3D3D3D]" />
      </div>
      <h1 className="text-[20px]  leading-[16px] font-bold text-[#3D3D3D]">
        {pageName}
      </h1>
      <div className='cursor-pointer h-full'>
        < Menubar />
      </div>
    </div>
  );
}
