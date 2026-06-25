import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const links = ['Services', 'Why Us', 'Gallery', 'Reviews', 'FAQ'];

function HexLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-11 w-11 items-center justify-center" style={{clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)' ,background:'linear-gradient(135deg,#F59E0B,#D97706)'}}>
        <span className="font-display text-[10px] font-black leading-none text-black tracking-tight text-center">DE-S</span>
      </div>
      <div>
        <p className="font-display text-sm font-black tracking-[0.18em] text-white leading-none">DE-STANDARD</p>
        <p className="font-mono text-[9px] tracking-[0.12em] text-amber-400/70 leading-none mt-0.5">SERVICE TECH LTD</p>
      </div>
    </div>
  );
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const scrollTo = (label) => {
    document.getElementById(label.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'border-b border-amber-500/20 bg-[#0A0A0A]/95 backdrop-blur-2xl shadow-[0_1px_30px_rgba(0,0,0,0.6)]' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <button onClick={() => scrollTo('home')}><HexLogo /></button>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="rounded-full px-4 py-2 text-sm font-semibold text-white/60 transition hover:bg-white/8 hover:text-white">
              {link}
            </button>
          ))}
        </div>

        <a href="tel:07041108786" className="hidden items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-5 py-3 text-sm font-black text-amber-400 transition-all hover:-translate-y-0.5 hover:bg-amber-500/20 lg:flex">
          <Phone className="h-4 w-4" /> 0704 110 8786
        </a>

        <button onClick={() => setOpen(!open)} className="rounded-full border border-white/20 bg-white/5 p-2.5 text-white backdrop-blur lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0A0A0A]/98 px-5 py-4 backdrop-blur-2xl lg:hidden">
          {links.map((link) => (
            <button key={link} onClick={() => scrollTo(link)} className="block w-full rounded-xl px-4 py-3 text-left text-sm font-bold text-white/70 transition hover:bg-white/8 hover:text-white">
              {link}
            </button>
          ))}
          <a href="tel:07041108786" className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 py-4 text-sm font-black text-black">
            <Phone className="h-4 w-4" /> 0704 110 8786
          </a>
        </div>
      )}
    </header>
  );
}