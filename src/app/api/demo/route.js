
import {PrismaClient} from '@prisma/client'
import {NextResponse} from 'next/server'
const prisma = new PrismaClient()

// question --1

export async function DELETE(req,res){
    try {
        const {searchParams} = new URL(req.url)
        const id = searchParams.get('id')

        const reqBody = await req.json();
        const result = await prisma.user.delete({
            where:{id:parseInt(id)},
        })
        return NextResponse.json({status:"success",data:result})
    }catch (e) {
        console.log(e)
        return NextResponse.json({status:"fail",data:e})
    }
}




