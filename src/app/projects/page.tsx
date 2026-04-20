"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "edu-tech",
    title: "Digital Horizon",
    category: "Education",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop",
    description: "Equipping remote villages with satellite-linked education hubs and AI-driven curriculum.",
    impact: "150,000+ Students connected globally.",
  },
  {
    id: "clean-water",
    title: "Aqua Pure",
    category: "Infrastructure",
    img: "https://images.unsplash.com/photo-1544333323-53744654929a?q=80&w=2070&auto=format&fit=crop",
    description: "Implementing solar-powered atmospheric water generators in arid regions.",
    impact: "800+ Sustainable wells established.",
  },
  {
    id: "health-shield",
    title: "Bio Shield",
    category: "Healthcare",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    description: "Mobile medical units with rapid-diagnostic capabilities for remote vaccine delivery.",
    impact: "450K+ Medical consultations delivered.",
  },
  {
    id: "justice-advocacy",
    title: "Voice Power",
    category: "Advocacy",
    img: "https://images.unsplash.com/photo-1589262804704-c5aa9e6f101b?q=80&w=2070&auto=format&fit=crop",
    description: "Training legal advocates to protect marginalized communities in legislative battles.",
    impact: "15 Major global policies influenced.",
  }
];

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <main className="bg-[#F4F3F0] pt-40 pb-24 px-6 md:px-12 min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <h1 className="text-8xl md:text-[12rem] font-black uppercase tracking-tighter leading-none mb-8">
            Global <br /><span className="text-[#FF6536]">Initiatives</span>
          </h1>
          <p className="text-xl md:text-3xl font-medium text-gray-500 max-w-2xl leading-relaxed">
            Our projects aren&apos;t just interventions; they are systemic resets designed for radical endurance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <motion.div
              layoutId={project.id}
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="group relative h-[600px] rounded-[4rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-shadow duration-500"
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] group-hover:scale-105"
                style={{ backgroundImage: `url('${project.img}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-12 flex flex-col justify-end">
                <span className="text-[#FF6536] font-black text-xs uppercase tracking-[0.3em] mb-4">{project.category}</span>
                <h3 className="text-white text-6xl font-black uppercase tracking-tighter mb-4">{project.title}</h3>
                <div className="flex items-center gap-4 text-white/60 font-bold uppercase tracking-widest text-xs group-hover:text-white transition-colors">
                  Explore Project <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedId(null)}
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
              />
              <motion.div
                layoutId={selectedId}
                className="bg-white w-full max-w-6xl h-full md:h-auto md:max-h-[90vh] rounded-[3rem] overflow-hidden relative z-[210] flex flex-col md:flex-row shadow-2xl"
              >
                <div className="w-full md:w-1/2 h-[300px] md:h-auto overflow-hidden relative">
                  <img 
                    src={projects.find(p => p.id === selectedId)?.img} 
                    alt="Project" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 md:hidden" />
                </div>
                
                <div className="p-12 md:p-20 flex-1 flex flex-col justify-center relative">
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="absolute top-8 right-8 text-gray-400 hover:text-[#111111] transition-colors"
                  >
                    <X size={32} />
                  </button>
                  
                  <span className="text-[#FF6536] font-black text-sm uppercase tracking-[0.4em] mb-6">
                    {projects.find(p => p.id === selectedId)?.category}
                  </span>
                  <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
                    {projects.find(p => p.id === selectedId)?.title}
                  </h2>
                  <p className="text-xl md:text-2xl font-medium text-gray-500 mb-12 leading-relaxed">
                    {projects.find(p => p.id === selectedId)?.description}
                  </p>
                  
                  <div className="bg-[#F4F3F0] p-10 rounded-3xl">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-2">Verified Impact</div>
                    <div className="text-3xl md:text-5xl font-black tracking-tight">
                      {projects.find(p => p.id === selectedId)?.impact}
                    </div>
                  </div>

                  <button className="mt-12 bg-[#FF6536] text-white py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-colors">
                    Support This Initiative
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
