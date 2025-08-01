import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';
export async function POST(req:NextRequest){
     try {
         const {name,description,price,images,categoryId}=await req.json()
         const products=await prisma.products.create({
            data:{
              name,
              description,
              price:parseInt(price),
              images,
              categoryId:parseInt(categoryId)
            }
         })
         return NextResponse.json(products,{status:201})
     } catch (error) {
        console.error("Qo'shishdagi xatolik",error)
        return new NextResponse("Enternal server error",{status:501})
     }
}

