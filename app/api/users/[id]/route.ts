import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req:NextRequest,{params}:{params:Promise<{id:string}>}){
    try {
        const {id}=await params;
        const {lastname,firstname,username,photo,phone,email,password}=await req.json()
        const editedUser=await prisma.users.update({
          where: { id: parseInt(id) },
          data: {
            lastname,
            firstname,
            username,
            photo,
            phone,
            email,
            password,
          },
        });
        return NextResponse.json(editedUser,{status:200}) 
    } catch (error) {
        console.log("put xatoligi", error )
        return new NextResponse("Internal server error!",{status:500})

    }
}