import Link from 'next/link';
import type { BlogPost } from '@/data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-800 bg-slate-950/90 p-8 transition hover:-translate-y-1 hover:border-brand-500/40">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
          {post.category}
        </span>
        <span className="text-sm text-slate-500">{post.date}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-white">{post.title}</h3>
      <p className="mt-4 text-slate-300">{post.description}</p>
      <Link href={post.url} className="mt-6 inline-flex text-sm font-semibold text-brand-300 transition hover:text-brand-200">
        Read article →
      </Link>
    </article>
  );
}
