import { NextResponse } from "next/server"
import { PrismaClient } from "@repo/db/client";


const client = new PrismaClient();

export const GET = async () => {
   const dta= await client.people.findMany()
    return NextResponse.json({
        message: dta
    })
}