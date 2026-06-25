const db = globalThis.__B44_DB__ || { auth:{ isAuthenticated: async()=>false, me: async()=>null }, entities:new Proxy({}, { get:()=>({ filter:async()=>[], get:async()=>null, create:async()=>({}), update:async()=>({}), delete:async()=>({}) }) }), integrations:{ Core:{ UploadFile:async()=>({ file_url:'' }) } } };

const IMGS = [
  { src: 'https://media.db.com/images/public/6a2d59c69c61a9417608bb93/ef1751bac_generated_1efa396d.png', cap: 'Clean copper linework', span: 'md:col-span-2 md:row-span-2' },
  { src: 'https://media.db.com/images/public/6a2d59c69c61a9417608bb93/7e8b0191f_generated_2cb05596.png', cap: 'Perfectly leveled units', span: '' },
  { src: 'https://media.db.com/images/public/6a2d59c69c61a9417608bb93/57f1586ac_generated_c23b8840.png', cap: 'Precision system check', span: '' },
  { src: 'https://media.db.com/images/public/6a2d59c69c61a9417608bb93/77385276f_generated_b9efce5a.png', cap: 'Cool luxury comfort', span: 'md:col-span-2' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-[#040810] py-28 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#00D4FF]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-[#00D4FF]/60">Proof of Precision</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-black leading-[0.95] tracking-[-0.04em] text-white md:text-6xl">
              Every job neat.<br />
              <span className="text-[#00D4FF]">Every finish flawless.</span>
            </h2>
          </div>
          <a href="https://wa.me/2347041108786" target="_blank" rel="noreferrer" className="w-fit rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-black text-white backdrop-blur transition-all hover:bg-[#00D4FF] hover:text-[#060C12]">
            Book your install →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
          {IMGS.map(({ src, cap, span }, i) => (
            <figure key={i} className={`${span} group relative min-h-64 overflow-hidden rounded-[1.75rem] bg-white/5 md:min-h-0`}>
              <img src={src} alt={cap} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" style={{ minHeight: i === 0 ? 400 : 220 }} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060C12]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-block rounded-full border border-[#00D4FF]/30 bg-[#060C12]/80 px-4 py-2 font-mono text-xs font-bold text-[#00D4FF] backdrop-blur">{cap}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}