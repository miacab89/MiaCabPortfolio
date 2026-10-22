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
import { unstable_cache } from "next/cache";
import { BlueSkyRateLimiter } from "@/lib/server/bskyRateLimiter";

type FeedItem = {
  post: {
    cid: string;
    record: { text: string };
    author: { handle: string }
  }
};

// Cached so we log in to Bluesky at most once every 5 minutes instead of on
// every page view (createSession is rate limited). Errors are not cached.
const getTimeline = unstable_cache(async (): Promise<FeedItem[]> => {
  const identifier = process.env.BSKY_HANDLE;
  const password = process.env.BSKY_PASSWORD;
  if (!identifier || !password) {
    throw new Error("BSKY_HANDLE and BSKY_PASSWORD environment variables must be set");
  }

  const agent = new AtpAgent({ service: 'https://bsky.social' });
  await agent.login({ identifier, password });

  const { data } = await BlueSkyRateLimiter.makeRequest(() =>
    agent.getTimeline({limit: 10})) as unknown as { data: { feed: FeedItem[] } };

  return JSON.parse(JSON.stringify(data)).feed;
}, ["bsky-timeline"], { revalidate: 300 });

async function NewsFeedPanel() {
  let postsArray: FeedItem[] = [];
  let feedError = false;

  try {
    postsArray = await getTimeline();
  } catch (error) {
    // Render a fallback instead of failing the whole page
    console.error("Failed to load Bluesky feed:", error);
    feedError = true;
  }

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
        {feedError && (
          <p className="text-sm text-slate-300">Feed unavailable right now. Please try again later.</p>
        )}
        {postsArray.map((post) => (
              <div key={post.post.cid} className="border-b border-slate-400 p-2">
                <p className="text-sm">{post.post.record.text as string}</p>
                <p className="text-xs text-slate-300">{post.post.author.handle as string}</p>
              </div>))}
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
        )}    */}
      </CardFooter>
    </Card>
  // Update the state with the new posts and cursor
  // You can use a state management solution like React's useState or Redux to handle this
  )
}

export { NewsFeedPanel };