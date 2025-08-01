import prisma from "@/lib/db";
import DetailComp from "../components/Dinamik-comp";
import { FaSpinner } from "react-icons/fa";


export default async function DinamikPage({params}:{params:Promise<{id:string}>}) {
  const {id}= await params;
  const oneProducts=await prisma.products.findUnique({
    where:{
     id:parseInt(id)
    }
  })

  const products=await prisma.products.findMany()


  const oneCategories=await prisma.category.findUnique({
    where:{
      id:oneProducts?.categoryId
    }
  })
  
  if(!oneProducts||!oneCategories){
    return <div>  <FaSpinner size={25} className="animate-spin text-center" /></div>
  }
  return (
    <div className="px-[15px] sm:px-0">
      <DetailComp {...oneCategories} {...oneProducts} products={products}  />
    </div>
  );
}
