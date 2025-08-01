"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoChevronBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

interface Props {
  images: string[];
}

export default function Carousel({ images }: Props) {
  const router=useRouter()
  return (
    <div className="w-full sm:hidden relative ">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        className="w-full h-[356px] rounded-xl"
        loop={true}
      >
        <div  onClick={()=>router.back()} className="absolute top-0 cursor-pointer  left-0  w-[35] flex items-center justify-center   h-[35] bg-white  z-50 border  rounded-full ">
          <IoChevronBackOutline size={20} className="text-[#3D3D3D]" />
        </div>
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[356px]">
              <Image
                src={img}
                alt={`image-${i}`}
                className="w-[100%] h-[100%] "
                width={356}
                height={356}
                unoptimized
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
