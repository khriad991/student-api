import {PrismaClient} from "@prisma/client"
import {NextResponse} from "next/server";


const prisma = new PrismaClient();

export async function GET(req){
    try {
        const {searchParams}= URL(req.url)
        const url= URL(req.url)

        console.log(searchParams)
        const result = await prisma.user.findMany({})


        console.log("this is for Url ---->>>",url)

        return NextResponse.json({status:"fail",data:result})
    }catch (e) {
        return NextResponse.json({status:"fail",data:e})
    }
}