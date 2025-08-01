"use client"
import { filterCategory } from '@/redux/slices/categorySlice';
import { searchProduct } from '@/redux/slices/productSlice';
import { getId, setVisible } from '@/redux/slices/userSlice';
import { AppDispatch, RootState } from '@/redux/store';
import React from 'react'
import { CiLogin, CiLogout } from 'react-icons/ci';
import { IoMdSearch } from 'react-icons/io';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


export default function MobileHeader() {
  const {searchValue}=useSelector((state:RootState)=>state.productsSlice)
  const {localId}=useSelector((state:RootState)=>state.users)
  
  const dispatch=useDispatch<AppDispatch>()



  return (
    <div className="max-w-[366px] sm:hidden w-full h-[45px]  mt-[20px] flex gap-[8px]">
      <div className="relative  max-w-[313px] w-full h-[45px] rounded-[10px]  bg-[#F8F8F8]">
        <IoMdSearch size={20} color="gray" className=" absolute top-3 left-5" />
        <input
          value={searchValue}
          onChange={(e) => {
            dispatch(searchProduct(e.target.value))
            dispatch(filterCategory(-1));
          }}
          type="search"
          className="max-w-[313px] w-full h-[100%]  pl-[50px] placeholder:text-[#A5A5A5] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[16px]  "
          placeholder="search..."
        />
      </div>
      <button
        onClick={() =>{
          if (!localStorage.getItem("id")) {
            dispatch(setVisible(true));
          } else {
            localStorage.removeItem("id");
            dispatch(getId());
          }
        }}
        className="w-[45px] h-[45px]  cursor-pointer  font-medium  bg-[#46A358] rounded-[14px] flex items-center justify-center"
      >
        { localId===0  ? (
          <CiLogin size={20} color="white" />
        ) : (
          <CiLogout size={20} color='white' />
        )}
      </button>
    </div>
  );
}
