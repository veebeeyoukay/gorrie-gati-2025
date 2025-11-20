import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Bot, Database, Library } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { usePresentationMode } from '@/lib/usePresentationMode';

export const Slide4 = () => {
  const [stage, setStage] = useState(0);
  const { grade } = usePresentationMode();

  const isFourthGrade = grade === '4th';

  const stages = [
    { 
      label: isFourthGrade ? "Training Data: Small" : "Small Brain", 
      count: isFourthGrade ? "1 Book (100k tokens)" : "1 Book", 
      icon: Book, 
      color: "bg-blue-100 text-blue-600" 
    },
    { 
      label: isFourthGrade ? "Training Data: Medium" : "Medium Brain", 
      count: isFourthGrade ? "1,000 Books (100M tokens)" : "1,000 Books", 
      icon: Library, 
      color: "bg-purple-100 text-purple-600" 
    },
    { 
      label: isFourthGrade ? "Training Data: Massive" : "Huge Brain!", 
      count: isFourthGrade ? "The Internet (Trillions of tokens)" : "ALL the Books!", 
      icon: Database, 
      color: "bg-red-100 text-red-600" 
    },
  ];

  return (
    <div className="flex flex-col h-full items-center justify-center relative">
      <h2 className="text-5xl font-bold text-center mb-8 font-heading">
        {isFourthGrade ? "How AI Learns (Training)" : "How AI Learns 📚"}
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl">
        
        <div className="flex flex-col items-center space-y-8 flex-1">
          <motion.div 
            animate={{ scale: stage === 2 ? 1.5 : 1 }}
            className="relative"
          >
            <Bot className="w-48 h-48 text-gray-800" />
            <motion.div 
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute top-0 right-0 bg-yellow-400 rounded-full p-2 shadow-lg"
            >
              <div className="w-4 h-4 bg-white rounded-full animate-ping" />
            </motion.div>
          </motion.div>
          <p className="text-2xl font-bold text-center text-gray-600">
            {isFourthGrade ? "The Model" : "The AI Robot"}
          </p>
        </div>

        <div className="flex flex-col items-center flex-1 space-y-6">
          {stages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: stage >= index ? 1 : 0.3, 
                x: 0,
                scale: stage === index ? 1.1 : 1
              }}
              className={`w-full p-6 rounded-xl flex items-center gap-6 ${item.color} transition-all duration-500 border-2 border-transparent ${stage === index ? 'border-current shadow-xl' : ''}`}
            >
               <item.icon className="w-12 h-12" />
               <div>
                 <h3 className="text-2xl font-bold">{item.label}</h3>
                 <p className="text-lg opacity-80">{item.count}</p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex gap-4">
        <Button 
          onClick={() => setStage(prev => Math.max(0, prev - 1))}
          disabled={stage === 0}
          variant="outline"
          size="lg"
        >
          Less Books
        </Button>
        <Button 
          onClick={() => setStage(prev => Math.min(2, prev + 1))}
          disabled={stage === 2}
          className="bg-red-600 hover:bg-red-700 text-white text-lg"
          size="lg"
        >
          More Books!
        </Button>
      </div>
    </div>
  );
};
