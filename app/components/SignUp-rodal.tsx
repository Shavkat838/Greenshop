"use client"
import { setloginVisible } from '@/redux/slices/userSlice';
import { AppDispatch, RootState } from '@/redux/store';
import { Dialog } from '@headlessui/react';
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


interface Inputs{
    email:string;
    password:string;
    passwordrepaet:string;
}

export default function SignUpModal() {
    const [close,setClose]=useState(false)
    const {loginvisible,getLoading}=useSelector((state:RootState)=>state.users)
    const dispatch=useDispatch<AppDispatch>()
    const {register,handleSubmit,reset,formState:{ errors}}=useForm<Inputs>()
    
  useEffect(() => {
    if(!getLoading){
       dispatch(setloginVisible(false))
       reset()
    }
  }, [getLoading]);

const mySubmit: SubmitHandler<Inputs> = (data) =>{
  if(data.password!==data.passwordrepaet){
    toast.info("Parol va tasdig`i to`g`ri kelmaydi!")
    return
  }
  const obj={
    email:data.email,
    password:data.password
  }
  dispatch({type:"GET/USER",payload:obj})
}

    if (!loginvisible) {
      return <div></div>;
    }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Dialog
        open={loginvisible}
        onClose={() => dispatch(setloginVisible(false))}
        className="relative z-50"
      >
        <div className="fixed inset-0  bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0  flex items-center justify-center">
          <Dialog.Panel className="bg-white  w-[360px]    sm:w-[400px]  sm:h-[420px] py-[52px]  shadow-xl">
            <form
              onSubmit={handleSubmit(mySubmit)}
              className="flex flex-col items-center "
            >
              <div className="w-full h-[16px]">
                <h1 className="text-[20px] text-center leading-[16px] text-[#46A358] font-medium">
                  Tizimga kiring
                </h1>
              </div>
              <p className="mt-[45px]  text-[13px] leading-[16px] font-normal text-[#3D3D3D]">
                Kirish uchun email va parolingizni kiriting
              </p>
              <div className="flex flex-col w-full items-center gap-[12px] mt-[10px] ">
                <input
                  {...register("email", { required: true })}
                  placeholder="Email..."
                  type="email"
                  className={`max-w-[300px]  w-full border-1 border-[#EAEAEA] ${
                    errors.email&& "border-1 border-red-500 animate-bounce"
                  } rounded-[5px]  h-[40px] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A5A5A5] placeholder:font-normal pl-[15px] flex items-center`}
                />
                <div className="relative max-w-[300px] w-full ">
                  <input
                    {...register("password", { required: true })}
                    placeholder="Parol..."
                    type={`${close ? "text" : "password"}`}
                    className={`max-w-[300px]  w-full border-1 border-[#EAEAEA] ${
                      errors.password &&
                      "border-1 border-red-500 animate-bounce"
                    } rounded-[5px]  h-[40px] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A5A5A5] placeholder:font-normal pl-[15px] flex items-center`}
                  />
                  {close ? (
                    <IoEyeOutline
                      onClick={() => setClose(!close)}
                      color="grey"
                      className="right-4 cursor-pointer absolute top-[10px]"
                      size={19}
                    />
                  ) : (
                    <IoEyeOffOutline
                      onClick={() => setClose(!close)}
                      color="grey"
                      className="right-4 cursor-pointer absolute top-[10px]"
                      size={19}
                    />
                  )}
                </div>
                <div className="relative max-w-[300px] w-full ">
                  <input
                    type={`${close ? "text" : "password"}`}
                    {...register("passwordrepaet", { required: true })}
                    placeholder="Takroriy parol..."
                    className={`max-w-[300px]  w-full border-1 border-[#EAEAEA] ${
                      errors.passwordrepaet &&
                      "border-1 border-red-500 animate-bounce"
                    } rounded-[5px]  h-[40px] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A5A5A5] placeholder:font-normal pl-[15px] flex items-center`}
                  />
                  {close ? (
                    <IoEyeOutline
                      onClick={() => setClose(!close)}
                      color="grey"
                      className="right-4 cursor-pointer absolute top-[10px]"
                      size={19}
                    />
                  ) : (
                    <IoEyeOffOutline
                      onClick={() => setClose(!close)}
                      color="grey"
                      className="right-4 cursor-pointer absolute top-[10px]"
                      size={19}
                    />
                  )}
                </div>
              </div>
              <button className="mt-[30px] max-w-[300px] w-full h-[45px] rounded-[5px] bg-[#46A358] flex items-center justify-center text-white text-[16px] leading-[16px] font-bold cursor-pointer hover:bg-white hover:text-[#46A358] border-1 border-[#46A358]">
                {getLoading ? (
                  <FaSpinner size={20} className="animate-spin" />
                ) : (
                  "Kirish"
                )}
              </button>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
