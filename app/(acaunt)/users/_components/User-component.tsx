"use client"
import useEffektHooks from "@/helpers/functions";
import { AppDispatch, RootState } from "@/redux/store";
import { Users } from "@prisma/client";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

type Props={
    data:Users[]
}


export default function UserComponent({data}:Props) {
          const { editLoading, editError } = useSelector(
            (state: RootState) => state.users
          );
        useEffektHooks(editLoading,editError)
        const id = localStorage.getItem("id") && localStorage.getItem("id");
        const currentUser = data.find((c) => c.id === parseInt(id!));
        const [phone, setPhone] = useState(currentUser!.phone);
        const photo = "";
        const [firstname, setFirstname] = useState(currentUser!.firstname);
        const [lastname, setLastname] = useState(currentUser!.lastname);
        const [lastpassword, setLastpassword] = useState("");
        const [newpassword, setNewpassword] = useState("");
        const [newpasswordrepaet, setNewpasswordrepaet] = useState("");
        const [username, setUsername] = useState(currentUser!.username);
        const [close, setClose] = useState(false);
        const dispatch = useDispatch<AppDispatch>();
                if (!currentUser) {
                  return <>User topilmadi...</>;
                }

   function updateData(){
    if(lastname===""||firstname===""||lastpassword===""||newpassword===""||newpasswordrepaet===""||phone===""){
      toast.info("Barcha malumotlarni to'liq kiriting!")
      return
    }
   if(lastpassword!==currentUser?.password){
     toast.error("Parolingiz xato!")
     return
   }
   if(newpassword!==newpasswordrepaet){
    toast.info("Parol va uni tasdig'i to'g'ri kelmaydi!")
    return
   }
   const data={id,lastname,firstname,phone,photo,username,email:currentUser.email,password:newpassword}
   dispatch({type:"EDIT/USER",payload:data})
   setNewpassword("")
   setLastpassword("")
   setNewpasswordrepaet("")
  }



  return (
    <div className="max-w-[868px] w-full flex flex-col">
      <h1 className="text-[16px] hidden sm:block leading-[16px] font-medium text-[#3D3D3D]">
        Personal Information 
      </h1>
      <div className="max-w-[868px] w-full mt-[20px] sm:flex   justify-between  ">
        <div className="max-w-[417px] w-full  flex flex-col gap-[10px] ">
          <div className="flex gap-[4px]">
            <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
              First Name
            </p>
            <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
              *
            </span>
          </div>
          <input
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            type="text"
            className="max-w-[417px] px-[5px] w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
          />
        </div>
        <div className="max-w-[417px] w-full mt-[20px] sm:mt-0  flex flex-col gap-[10px] ">
          <div className="flex gap-[4px]">
            <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
              Last Name
            </p>
            <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
              *
            </span>
          </div>
          <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            type="text"
            className="max-w-[417px] px-[5px] w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
          />
        </div>
      </div>
      <div className="max-w-[868px] w-full mt-[20px] sm:flex justify-between  ">
        <div className="max-w-[417px] w-full  flex flex-col gap-[10px] ">
          <div className="flex gap-[4px]">
            <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
              Email address
            </p>
            <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
              *
            </span>
          </div>
          <input
            defaultValue={currentUser.email}
            type="text"
            className="max-w-[417px] px-[5px] w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
          />
        </div>
        <div className="max-w-[417px] w-full mt-[20px] sm:mt-0  flex flex-col gap-[10px] ">
          <div className="flex gap-[4px]">
            <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
              Phone Number
            </p>
            <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
              *
            </span>
          </div>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            className="max-w-[417px] px-[5px] w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
          />
        </div>
      </div>
      <div className="max-w-[868px] w-full mt-[20px] flex justify-between  ">
        <div className="max-w-[417px] w-full  flex flex-col gap-[10px] ">
          <div className="flex gap-[4px]">
            <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
              Username
            </p>
            <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
              *
            </span>
          </div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="max-w-[417px] px-[5px] w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
          />
        </div>
      </div>
      <h1 className="mt-[37px] text-[16px] hidden sm:block leading-[16px] font-medium text-[#3D3D3D] ">
        Password change
      </h1>
      <div className="max-w-[417px] w-full h-[64px] mt-[20px] flex flex-col justify-between">
        <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D] ">
          Current password
        </p>
        <div className="relative">
          <input
            value={lastpassword}
            onChange={(e) => setLastpassword(e.target.value)}
            type={`${close ? "text" : "password"}`}
            className="max-w-[417px] px-[5px] w-full  h-[40px] border border-[#EAEAEA]  rounded-[3px]"
          />
          {close ? (
            <IoEyeOutline
              className="w-[20] h-[20] absolute top-2.5 right-2"
              onClick={() => setClose(!close)}
            />
          ) : (
            <IoEyeOffOutline
              onClick={() => setClose(!close)}
              className="w-[20] h-[20] absolute top-2.5 right-2"
            />
          )}
        </div>
      </div>
      <div className="max-w-[417px] w-full h-[64px] mt-[20px] flex flex-col justify-between">
        <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D] ">
          New password
        </p>
        <div className="relative">
          <input
            value={newpassword}
            onChange={(e) => setNewpassword(e.target.value)}
            type={`${close ? "text" : "password"}`}
            className="max-w-[417px] px-[5px] w-full  h-[40px] border border-[#EAEAEA]  rounded-[3px]"
          />
          {close ? (
            <IoEyeOutline
              className="w-[20] h-[20] absolute top-2.5 right-2"
              onClick={() => setClose(!close)}
            />
          ) : (
            <IoEyeOffOutline
              onClick={() => setClose(!close)}
              className="w-[20] h-[20] absolute top-2.5 right-2"
            />
          )}
        </div>
      </div>
      <div className="max-w-[417px] w-full h-[64px] mt-[20px] flex flex-col justify-between">
        <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D] ">
          Confirm new password
        </p>
        <div className="relative">
          <input
            value={newpasswordrepaet}
            onChange={(e) => setNewpasswordrepaet(e.target.value)}
            type={`${close ? "text" : "password"}`}
            className="max-w-[417px] w-full px-[5px]  h-[40px] border border-[#EAEAEA]  rounded-[3px]"
          />
          {close ? (
            <IoEyeOutline
              className="w-[20] h-[20] absolute top-2.5 right-2"
              onClick={() => setClose(!close)}
            />
          ) : (
            <IoEyeOffOutline
              onClick={() => setClose(!close)}
              className="w-[20] h-[20] absolute top-2.5 right-2"
            />
          )}
        </div>
      </div>
      <button onClick={updateData} className="max-w-[131px] w-full h-[40px] text-white cursor-pointer bg-[#46A358] text-[14px] flex items-center justify-center leading-[16px] font-bold  mt-[20px] sm:mt-[50] rounded-[3px]  ">
    {editLoading?  <FaSpinner size={20} className="animate-spin" /> :"Save change"}
      </button>
    </div>
  );
}
