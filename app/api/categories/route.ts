import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest){
   try {
   const {title}=await request.json()
   const categories=await prisma.category.create({
    data:{
        title
    }
   })
   return NextResponse.json(categories,{status:201})
   } catch (error) {
    console.error("Qo`shishda xatolik",error)
    return new NextResponse("Qo`shishda xatolik yuz berdi",{status:500})
   }
}


