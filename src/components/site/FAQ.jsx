import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'Do you install all kinds of air conditioners?', a: 'Yes. DE-STANDARD installs all AC types — split units, ceiling cassettes, window units, and commercial multi-zone systems. We handle mounting, copper piping, gas charging, and full calibration.' },
  { q: 'Can you install solar systems?', a: 'Absolutely. The team installs complete solar panel systems including panels, inverters, battery banks, wiring, and both off-grid and grid-tie configurations for homes and businesses.' },
  { q: 'Do you do house wiring and conduits?', a: 'Yes — full electrical conduit installation, house wiring, distribution board upgrades, and safe cable management across Uyo and Akwa Ibom.' },
  { q: 'Can you repair refrigerators and cool rooms?', a: 'Yes. The team services all refrigerator and freezer brands, plus constructs and maintains cool rooms for commercial use.' },
  { q: 'How quickly can a technician come?', a: 'For emergencies, the team aims for same-day response. Call 0905 775 8257 or 0704 110 8786, or send a WhatsApp message with your location and the issue.' },
  { q: 'Where are you located?', a: 'Km 7, Oron Road, By Custom Road, Uyo 520102, Akwa Ibom. Reach Johnny Etuk (Managing Director) directly on 0905 775 8257 or email destandardst@gmail.com.' },
];

export default function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <section id="faq" className="relative bg-[#111111] py-28 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="relative mx-auto max-w-4xl px-5 lg:px-8">
        <div className="mb-14 text-center">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-amber-400/60">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-black leading-tight text-white md:text-6xl">Questions before<br />you cool the room?</h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, index) => (
            <button key={q} onClick={() => setActive(active === index ? -1 : index)} className={`w-full rounded-[1.5rem] border p-6 text-left transition-all duration-300 ${active === index ? 'border-amber-500/30 bg-amber-500/6 shadow-[0_0_30px_rgba(245,158,11,0.07)]' : 'border-white/7 bg-white/4 hover:border-white/12 hover:bg-white/6'}`}>
              <span className="flex items-center justify-between gap-4">
                <span className={`font-display text-lg font-black transition-colors ${active === index ? 'text-white' : 'text-white/65'}`}>{q}</span>
                <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all ${active === index ? 'border-amber-500/40 bg-amber-500/20 text-amber-400' : 'border-white/12 bg-white/5 text-white/45'}`}>
                  {active === index ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </span>
              {active === index && <p className="mt-5 text-base leading-8 text-white/55">{a}</p>}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}