import prisma from "@/lib/db";
import ProductData from "./components/Product-data";
import ProductForm from "./components/Product-form";

export default async  function ProductPage() {
  const categories=await prisma.category.findMany()
  const products=await prisma.products.findMany()


  if (!products||!categories){
    return (
      <>
        <h1 className="text-2xl">Loading...</h1>
      </>
    )
  }
  
  return (
    <div>
      <ProductForm categories={categories} />
     <div>
      <h1 className="text-3xl text-gray-500 my-[20px] ">Products</h1>
     </div>
      < ProductData  products={products}  />
    </div> 
  );
}
