"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import MagneticWrapper from "./MagneticWrapper";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Impact", href: "/impact" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled ? "bg-white/80 backdrop-blur-xl py-4 shadow-sm" : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <MagneticWrapper>
            <Link href="/" className="text-2xl font-black uppercase tracking-tighter hoverable">
              Voices<span className="text-[#FF6536]">United</span>
            </Link>
          </MagneticWrapper>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-12 items-center">
            {navLinks.map((link) => (
              <MagneticWrapper key={link.name}>
                <Link
                  href={link.href}
                  className="text-[10px] font-black uppercase tracking-[0.3em] hover:text-[#FF6536] transition-colors hoverable p-2"
                >
                  {link.name}
                </Link>
              </MagneticWrapper>
            ))}
            <MagneticWrapper>
              <Link
                href="/donate"
                className="bg-[#FF6536] text-white px-8 py-3 rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#FF6536]/20 hoverable"
              >
                Donate Now
              </Link>
            </MagneticWrapper>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#111111]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[150] bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button
              className="absolute top-8 right-6 text-[#111111]"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter hover:text-[#FF6536] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-[#FF6536] text-white px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm"
            >
              Donate Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
