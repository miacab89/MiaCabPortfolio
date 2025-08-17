import { NextApiRequest, NextApiResponse } from "next";
import { Posts } from "@/types";

export async function GET(
    req: NextApiRequest, 
    res: NextApiResponse, 
    {id, author, content}: Posts) {
const posts = [
    {
        id,
        author,
        content
    }
];
    return new Response(JSON.stringify(posts),{
        status:200,
        headers:{ "Content-Type": "application/json" }
    })
}