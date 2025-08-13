"use client "
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { RxHamburgerMenu } from 'react-icons/rx';
import React from 'react'
import { CiLogin } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { getId } from '@/redux/slices/userSlice';

export default function Menubar() {
  const dispatch=useDispatch()
  const router=useRouter()
  return (
    <Menu>
      <MenuButton>
        <RxHamburgerMenu className="cursor-pointer mt-[5px]" size={20} />
      </MenuButton>
      <MenuItems
        className={"w-[380px] h-[140px] bg-white p-[10px] border-0.3 border-gray-300 gap-[5px] flex flex-col "}
        anchor="bottom"
      >
        <MenuItem>
          <a
            className="block text-[16px] data-focus:bg-blue-100 text-gray-500 "
            href="/users"
          >
            Users
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className="block text-[16px] data-focus:bg-blue-100 text-gray-500 "
            href="/orders"
          >
            Orders
          </a>
        </MenuItem>
        <MenuItem>
          <a
            className="block text-[16px] data-focus:bg-blue-100 text-gray-500"
            href="/wishlist"
          >
            Wishlist
          </a>
        </MenuItem>
        <MenuItem>
      <button className="max-w-[78px] w-full cursor-pointer mt-[10px]  h-[20px] flex justify-between items-center">
        <CiLogin size={20} className="text-[#46A358]" />
        <p    onClick={() => {
                      router.push("/");
                      localStorage.removeItem("id");
                      localStorage.removeItem("role")
                      dispatch(getId())
        }} className="text-[15px] leading-[15px]  font-bold text-[#46A358]">
          Loguot
        </p>
      </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
