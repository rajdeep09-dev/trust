"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
};

export default function AboutPage() {
  return (
    <main className="bg-[#F4F3F0] pt-40 pb-24 overflow-hidden">
      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-40">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <h1 className="text-8xl md:text-[15rem] font-black uppercase tracking-tighter leading-[0.75] mb-16">
            The <span className="text-mask-premium">Radical</span> <br />
            Nexus of Care
          </h1>
          <p className="text-2xl md:text-5xl font-black tracking-tight max-w-4xl leading-[1.1] text-[#111111]">
            We operate outside the traditional NGO framework. We are a decentralized network of catalysts, engineers, and advocates obsessed with systemic equity.
          </p>
        </motion.div>
      </section>

      <section className="px-6 md:px-12 mb-40">
        <motion.div 
          className="h-[80vh] w-full rounded-[4rem] overflow-hidden relative"
          initial={{ clipPath: "inset(20% 20% 20% 20% round 4rem)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 4rem)" }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="absolute inset-0 bg-cover bg-center grayscale scale-125"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop')" }}
            whileInView={{ y: [-100, 100], scale: 1 }}
            transition={{ duration: 5, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-[#FF6536]/20 mix-blend-overlay" />
        </motion.div>
      </section>

      <section className="px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40">
        <div className="sticky top-40 h-fit">
          <motion.h2 {...fadeInUp} className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-8 leading-none">
            Architecting <br /> <span className="text-[#FF6536]">Endurance</span>
          </motion.h2>
        </div>
        
        <div className="flex flex-col gap-32">
          {[
            { title: "Radical Transparency", desc: "Every dollar is tracked on a public ledger. We don&apos;t hide behind administrative complexity." },
            { title: "Systemic Decolonization", desc: "We don&apos;t impose solutions. We provide the infrastructure for local leadership to lead their own resets." },
            { title: "Obsessive Innovation", desc: "If the current tool fails, we build a new one. Satellite hubs, bio-shield units, legislative engines." }
          ].map((val, i) => (
            <motion.div 
              key={i}
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: i * 0.2 }}
              className="border-t border-[#111111] pt-12"
            >
              <div className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FF6536] mb-6">0{i+1} / Strategy</div>
              <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">{val.title}</h3>
              <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-[1400px] mx-auto mb-40">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-24">The Architects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              whileHover={{ scale: 0.98 }}
              className="relative aspect-[3/4] rounded-[3rem] overflow-hidden group bg-[#111111]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale opacity-60 transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&u=${item}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-10 transform translate-y-8 group-hover:translate-y-0 transition-transform">
                <h3 className="text-white text-4xl font-black uppercase tracking-tighter">Director {item}</h3>
                <p className="text-[#FF6536] font-black uppercase tracking-widest text-[10px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Lead Architect</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
