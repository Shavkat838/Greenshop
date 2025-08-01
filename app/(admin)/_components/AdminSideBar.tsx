"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineProduct } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import {  CiLogin, CiUser } from "react-icons/ci";
import { FaBlog } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

export default function AdminSidebar() {
  const pathname=usePathname()
  return (
    <div className="max-w-[310px] w-full  bg-[#FBFBFB] ">
      <h1 className="text-[18px] leading-[16px] font-[#3D3D3D] p-[18px] font-bold">
        Admin Page
      </h1>
      <Link href={"/products"}>
        <div
          className={`max-w-[310px] h-[39px]  cursor-pointer ${
            pathname === "/products"
              ? "bg-white  border-l-3 border-l-[#46A358] "
              : ""
          }  w-full flex px-[18px] items-center mt-[5px]  gap-[12px]`}
        >
          <AiOutlineProduct
            className={`w-[18px] h-[18px]  ${
              pathname === "/products" ? " text-[#46A358] " : "text-[#727272]"
            } `}
          />
          <p
            className={`text-[15px]  ${
              pathname === "/products"
                ? "text-[#46A358] font-bold "
                : "text-[#727272]  font-normal"
            }   leading-[45px]   `}
          >
            Products
          </p>
        </div>
      </Link>
      <Link href={"/categories"}>
        <div
          className={`max-w-[310px] ${
            pathname === "/categories"
              ? "bg-white  border-l-3 border-l-[#46A358]"
              : ""
          } h-[39px] cursor-pointer w-full flex items-center px-[18px] mt-[5px] gap-[12px]`}
        >
          <BiCategory
            className={`w-[18] h-[18]  ${
              pathname === "/categories" ? "text-[#46A358]" : " text-[#727272]"
            } `}
          />
          <p
            className={`text-[15px]  ${
              pathname === "/categories"
                ? "text-[#46A358] font-bold"
                : "text-[#727272]  font-normal"
            } leading-[45px]`}
          >
            Categories
          </p>
        </div>
      </Link>
      <Link href={"/adorders"}>
        <div
          className={`max-w-[310px] h-[39px]  ${
            pathname === "/adorders"
              ? "bg-white  border-l-3 border-l-[#46A358]"
              : ""
          }  cursor-pointer w-full flex items-center px-[18px] mt-[5px] gap-[12px]`}
        >
          <LuShoppingCart
            className={`w-[18] h-[18]  ${
              pathname === "/adorders" ? "text-[#46A358]" : " text-[#727272]"
            } `}
          />
          <p
            className={`text-[15px]  ${
              pathname === "/adorders"
                ? "text-[#46A358] font-bold"
                : "text-[#727272]  font-normal"
            } leading-[45px]`}
          >
            Orders
          </p>
        </div>
      </Link>
      <Link href={"/adusers"}>
        <div
          className={`max-w-[310px] h-[39px] ${
            pathname === "/adusers"
              ? "bg-white  border-l-3 border-l-[#46A358]"
              : ""
          }   cursor-pointer w-full flex items-center px-[18px] gap-[12px] mt-[5px]`}
        >
          <CiUser
            className={`w-[18] h-[18]  ${
              pathname === "/adusers" ? "text-[#46A358]" : " text-[#727272]"
            } `}
          />
          <p
            className={`text-[15px]  ${
              pathname === "/adusers"
                ? "text-[#46A358] font-bold"
                : "text-[#727272]  font-normal"
            } leading-[45px]`}
          >
            Users
          </p>
        </div>
      </Link>
      <Link href={"/adblogs"}>
        <div
          className={`max-w-[310px] h-[39px] ${
            pathname === "/adblogs"
              ? "bg-white  border-l-3 border-l-[#46A358]"
              : ""
          }   cursor-pointer w-full flex items-center px-[18px] gap-[12px] mt-[5px]`}
        >
          <FaBlog
            className={`w-[18] h-[18]  ${
              pathname === "/adblogs" ? "text-[#46A358]" : " text-[#727272]"
            } `}
          />
          <p
            className={`text-[15px]  ${
              pathname === "/adblogs"
                ? "text-[#46A358] font-bold"
                : "text-[#727272]  font-normal"
            } leading-[45px]`}
          >
            Blogs
          </p>
        </div>
      </Link>
      <div className="max-w-[307px] w-full border-[0.3px] mt-[25px] border-[#46A35880]"></div>
      <button className="max-w-[78px] w-full cursor-pointer  h-[20px] mt-[21px] ml-[25px] flex justify-between items-center">
        <CiLogin size={20} className="text-[#46A358]" />
        <p className="text-[15px] leading-[15px]  font-bold text-[#46A358]">
          Loguot
        </p>
      </button>
    </div>
  );
}
