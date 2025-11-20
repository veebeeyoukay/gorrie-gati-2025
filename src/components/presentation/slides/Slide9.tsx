import React from 'react';
import { motion } from 'framer-motion';
import { Bot, ThumbsUp, Lightbulb } from 'lucide-react';

export const Slide9 = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center text-center">
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="mb-8"
      >
         <Bot className="w-32 h-32 text-red-600" />
      </motion.div>

      <h2 className="text-5xl font-bold mb-6 font-heading">Time to Talk to AI! 🤖</h2>
      <p className="text-2xl text-gray-600 max-w-2xl mb-12">We are going to use a real AI called "Claude" to write a story together.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full text-left">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-green-500">
           <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
             <ThumbsUp className="text-green-500" /> Rules
           </h3>
           <ul className="space-y-3 text-lg">
             <li className="flex items-center gap-2">✅ Raise your hand to suggest ideas</li>
             <li className="flex items-center gap-2">✅ Be creative and silly!</li>
             <li className="flex items-center gap-2">✅ Let's make the AI work hard!</li>
           </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-yellow-500">
           <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
             <Lightbulb className="text-yellow-500" /> Ideas?
           </h3>
           <ul className="space-y-3 text-lg text-gray-600">
             <li>"A jaguar who plays soccer..."</li>
             <li>"A robot who loves pizza..."</li>
             <li>"A school made of candy..."</li>
           </ul>
        </div>
      </div>
    </div>
  );
};

