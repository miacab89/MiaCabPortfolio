import { AtpAgent } from '@atproto/api'

const agent = new AtpAgent({
  service: 'https://bsky.social'
})
await agent.login({
  identifier: `process.env.BSKY_HANDLE`,
  password: `process.env.BSKY_PASSWORD`
})

await agent.post({
  text: 'Hello world! I posted this via the API.',
  createdAt: new Date().toISOString()
})