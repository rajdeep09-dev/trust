"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Plus, Minus } from "lucide-react";

const faqs = [
  { q: "How are funds distributed?", a: "85% of all donations go directly to community infrastructure. The remaining 15% fuels our legislative advocacy and engineering of new relief tools." },
  { q: "Can I volunteer globally?", a: "Yes. We run a 'Digital Catalyst' program for remote support and 'Field Architect' rotations for on-site infrastructure development." },
  { q: "Is Voices United a registered charity?", a: "We are a registered 501(c)(3) in the US and have equivalent status in 12 other nations. All contributions are tax-deductible." },
  { q: "How do you select your projects?", a: "We prioritize regions with the highest systemic power imbalance, typically identified through our proprietary 'Equity Index' data." }
];

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <main className="bg-[#F4F3F0] pt-40 pb-24 overflow-hidden">
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto mb-40 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-none mb-12">
            Establish <br /> <span className="text-[#FF6536]">Contact</span>
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-gray-500 max-w-lg mb-20 leading-tight">
            Our neural network of advocates is ready to synchronize with your mission.
          </p>

          <div className="flex flex-col gap-12">
            {[
              { icon: <Mail />, label: "Email Network", val: "nexus@voicesunited.org" },
              { icon: <Phone />, label: "Secure Line", val: "+1 (888) VOICES-U" },
              { icon: <MapPin />, label: "Physical Hub", val: "77 Impact Plaza, NY" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-8 group">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl group-hover:bg-[#FF6536] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-1">{item.label}</div>
                  <div className="text-2xl font-black uppercase tracking-tight">{item.val}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="bg-[#111111] rounded-[4rem] p-10 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative overflow-hidden text-white"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-12">Initiate Transmission</h2>
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Identity</label>
              <input type="text" className="bg-white/5 border border-white/10 rounded-2xl px-8 py-6 font-bold outline-none focus:border-[#FF6536] transition-all" placeholder="YOUR FULL NAME" />
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Signal Address</label>
              <input type="email" className="bg-white/5 border border-white/10 rounded-2xl px-8 py-6 font-bold outline-none focus:border-[#FF6536] transition-all" placeholder="EMAIL@DOMAIN.COM" />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Narrative</label>
              <textarea className="bg-white/5 border border-white/10 rounded-3xl px-8 py-6 font-bold outline-none focus:border-[#FF6536] transition-all min-h-[180px] resize-none" placeholder="TELL US YOUR STORY..."></textarea>
            </div>

            <button className="bg-[#FF6536] text-white rounded-full py-8 font-black uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:scale-[1.02] transition-transform shadow-2xl shadow-[#FF6536]/30">
              SEND SIGNAL <Send size={20} />
            </button>
          </form>
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6536] rounded-full blur-[120px] opacity-10 -translate-y-1/2 translate-x-1/2" />
        </motion.div>
      </div>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 max-w-[1000px] mx-auto pb-40">
        <motion.h2 
          className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Common <span className="text-[#FF6536]">Queries</span>
        </motion.h2>
        
        <div className="flex flex-col gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-[#111111]/10">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full py-10 flex justify-between items-center text-left hover:text-[#FF6536] transition-colors"
              >
                <span className="text-2xl md:text-4xl font-black uppercase tracking-tighter">{faq.q}</span>
                <div className="w-12 h-12 rounded-full border border-[#111111] flex items-center justify-center shrink-0">
                  {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-10 text-xl md:text-2xl font-medium text-gray-500 leading-relaxed max-w-3xl">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
