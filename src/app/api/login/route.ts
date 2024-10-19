// import {request} from '@/config/Request';

import { NextRequest } from "next/server";

export async function POST(req: Request | NextRequest) {
    const data = await req.json();
    // console.log("data: ", data)

    
    // const login = await request.post('login', data);

    return Response.json({'success': true, "data": data});
}