"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

export default function ImpactPage() {
  return (
    <main className="bg-[#F4F3F0] pt-40 pb-24 overflow-hidden">
      {/* Header */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-8xl md:text-[15rem] font-black uppercase tracking-tighter leading-none mb-12">
            Verifiable <br /> <span className="text-[#FF6536]">Resets</span>
          </h1>
          <p className="text-2xl md:text-5xl font-black tracking-tight max-w-4xl text-gray-400 uppercase">
            Quantifying the shift in global power dynamics.
          </p>
        </motion.div>
      </section>

      {/* Progress Bars Section */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-40">
        <div className="flex flex-col gap-20">
          {[
            { label: "Sovereign Energy Access", value: 85, color: "#FF6536" },
            { label: "Digital Sovereignty", value: 92, color: "#111111" },
            { label: "Community Leadership Retention", value: 78, color: "#FF6536" }
          ].map((bar, i) => (
            <div key={i}>
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter">{bar.label}</h3>
                <span className="text-4xl md:text-6xl font-black text-[#FF6536]">{bar.value}%</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${bar.value}%` }}
                  transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: bar.color }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Masonry-Style Impact Stories */}
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-40">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-24 leading-none">Global Snapshot</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-10 space-y-10">
          {[
            { h: "h-[600px]", img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" },
            { h: "h-[400px]", img: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop" },
            { h: "h-[700px]", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" },
            { h: "h-[500px]", img: "https://images.unsplash.com/photo-1544333323-53744654929a?q=80&w=2070&auto=format&fit=crop" },
            { h: "h-[450px]", img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop" },
            { h: "h-[650px]", img: "https://images.unsplash.com/photo-1589262804704-c5aa9e6f101b?q=80&w=2070&auto=format&fit=crop" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: i * 0.1 }}
              className={`w-full ${item.h} rounded-[3rem] overflow-hidden relative group cursor-crosshair shadow-2xl`}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                style={{ backgroundImage: `url('${item.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <h4 className="text-white text-3xl font-black uppercase tracking-tighter">Impact Log 0{i+1}</h4>
                <p className="text-gray-400 font-bold mt-2">Verified systemic shift recorded.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Narrative Footer */}
      <section className="px-6 md:px-12 py-40 bg-[#111111] text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12">Transparency is <br /> <span className="text-mask-premium">Absolute</span></h3>
          <button className="bg-[#FF6536] text-white px-16 py-8 rounded-full font-black uppercase tracking-widest text-sm hover:scale-110 transition-transform">Download Audit Ledger</button>
        </motion.div>
      </section>
    </main>
  );
}
