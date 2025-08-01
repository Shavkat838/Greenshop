import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try {
        const {id} = await params;
        const deletedProduct = await prisma.products.delete({
          where: {
            id:parseInt(id),
          },
        });  
        return NextResponse.json(deletedProduct,{status:200})       
    } catch (error) {
         return new NextResponse("Deleted error",{status:500})
    }
}


export async function PUT(req:NextRequest,{params}:{params:Promise<{id:string}>}){
 try {
  const { id } = await params;
  const {description,name,images,categoryId,price}=await req.json()
  const editProduct=await prisma.products.update({
    where:{
      id:parseInt(id),
    },
    data:{
      description, 
      categoryId:parseInt(categoryId),
      price:parseInt(price),
      name,
      images
    }
  })
  return NextResponse.json(editProduct,{status:200})
 } catch (error) {
  return new NextResponse("Internal server error",{status:500})
 }
}