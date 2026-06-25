import { Phone, MessageCircle, Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative px-5 py-24 overflow-hidden bg-[#0A0A0A] lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-amber-500/20 bg-[#111111] p-1">
        <div className="relative overflow-hidden rounded-[calc(2.5rem-4px)] px-8 py-16 md:px-14 md:py-20">
          {/* Top gold bar */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{background:'linear-gradient(90deg,transparent,#F59E0B,#D97706,#F59E0B,transparent)'}} />
          {/* Glow blobs */}
          <div className="absolute right-0 top-0 h-[400px] w-[400px] translate-x-1/3 -translate-y-1/3 rounded-full bg-amber-500/8 blur-[80px]" />
          <div className="absolute bottom-0 left-1/4 h-[300px] w-[300px] translate-y-1/3 rounded-full bg-amber-600/6 blur-[80px]" />
          <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage:'linear-gradient(#F59E0B 1px,transparent 1px),linear-gradient(90deg,#F59E0B 1px,transparent 1px)',backgroundSize:'60px 60px'}} />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-amber-400/60">Instant Dispatch Available</p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white md:text-6xl">
                AC breakdown?<br />
                <span className="text-amber-400">Get a technician</span><br />
                on the line now.
              </h2>
              <p className="mt-6 text-lg text-white/50">7 days a week · Fast response · Uyo & all Akwa Ibom</p>
              <p className="mt-2 font-mono text-sm text-amber-400/70">Johnny Etuk — Managing Director</p>
            </div>
            <div className="flex flex-col gap-4">
              <a href="tel:07041108786" className="flex items-center justify-center gap-3 rounded-full bg-amber-500 px-7 py-5 text-base font-black text-black shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all hover:-translate-y-1 hover:bg-amber-400 hover:shadow-[0_0_60px_rgba(245,158,11,0.55)]">
                <Phone className="h-5 w-5" /> 0704 110 8786
              </a>
              <a href="tel:09057758257" className="flex items-center justify-center gap-3 rounded-full border border-amber-500/30 bg-amber-500/8 px-7 py-5 text-base font-black text-amber-400 transition-all hover:-translate-y-1 hover:bg-amber-500/15">
                <Phone className="h-5 w-5" /> 0905 775 8257
              </a>
              <a href="https://wa.me/2349057758257" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-5 text-base font-black text-white/80 transition-all hover:-translate-y-1 hover:bg-white/10">
                <MessageCircle className="h-5 w-5" /> WhatsApp us
              </a>
              <a href="mailto:destandardst@gmail.com" className="flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-5 text-base font-black text-white/80 transition-all hover:-translate-y-1 hover:bg-white/10">
                <Mail className="h-5 w-5" /> Send an email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}