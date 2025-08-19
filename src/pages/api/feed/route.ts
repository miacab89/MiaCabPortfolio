// import { NextApiRequest, NextApiResponse } from "next";

// export function NewsFeed (res: NextApiResponse, req: NextApiRequest) {
//     const { id } = req.query;

//     if (req.method === 'GET') {
//         res.status(200).json({ id, message: 'Feed data fetched successfully' });
//     }
//     // const url = 'https://api.worldnewsapi.com'
//     // const apiKey = '';

//     // fetch(url, {
//     //     method: 'GET',
//     //     headers: {
//     //         'x-api-key': apiKey
//     //     }
//     // })
//     // .then(response => {
//     //     if (!response.ok) {
//     //         throw new Error(`HTTP error! Status: ${response.status}`);
//     //     }
//     //     return response.json();
//     // })
//     // .then(data => console.log(data))
//     // .catch(error => console.error('There was a problem with the fetch operation:', error));
// }

import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: 'Hello from Next.js!' })
} 

