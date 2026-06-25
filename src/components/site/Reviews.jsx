import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Pius Joe', initials: 'PJ', time: '4 months ago', text: 'I love this company for being excellent on their service delivery. Have been using mine without any complaint till today.', service: 'AC Installation', rating: 5 },
  { name: 'Abraham John', initials: 'AJ', time: '4 months ago', text: 'Great service from start to finish. Professional, efficient, and explained everything clearly. Installation was smooth, neat, and on time. Already seeing savings on my electricity bills.', service: 'New Installation', rating: 5 },
  { name: 'Bella Ben', initials: 'BB', time: '4 months ago', text: 'Great service! The tech was professional, efficient, and fixed my issue quickly. Highly recommend!', service: 'AC Repair', rating: 5 },
];

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-[#0A0A0A] py-28">
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-amber-400/60">Client Logs</p>
            <h2 className="mt-4 font-display text-4xl font-black leading-tight text-white md:text-6xl">Real people.<br />Real results.</h2>
          </div>
          <div className="flex flex-col items-start gap-1 lg:items-end">
            <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />)}</div>
            <p className="font-display text-4xl font-black text-white">4.9 <span className="text-lg font-normal text-white/40">/ 5.0 on Google</span></p>
            <p className="font-mono text-xs text-white/40">Based on 20 verified reviews</p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map(({ name, initials, time, text, service }) => (
            <article key={name} className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/7 bg-white/4 p-7 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/20 hover:shadow-[0_30px_80px_rgba(245,158,11,0.08)]">
              <div className="absolute top-0 right-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-amber-500/4 transition-all duration-700 group-hover:scale-150 group-hover:bg-amber-500/8" />
              <Quote className="relative mb-6 h-8 w-8 text-amber-400/25" />
              <p className="relative flex-1 text-base leading-8 text-white/65">"{text}"</p>
              <div className="relative mt-8 flex items-center justify-between border-t border-white/7 pt-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-amber-500 font-display text-sm font-black text-black">{initials}</div>
                  <div>
                    <p className="font-display text-sm font-black text-white">{name}</p>
                    <p className="font-mono text-[10px] text-white/35">{time}</p>
                  </div>
                </div>
                <span className="rounded-full border border-amber-500/20 bg-amber-500/8 px-3 py-1 font-mono text-[10px] font-bold text-amber-300/70">{service}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-amber-500/15 bg-amber-500/5 p-6 text-center">
          <p className="font-display text-lg font-black text-white">Verified on Google Maps · Km 7, Oron Road, Uyo · Akwa Ibom</p>
          <p className="mt-1 font-mono text-xs text-white/35">DE-STANDARD SERVICE TECH LTD — 20 reviews — 4.9 average</p>
        </div>
      </div>
    </section>
  );
}