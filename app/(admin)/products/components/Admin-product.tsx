"use client"
import useEffektHooks from '@/helpers/functions';
import { editingId } from '@/redux/slices/productSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { createClient } from '@/utils/supabase/client';
import { Products } from '@prisma/client'
import Image from 'next/image'

import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


export default function AdProduct({price,images,name,id,description,categoryId}:Products) {


  const {isDeleteError,isDeleteLoading,}=useSelector((state:RootState)=>state.productsSlice)
  const dispatch=useDispatch<AppDispatch>()
 
   useEffektHooks(isDeleteLoading,isDeleteError);
   const supabase=createClient()


  function handleDelete(){
      dispatch({type:"PRODUCT/DELETE",payload:id}) 
      imagesRemove()  
  }

 async function imagesRemove(){
  const arr=[]
  for(let i=0;i<images.length;i++){
   arr.push(images[i].slice(images[i].indexOf("greenpro//") + 10)); 
  }
  try {
    await supabase.storage
      .from("greenpro")
      .remove(arr);
  } catch (error) {
    console.log(error)
  }
 }



  return (
    <div className="card max-w-[258px] hover:border-t-2 hover:border-t-[#46A358] cursor-pointer  w-full h-[350px] flex flex-col group ">
      <div className="max-w-[258px] w-full relative  h-[300px] flex items-center justify-center bg-[#FBFBFB]">
        <Image
          src={images[0]}
          alt="photo"
          className="w-full h-full bg-[#FBFBFB]"
          width={250}
          height={250}
          unoptimized
        />
        <div className="max-w-[90px] w-full h-[35px]  items-center hidden absolute bottom-0 left-[80px]   group-hover:flex justify-around ">
          <FiEdit
            onClick={() =>
              dispatch(
                editingId({ id, description, price, categoryId, images, name })
              )
            }
            size={24}
            color="yellow"
          />
          <MdDelete onClick={handleDelete} color="red" size={24} />
        </div>
      </div>
      <p className="max-w-auto w-full text-[16px] leading-[16px] font-normal text-[#3D3D3D] mt-[12px]">
        {name}
      </p>
      <p className="text-[18px] leading-[16px] font-bold text-[#46A358] mt-[6px]">
        {price}$
      </p>
    </div>
  );
}
