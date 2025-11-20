import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  tokens?: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { prompt } = req.body;
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    // Mock response for demo without API key
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate latency
    
    let response = "I'm a friendly AI robot! That's a great question.";
    if (prompt.toLowerCase().includes("jaguar")) {
      response = "Did you know jaguars are excellent swimmers? Unlike most cats, they love water! They are also the mascot of Gorrie Elementary! 🐆";
    } else if (prompt.toLowerCase().includes("story")) {
      response = "Once upon a time, there was a brave robot who wanted to paint the sky purple. It mixed all its paints and climbed the highest mountain...";
    } else if (prompt.toLowerCase().includes("robot")) {
      response = "I am a computer program, not a physical robot. But I can 'think' by looking at patterns in words!";
    }

    return res.status(200).json({ message: response, tokens: response.split(' ').length * 1.3 });
  }

  try {
    // Call Anthropic API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: "claude-3-haiku-20240307",
        max_tokens: 300,
        system: "You are helping teach 2nd and 4th graders about AI. Keep responses short (2-3 sentences max), age-appropriate, friendly, educational, and encouraging curiosity. Never discuss personal info.",
        messages: [{ role: "user", content: prompt }]
      })
    });

    const data = await response.json();
    
    if (data.content && data.content[0]) {
       return res.status(200).json({ 
         message: data.content[0].text,
         tokens: data.usage?.output_tokens || 0
       });
    } else {
       throw new Error('Invalid response from AI');
    }

  } catch (error) {
    console.error('AI API Error:', error);
    return res.status(500).json({ message: "Oops! My brain is tired. Try again!" });
  }
}

