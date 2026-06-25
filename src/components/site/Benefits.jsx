import { CheckCircle2, Clock, Gauge, ShieldCheck } from 'lucide-react';

const benefits = [
  { icon: CheckCircle2, title: 'Neat installation', text: 'Clean piping, tidy cable management, and perfectly leveled units every single time.', stat: '100%', label: 'clean finish' },
  { icon: Gauge, title: 'Lower power bills', text: 'Correct sizing and precise setup to extract maximum cooling from minimum electricity.', stat: '↓30%', label: 'avg. energy savings' },
  { icon: Clock, title: 'Fast response', text: 'Same-day support for urgent AC breakdowns — because Akwa Ibom heat waits for no one.', stat: '<2hr', label: 'avg. response' },
  { icon: ShieldCheck, title: 'Built to last', text: 'Durable, professional workmanship trusted by 20+ local clients and counting.', stat: '4.9★', label: 'Google rating' },
];

export default function Benefits() {
  return (
    <section className="relative bg-[#0A0A0A] py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'linear-gradient(#F59E0B 1px,transparent 1px),linear-gradient(90deg,#F59E0B 1px,transparent 1px)',backgroundSize:'80px 80px'}} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-amber-400/60">Why clients choose us</p>
          <h2 className="mt-3 font-display text-4xl font-black text-white md:text-5xl">The DE-STANDARD difference</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text, stat, label }) => (
            <div key={title} className="group relative overflow-hidden rounded-[1.75rem] border border-white/8 bg-white/4 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-3 hover:border-amber-500/30 hover:shadow-[0_20px_60px_rgba(245,158,11,0.12)]">
              <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-amber-500/5 transition-all duration-500 group-hover:scale-150 group-hover:bg-amber-500/10" />
              <div className="relative mb-7 grid h-12 w-12 place-items-center rounded-2xl bg-amber-500/15 text-amber-400 ring-1 ring-amber-500/20 transition-all group-hover:bg-amber-500 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)]">
                <Icon className="h-5 w-5" />
              </div>
              <p className="relative font-display text-3xl font-black text-amber-400">{stat}</p>
              <p className="relative mb-4 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35">{label}</p>