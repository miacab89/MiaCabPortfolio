import { NextApiRequest } from "next";
import { Posts } from "@/app/types";

export async function GET(
    req: NextApiRequest, 
    post: Posts
) {

const posts = [{post}];

    try {
        return new Response(JSON.stringify(posts),{
        status:200,
        headers:{ "Content-Type": "application/json" }
    })
    } catch(error) {
        console.error(error)
    }
}