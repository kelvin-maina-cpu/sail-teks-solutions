'use client';

import { useMemo, useState } from 'react';
import type { GitHubRepo } from '@/types/project';
import { FilterTabs } from '@/components/FilterTabs';
import { ProjectGrid } from '@/components/ProjectGrid';

interface ProjectsPageProps {
  repos: GitHubRepo[];
}

export function ProjectsPage({ repos }: ProjectsPageProps) {
  const [selectedLanguage, setSelectedLanguage] = useState('All');

  const languages = useMemo(() => {
    const unique = Array.from(new Set(repos.map((repo) => repo.language ?? 'Other')));
    return ['All', ...unique.filter((lang) => lang !== null).sort()];
  }, [repos]);

  const visibleRepos = useMemo(
    () => repos.filter((repo) => selectedLanguage === 'All' || (repo.language ?? 'Other') === selectedLanguage),
    [repos, selectedLanguage]
  );

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-card">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Filter by language</h2>
            <p className="mt-2 text-slate-400">Pick a language to see matching GitHub projects.</p>
          </div>
          <FilterTabs languages={languages} selected={selectedLanguage} onSelect={setSelectedLanguage} />
        </div>
      </div>

      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Showing {visibleRepos.length} repos</p>
        <ProjectGrid repos={visibleRepos} />
      </div>
    </div>
  );
}
