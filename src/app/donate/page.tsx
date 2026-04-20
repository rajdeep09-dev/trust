"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Globe, Shield, Zap, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const impacts = [
  { threshold: 0, text: "Your contribution fuels our daily operations.", icon: <Zap /> },
  { threshold: 50, text: "Provides a student with a digital learning kit for a year.", icon: <Globe /> },
  { threshold: 250, text: "Funds a medical mobile unit mission to a remote region.", icon: <Shield /> },
  { threshold: 1000, text: "Sponsors a community water generator installation.", icon: <Heart /> }
];

export default function DonatePage() {
  const [amount, setAmount] = useState(100);
  const [isMonthly, setIsMonthly] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const getImpactText = () => {
    const sortedImpacts = [...impacts].sort((a, b) => b.threshold - a.threshold);
    return sortedImpacts.find(i => amount >= i.threshold)?.text || impacts[0].text;
  };

  const handleDonate = () => {
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <main className="min-h-screen bg-[#111111] text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      
      {/* Background Abstract */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#FF6536_0%,transparent_50%)] blur-[100px]" />
      </div>

      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="z-10 w-full max-w-4xl flex flex-col items-center"
          >
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-center mb-12">
              Invest in <br /> <span className="text-[#FF6536]">Humanity</span>
            </h1>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[4rem] p-10 md:p-20 w-full">
              {/* Frequency Toggle */}
              <div className="flex bg-white/5 p-2 rounded-2xl mb-16 max-w-xs mx-auto">
                <button 
                  onClick={() => setIsMonthly(false)}
                  className={`flex-1 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all ${!isMonthly ? 'bg-[#FF6536] text-white' : 'text-gray-400'}`}
                >
                  One-Time
                </button>
                <button 
                  onClick={() => setIsMonthly(true)}
                  className={`flex-1 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all ${isMonthly ? 'bg-[#FF6536] text-white' : 'text-gray-400'}`}
                >
                  Monthly
                </button>
              </div>

              {/* Amount Slider */}
              <div className="mb-20">
                <div className="flex justify-between items-end mb-8">
                  <div className="text-xs font-black uppercase tracking-[0.4em] text-gray-500">Contribution Amount</div>
                  <div className="text-7xl md:text-9xl font-black tracking-tighter text-[#FF6536]">${amount}</div>
                </div>
                <input 
                  type="range" 
                  min="10" 
                  max="5000" 
                  step="10"
                  value={amount}
                  onChange={(e) => setAmount(parseInt(e.target.value))}
                  className="w-full h-4 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#FF6536]"
                />
              </div>

              {/* Impact Visualization */}
              <div className="flex flex-col md:flex-row items-center gap-10 border-t border-white/10 pt-16">
                <div className="w-24 h-24 rounded-full bg-[#FF6536] flex items-center justify-center text-white">
                  {impacts.find(i => amount >= i.threshold)?.icon || <Heart />}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF6536] mb-2">Direct Impact</div>
                  <p className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                    {getImpactText()}
                  </p>
                </div>
              </div>

              <button 
                onClick={handleDonate}
                className="w-full mt-16 bg-white text-[#111111] py-8 rounded-full font-black uppercase tracking-[0.3em] text-lg hover:bg-[#FF6536] hover:text-white transition-all duration-500 flex items-center justify-center gap-4 group"
              >
                Confirm Donation <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="z-10 flex flex-col items-center text-center"
          >
            <div className="w-40 h-40 rounded-full bg-[#FF6536] flex items-center justify-center mb-12">
              <Check size={80} className="text-white" />
            </div>
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8">
              Legacy <br /> <span className="text-[#FF6536]">Initiated</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium text-gray-400 max-w-lg mb-12">
              Your investment in the future of humanity has been secured. We will notify you as your contribution shifts systemic realities.
            </p>
            <button 
              onClick={() => setIsSuccess(false)}
              className="border-2 border-white/20 text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-white hover:text-[#111111] transition-all"
            >
              Back to Form
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer link */}
      <Link 
        href="/" 
        className="absolute bottom-12 text-[10px] font-black uppercase tracking-[0.5em] text-gray-600 hover:text-white transition-colors"
      >
        Return to Nexus
      </Link>
    </main>
  );
}
