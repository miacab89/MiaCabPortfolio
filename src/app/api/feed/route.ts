import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
const posts = req.json();
    try {
        const result = new Response(JSON.stringify([{posts}]),{
            status:200,
            headers:{ "Content-Type": "application/json" 
            }
        }
    )
    return result; 
    } catch(error) {
        return Response.json(error)
    }
}