import {PrismaClient} from "@prisma/client"
import {NextResponse} from "next/server";



const prisma = new PrismaClient();

export async function GET(req){
    try {

        const result = await prisma.user.findMany({
            orderBy:{id:"asc"}
        })

        return NextResponse.json({
            "status":"fail",
            "Total User":result.length,
            "data":result
        })
    }catch (e) {
        return NextResponse.json({"status":"fail","data":e})
    }
}