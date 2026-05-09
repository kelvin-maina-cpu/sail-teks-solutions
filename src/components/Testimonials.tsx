import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {testimonials.map((item) => (
        <article key={item.author} className="rounded-3xl border border-slate-800 bg-slate-950/90 p-8">
          <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
          <div className="mt-6 space-y-1">
            <p className="text-base font-semibold text-white">{item.author}</p>
            <p className="text-sm text-slate-400">{item.role}</p>
            <p className="text-sm text-brand-300">{item.outcome}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
