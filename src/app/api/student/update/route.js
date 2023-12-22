import {PrismaClient}from '@prisma/client'
import {NextResponse} from 'next/server'
const prisma = new PrismaClient();
export async function PUT(req){
    try {
        const {searchParams} = new URL(req.url)

        const id = searchParams.get('id')

        const reqBody = await req.json();
        const result = await prisma.user.update({
            where:{id:parseInt(id)},
            data: reqBody
        })


        return NextResponse.json({status:"success", data:result})
    }catch (e) {
        return NextResponse.json({message:"something went wrong",data:e})
    }
 }

