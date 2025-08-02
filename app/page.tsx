import Image from "next/image";
import Product from "./components/Product";
import prisma from "@/lib/db";
import { FaSpinner } from "react-icons/fa";
import Mobilecategory from "./components/mobile_category";
import Link from "next/link";
import Mobilefooter from "./_Footer/mobile-footer";
import MobileHeader from "./_Header/mobile-header";
import Mobileproducts from "./components/mobile-products";



export default async function Home() {
const products=await prisma.products.findMany();
  const categories = await prisma.category.findMany({
    include: {
      product: true,
    },
  });


  return (
    <div className="max-w-[366px] sm:max-w-[1200px]  w-full flex flex-col mx-auto items-center">
      <MobileHeader />
      {/* navbar */}
      <div className="mt-[12px]  bg-[#e6f1e9] sm:bg-[#F5F5F580] max-w-[366px]  sm:max-w-[1200px] rounded-[20px] sm:pl-[40px]  w-full sm:h-[450px] flex justify-between ">
        <div className="mt-[24px] pl-[23px] sm:mt-[68px]">
          <p className=" text-[11px] sm:text-[14px] font-medium   leading-[16px]  text-[#3D3D3D] ">
            WELCOME TO GREENSHOP
          </p>
          <h1 className=" text-[24px]  sm:text-[70px] max-w-[530px] w-full sm:mt-[10px] leading-[29px] sm:leading-[80px] font-black text-[#3D3D3D] ">
            LET`S MAKE A BETTER
            <span className="text-[#46A358]">PLANET</span>
          </h1>
          <p className="font-normal max-w-[557px] w-full line-clamp-2  mt-[3px] sm:mt-[15px] text-[12px] sm:text-[14px] leading-[18px] sm:leading-[21px] text-[#727272]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create an unique Urban Jungle.
            Order your favorite plants!
          </p>
          <Link href={"/cart"}>
            <button className="text-[12px] w-[83px] leading-[14px] text-[#46A358] mb-[24px]  sm:max-w-[140px] sm:w-full  h-[16px] sm:h-[40px] rounded-[6px] sm:bg-[#46A358] sm:text-[16px] sm:leading-[20px] font-bold cursor-pointer  text-start sm:text-center sm:text-white mt-[15px] sm:mt-[44px]">
              SHOP NOW
            </button>
          </Link>
        </div>
        <div className="max-w-[518px]  w-full sm:h-[450px]  flex items-center justify-center relative   ">
          <Image src={"/greencard.svg"} alt="photo" width={518} height={450} />
          <div className="absolute right-20 bottom-9 sm:bottom-0 sm:left-[50px]">
            <Image
              src={"/childgreen.svg"}
              alt="photo"
              className="sm:w-[135px]  sm:h-[135px]"
              width={82}
              height={82}
            />
          </div>
        </div>
      </div>
      <div className="max-w-[366px] w-full sm:hidden mt-[19px] h-[30px]">
        <Mobilecategory categories={categories} />
      </div>
      {/*  Products */}
      <div className="max-w-[1200px] hidden   w-full  sm:mt-[20px] gap-[10px] sm:gap-[50px]  min-h-auto  sm:grid   sm:grid-cols-4 space-y-[50px]">
        {!products ? (
          <FaSpinner size={25} className="animate-spin text-center" />
        ) : (
          products.map((item, index) => (
            <Product key={index + 1} {...item} index={index} />
          ))
        )}
      </div>
      <div>
        <Mobileproducts products={products} categories={categories} />
      </div>
      {/* info page */}
      <div className="max-w-[1205px] hidden  w-full h-[302px] sm:flex justify-between items-end  mt-[94px]">
        <div className="max-w-[586px] w-full h-[250px] flex justify-between items-center  bg-[#FBFBFB]">
          <Image
            className="mb-[60px]"
            src={"/summergreen.svg"}
            alt="photo"
            width={292}
            height={292}
          />
          <div className="flex flex-col items-end  ">
            <h1 className="font-black text-[18px] text-right leading-[24px]  max-w-[150px] text-[#3D3D3D] ">
              Summer cactus & succulents
            </h1>
            <p className="text-[14px] font-normal text-right max-w-[292px] text-[#727272]  mt-[10px] ">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <button className="max-w-[140px] w-full text-white text-[14px] leading-[20px] font-medium bg-[#46A358] mt-[25px]  h-[40px] rounded-[6px]">
              Find more
            </button>
          </div>
        </div>
        <div className="max-w-[586px] w-full h-[250px] flex justify-between items-center  bg-[#FBFBFB]">
          <Image
            className="mb-[60px]"
            src={"/stylinggreen.svg"}
            alt="photo"
            width={292}
            height={292}
          />
          <div className="flex flex-col items-end  ">
            <h1 className="font-black text-[18px] text-right leading-[24px]  max-w-[150px] text-[#3D3D3D] ">
              Styling Trends & much more
            </h1>
            <p className="text-[14px] font-normal text-right max-w-[292px] text-[#727272]  mt-[10px] ">
              We are an online plant shop offering a wide range of cheap and
              trendy plants
            </p>
            <button className="max-w-[140px] w-full text-white text-[14px] leading-[20px] font-medium bg-[#46A358] mt-[25px]  h-[40px] rounded-[6px]">
              Find more
            </button>
          </div>
        </div>
      </div>
      <div className="mt-[138px] hidden  max-w-[1202px] w-full h-[447px] sm:flex flex-col items-center ">
        <h1 className="max-w-[228px]  w-full text-[30px] leading-[14px] font-bold text-[#3D3D3D] ">
          Our Blog Posts
        </h1>
        <p className="text-[#727272] font-normal text-[14px] leading-[24px] mt-[15px]">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
        <div className="max-w-[1202px] w-full flex justify-between mt-[35px]">
          <div className="max-w-[268px] w-full h-[352px]">
            <Image src={"/kaktus.svg"} alt="photo" width={268} height={195} />
            <div className="max-w-[268px] w-full  h-[167px] p-[12px]">
              <p className="text-[14px] leading-[16px] font-medium  text-[#46A358] ">
                September 12 I Read in 6 minutes
              </p>
              <h3 className="max-w-[220px] w-full   text-[20px] leading-[26px] font-bold text-[#3D3D3D] mt-[4px]">
                Cactus & Succulent Care Tips
              </h3>
              <p className="max-w-[242px] w-full text-[14px] leading-[22px] text-[#727272] mt-[4px]  font-normal">
                Cacti are succulents are easy care plants for any home or patio.
              </p>
              <h1 className="font-medium text-[14px] cursor-pointer leading-[16px] text-[#3D3D3D] mt-[9px]">
                Read More
              </h1>
            </div>
          </div>
          <div className="max-w-[268px] w-full h-[352px]">
            <Image src={"/blog2.svg"} alt="photo" width={268} height={195} />
            <div className="max-w-[268px] w-full  h-[167px] p-[12px]">
              <p className="text-[14px] leading-[16px] font-medium  text-[#46A358] ">
                September 13 I Read in 2 minutes
              </p>
              <h3 className="max-w-[189px] w-full  text-[20px] leading-[26px] font-bold text-[#3D3D3D] mt-[4px]">
                Top 10 Succulents for Your Home
              </h3>
              <p className="max-w-[242px] w-full text-[14px] leading-[22px] text-[#727272] mt-[4px]  font-normal">
                Best in hanging baskets. Prefers medium to high light.
              </p>
              <h1 className="font-medium text-[14px] cursor-pointer leading-[16px] text-[#3D3D3D] mt-[9px]">
                Read More
              </h1>
            </div>
          </div>
          <div className="max-w-[268px] w-full h-[352px]">
            <Image src={"/blog3.svg"} alt="photo" width={268} height={195} />
            <div className="max-w-[268px] w-full  h-[167px] p-[12px]">
              <p className="text-[14px] leading-[16px] font-medium  text-[#46A358] ">
                September 15 I Read in 3 minutes
              </p>
              <h3 className="max-w-[189px] w-full  text-[20px] leading-[26px] font-bold text-[#3D3D3D] mt-[4px]">
                Cacti & Succulent Care Tips
              </h3>
              <p className="max-w-[242px] w-full text-[14px] leading-[22px] text-[#727272] mt-[4px]  font-normal">
                Cacti and succulents thrive in containers and because most are..
              </p>
              <h1 className="font-medium text-[14px] cursor-pointer leading-[16px] text-[#3D3D3D] mt-[9px]">
                Read More
              </h1>
            </div>
          </div>
          <div className="max-w-[268px] w-full h-[352px]">
            <Image src={"/blog4.svg"} alt="photo" width={268} height={195} />
            <div className="max-w-[268px] w-full  h-[167px] p-[12px]">
              <p className="text-[14px] leading-[16px] font-medium  text-[#46A358] ">
                September 15 I Read in 2 minutes
              </p>
              <h3 className="max-w-[189px] w-full  text-[20px] leading-[26px] font-bold text-[#3D3D3D] mt-[4px]">
                Best Houseplants Room by Room
              </h3>
              <p className="max-w-[242px] w-full text-[14px] leading-[22px] text-[#727272] mt-[4px]  font-normal">
                The benefits of houseplants are endless. In addition to..
              </p>
              <h1 className="font-medium text-[14px] cursor-pointer leading-[16px] text-[#3D3D3D] mt-[9px]">
                Read More
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Mobilefooter />
    </div>
  );
}
