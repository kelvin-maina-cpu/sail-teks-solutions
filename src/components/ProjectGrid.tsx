import type { GitHubRepo } from '@/types/project';
import { ProjectCard } from '@/components/ProjectCard';

interface ProjectGridProps {
  repos: GitHubRepo[];
}

export function ProjectGrid({ repos }: ProjectGridProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {repos.map((repo) => (
        <ProjectCard
          key={repo.id}
          title={repo.name}
          description={repo.description ?? 'No description available.'}
          link={repo.html_url}
          homepage={repo.homepage ?? undefined}
          tags={[repo.language ?? 'Other', ...repo.topics.slice(0, 2)]}
          stars={repo.stargazers_count}
        />
      ))}
    </div>
  );
}
