import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest, ev: NextFetchEvent) {
    const token =  req.cookies.token ? req.cookies.token : ''
    if(token == '' ){
        const url = req.nextUrl.clone()
        url.pathname = '/404'
        return NextResponse.rewrite(url);
    }
    return NextResponse.next();
}