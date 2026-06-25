import { MapPin, Phone, Mail, Clock, Instagram, Wind } from 'lucide-react';

const links = ['Services', 'Why Us', 'Gallery', 'Reviews', 'FAQ'];

function HexLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center shrink-0" style={{clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',background:'linear-gradient(135deg,#F59E0B,#D97706)'}}>
        <span className="font-display text-[9px] font-black leading-none text-black tracking-tight">DE-S</span>
      </div>
      <div>
        <p className="font-display font-black tracking-[0.2em] text-white leading-tight">DE-STANDARD</p>
        <p className="font-mono text-[10px] tracking-[0.12em] text-amber-400/60 leading-tight">SERVICE TECH LTD</p>
      </div>
    </div>
  );
}

export default function Footer() {
  const scrollTo = (label) => document.getElementById(label.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden border-t border-amber-500/12 bg-[#070707] py-16 text-white lg:py-20">
      <div className="absolute inset-0 opacity-[0.025]" style={{backgroundImage:'linear-gradient(#F59E0B 1px,transparent 1px),linear-gradient(90deg,#F59E0B 1px,transparent 1px)',backgroundSize:'80px 80px'}} />
      {/* Top gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="mb-6"><HexLogo /></div>
            <p className="max-w-xs leading-7 text-white/45">Atmospheric engineering for homes, offices, schools, and businesses across Uyo and Akwa Ibom. Door-to-door maintenance available.</p>

            {/* MD card */}
            <div className="mt-6 rounded-2xl border border-amber-500/15 bg-amber-500/5 p-4">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-amber-400/60">Managing Director</p>
              <p className="mt-1 font-display text-lg font-black text-white">Johnny Etuk</p>
              <a href="tel:07041108786" className="mt-1 block text-sm text-amber-400/80 hover:text-amber-400">0704 110 8786</a>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
              <span className="font-mono text-xs font-bold text-amber-400">24/7 Rapid Response Active</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/35">Navigation</p>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <button onClick={() => scrollTo(link)} className="text-sm font-semibold text-white/50 transition hover:text-amber-400">{link}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.25em] text-white/35">Contact Us</p>
            <ul className="space-y-4">
              <li><a href="tel:07041108786" className="flex items-center gap-3 text-sm text-white/50 transition hover:text-amber-400"><Phone className="h-4 w-4 shrink-0" />0704 110 8786</a></li>
              <li><a href="tel:09057758257" className="flex items-center gap-3 text-sm text-white/50 transition hover:text-amber-400"><Phone className="h-4 w-4 shrink-0" />0905 775 8257</a></li>
              <li><a href="mailto:destandardst@gmail.com" className="flex items-center gap-3 text-sm text-white/50 transition hover:text-amber-400"><Mail className="h-4 w-4 shrink-0" />destandardst@gmail.com</a></li>
              <li className="flex items-start gap-3 text-sm text-white/50"><MapPin className="mt-0.5 h-4 w-4 shrink-0" />Km 7, Oron Road, By Custom Road, Uyo 520102, Akwa Ibom</li>
              <li className="flex items-center gap-3 text-sm text-white/50"><Clock className="h-4 w-4 shrink-0" />Open · Closes 7pm</li>
              <li><a href="https://instagram.com/destandardservicetech" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-white/50 transition hover:text-amber-400"><Instagram className="h-4 w-4 shrink-0" />@destandardservicetech</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/6 pt-8 flex flex-col justify-between gap-4 md:flex-row">
          <p className="font-mono text-xs text-white/25">© {new Date().getFullYear()} DE-STANDARD SERVICE TECH LTD. All rights reserved.</p>
          <p className="font-mono text-xs text-white/25">Uyo, Akwa Ibom State, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}