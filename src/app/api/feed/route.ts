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
import { NextRequest } from "next/server";

export async function GET(
    req: NextRequest, 
    posts: Posts) {

const feed = [{posts}]; 

    try {
        const result = new Response(JSON.stringify(feed),{
            status:200,
            headers:{ "Content-Type": "application/json" 
            }
        }
    )
    return result; 
    } catch(error) {
        console.error(error)
    }
}