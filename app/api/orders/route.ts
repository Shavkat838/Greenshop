import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try {
      const {userInformation,order,userId,status}=await req.json() 
      const orders=await prisma.orders.create({
        data:{
          userInformation,
          order,
          status,
          userId
        }
      })  
      if(!orders){
        return new  NextResponse("Xatolik yuz berdi",{status:404})
      }
      return NextResponse.json(orders,{status:201})
    } catch (error) {
        return new NextResponse("Internal server error!",{status:500})
    }
}