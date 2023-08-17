import { NextResponse } from "next/server"

export const GET = async (req: Request) => {
    return NextResponse.json({message: 'hello'})
} 

export const POST = async (req: Request) => {
    const data = await req.json()
    return NextResponse.json({message: data})
} 