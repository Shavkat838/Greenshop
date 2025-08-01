import Image from 'next/image';
import React from 'react'

export default function Footer() {
  return (
    <div className="max-w-[1200px] hidden  bg-[#FBFBFB]  w-full min-h-[610px] mt-[100px] sm:flex flex-col mx-auto">
      <div className="max-w-[1200px] w-full h-[250px]  flex items-center justify-center">
        <div className="max-w-[1152px] w-full h-[201px] flex gap-[27px]">
          <div className="flex gap-[34px] ">
            <div className="max-w-[204px] w-full h-[196px]  ">
              <div className="relative h-[96px] max-w-[74px] w-full">
                <Image
                  className="z-0 absolute bottom-0 "
                  src={"/circle.svg"}
                  alt="photo"
                  width={72}
                  height={72}
                />
                <Image
                  src={"/greentop.svg"}
                  alt="photo"
                  width={61}
                  height={46}
                  className="top-1 right-0 absolute"
                />
                <Image
                  src={"/greenb.svg"}
                  alt="photo"
                  width={55}
                  height={48}
                  className="bottom-0 right-1 absolute"
                />
              </div>
              <h1 className="text-[17px] mt-[12px]  leading-[16px] text-[#3D3D3D]  font-bold ">
                Garden Care
              </h1>
              <p className="font-medium text-[14px] mt-[9px] leading-[22px] text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="h-[187] border-1 border-[#46A3581A] ml-[34px] "></div>
          </div>
          <div className="flex gap-[34px] ">
            <div className="max-w-[204px] w-full h-[196px]  ">
              <div className="relative h-[96px] max-w-[74px] w-full">
                <Image
                  className="z-0 absolute bottom-0 "
                  src={"/circle.svg"}
                  alt="photo"
                  width={72}
                  height={72}
                />
                <Image
                  src={"/greent2.svg"}
                  alt="photo"
                  width={35}
                  height={39}
                  className="top-2 right-4 absolute"
                />
                <Image
                  src={"/greenb2.svg"}
                  alt="photo"
                  width={68}
                  height={49}
                  className="bottom-0 right-0 absolute"
                />
              </div>
              <h1 className="text-[17px] mt-[12px]  leading-[16px] text-[#3D3D3D]  font-bold ">
                Plant Renovation
              </h1>
              <p className="font-medium text-[14px] mt-[9px] leading-[22px] text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="h-[187] border-1 border-[#46A3581A] ml-[34px] "></div>
          </div>
          <div className="flex gap-[34px] ">
            <div className="max-w-[204px] w-full h-[196px]  ">
              <div className="relative h-[96px] max-w-[74px] w-full">
                <Image
                  className="z-0 absolute bottom-0 "
                  src={"/circle.svg"}
                  alt="photo"
                  width={72}
                  height={72}
                />
                <Image
                  src={"/greent3.svg"}
                  alt="photo"
                  width={44}
                  height={49}
                  className="top-4 right-2 absolute"
                />
                <Image
                  src={"/greenb3.svg"}
                  alt="photo"
                  width={83}
                  height={40}
                  className="bottom-0 -right-1 absolute"
                />
              </div>
              <h1 className="text-[17px] mt-[12px]  leading-[16px] text-[#3D3D3D]  font-bold ">
                Watering Graden
              </h1>
              <p className="font-medium text-[14px] mt-[9px] leading-[22px] text-[#727272]">
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div>
              <h1 className="text-[18px] leading-[16px] font-bold text-[#3D3D3D]">
                Would you like to join newsletters?
              </h1>
              <div className="max-w-[354px] w-full mt-[18px] h-[40px] bg-white flex justify-between rounded-[6px] ">
                <input
                  type="text"
                  placeholder="enter your email adddress..."
                  className="max-w-[269px] w-fullh-[40px] placeholder:text-[14px] placeholder:leading-[16px] px-[10px] placeholder:font-normal placeholder:text-[#ACACAC] "
                />
                <button className="max-w-[85px]  cursor-pointer  w-full h-[40px] rounded-tr-[6px] text-white rounded-br-[6px] bg-[#46A358] ">
                  Join
                </button>
              </div>
              <p className="mt-[17px] text-[13px] max-w-[354px] w-full leading-[22px] font-normal text-[#727272] ">
                We usually post offers and challenges in newsletter. We`re your
                online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] w-full h-[88px] px-[23px] bg-[#46A3581A] flex items-center gap-[90px] ">
        <Image src={"/Logo.svg"} alt="photo" width={150} height={33} />
        <div className="max-w-[205px] w-full  flex gap-[9px]  items-center">
          <Image src={"/location.svg"} alt="photo" width={20} height={20} />
          <p className="text-[14px]  w-full  leading-[22px]  text-[#3D3D3D] font-normal">
            70 West Buckingham Ave. Farmingdale, NY 11735
          </p>
        </div>
        <div className="max-w-[205px] w-full  h-[44px] flex gap-[9px]  items-center">
          <Image src={"/email.svg"} alt="photo" width={20} height={20} />
          <p className="text-[14px] leading-[22px]  text-[#3D3D3D] font-normal ">
            contact@greenshop.com
          </p>
        </div>
        <div className="max-w-[205px] w-full  h-[44px] flex gap-[9px]  items-center">
          <Image src={"/contact.svg"} alt="photo" width={20} height={20} />
          <p className="text-[14px] leading-[22px]  text-[#3D3D3D] font-normal">
            +88 01911 717 490
          </p>
        </div>
      </div>
      <div className="max-w-[1200px] w-full flex h-[236px] gap-[185px] px-[23px] items-center ">
        <div>
          <h1 className="text-[18px] leading-[16px] text-[#3D3D3D] font-bold ">
            My Account
          </h1>
          <div className="max-w-auto w-full h-[150px] flex flex-col mt-[8px]">
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              My Account
            </p>
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              Our stores
            </p>
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              Contact us
            </p>
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              Career
            </p>
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              Specials
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-[18px] leading-[16px] text-[#3D3D3D] font-bold ">
            Help & Guide
          </h1>
          <div className="max-w-[137px] w-full h-[150px] flex flex-col mt-[8px]">
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              Help Center
            </p>
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              How to Buy
            </p>
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              Shipping & Delivery
            </p>
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              Product Policy
            </p>
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              How to return
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-[18px] leading-[16px] text-[#3D3D3D] font-bold ">
            Categories
          </h1>
          <div className="max-w-auto w-full h-[150px] flex flex-col mt-[8px]">
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              House Plants
            </p>
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              Potter Plants
            </p>
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              Seeds
            </p>
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              Small Plants
            </p>
            <p className="text-[14px] leading-[30px] text-[#3D3D3D] font-normal">
              Accessories
            </p>
          </div>
        </div>
        <div  >
          <h1 className="text-[18px] leading-[16px] text-[#3D3D3D] font-bold ">
            Social media
          </h1>
          <div className=" h-[150px] flex flex-col mt-[20px]">
            <div className="flex gap-[10px]">
              <div className="w-[30px] h-[30px] rounded-[4px]  border border-[#46A35833] flex items-center justify-center ">
                <Image
                  src={"/facebook.svg"}
                  alt="photo"
                  width={8}
                  height={16}
                />
              </div>
              <div className="w-[30px] h-[30px] rounded-[4px]  border border-[#46A35833]  flex items-center justify-center ">
                <Image
                  src={"/instagramm.svg"}
                  alt="photo"
                  width={16}
                  height={16}
                />
              </div>
              <div className="w-[30px] h-[30px] rounded-[4px]  border border-[#46A35833]  flex items-center justify-center ">
                <Image
                  src={"/twitter.svg"}
                  alt="photo"
                  width={16}
                  height={13}
                />
              </div>
              <div className="w-[30px] h-[30px] rounded-[4px]  border border-[#46A35833]  flex items-center justify-center ">
                <Image
                  src={"/linkedin.svg"}
                  alt="photo"
                  width={16}
                  height={16}
                />
              </div>
              <div className="w-[30px] h-[30px] rounded-[4px]  border border-[#46A35833]  flex items-center justify-center ">
                <Image
                  src={"/camera.svg"}
                  alt="photo"
                  width={18}
                  height={13}
                />
              </div>
            </div>
            <h1 className=' text-[18px] leading-[16px] mt-[40px] text-[#3D3D3D] font-bold'  >We accept</h1>
            < Image className='mt-[13px]' src={'/carta.svg'} alt='photo' width={224} height={26}/>
          </div>
        </div>
      </div>
    </div>
  );
}
