import type { NextApiRequest, NextApiResponse } from 'next';

// Mock database storage in memory
// In production, this would query the Postgres DB
interface LoginActivity {
  id: string;
  email: string;
  userType: 'teacher' | 'parent' | 'student';
  timestamp: string;
  ipAddress?: string;
}

let loginActivityStore: LoginActivity[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    // Return all login activities
    return res.status(200).json(loginActivityStore);
  }

  if (req.method === 'POST') {
    const { email, userType, ipAddress } = req.body;
    
    // In a real app, we'd insert into the DB here
    // await db.query("INSERT INTO login_activity ...")
    
    const activity: LoginActivity = {
      id: Date.now().toString(),
      email: email || 'unknown',
      userType: userType || 'student',
      timestamp: new Date().toISOString(),
      ipAddress: ipAddress || req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown'
    };

    loginActivityStore.push(activity);
    
    // Keep only last 1000 entries to prevent memory issues
    if (loginActivityStore.length > 1000) {
      loginActivityStore = loginActivityStore.slice(-1000);
    }

    return res.status(200).json({ success: true, activity });
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}

