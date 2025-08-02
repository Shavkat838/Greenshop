import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req:NextRequest,{params}:{params:Promise<{id:string}>}){
 try {
    const {id}=await params;
    const {title}=await req.json()
    const updatedCategory=await prisma.category.update({
        where:{id:parseInt(id)},
        data:{title}
    })
    return NextResponse.json(updatedCategory,{status:200})
 } catch (error) {
    return new NextResponse(`Edit qilishda xatolik${error+""}`,{status:500})
 }   
}