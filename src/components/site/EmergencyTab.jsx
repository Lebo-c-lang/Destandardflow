import { Phone } from 'lucide-react';

export default function EmergencyTab() {
  return (
    <a
      href="tel:07041108786"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-amber-500 px-5 py-4 text-sm font-black text-black shadow-[0_0_40px_rgba(245,158,11,0.5)] transition-all hover:-translate-y-1 hover:bg-amber-400 hover:shadow-[0_0_60px_rgba(245,158,11,0.7)] lg:right-8"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black/30" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-black/40" />
      </span>
      <Phone className="h-4 w-4" />
      AC Breakdown?
    </a>
  );
}