// 'use client';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card"
import { AtpAgent } from '@atproto/api' 
import {blueskyRateLimiter} from "@/lib/server/bskyRateLimiter";

async function NewsFeedPanel() {
  const agent = new AtpAgent({ service: 'https://bsky.social', persistSession: (evt, session) => {
    // Handle session persistence here if needed
    console.log(evt === 'create' ? 'Session created:' : 'Session destroyed', session);
  } });

  await agent.login({ 
    identifier: process.env.BSKY_HANDLE!, 
    password: process.env.BSKY_PASSWORD! 
  });  

  const { data } = await blueskyRateLimiter.makeRequest(() => agent.getTimeline({limit: 10}));

const { feed: postsArray, cursor: nextPage } = JSON.parse(JSON.stringify(data))
  return (
    <Card className="w-[500px] h-[700px] text-center text-white bg-slate-600 border-slate-400">
      <CardHeader>
        <CardTitle>Popular Feeds</CardTitle>
        <CardDescription>
        </CardDescription>
        <CardAction>
        </CardAction>
      </CardHeader>
      <CardContent className="items-center">
        {postsArray.map((post) => (
          <div key={post.post.cid} className="border-b border-slate-400 p-2">
            <p className="text-sm">{post.post.record.text as string}</p>
            <p className="text-xs text-slate-300">{post.post.author.handle as string}</p>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        {/* {nextPage && (
          <button
            className="text-blue-500 hover:underline"
            onClick={async () => {
              const { data: nextData } = await agent.getTimeline({
                cursor: "...",
                limit: 10
              });
              const { feed: nextPostsArray, cursor: nextPage } = nextData;
              nextPostsArray.forEach((post) => {
                console.log(post.post.record.text);
              });
              // Update the state with the new posts and cursor
              // You can use a state management solution like React's useState or Redux to handle this
            }}
          >
            Load More
          </button>
        )}   */}
      </CardFooter>
    </Card>
  // Update the state with the new posts and cursor
  // You can use a state management solution like React's useState or Redux to handle this
  )
}

export { NewsFeedPanel };