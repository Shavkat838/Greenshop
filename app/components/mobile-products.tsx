"use client"
import { RootState } from '@/redux/store';
import { Products } from '@prisma/client';
import React from 'react'
import { FaSpinner } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Product from './Product';

interface Props{
    products:Products[]
    categories:{
        id:number;
        title:string;
        product:Products[]
    }[]
}

export default function Mobileproducts({products,categories}:Props) {
    const {filteredId}=useSelector((state:RootState)=>state.category)
    const {searchValue}=useSelector((state:RootState)=>state.productsSlice)
  return (
    <div className="max-w-[1200px] w-full sm:hidden gap-[10px]  mt-[25px]  min-h-auto  grid  grid-cols-2  ">
                  {!products ? (
                    <FaSpinner size={25} className="animate-spin text-center" />
                  ) : filteredId === -1 &&searchValue===""  ?  (
                    products.map((item, index) => <Product index={index} key={index + 1} {...item} />)
                  ) :  filteredId===-1&&searchValue!==""?(products.filter((c)=>c.name.toLowerCase().includes(searchValue.toLowerCase())).map((item,index)=>  <Product key={index + 1} index={index} {...item} />)):(
                    categories
                      .find((c) => c.id === filteredId)
                      ?.product.map((item, index) => (
                        <Product key={index + 1} index={index} {...item} />
                      ))
                  )}
    </div>
  );
}
