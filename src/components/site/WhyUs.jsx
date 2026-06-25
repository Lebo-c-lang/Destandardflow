const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

import { ShieldCheck, Wind, Zap, MapPin } from 'lucide-react';

const TECH_IMG = 'https://media.db.com/images/public/6a2d59c69c61a9417608bb93/dcc6a6715_generated_image.png';

const points = [
  { icon: MapPin, title: 'Deep local knowledge', text: 'We know Uyo heat, humidity, building styles, and power conditions — sizing every system accordingly.' },
  { icon: Wind, title: 'Crystal-clear explanations', text: 'Clients love that the team explains each step clearly before and after the job. No hidden jargon.' },
  { icon: Zap, title: 'Speed without shortcuts', text: 'Fast scheduling and same-day emergency response — without ever compromising on finish quality.' },
  { icon: ShieldCheck, title: 'Premium, lasting finish', text: 'Neat cable runs, secure mounting, and a clean handover that stands up to Akwa Ibom conditions for years.' },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-[#0A0A0A] py-28">
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:'linear-gradient(#F59E0B 1px,transparent 1px),linear-gradient(90deg,#F59E0B 1px,transparent 1px)',backgroundSize:'80px 80px'}} />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-amber-500/15 to-amber-600/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-amber-500/15">
              <img src={TECH_IMG} alt="DE-STANDARD technician at work" className="h-[520px] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/85 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-amber-500/20 bg-black/70 p-4 backdrop-blur-xl">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-amber-400/80">System Status</p>
                <p className="mt-1 font-display text-xl font-black text-white">4.9 / 5.0 — Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-amber-400/60">Why DE-STANDARD</p>
            <h2 className="mt-4 font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white md:text-6xl">
              The standard<br />you deserve.
            </h2>
            <p className="mt-5 leading-7 text-white/50">In a city where AC is not a luxury but a daily necessity, DE-STANDARD brings engineering precision directly to your home or office.</p>

            <div className="mt-10 space-y-4">
              {points.map(({ icon: Icon, title, text }) => (
                <div key={title} className="group flex gap-4 rounded-[1.5rem] border border-white/7 bg-white/4 p-5 backdrop-blur transition-all hover:border-amber-500/20 hover:bg-white/6">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-amber-500/12 text-amber-400 ring-1 ring-amber-500/20 transition-all group-hover:bg-amber-500 group-hover:text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-black text-white">{title}</h3>
                    <p className="mt-1.5 text-sm leading-7 text-white/50">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}