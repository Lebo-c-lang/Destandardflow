import { Award, Star, ShieldCheck, Building2, Zap } from 'lucide-react';

const stats = [
  { icon: Star, value: '4.9', unit: '/5', label: 'Google Rating' },
  { icon: Award, value: '20', unit: '+', label: 'Happy Clients' },
  { icon: Building2, value: '8+', unit: 'yrs', label: 'Engineering Heritage' },
  { icon: ShieldCheck, value: '100', unit: '%', label: 'Satisfaction Pledge' },
  { icon: Zap, value: '24/7', unit: '', label: 'Emergency Line' },
];

export default function Awards() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-16 border-y border-amber-500/15">
      {/* Gold shimmer */}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,rgba(245,158,11,0.06)_50%,transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="mb-10 text-center font-mono text-xs font-bold uppercase tracking-[0.35em] text-amber-400/50">Proof of precision — verification engine</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {stats.map(({ icon: Icon, value, unit, label }) => (
            <div key={label} className="group flex flex-col items-center gap-2 rounded-[1.5rem] border border-amber-500/15 bg-amber-500/5 p-5 transition-all hover:-translate-y-2 hover:border-amber-500/35 hover:bg-amber-500/10 hover:shadow-[0_10px_40px_rgba(245,158,11,0.12)]">
              <Icon className="h-5 w-5 text-amber-400/60" />
              <p className="font-display text-3xl font-black text-white">{value}<span className="text-xl text-amber-400">{unit}</span></p>
              <p className="text-center font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-white/45">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}