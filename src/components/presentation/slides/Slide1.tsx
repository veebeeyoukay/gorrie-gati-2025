import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mic, Smartphone, Globe } from 'lucide-react';
import { usePresentationMode } from '@/lib/usePresentationMode';

export const Slide1 = () => {
  const [votes, setVotes] = useState(15);
  const [hasVoted, setHasVoted] = useState(false);
  const [selectedResponse, setSelectedResponse] = useState<'few' | 'half' | 'most' | null>(null);
  const [mode, setMode] = useState<string>("");
  const { grade, audience } = usePresentationMode();

  useEffect(() => {
    // Fetch initial votes
    fetch('/api/poll')
      .then(res => res.json())
      .then(data => {
        if (data.yes) setVotes(data.yes);
      })
      .catch(err => console.error("Failed to fetch votes", err));
      
    if (typeof window !== 'undefined') {
      const savedGrade = localStorage.getItem('gati_grade');
      const savedAudience = localStorage.getItem('gati_audience');
      if (savedGrade && savedAudience) {
        setMode(`${savedGrade} Grade • ${savedAudience.charAt(0).toUpperCase() + savedAudience.slice(1)} Session`);
      }
    }
  }, []);

  const handleResponseClick = async (response: 'few' | 'half' | 'most') => {
    setSelectedResponse(response);
    setHasVoted(true);
    // Optimistic update
    setVotes(prev => prev + 1);

    try {
      await fetch('/api/poll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pollId: 'slide1-usage',
          option: 'yes',
          grade,
          audience
        })
      });
    } catch (error) {
      console.error("Vote failed", error);
    }
  };

  const getResponseMessage = (): string => {
    switch (selectedResponse) {
      case 'few':
        return "That's okay! Today we're going to learn all about how AI works - you'll be an expert by the end!";
      case 'half':
        return "Great! You're already familiar with AI. Let's discover how these smart helpers actually work!";
      case 'most':
        return "Awesome! You've already used AI. Now let's learn the cool secrets behind how it thinks and learns!";
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-red-600 font-heading mb-4 drop-shadow-lg">
          How Does AI <br/> <span className="text-black">Actually Work?</span>
        </h1>
        <p className="text-2xl text-gray-600 font-medium">Gorrie Elementary • Great American Teach-In</p>
        {mode && <p className="text-lg text-orange-600 font-bold bg-orange-50 px-4 py-1 rounded-full inline-block mt-2">{mode}</p>}
      </motion.div>

      <motion.div 
        className="bg-white p-8 rounded-2xl shadow-xl border-4 border-orange-400 max-w-2xl w-full"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Quick Poll! ✋</h2>
        <p className="text-xl mb-6">Who has used Siri, Alexa, or Google Assistant?</p>
        
        <div className="flex justify-center gap-8 mb-8">
          <motion.div whileHover={{ scale: 1.1 }} className="text-center">
             <div className="bg-gray-100 p-4 rounded-full mb-2"><Smartphone className="w-10 h-10 text-blue-500" /></div>
             <span className="font-bold">Siri</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="text-center">
             <div className="bg-gray-100 p-4 rounded-full mb-2"><Globe className="w-10 h-10 text-green-500" /></div>
             <span className="font-bold">Google</span>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} className="text-center">
             <div className="bg-gray-100 p-4 rounded-full mb-2"><Mic className="w-10 h-10 text-cyan-500" /></div>
             <span className="font-bold">Alexa</span>
          </motion.div>
        </div>

        {!hasVoted ? (
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => handleResponseClick('few')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full px-8 py-4 shadow-lg transform transition hover:scale-105"
            >
              A few
            </Button>
            <Button 
              size="lg" 
              onClick={() => handleResponseClick('half')}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold text-lg rounded-full px-8 py-4 shadow-lg transform transition hover:scale-105"
            >
              About half
            </Button>
            <Button 
              size="lg" 
              onClick={() => handleResponseClick('most')}
              className="bg-green-500 hover:bg-green-600 text-white font-bold text-lg rounded-full px-8 py-4 shadow-lg transform transition hover:scale-105"
            >
              Most
            </Button>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-6"
          >
            <p className="text-xl font-semibold text-gray-800 mb-2">
              {getResponseMessage()}
            </p>
          </motion.div>
        )}
      </motion.div>
      
      {/* Jaguar Mascot Decoration */}
      <motion.img 
        src="/images/gorrie_Logo.png" 
        alt="Gorrie Jaguar" 
        className="absolute bottom-0 right-0 w-48 h-48 opacity-20 pointer-events-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </div>
  );
};
