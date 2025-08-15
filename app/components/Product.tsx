"use client"
import { likeProductsRefresh } from "@/helpers/functions";
import { saveCart } from "@/redux/slices/cartSlice";
import {  saveLike } from "@/redux/slices/likesSlice";
import { AppDispatch, RootState,} from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

type Props={
  id:number;
  description:string;
  name:string;
  price:number;
  images:string[];
  categoryId:number;
  index:number
}


export default function Product({images,name,price,id,description,categoryId,index}:Props) {

likeProductsRefresh()


const {likes}=useSelector((state:RootState)=>state.like)
const dispatch=useDispatch<AppDispatch>()

  function handleCart(){
   const obj = {
     product: { images, name, price, id, description, categoryId },
     quantity:1
   };
   dispatch(saveCart(obj))
   toast.success("Mahsulot qo`shildi!")
  }


  function likeProduct(){
    const obj = { images, name, price, id, description, categoryId };
    dispatch(saveLike(obj))
  }
  
  return (
    <div className={`card shadow-md  sm:mt-0 max-w-[175px] ${index%2===0?"mt-0":"mt-[31px]"}  sm:max-w-[258px] sm:hover:border-t-2 sm:hover:border-t-[#46A358]  p-2 mb-2  w-full h-[245px] sm:h-[350px] flex flex-col }`}>
      <div className="max-w-[258px] w-full  relative  h-[300px] flex items-center justify-center group">
        <Link
          className="w-full h-full flex items-center justify-center"
          href={`detail/${id}`}
        >
          <Image
            src={images[0]}
            alt="photo"
            width={168}
            height={168}
            className="w-[90%] h-[95%] sm:w-[250px] sm:h-[250px]  cursor-pointer"
          />
        </Link>
        <div onClick={likeProduct} className="sm:hidden absolute cursor-pointer top-0 right-0">
          {likes.find((c) => c.id === id) ? (
            <FcLike size={20} />
          ) : (
            <Image src={"/like.svg"} alt="photo" width={20} height={20} />
          )}
        </div>
        <div className="max-w-[90px] w-full h-[35px] hidden   items-center absolute bottom-0 left-[80px] sm:group-hover:flex   justify-around ">
          <Image
            onClick={handleCart}
            src={"/cart.svg"}
            alt="photo"
            className="cursor-pointer"
            width={20}
            height={20}
          />
          <div className="cursor-pointer" onClick={likeProduct}>
            {likes.find((c) => c.id === id) ? (
              <FcLike size={20} />
            ) : (
              <Image src={"/like.svg"} alt="photo" width={20} height={20} />
            )}
          </div>
        </div>
      </div>
      <p className="max-w-auto w-full text-[15px] sm:text-[16px] leading-[16px] font-normal text-[#3D3D3D] mt-[10px]  sm:mt-[12px]">
        {name}
      </p>
      <p className=" text-[16px] sm:text-[18px] leading-[16px] font-semibold text-[#46A358] mt-[5px] sm:mt-[10px]">
        {price}$
      </p>
    </div>
  );
}
