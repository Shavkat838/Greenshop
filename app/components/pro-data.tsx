"use client"
import Product from "@/app/components/Product";
import { filterCategory } from "@/redux/slices/categorySlice";
import { searchProduct } from "@/redux/slices/productSlice";
import { AppDispatch, RootState } from "@/redux/store";
import {  Products } from "@prisma/client";
import { FaSpinner } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


type ProdataProps={
  categories:{
    id:number;
    title:string;
    product:Products[]
  }[]
  products:{
    id:number;
    description:string;
    name:string;
    price:number;
    images:string[];
    categoryId:number;
  }[]
}
export default function Prodata({categories,products}:ProdataProps) {
const {filteredId}=useSelector((state:RootState)=>state.category)
const {searchValue}=useSelector((state:RootState)=>state.productsSlice)
const dispatch=useDispatch<AppDispatch>()
  return (
    <div className="max-w-[1200px]  w-full flex gap-[50px] mt-[25px]  ">
      <div className="max-w-[310px] min-h-auto w-full flex bg-[#FBFBFB] flex-col px-[20px]">
        {/* categories */}
        <div className="max-w-[268px] w-full min-h-auto mt-[14px]">
          <h1 className="text-[18px] leading-[16px] font-bold text-[#3D3D3D]">
            Categories
          </h1>
          <div className="mt-[10px] ml-[12px]">
            {categories.length === 0 ? (
              <p>Hozircha hech qanday categoriya yoq</p>
            ) : (
              categories.map((item) => (
                <div
                  onClick={() =>
                    filteredId === item.id
                      ? dispatch(filterCategory(-1))
                      : dispatch(filterCategory(item.id))
                  }
                  key={item.id}
                  className="max-w-full  flex justify-between cursor-pointer group items-end h-[40px]"
                >
                  <p
                    className={` ${
                      filteredId === item.id
                        ? "text-[#46A358]"
                        : "text-[#3D3D3D]"
                    }   text-[14px]  group-hover:text-[#46A358] leading-[40px] font-medium`}
                  >
                    {item.title}
                  </p>
                  <p
                    className={`${
                      filteredId === item.id
                        ? "text-[#46A358]"
                        : "text-[#3D3D3D]"
                    }   text-[14px] group-hover:text-[#46A358] leading-[40px] font-medium`}
                  >
                    {item.product.length}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* price range */}
              <div className="relative  mt-[13px] max-w-[313px] w-full h-[45px] rounded-[10px]  bg-[#F8F8F8]">
                <IoMdSearch size={20} color="gray" className=" absolute top-3 left-5" />
                <input
                  value={searchValue}
                  onChange={(e) => {
                    dispatch(searchProduct(e.target.value)),
                      dispatch(filterCategory(-1));
                  }}
                  type="search"
                  className="max-w-[313px] w-full h-[100%]  pl-[50px] placeholder:text-[#A5A5A5] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[16px]  "
                  placeholder="search..."
                />
              </div>
      </div>
      <div className="max-w-[840px] w-full min-h-auto ">
        <h1 className="text-[18px] leading-[16px] font-bold text-[#3D3D3D] my-[10px]">
          Products
        </h1>
        <div className="max-w-[840px] w-full min-h-auto  grid grid-cols-3 space-y-[50px] ">
                  {!products ? (
                    <FaSpinner size={25} className="animate-spin text-center" />
                  ) : filteredId === -1 &&searchValue===""  ?  (
                    products.map((item, index) => <Product index={index} key={index + 1} {...item} />)
                  ) :  filteredId===-1&&searchValue!==""?(products.filter((c)=>c.name.toLowerCase().includes(searchValue.toLowerCase())).map((item,index)=>  <Product key={index + 1} index={index} {...item} />)):(
                    categories
                      .find((c) => c.id === filteredId)
                      ?.product.map((item, index) => (
                        <Product key={index + 1} index={index} {...item} />
                      ))
                  )}
        </div>
      </div>
    </div>
  );
}
