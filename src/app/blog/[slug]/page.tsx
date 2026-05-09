import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.url.replace('/blog/', '') }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const foundPost = blogPosts.find((item) => item.url.replace('/blog/', '') === params.slug);

  if (!foundPost) {
    notFound();
  }

  const post = foundPost!;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:py-16">
        <Link href="/blog" className="text-sm text-brand-300 hover:text-brand-200">
          ← Back to Dev notes
        </Link>
        <div className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/70 p-10 shadow-card">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-400">
              {post.category}
            </span>
            <span className="text-sm text-slate-500">{post.date}</span>
          </div>
          <h1 className="mt-8 text-4xl font-semibold text-white">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{post.description}</p>

          <div className="mt-12 space-y-8 text-slate-300">
            <p>
              This post explains the reasoning behind the product build, the technical choices made, and the outcomes clients can expect when working with SAILTECH COMPANY.
            </p>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-6">
              <h2 className="text-xl font-semibold text-white">Why this matters</h2>
              <p className="mt-4 text-slate-300">
                Communicating the project story helps international clients understand your process, timeline, and value delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
