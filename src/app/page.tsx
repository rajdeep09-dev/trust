"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import { ArrowRight, Heart, Globe, MessageCircle, Star } from "lucide-react";
import MagneticWrapper from "@/components/MagneticWrapper";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
};

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <main className="w-full bg-[#F4F3F0] text-[#111111] overflow-hidden">
      
      {/* SECTION 1: KINETIC HERO */}
      <section className="relative h-[110vh] flex flex-col items-center justify-center px-4 overflow-hidden bg-[#111111]">
        <motion.div 
          className="absolute inset-0 opacity-40 grayscale"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        
        <div className="z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="text-mask-premium select-none text-[10rem] md:text-[22rem] font-black uppercase tracking-tighter leading-[0.75]">
              <span className="block">VOICES</span>
              <span className="block">UNITED</span>
            </h1>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <MagneticWrapper>
              <Link href="/donate" className="bg-[#FF6536] text-white px-16 py-8 rounded-full font-black uppercase tracking-[0.2em] hoverable transition-all duration-500 text-sm shadow-2xl shadow-[#FF6536]/40 flex items-center gap-3 group">
                INITIATE CHANGE <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </MagneticWrapper>
            <MagneticWrapper>
              <Link href="/about" className="border-[3px] border-white text-white px-16 py-8 rounded-full font-black uppercase tracking-[0.2em] hover:bg-white hover:text-[#111111] transition-all duration-500 text-sm hoverable">
                OUR LEGACY
              </Link>
            </MagneticWrapper>
          </motion.div>
        </div>

        {/* Floating Abstract Element */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 left-20 w-32 h-32 border-2 border-white/20 rounded-full hidden lg:block"
        />
      </section>

      {/* SECTION 2: INFINITE MARQUEE */}
      <section className="py-12 bg-[#FF6536] overflow-hidden border-y-[4px] border-[#111111]">
        <div className="marquee-container flex">
          <motion.div 
            style={{ x }}
            className="flex whitespace-nowrap gap-20 text-6xl md:text-9xl font-black uppercase tracking-tighter text-[#111111]"
          >
            <span>Amplify Voices •</span>
            <span>Empower Humanity •</span>
            <span>Sustainable Future •</span>
            <span>Amplify Voices •</span>
            <span>Empower Humanity •</span>
            <span>Sustainable Future •</span>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: SPLIT-SCREEN CORE FOCUS */}
      <section className="relative py-40 px-6 md:px-12 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="sticky top-40 h-fit">
          <motion.div {...fadeInUp}>
            <h2 className="text-8xl md:text-[10rem] font-black uppercase tracking-tighter leading-none mb-12">
              Our <br /><span className="text-[#FF6536]">Core</span> <br />Focus
            </h2>
            <p className="text-xl md:text-3xl font-medium text-gray-500 leading-relaxed max-w-lg">
              We operate at the intersection of radical advocacy and systemic infrastructure development.
            </p>
          </motion.div>
        </div>
        
        <div className="flex flex-col gap-10">
          {[
            { id: "01", title: "Social Equity", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" },
            { id: "02", title: "Digital Access", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" },
            { id: "03", title: "Climate Justice", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop" },
            { id: "04", title: "Universal Health", img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=2071&auto=format&fit=crop" }
          ].map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-110 grayscale group-hover:grayscale-0"
                style={{ backgroundImage: `url('${item.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                <span className="text-[#FF6536] font-black text-xl mb-2">{item.id}</span>
                <h3 className="text-white text-5xl font-black uppercase tracking-tighter">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 4: IMPACT STATS (Re-styled) */}
      <section className="py-40 bg-[#111111] text-white">
        <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-20">
          {[
            { num: "70", label: "Nations IMPACTED", icon: <Globe size={40} /> },
            { num: "3.2M", label: "Lives TRANSFORMED", icon: <Heart size={40} /> },
            { num: "12B", label: "Energy SECURED", icon: <Star size={40} /> }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-8 text-[#FF6536] transform group-hover:rotate-[360deg] transition-transform duration-[1s]">
                {stat.icon}
              </div>
              <div className="text-[12rem] font-black tracking-tighter leading-none mb-4 flex">
                {stat.num}<span className="text-[#FF6536]">+</span>
              </div>
              <div className="text-gray-500 font-black uppercase tracking-[0.5em] text-[10px]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 5: TESTIMONIALS (Immersive Horizontal Gallery) */}
      <section className="py-40 px-6 md:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto mb-24">
          <motion.h2 
            className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-none"
            {...fadeInUp}
          >
            Human <br /> <span className="text-[#FF6536]">Witness</span>
          </motion.h2>
        </div>

        <div className="flex overflow-x-auto gap-12 pb-20 no-scrollbar snap-x snap-mandatory">
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div 
              key={item}
              className="snap-center shrink-0 w-[400px] md:w-[600px] bg-[#F4F3F0] rounded-[4rem] p-16 md:p-24 flex flex-col justify-between border border-gray-100 shadow-sm"
              whileHover={{ y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <MessageCircle size={60} className="text-[#FF6536] mb-12" />
              <p className="text-2xl md:text-4xl font-black tracking-tight leading-tight mb-12">
                &ldquo;Their radical approach to social equity didn&apos;t just provide resources; it shifted the power dynamic in our entire region.&rdquo;
              </p>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${item}`} alt="User" />
                </div>
                <div>
                  <div className="font-black uppercase tracking-tighter text-xl leading-none">Global Citizen {item}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">Advocate for Change</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-60 px-6 text-center bg-[#111111] relative overflow-hidden">
        <motion.div 
          className="z-10 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-8xl md:text-[15rem] font-black uppercase tracking-tighter leading-none text-white mb-20">
            Be The <br /> <span className="text-mask-premium">Catalyst</span>
          </h2>
          <MagneticWrapper>
            <Link href="/donate" className="inline-block bg-[#FF6536] text-white px-20 py-10 rounded-full font-black uppercase tracking-[0.3em] text-lg hover:scale-110 transition-transform shadow-[0_0_100px_rgba(255,101,54,0.3)] hoverable">
              Invest in Humanity
            </Link>
          </MagneticWrapper>
        </motion.div>
        
        {/* Procedural Abstract Background (SVG) */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </section>
    </main>
  );
}
