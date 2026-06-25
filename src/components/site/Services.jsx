import { Fan, Wrench, Zap, Snowflake, Building2, Thermometer, HardHat, ArrowRight } from 'lucide-react';

const services = [
  { icon: Fan, num: '01', title: 'AC Installation', text: 'Split unit wall mounting, copper line set, gas charging, pressure testing, and full cooling calibration for any space.', tags: ['All brands', 'Residential', 'Commercial'] },
  { icon: Wrench, num: '02', title: 'AC Repair & Servicing', text: 'Gas leaks, compressor faults, electrical issues, drainage blockages, noisy units — diagnosed and fixed right the first time.', tags: ['Same-day', 'All brands'] },
  { icon: Zap, num: '03', title: 'Solar System Installation', text: 'Complete solar panel setup, inverter wiring, battery banks, and grid-tie systems for homes and businesses.', tags: ['Off-grid', 'Grid-tie'] },
  { icon: Building2, num: '04', title: 'House Wiring & Conduits', text: 'Full electrical conduit installation, house wiring, panel upgrades, and safe wiring standards across Akwa Ibom.', tags: ['Conduit', 'Full wiring'] },
  { icon: Thermometer, num: '05', title: 'Refrigerator Repairs', text: 'All refrigerator and freezer brands serviced — compressor, gas, thermostat, and door seal replacements.', tags: ['All models', 'Fast turnaround'] },
  { icon: Snowflake, num: '06', title: 'Inverter & Cool Room', text: 'Inverter installation, cool room construction, and commercial refrigeration systems built to your exact spec.', tags: ['Commercial', 'Custom-built'] },
  { icon: HardHat, num: '07', title: 'General Contracting', text: 'Full-scope project management and door-to-door maintenance services for homes, offices, and estates.', tags: ['Maintenance', 'Door-to-door'] },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0A0A0A] py-28 overflow-hidden">
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-amber-600/6 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-amber-500/4 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-amber-400/60">We Specialize On</p>
            <h2 className="mt-4 max-w-2xl font-display text-5xl font-black leading-[0.95] tracking-[-0.04em] text-white md:text-6xl">
              We specialize on<br />
              <span className="text-amber-400">7 core services.</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/50 leading-7">Installation of all kinds of Air Condition, Solar Systems, House Wiring, Conduits, Refrigerator Repairs, Cool Room Construction, Inverter Installation, General Contractors and door to door Maintenance.</p>
          </div>
          <a href="tel:09057758257" className="w-fit rounded-full bg-amber-500 px-6 py-4 text-sm font-black text-black shadow-[0_0_30px_rgba(245,158,11,0.3)] transition-all hover:-translate-y-1 hover:bg-amber-400 hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]">
            Book a technician →
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map(({ icon: Icon, num, title, text, tags }) => (
            <article key={title} className="group relative overflow-hidden rounded-[2rem] border border-white/7 bg-white/4 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/25 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
              <span className="absolute right-5 top-3 font-display text-7xl font-black leading-none text-white/[0.03] select-none">{num}</span>
              <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-amber-500/0 blur-2xl transition-all duration-700 group-hover:bg-amber-500/10" />

              <div className="relative mb-8 grid h-13 w-13 place-items-center rounded-2xl border border-amber-500/25 bg-amber-500/12 p-3 transition-all duration-300 group-hover:bg-amber-500 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.5)]">
                <Icon className="h-6 w-6 text-amber-400 transition-colors group-hover:text-black" />
              </div>

              <h3 className="relative font-display text-xl font-black text-white">{title}</h3>
              <p className="relative mt-3 text-sm leading-7 text-white/50">{text}</p>

              <div className="relative mt-6 flex flex-wrap items-center gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-amber-500/20 bg-amber-500/8 px-3 py-1 font-mono text-[10px] font-bold text-amber-300/70">{tag}</span>
                ))}
                <ArrowRight className="ml-auto h-4 w-4 text-white/25 transition-all group-hover:translate-x-1 group-hover:text-amber-400" />
              </div>
            </article>
          ))}
        </div>

        {/* 7th service — full width */}
        {(() => { const s = services[6]; const Icon = s.icon; return (
          <article key={s.title} className="group relative mt-4 overflow-hidden rounded-[2rem] border border-white/7 bg-white/4 p-7 backdrop-blur transition-all duration-500 hover:border-amber-500/25 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)] lg:flex lg:items-center lg:gap-8">
            <div className="relative mb-6 grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-amber-500/25 bg-amber-500/12 p-3 transition-all group-hover:bg-amber-500 lg:mb-0">
              <Icon className="h-7 w-7 text-amber-400 transition-colors group-hover:text-black" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-black text-white">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-white/50">{s.text}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 lg:mt-0 lg:flex-col">
              {s.tags.map(tag => <span key={tag} className="rounded-full border border-amber-500/20 bg-amber-500/8 px-3 py-1 font-mono text-[10px] font-bold text-amber-300/70">{tag}</span>)}
            </div>
          </article>
        );})()}
      </div>
    </section>
  );
}