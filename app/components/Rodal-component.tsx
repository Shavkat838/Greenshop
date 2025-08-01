"use client"; 
import { getId, setloginVisible, setVisible } from "@/redux/slices/userSlice";
import { AppDispatch, RootState } from "@/redux/store";

import React, { useEffect, useState }  from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { Users } from "@prisma/client";
import { Dialog } from "@headlessui/react";







type Inputs={
  username:string;
  email:string;
  password:string;
  passwordrepaet:string
}

type Props={
  users:Users[]
}


export default function SignINModal({users}:Props) {
const {visible,saveError,saveLoading } = useSelector((state: RootState) => state.users);
const dispatch = useDispatch<AppDispatch>();
const {register,handleSubmit,reset,formState:{errors}}=useForm<Inputs>()
const [close,setClose]=useState(false)
const router=useRouter()

useEffect(()=>{
 if(localStorage.getItem("id")){
  dispatch(getId())
 } 
},[])


useEffect(()=>{
  if(!saveLoading){
    reset()
    dispatch(setVisible(false))
  }
},[saveError,saveLoading])


 const onSubmit: SubmitHandler<Inputs> = (data) =>{
  if(data.password!==data.passwordrepaet){
    toast.warning("Parol va uning tasdig'i to'g'ri kelmaydi!")
    return 
  }

  if(users.find((user)=>user.email===data.email)){
    toast.warning("Bu email bilan tizimga kirilgan")
    reset()
    return
  }
      const obj={
      username:data.username,
      email:data.email,
      password:data.password,
      firstname:"",
      lastname:"",
      phone:"",
      photo:"",
     }
    dispatch({ type: "SAVE/USER", payload: obj });  
    router.push("/users")
 }

    if(!visible){
      return <div></div>
    }
  return (
    <div className="flex items-center justify-center sm:min-h-screen">
      <Dialog
        open={visible}
        onClose={() => dispatch(setVisible(false))}
        className=" relative z-50 "
      >
        <div className="fixed inset-0  bg-black/40" aria-hidden="true" />
        <div className="fixed inset-0  flex items-center justify-center ">
          <Dialog.Panel className="bg-white  w-[380px]     sm:w-[450px]  sm:h-[510px] py-[52px]  shadow-xl">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-center "
            >
              <div className="w-full h-[16px]">
                <h1 className="text-[20px] text-center leading-[16px] text-[#46A358] font-medium">
                  Ro'yxatdan o'ting
                </h1>
              </div>
              <p className="mt-[45px]  text-[13px] leading-[16px] font-normal text-[#3D3D3D]">
                Ro'yxatdan o'tish uchun email va parolingizni kiriting
              </p>
              <div className="flex flex-col w-full items-center gap-[12px] mt-[10px] ">
                <input
                  {...register("username", { required: true })}
                  placeholder="Ism..."
                  type="text"
                  className={`max-w-[300px]  w-full border-1 border-[#EAEAEA] ${
                    errors.username && "border-1 border-red-500 animate-bounce"
                  } rounded-[5px]  h-[40px] placeholder:text-[14px] placeholder:leading-[16px] placeholder:text-[#A5A5A5] placeholder:font-normal pl-[15px] flex items-center`}
                />
                <input
                  {...register("email", { required: true })}
                  placeholder="Email..."
                  type="email"
                  className={`max-w-[300px]  w-full border-1 border-[#EAEAEA] ${
                    errors.email && "border-1 border-red-500 animate-bounce"
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
                <p
                  onClick={() => {
                    dispatch(setVisible(false));
                    dispatch(setloginVisible(true));
                  }}
                  className=" text-[13px] leading-[16px] sm:mt-[10px] font-normal text-[blue] cursor-pointer"
                >
                  Tizimga kirish
                </p>
              </div>
              <button className=" mt-[10px] sm:mt-[20px] max-w-[300px] w-full h-[45px] rounded-[5px] bg-[#46A358] flex items-center justify-center text-white text-[16px] leading-[16px] font-bold cursor-pointer hover:bg-white hover:text-[#46A358] border-1 border-[#46A358] ">
                {saveLoading ? (
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


