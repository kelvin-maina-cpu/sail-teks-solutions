import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="mx-auto max-w-5xl px-6 py-24 sm:px-8">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-12 text-center shadow-card">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Page not found</p>
          <h1 className="mt-6 text-4xl font-semibold text-white">Blog post not found</h1>
          <p className="mt-4 text-slate-300">The article you're looking for doesn't exist yet.</p>
          <Link href="/blog" className="mt-8 inline-flex rounded-full border border-brand-500 bg-brand-500/10 px-6 py-3 text-sm font-semibold text-brand-100 transition hover:bg-brand-500/20">
            Back to Dev notes
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
