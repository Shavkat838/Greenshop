"use client"
import { likeProductsRefresh } from "@/helpers/functions";
import { saveLike } from "@/redux/slices/likesSlice";
import { AppDispatch, RootState } from "@/redux/store"
import Image from "next/image";
import Link from "next/link";
import { FcLike } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"

export default function WishlistPage() {
  const dispatch=useDispatch<AppDispatch>()
  const {likes}=useSelector((state:RootState)=>state.like)
  likeProductsRefresh()

  
  function likeProduct(id:number){
   const currentLikeProduct=likes.find((item)=>item.id===id)
    dispatch(saveLike(currentLikeProduct))
  }



  if(likes.length===0){
    return <div className="max-w-full min-h-screen flex pt-[100px] justify-center">
      <h1 className="text-center text-2xl">Sizda sevimli mahsulotlar hozircha yo`q</h1>
    </div>
  }

  return (
    <div className="max-w-[868px] w-full grid gap-[15px] sm:gap-0 grid-cols-1  sm:grid-cols-3 sm:p-2">
      {likes.map((l,index) => (
        <div  key={index+1} className="card mx-auto sm:mx-0 shadow-md max-w-[258px] hover:border-t-2 hover:border-t-[#46A358]  p-2  w-full h-[350px] flex flex-col group">
          <div className="max-w-[258px] w-full  relative  h-[300px] flex items-center justify-center bg-[#FBFBFB]">
            <Link
              className="w-full h-full flex items-center justify-center"
              href={`detail/${l.id}`}
            >
              <Image
                src={l.images[0]}
                alt="photo"
                width={250}
                height={250}
                className="w-[90%] h-[95%] cursor-pointer"
                unoptimized
              />
            </Link>
            <div className="max-w-[90px] w-full h-[35px]  items-center hidden absolute bottom-0 left-[80px]   group-hover:flex justify-center ">
              <div className="cursor-pointer" onClick={()=>likeProduct(l.id)}>
                  <FcLike size={20} />
              </div>
            </div>
          </div>
          <p className="max-w-auto w-full text-[16px] leading-[16px] font-normal text-[#3D3D3D] mt-[12px]">
            {l.name}
          </p>
          <p className="text-[18px] leading-[16px] font-semibold text-[#46A358] mt-[10px]">
            {l.price}$
          </p>
        </div>
      ))}
    </div>
  );
}
