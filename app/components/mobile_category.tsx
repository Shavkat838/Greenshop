"use client"
import { filterCategory } from "@/redux/slices/categorySlice";
import { searchProduct } from "@/redux/slices/productSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { Products } from "@prisma/client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
  categories: {
    id: number;
    title: string;
    product: Products[];
  }[];
}

export default function Mobilecategory({ categories }: Props) {
  const dispatch = useDispatch<AppDispatch>();
  const { filteredId } = useSelector((state: RootState) => state.category);
  return (
    <div className="max-w-[366px] overflow-scroll overflow-y-hidden scrollbar-none sm:hidden flex items-center whitespace-nowrap gap-[30px] ">
      {categories.map((item, index) => (
        <p
          onClick={() =>{
           if (filteredId === item.id){ dispatch(filterCategory(-1))}else
              {dispatch(filterCategory(item.id)), dispatch(searchProduct(""))}
           } }
          key={index + 1}
          className={` ${
            filteredId === item.id ? "text-[#46A358]" : "text-[#3D3D3D]"
          }   text-[14px] cursor-pointer  group-hover:text-[#46A358] leading-[40px] font-medium`}
        >
          {item.title} <span>({item.product.length})</span>
        </p>
      ))}
    </div>
  );
}
