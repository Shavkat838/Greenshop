"use client"
import Carousel from "@/app/components/mobile-carousel";
import { likeProductsRefresh } from "@/helpers/functions";
import { handleQuantity, saveCart } from "@/redux/slices/cartSlice";
import { saveLike } from "@/redux/slices/likesSlice";
import { RootState } from "@/redux/store";
import { Products } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


type Props={
  description:string,
  images:string[],
  name:string,
  price:number,
  title:string,
  id:number,
  categoryId:number
  products:Products[]
}



export default function DetailComp({description,images,name,price,title,id,categoryId,products}:Props) {
  likeProductsRefresh()
  const [selectImage,setSelectImage]=useState(0)
  const {likes}=useSelector((state:RootState)=>state.like)
  const dispatch=useDispatch()
  const [quantity,setQuantity]=useState(1)


  function addTocart(){
    const obj={
      product:{description,images,name,price,id,categoryId},
      quantity
    }
    dispatch(saveCart(obj))
    toast.success("Mahsulot qo`shildi!")
  }

  function IncDec(param:string){
    if(param==="MINUS"){
      if(quantity>1){
        setQuantity(quantity-1)
      }
    }
    else{
      setQuantity(quantity+1)
    }
  }

  function handleSelect(index:number){
    setSelectImage(index);
  }



  function likeProduct(){
      const obj = { images, name, price, id, description, categoryId };
      dispatch(saveLike(obj))
    }
    
  return (
    <div className="max-w-[1200px]  w-full mx-auto     sm:flex sm:flex-col ">
      <p className="text-[#3D3D3D] hidden sm:block  mt-[35px] text-[15px] leading-[15px] font-medium">
        Shop/One Product
      </p>
      <div className="max-w-[1200px] mt-[40px]  w-full h-[448px] sm:flex sm:justify-between  ">
        <div className="max-w-[573px] w-full    sm:h-[448px] h-[356px]  sm:flex sm:justify-between">
          {/* turlari */}
          <div className="max-w-[100px] hidden  h-auto sm:flex flex-col gap-[16px]">
            {images.map((item, index) => (
              <div
                onClick={() => handleSelect(index)}
                key={index + 1}
                className={`w-[100px] h-[100px] cursor-pointer ${
                  selectImage === index
                    ? "border border-[#46A358] rounded-[2px]"
                    : ""
                }`}
              >
                <Image
                  src={item}
                  alt="greenphoto"
                  className="w-full h-full"
                  width={100}
                  height={100}
                  unoptimized
                />
              </div>
            ))}
          </div>
          {/* asosiy */}
          <div className="sm:max-w-[444px]   h-[356px]   w-full sm:h-[444px] sm:flex sm:items-center sm:justify-center">
            <Image
              src={images[selectImage]}
              alt="photo"
              width={404}
              height={404}
              className="w-full  h-full hidden sm:block"
              unoptimized
            />
            <Carousel images={images} />
          </div>
        </div>
        <div className="max-w-[414px] sm:max-w-[574px] w-full bg-white  rounded-[31px] sm:rounded-0 min-h-auto     sm:h-[448px] mt-[13px] sm:mt-0 ">
          <h1 className="text-[20px]  sm:text-[28px] leading-[16px] font-bold text-[#3D3D3D]">
            {name}
          </h1>
          <p className=" text-[20px] sm:text-[22px] leading-[16px] text-[#46A358]  font-bold   mt-[15px] sm:mt-[21px] ">
            ${price}
          </p>
          <div className="max-w-[573px] w-full border-[0.3px] border-[#46A35880] mt-[13px] hidden sm:block "></div>
          <p className="mt-[28px] hidden sm:block text-[#3D3D3D] text-[15px] leading-[16px]  font-medium">
            Short Description:
          </p>
          {/* descritpion */}
          <p className="text-[14px] leading-[24px]  font-normal text-[#727272] mt-[20px]  ">
            {description}
          </p>
          <div className="max-w-[464px] w-full h-[38px] flex justify-between  items-center mt-[74px] ">
            <div className="max-w-[119px] w-full h-[38px]  flex justify-between items-center ">
              <button
                onClick={() => IncDec("MINUS")}
                className="sm:w-[33px] sm:h-[38px]  w-[30px] h-[35px]   flex items-center justify-center bg-[#46A358]   rounded-[29px]"
              >
                <p className="text-[28px] cursor-pointer  leading-[16px] font-normal text-[#FFFFFF]">
                  -
                </p>
              </button>
              <p className="text-[20px] font-normal leading-[10px] text-[#3D3D3D]">
                {quantity}
              </p>
              <button
                onClick={() => IncDec("PLUS")}
                className="sm:w-[33px] w-[30px]  h-[35px]  cursor-pointer sm:h-[38px] flex items-center  justify-center bg-[#46A358] rounded-[29px]"
              >
                <p className="text-[28px]  leading-[16px] font-normal text-[#FFFFFF]">
                  +
                </p>
              </button>
            </div>
            <button className="max-w-[130px] hidden  w-full h-[40px] rounded-[6px] bg-[#46A358] text-white sm:flex  cursor-pointer items-center justify-center  text-[14px] leading-[20px] font-bold">
              BUY NOW
            </button>
            <button
              onClick={addTocart}
              className="border border-[#46A358] max-w-[130px] w-full h-[40px] rounded-[6px] bg-white text-[#46A358] text-[14px] cursor-pointer hover:bg-[#46A358] hover:text-white leading-[20px] font-bold flex items-center justify-center"
            >
              ADD TO CART
            </button>
            <div
              onClick={likeProduct}
              className="w-[40px]  h-[40px] border cursor-pointer  border-[#46A358] rounded-[6px] flex items-center justify-center"
            >
              {likes.find((c) => c.id === id) ? (
                <FcLike size={20} />
              ) : (
                <Image src={"/like.svg"} alt="photo" width={20} height={20} />
              )}
            </div>
          </div>
          <div className="max-w-full w-full h-[16px]">
            <p className="text-[15px] w-full leading-[16px] font-normal text-[#727272] mt-[26px]">
              Categories: <span className="text-[#646363]">{title}</span>
            </p>
          </div>
          <div className="flex items-center mt-[13px] gap-[20px]">
            <p>Share this products: </p>
            <div className="flex justify-between max-w-[100px] w-full items-center">
              <Image
                className="cursor-pointer"
                src={"/facebookicons.svg"}
                alt="photo"
                width={7.5}
                height={15}
              />
              <Image
                className="cursor-pointer"
                src={"/twittericons.svg"}
                alt="photo"
                width={15}
                height={12.5}
              />
              <Image
                className="cursor-pointer"
                src={"/linkedinicons.svg"}
                alt="photo"
                width={15}
                height={14}
              />
              <Image
                className="cursor-pointer"
                src={"/messageicons.svg"}
                alt="photo"
                width={18}
                height={18}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] w-full hidden sm:block  h-[449px]   mt-[40px] ">
        <h1 className="text-[#46A358] text-[17px] leading-[18px] font-bold ">
         Tegishli mahsulotlar
        </h1>
        <div className="max-w-[1200px] w-full  border-[0.3px]  border-[#46A35880] mt-[12px]"></div>
        {/* tegishli mahsulotlar cardi */}
        <div className="max-w-[1200px]  w-full  grid grid-cols-4 mt-[44px]">
          {products.filter((x)=>x.categoryId===categoryId&&x.id!==id).map((item, index) => (
            <div key={index+1}
              className={`card shadow-md  sm:mt-0 max-w-[175px]   sm:max-w-[258px] sm:hover:border-t-2 sm:hover:border-t-[#46A358]  p-2  w-full h-[245px] sm:h-[350px] flex flex-col }`}
            >
              <div className="max-w-[258px] w-full  relative  h-[300px] flex items-center justify-center bg-[#FBFBFB] group">
                <Link
                  className="w-full h-full flex items-center justify-center"
                  href={`/detail/${item.id}`}
                >
                  <Image
                    src={item.images[0]}
                    alt="photo"
                    width={168}
                    height={168}
                    className="w-[90%] h-[95%] sm:w-[250px] sm:h-[250px]  cursor-pointer"
                    unoptimized
                  />
                </Link>
              </div>
              <p className="max-w-auto w-full text-[15px] sm:text-[16px] leading-[16px] font-normal text-[#3D3D3D] mt-[12px]">
                {item.name}
              </p>
              <p className=" text-[16px] sm:text-[18px] leading-[16px] font-semibold text-[#46A358] mt-[10px]">
                {item.price}$
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
