import { getGitHubRepos } from '@/lib/github';
import { ProjectsPage } from '@/components/ProjectsPage';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const revalidate = 3600;

export default async function ProjectsRoute() {
  const repos = await getGitHubRepos();

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:py-16">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Projects</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">All GitHub repositories</h1>
          <p className="max-w-3xl text-lg leading-8 text-slate-300">
            Explore the full set of public projects fetched directly from your GitHub account. Filter by language and jump to the work that matters most.
          </p>
        </div>

        <div className="mt-12">
          <ProjectsPage repos={repos} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
