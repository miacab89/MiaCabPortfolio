// import { Posts } from "@/app/types";
// import { NextRequest } from "next/server";

// export async function GET(
//     req: NextRequest, 
//     { params }: { params: Promise<Posts> }
// ) {

// const posts = (await params).post; 

//     try {
//         return new Response(JSON.stringify(posts),{
//         status:200,
//         headers:{ "Content-Type": "application/json" }
//     })
//     } catch(error) {
//         console.error(error)
//     }
// }
import { Posts } from "@/app/types";

export async function GET(req: Request, post: Posts ) {

    const posts = [{post}];
    const result = new Response(JSON.stringify(posts),{
            status:200,
            headers:{ "Content-Type": "application/json" }
        }
    )
    return result; 
}