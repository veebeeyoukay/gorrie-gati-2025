import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Sparkles, RotateCcw, Home, Download } from 'lucide-react';
import { useRouter } from 'next/router';
import Head from 'next/head';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  tokens?: number;
}

const exampleQuestions = [
  "How do robots learn? 🤖",
  "Write a story about a space jaguar 🐆",
  "What is your favorite color? 🎨",
  "Explain gravity to a 2nd grader 🍎"
];

export default function DemoPage() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 'welcome', role: 'assistant', content: "Hi! I'm Claude (the AI). Ask me anything! 👋" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalTokens, setTotalTokens] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: text })
      });
      
      if (!res.ok) throw new Error("Network error");

      const data = await res.json();
      
      const aiMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        role: 'assistant', 
        content: data.message,
        tokens: data.tokens
      };
      
      setMessages(prev => [...prev, aiMsg]);
      if (data.tokens) setTotalTokens(prev => prev + data.tokens);

    } catch (error) {
      // Offline fallback
      console.log("Offline mode engaged");
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let fallbackResponse = "I can't reach the internet right now, but I can still think! That's a great question.";
      if (text.toLowerCase().includes("jaguar")) fallbackResponse = "Jaguars are strong swimmers and climbers! 🐆";
      
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'assistant', 
        content: fallbackResponse + " (Offline Mode)"
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleExport = () => {
    const text = messages.map(m => `${m.role.toUpperCase()}: ${m.content}`).join('\n\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-ai-chat.txt';
    a.click();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Head>
        <title>Gorrie AI Demo</title>
      </Head>

      {/* Header */}
      <header className="bg-white border-b p-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => router.push('/dashboard')}>
            <Home className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold font-heading flex items-center gap-2 text-red-600">
            <Bot className="w-6 h-6" />
            Chat with AI
          </h1>
        </div>
        <div className="flex items-center gap-4">
           <div className="bg-slate-100 px-3 py-1 rounded-full text-sm font-mono text-slate-600 hidden md:block">
             Tokens Used: {totalTokens}
           </div>
           <Button variant="outline" size="sm" onClick={handleExport}>
             <Download className="w-4 h-4 mr-2" /> Save Chat
           </Button>
           <Button variant="ghost" size="sm" onClick={() => setMessages([{ id: 'new', role: 'assistant', content: "Ready for a new topic!" }])}>
             <RotateCcw className="w-4 h-4" />
           </Button>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] md:max-w-[60%] flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 ${msg.role === 'user' ? 'bg-blue-100 border-blue-300' : 'bg-red-100 border-red-300'}`}>
                  {msg.role === 'user' ? <User className="w-6 h-6 text-blue-600" /> : <Bot className="w-6 h-6 text-red-600" />}
                </div>

                <div className={`p-4 rounded-2xl text-lg shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'
                }`}>
                  {msg.content}
                  {msg.tokens && (
                     <div className="mt-2 text-xs opacity-50 font-mono text-right border-t border-black/10 pt-1">
                       {Math.round(msg.tokens)} tokens
                     </div>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
          
          {isLoading && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
               <div className="flex gap-3 max-w-[60%]">
                  <div className="w-10 h-10 rounded-full bg-red-100 border-2 border-red-300 flex items-center justify-center shrink-0">
                    <Bot className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none flex items-center gap-2">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 border-t shrink-0">
         
         {/* Example Suggestions */}
         {messages.length < 3 && (
           <div className="flex gap-2 overflow-x-auto pb-4 mb-2 no-scrollbar">
             {exampleQuestions.map((q, i) => (
               <button
                 key={i}
                 onClick={() => sendMessage(q)}
                 className="whitespace-nowrap bg-orange-50 text-orange-700 border border-orange-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-orange-100 transition-colors flex items-center gap-2"
               >
                 <Sparkles className="w-3 h-3" /> {q}
               </button>
             ))}
           </div>
         )}

         <form 
           onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
           className="max-w-4xl mx-auto relative flex gap-2"
         >
            <Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="h-14 text-lg pl-6 pr-14 rounded-full shadow-lg border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              size="icon" 
              className="absolute right-2 top-2 h-10 w-10 rounded-full bg-red-600 hover:bg-red-700"
              disabled={!input.trim() || isLoading}
            >
              <Send className="w-5 h-5" />
            </Button>
         </form>
         <p className="text-center text-xs text-gray-400 mt-3">
           AI can make mistakes. Always check with a grown-up!
         </p>
      </div>
    </div>
  );
}

