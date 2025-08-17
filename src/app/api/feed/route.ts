import { Posts } from "@/app/types";
import { NextRequest } from "next/server";

export async function GET(
    req: NextRequest, 
    post: Posts,
) {

const posts = [
    {
        post
    }
];

    try {
        return new Response(JSON.stringify(posts),{
        status:200,
        headers:{ "Content-Type": "application/json" }
    })
    } catch(error) {
        console.error(error)
    }
}