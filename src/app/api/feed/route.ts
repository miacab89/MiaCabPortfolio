export async function GET(req: Request) { 

    try {
        const posts = await req.json(); 
        const result = new Response(JSON.stringify([{posts}]),
        {
            status:200,
            headers: { 
                "Content-Type": "application/json" 
            }
        }
    )
    return result; 
    } catch(error) {
        console.error(error)
    }
}