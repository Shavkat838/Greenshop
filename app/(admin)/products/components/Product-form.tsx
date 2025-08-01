"use client"
import useEffektHooks from "@/helpers/functions";
import { Category } from "@/helpers/types";
import { clearFormData, getFormData, oneImageDelete } from "@/redux/slices/productSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ImageComponent } from "./Image-upload";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { createClient } from "@/utils/supabase/client";

type CategoryProps={
  categories:Category[]
}
export default function ProductForm({categories}:CategoryProps) {
  const supabase = createClient();

  const dispatch = useDispatch<AppDispatch>();
  const {
    formData,
    isSaveLoading,
    isSaveError,
    editCategoryId,
    isEditError,
    isEditLoading,
    imageLoading,
  } = useSelector((state: RootState) => state.productsSlice);

  useEffektHooks(isSaveLoading, isSaveError);
  useEffektHooks(isEditLoading, isEditError);

  function handleSave() {
    if (
      formData.categoryId === "" ||
      formData.name === "" ||
      formData.description === "" ||
      formData.price === ""
    ) {
      toast.info("Iltimos formani toldiring!");
      return;
    }
    const data = {
      name: formData.name,
      description: formData.description,
      price: Number(formData.price),
      categoryId: formData.categoryId,
      images: formData.images,
    };

    console.log(formData.images);
    if (editCategoryId === -1) {
      dispatch({ type: "PRODUCT/SAVE", payload: data });
    } else {
      console.log(formData.price);
      dispatch({
        type: "PRODUCT/EDIT",
        payload: { ...data, id: editCategoryId },
      });
    }
    dispatch(clearFormData());
  }

  // https://utsgnlwgurhfevqnupci.storage.supabase.co/v1/object/public/greenpro//images_1753421807151

  async function imageDelete(index: number) {
    dispatch(oneImageDelete(index));
    const deletedItem = formData.images[index];
    try {
      await supabase.storage
        .from("greenpro")
        .remove([deletedItem.slice(deletedItem.indexOf("greenpro//") + 10)]);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="max-w-[868px] w-full flex flex-col">
      <h1 className="text-[17px] leading-[16px] font-bold text-[#3D3D3D]">
        Add Products
      </h1>
      <p className="mt-[9px] text-[14px] leading-[15px] text-[#727272] font-normal ">
        Admin can add products here
      </p>
      <div className="max-w-[868px] w-full mt-[30px] flex justify-between  ">
        <div className="max-w-[417] w-full  flex flex-col gap-[10px] ">
          <div className="flex gap-[4px]">
            <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
              Product Name
            </p>
            <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
              *
            </span>
          </div>
          <input
            value={formData.name}
            onChange={(e) =>
              dispatch(getFormData({ key: "name", value: e.target.value }))
            }
            type="text"
            className="max-w-[417px] px-[3px] w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
          />
        </div>
        <div className="max-w-[417px] w-full  flex flex-col gap-[10px] ">
          <div className="flex gap-[4px]">
            <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
              Product Price
            </p>
            <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
              *
            </span>
          </div>
          <input
            value={formData.price}
            onChange={(e) =>
              dispatch(getFormData({ key: "price", value: e.target.value }))
            }
            type="text"
            className="max-w-[417px] px-[3px] w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
          />
        </div>
      </div>
      <div className="max-w-[868px] w-full mt-[30px] flex justify-between  ">
        <div className="max-w-[417px] w-full  flex flex-col gap-[10px] ">
          <div className="flex gap-[4px]">
            <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
              Select Categories
            </p>
            <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
              *
            </span>
          </div>
          <select
            value={formData.categoryId}
            onChange={(e) =>
              dispatch(
                getFormData({
                  key: "categoryId",
                  value: parseInt(e.target.value),
                })
              )
            }
            className="max-w-[417px] px-[3px] w-full h-[40px] border border-[#EAEAEA]  rounded-[3px] "
          >
            <option value={""} disabled defaultValue={""}>
              Categoriya tanlang
            </option>
            {categories.map((item) => (
              <option key={item.id} value={`${item.id}`}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
        <div className="max-w-[417px] w-full  flex flex-col gap-[10px] ">
          <div className="flex gap-[4px]">
            <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
              Product Images
            </p>
            <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
              *
            </span>
          </div>
          <div className="flex">
            {imageLoading ? (
              <FaSpinner size={25} className="animate-spin" />
            ) : (
              <ImageComponent />
            )}
          </div>
        </div>
      </div>
      <div className="max-w-full flex justify-end  gap-[15px] h-auto mt-[10px] ">
        {formData.images &&
          formData.images.map((item, index) => (
            <div
              key={index + 1}
              className="relative border border-gray-400 rounded-md "
            >
              <Image
                src={item}
                alt="photo"
                width={60}
                height={60}
                className="w-[100] h-[100]"
                unoptimized
              />
              <IoClose
                onClick={() => imageDelete(index)}
                size={18}
                color="red"
                className="top-10 right-0 cursor-pointer"
              />
            </div>
          ))}
      </div>
      <div className="max-w-[868px] w-full mt-[30px] flex justify-between  ">
        <div className="max-w-[868px] w-full  flex flex-col gap-[10px] ">
          <div className="flex gap-[4px]">
            <p className="text-[15px] leading-[15px] font-normal text-[#3D3D3D]">
              Product Description
            </p>
            <span className="text-[#F03800] -mt-[5px] w-[10px] h-[15px]">
              *
            </span>
          </div>
          <textarea
            value={formData.description}
            onChange={(e) =>
              dispatch(
                getFormData({ key: "description", value: e.target.value })
              )
            }
            className="max-w-[868px]  px-[3px] w-full min-h-[150px] border border-[#EAEAEA]  rounded-[3px] "
          ></textarea>
        </div>
      </div>
      <button
        onClick={handleSave}
        className="max-w-[131px] w-full h-[40] flex items-center justify-center text-white bg-[#46A358]  text-[14px] leading-[17px] font-bold cursor-pointer rounded-[3px] mt-[50px] "
      >
        {isSaveLoading || isEditLoading ? (
          <FaSpinner size={20} className="animate-spin" />
        ) : editCategoryId === -1 ? (
          "Save Product"
        ) : (
          "Edit Product"
        )}
      </button>
    </div>
  );
}
