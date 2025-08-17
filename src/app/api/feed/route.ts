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
import { NextApiResponse } from "next";

export async function GET(
    req: Request, 
    res: NextApiResponse<Posts> 
) {

    // const posts = [{post}];
    const result = new Response(JSON.stringify(res),{
            status:200,
            headers:{ "Content-Type": "application/json" }
        }
    )
    return result; 
}