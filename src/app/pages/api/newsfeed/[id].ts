import { NextApiRequest, NextApiResponse } from "next";

export function NewsFeed (res: NextApiResponse, req: NextApiRequest) {
    const { id } = req.query;

    if (req.method === 'GET') {
        res.status(200).json({ id, message: 'Author data fetched successfully' });
    }
    const url = 'https://api.worldnewsapi.com'
    const apiKey = '';

    fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}
