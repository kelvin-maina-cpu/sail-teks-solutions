import { FaExternalLinkAlt, FaStar } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  homepage?: string;
  tags: string[];
  stars?: number;
}

export function ProjectCard({ title, description, link, homepage, tags, stars }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-card transition hover:-translate-y-1 hover:border-brand-500/40">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="mt-3 text-slate-300">{description}</p>
        </div>
        <a href={link} target="_blank" rel="noreferrer" className="text-slate-400 transition group-hover:text-brand-300">
          <FaExternalLinkAlt className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-slate-700 bg-slate-950/90 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 text-sm text-slate-400">
        {stars !== undefined ? (
          <span className="inline-flex items-center gap-2">
            <FaStar className="h-4 w-4 text-amber-400" />
            {stars.toLocaleString()} stars
          </span>
        ) : null}
        {homepage ? (
          <a href={homepage} target="_blank" rel="noreferrer" className="text-brand-300 transition hover:text-brand-200">
            Live demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
