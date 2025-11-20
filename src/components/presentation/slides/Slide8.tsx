import React from 'react';
import { motion } from 'framer-motion';

export const Slide8 = () => {
  const tokens = [
    { text: "The", color: "bg-blue-200" },
    { text: " basket", color: "bg-green-200" },
    { text: "ball", color: "bg-yellow-200" },
    { text: " play", color: "bg-red-200" },
    { text: "er", color: "bg-purple-200" },
    { text: " jump", color: "bg-orange-200" },
    { text: "ed", color: "bg-pink-200" },
  ];

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 font-heading">Tokens: How AI Reads 🔢</h2>

      <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 max-w-4xl w-full mb-12">
        <p className="text-2xl text-gray-500 mb-4">Normal Sentence:</p>
        <p className="text-4xl font-bold font-mono text-gray-800 mb-8">"The basketball player jumped"</p>
        
        <div className="h-px bg-gray-200 w-full mb-8" />

        <p className="text-2xl text-gray-500 mb-4">How AI Sees It (Tokens):</p>
        <div className="flex flex-wrap gap-2">
          {tokens.map((token, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.3 }}
              className={`${token.color} px-4 py-2 rounded-lg text-2xl font-mono font-bold border-2 border-black/10 shadow-sm`}
            >
              {token.text}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="flex gap-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="bg-gray-900 text-white p-6 rounded-xl text-center"
        >
          <span className="block text-4xl font-bold text-green-400 mb-1">7</span>
          <span className="text-sm uppercase tracking-wider opacity-70">Tokens</span>
        </motion.div>
        <motion.div 
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           transition={{ delay: 2.7 }}
           className="bg-gray-900 text-white p-6 rounded-xl text-center"
        >
          <span className="block text-4xl font-bold text-blue-400 mb-1">4</span>
          <span className="text-sm uppercase tracking-wider opacity-70">Words</span>
        </motion.div>
      </div>
      
      <p className="mt-8 text-xl text-gray-600">AI doesn't read whole words like us. It reads chunks called <span className="font-bold text-red-600">TOKENS</span>.</p>
    </div>
  );
};

