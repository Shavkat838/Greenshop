import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request:NextRequest){
    try {
        const {firstname,lastname,phone,photo,password,username,email}=await request.json()
        const users= await prisma.users.create({
           data: {
             firstname,
             lastname,
             phone,
             photo,
             password,
             username,
             email,
           },
         });
         return NextResponse.json(users,{status:201})
    } catch (error) {
        return new NextResponse(`Qoshishda xatolik${error+""}`,{status:500})
    }
}



export async function GET(req:NextRequest){
  try {
    const {searchParams}=new URL(req.url)
    const email=searchParams.get("email")
    if(!email){
       return new NextResponse("Email topilmadi", { status: 400 });
    }
    const users=await prisma.users.findFirst({
      where:{
        email:email
      }
    })
    if (!users) {
          return new NextResponse("Foydalanuvchi topilmadi", { status: 404 });
    }
    return NextResponse.json(users,{status:200})
  } catch (error) {
    return new NextResponse(`Get so'rovida xatolik${error+""}`,{status:500})
  }
}