import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    const {id}=await params
    try {
        const {order,userId,status,userInformation}= await req.json()
        const orders= await prisma.orders.update({where:{id:parseInt(id)},data:{order,userId,status,userInformation}})
       if(!orders){
        return NextResponse.json("Kutilmagan xatolik",{status:500})
       }
       return NextResponse.json(orders,{status:201})
    } catch (error) {
        return new NextResponse(`Internal server error${error+""}`,{status:500})
    }
}