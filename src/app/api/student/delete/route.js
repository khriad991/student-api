
import  {PrismaClient} from '@prisma/client'
import {NextResponse} from 'next/server'
const prisma = new PrismaClient();
export  async function DELETE(req){
    try{

        const {searchParams}= new URL(req.url)
        const id = searchParams.get("id")
        const result = await prisma.user.delete({
            where:{id:parseInt(id)}
        })
        
        return NextResponse.json({status:"success",massage:"Deleted successfully", data:result})
    }catch (e) {
        return NextResponse.json({message:"something went wrong",data:e})
    }




}