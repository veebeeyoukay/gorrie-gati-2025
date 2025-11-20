import type { NextApiRequest, NextApiResponse } from 'next';

// Mock database storage in memory since we don't have a real DB connection in this demo environment
// In production, this would query the Postgres DB
let votesStore = {
  yes: 15, // Initial seed value
  no: 0
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // Return current counts
    return res.status(200).json(votesStore);
  }

  if (req.method === 'POST') {
    const { pollId, option, grade, audience } = req.body;
    
    // In a real app, we'd insert into the DB here
    // await db.query("INSERT INTO poll_votes ...")
    
    if (option === 'yes') {
      votesStore.yes += 1;
    } else if (option === 'no') {
      votesStore.no += 1;
    }

    return res.status(200).json({ success: true, total: votesStore });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}

