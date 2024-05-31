import { request } from "http";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
    return NextResponse.json({ message: "Hello World" });
}

export const POST = async (request: Request) => {
    const data = await request.json()
    return NextResponse.json({ message: data })
}