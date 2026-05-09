import type { CaseStudy } from '@/types/project';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-800 bg-slate-950/90 p-8 shadow-card transition hover:-translate-y-1 hover:border-brand-500/40">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Case study</p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{caseStudy.title}</h3>
        </div>
        <a href={caseStudy.url} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-brand-300">
          <FaExternalLinkAlt className="h-4 w-4" />
        </a>
      </div>

      <p className="mt-5 text-slate-300">{caseStudy.summary}</p>

      <div className="mt-6 grid gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Problem</p>
          <p className="mt-2 text-slate-300">{caseStudy.problem}</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Approach</p>
          <p className="mt-2 text-slate-300">{caseStudy.approach}</p>
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Result</p>
          <p className="mt-2 text-slate-300">{caseStudy.result}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {caseStudy.technologies.map((tech) => (
          <span key={tech} className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
