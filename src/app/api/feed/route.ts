type Posts = {
    id: number,
    author: string,
    content: string[]
}

export async function GET({id, author, content}: Posts) {
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