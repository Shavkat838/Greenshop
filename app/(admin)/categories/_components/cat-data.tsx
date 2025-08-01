"use client";
import { Category } from "@/helpers/types";
import { resetEditCategory } from "@/redux/slices/categorySlice";
import { AppDispatch } from "@/redux/store";
import { MdModeEditOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

type CategoryProps = {
  data: Category[];
};

export default function CatData({ data }: CategoryProps) {
  const dispatch = useDispatch<AppDispatch>();

  if (!data) {
    return <h1 className="2xl">Loading...</h1>;
  }

  if (data.length === 0) {
    return (
      <p className="mt-[40px]">
        Hozircha hech qanaqa categoriya yoq. Siz uni yuqorida qoshishingiz
        mumkin
      </p>
    );
  }
  return (
    <div className="mt-[10px] grid grid-cols-3 gap-[10px]">
      {data.map((cat) => (
        <div
          key={cat.id}
          className="max-w-[260px] cursor-pointer h-[40px]  bg-gray-100 border  flex justify-between items-center px-[10px] rounded-[10px] border-gray-300 group"
        >
          <h1 className="text-[16px] text-gray-700  group-hover:text-gray-600 ">
            {cat.title}
          </h1>
          <MdModeEditOutline
            onClick={() => dispatch(resetEditCategory(cat))}
            size={23}
            color="yellow"
          />
        </div>
      ))}
    </div>
  );
}
