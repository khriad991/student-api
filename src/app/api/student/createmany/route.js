
import  {PrismaClient} from '@prisma/client'
import {NextResponse} from 'next/server'
const prisma = new PrismaClient();

export  async function POST(req){
    try{

        const reqBody = await req.json();
       const result = await prisma.user.createMany({
           data: [...reqBody]
       })
        return NextResponse.json({status:"success", data:result})
    }catch (e) {
        return NextResponse.json({message:"something went wrong",data:e.toString() })
    }
}