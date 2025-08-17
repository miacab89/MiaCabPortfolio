import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    try {
        res.status(200).json({ message: "Successful call!" })
    } catch {
        return res.status(400).send({ message: "Call failed!" });
    }
}