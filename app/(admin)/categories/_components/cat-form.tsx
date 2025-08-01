"use client";

import useEffektHooks from "@/helpers/functions";
import { clearTitle, setTitle } from "@/redux/slices/categorySlice";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function CatForm() {
  const { title, editingId, isLoading,isError } = useSelector(
    (state: RootState) => state.category
  );

  const dispatch = useDispatch<AppDispatch>();
  const [catLoading, setCatLoading] = useState(false);
  const router = useRouter();

  useEffektHooks(isLoading,isError)

  const handleSaveCategory = async () => {
    if (title === "") {
      toast.info("Categoriya nomini kiriting!")
      return 
    }
    if (editingId === -1) {
      const data = {
        title,
      };
      try {
        setCatLoading(true);
        await axios.post("api/categories", data);
        toast.success("Categoriya qoshildi!")
        router.refresh();
        setCatLoading(false);
      } catch (error) {
        toast.error(error+"")
        console.log(error);
      } finally {
        setCatLoading(false);
      }
    } else {
      try {
        const data = {
          id: editingId,
          title,
        };
        dispatch({ type: "CATEGORY/PUT", payload: data });
      } catch (error) {
      console.error(error)
      }
    }
    dispatch(clearTitle());
  }

  return (
    <div className="max-w-[868px] w-full flex flex-col">
      <h1 className="text-[17px] leading-[16px] font-bold text-[#3D3D3D]">
        Add Categories
      </h1>
      <p className="mt-[9px] text-[14px] leading-[15px] text-[#727272] font-normal ">
        Admin can add categories here
      </p>
      <div className="max-w-[868px] w-full mt-[30px] flex gap-[50px]   items-end">
        <div className="max-w-[417] w-full  flex flex-col gap-[10px] ">
          <div className="flex gap-[4px]">
            <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
              Categories Name
            </p>
            <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
              *
            </span>
          </div>
          <input
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
            type="text"
            className="max-w-[417px] px-[5px] w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
          />
        </div>
        <div
          onClick={handleSaveCategory}
          className="max-w-[131px] w-full h-[40] text-white bg-[#46A358] flex items-center justify-center  text-[14px] leading-[17px] font-bold cursor-pointer rounded-[3px] "
        >
          {catLoading || isLoading ? (
            <FaSpinner size={20} className="animate-spin" />
          ) : editingId === -1 ? (
            "Save Category"
          ) : (
            "Edit Category"
          )}
        </div>
      </div>
      <h1 className="mt-[30px] text-slate-600 text-2xl">Categories</h1>
    </div>
  );
}

