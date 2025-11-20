import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Gamepad2, Mic2, Sparkles } from 'lucide-react';

const timeline = [
  { year: "1950s", title: "Thinking Machines", icon: Cpu, desc: "Scientists started dreaming of smart computers.", color: "text-blue-500" },
  { year: "1990s", title: "Game Masters", icon: Gamepad2, desc: "Computers beat humans at Chess!", color: "text-purple-500" },
  { year: "2010s", title: "Talking Assistants", icon: Mic2, desc: "Siri and Alexa started talking to us.", color: "text-green-500" },
  { year: "2020s", title: "Creative AI", icon: Sparkles, desc: "AI can now write stories and draw pictures!", color: "text-orange-500" },
];

export const Slide3 = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h2 className="text-5xl font-bold text-center mb-12 font-heading">AI Through History 🕰️</h2>
      
      <div className="relative w-full max-w-6xl">
        {/* Line */}
        <div className="absolute top-1/2 left-0 w-full h-2 bg-gray-200 -translate-y-1/2 z-0 rounded-full" />
        
        <div className="grid grid-cols-4 gap-4 relative z-10">
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className={`bg-white p-6 rounded-full shadow-lg border-4 border-white mb-6 ${item.color} transform transition hover:scale-110 hover:rotate-3`}>
                <item.icon className="w-12 h-12" />
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md text-center w-full h-48 flex flex-col justify-center border-b-4 border-gray-100">
                <span className="text-2xl font-bold text-gray-400 mb-2">{item.year}</span>
                <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

