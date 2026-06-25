const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { useState } from 'react';
import { ArrowRight, Phone, CheckCircle2, Mail, MapPin } from 'lucide-react';

const HERO_IMG = 'https://media.db.com/images/public/6a2d59c69c61a9417608bb93/e5bd10e00_generated_image.png';

export default function Hero() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'AC Installation', message: '' });
  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const submit = (e) => {
    e.preventDefault();
    const text = `Hello DE-STANDARD, my name is ${form.name}. Phone: ${form.phone}. I need: ${form.service}. ${form.message}`;
    window.open(`https://wa.me/2347041108786?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/85 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />
      </div>

      {/* Blueprint grid */}
      <div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage:'linear-gradient(#F59E0B 1px,transparent 1px),linear-gradient(90deg,#F59E0B 1px,transparent 1px)',backgroundSize:'80px 80px'}} />

      {/* Glow */}
      <div className="absolute left-1/4 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/8 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-amber-600/6 blur-[100px]" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pt-28 pb-16 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:pt-32">

        {/* Left content */}
        <div className="flex flex-col">
          {/* Badge */}
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Akwa Ibom's #1 AC Specialists</span>
          </div>

          <h1 className="font-display text-6xl font-black leading-[0.9] tracking-[-0.04em] text-white md:text-8xl lg:text-[88px]">
            Precision<br />
            <span className="text-amber-400">cooling</span><br />
            specialists.
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-8 text-white/55">AC installation, solar systems, house wiring, inverters, refrigerators, cool rooms — DE-STANDARD does it all. Based at Km 7, Oron Road, Uyo.</p>

          {/* Specializations strip */}
          <div className="mt-6 flex flex-wrap gap-2">
            {['Air Conditioning','Solar Systems','House Wiring','Refrigerators','Inverters','Cool Rooms'].map(s => (
              <span key={s} className="rounded-full border border-amber-500/25 bg-amber-500/8 px-3 py-1.5 font-mono text-[11px] font-bold text-amber-300/80">{s}</span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="tel:07041108786" className="group flex items-center gap-2 rounded-full bg-amber-500 px-6 py-4 text-sm font-black text-black shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all hover:-translate-y-1 hover:bg-amber-400 hover:shadow-[0_0_60px_rgba(245,158,11,0.55)]">
              <Phone className="h-4 w-4" /> Call now — free advice
            </a>
            <a href="#services" className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-black text-white backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/10">
              View our services <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            {[['4.9 ★','Google Rating'],['20+','Happy Clients'],['24/7','On Call']].map(([val, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <p className="font-display text-2xl font-black text-amber-400">{val}</p>
                <p className="mt-1 text-xs font-semibold text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="relative">
          {/* Glow border */}
          <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-br from-amber-500/30 via-amber-600/10 to-transparent blur-xl" />

          <form onSubmit={submit} className="relative overflow-hidden rounded-[2rem] border border-amber-500/20 bg-black/60 p-7 shadow-2xl backdrop-blur-2xl lg:p-8">
            {/* Top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[2rem]" style={{background:'linear-gradient(90deg,#F59E0B,#D97706,#F59E0B)'}} />

            <div className="mb-1 flex items-center gap-2">
              <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
              <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400/80">Request Free Quote</span>
            </div>
            <h2 className="mb-6 font-display text-3xl font-black text-white">Get a free quote today</h2>

            <div className="space-y-3">
              <input required placeholder="Your full name" value={form.name} onChange={(e) => update('name', e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/40" />
              <input required placeholder="Phone number" value={form.phone} onChange={(e) => update('phone', e.target.value)} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/40" />
              <select onChange={(e) => update('service', e.target.value)} className="w-full rounded-xl border border-white/10 bg-[#111111] px-4 py-3.5 text-white outline-none transition focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/40">
                <option>AC Installation</option>
                <option>AC Repair</option>
                <option>AC Servicing</option>
                <option>Solar System Installation</option>
                <option>House Wiring (Conduits)</option>
                <option>Refrigerator Repair</option>
                <option>Inverter Installation</option>
                <option>Cool Room Construction</option>
                <option>General Contracting</option>
              </select>
              <textarea placeholder="Tell us more about what you need..." value={form.message} onChange={(e) => update('message', e.target.value)} className="min-h-[90px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder-white/30 outline-none transition focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/40" />
            </div>

            <button type="submit" className="mt-5 w-full rounded-xl bg-amber-500 py-4 text-sm font-black text-black shadow-[0_0_30px_rgba(245,158,11,0.35)] transition-all hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]">
              Send on WhatsApp — it's free ↗
            </button>

            <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/8 bg-white/4 p-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <p className="text-xs leading-5 text-white/45">Km 7, Oron Road, By Custom Road, Uyo — Akwa Ibom</p>
            </div>

            <div className="mt-3 flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-amber-400" />
              <p className="text-xs text-white/40">No commitment. We respond within the hour.</p>
            </div>
          </form>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
        <div className="h-8 w-px bg-gradient-to-b from-amber-400/60 to-transparent" />
      </div>
    </section>
  );
}