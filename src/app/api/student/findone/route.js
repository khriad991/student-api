import {PrismaClient} from "@prisma/client"
import {NextResponse} from "next/server";


const prisma = new PrismaClient();

export async function GET(req){
    try {
        const {searchParams}= new URL(req.url)
        const id = searchParams.get("id")
        const result = await prisma.user.findUnique({
            where:{id:parseInt(id)}
        })


        return NextResponse.json({status:"success",data:result})
    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
}