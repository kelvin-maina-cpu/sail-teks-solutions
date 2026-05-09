import { BlogCard } from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:py-16">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Dev notes</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Insights for technical clients and product leaders</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Short, practical posts about project delivery, remote workflows, and the development decisions behind product launches.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
