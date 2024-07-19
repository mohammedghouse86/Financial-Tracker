import { NextResponse } from "next/server";

export function middleware(request){
    console.log('middleware');
    return NextResponse.redirect(new URL("/home/newHome",request.url));
}

export const config = {
    matcher: "/home"
}