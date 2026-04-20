import Link from "next/link";
import { Globe, Heart, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="text-4xl font-black uppercase tracking-tighter mb-8 block">
              Voices<span className="text-[#FF6536]">United</span>
            </Link>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-8">
              Empowering communities, amplifying voices, and creating sustainable change across 70+ countries. Join our mission to build a better future.
            </p>
            <div className="flex gap-6">
              <Globe className="cursor-pointer hover:text-[#FF6536] transition-colors" />
              <Heart className="cursor-pointer hover:text-[#FF6536] transition-colors" />
              <MessageCircle className="cursor-pointer hover:text-[#FF6536] transition-colors" />
              <Mail className="cursor-pointer hover:text-[#FF6536] transition-colors" />
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-[#FF6536]">Navigation</h4>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="font-bold hover:translate-x-2 transition-transform block">About Us</Link></li>
              <li><Link href="/impact" className="font-bold hover:translate-x-2 transition-transform block">Our Impact</Link></li>
              <li><Link href="/contact" className="font-bold hover:translate-x-2 transition-transform block">Contact</Link></li>
              <li><Link href="/#donate" className="font-bold hover:translate-x-2 transition-transform block">Donate</Link></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-xs mb-8 text-[#FF6536]">Legal</h4>
            <ul className="flex flex-col gap-4 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Tax Receipts</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
            © 2026 VOICES UNITED NGO. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-gray-500">
            <span>Designed with Passion</span>
            <span>Built for Change</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
