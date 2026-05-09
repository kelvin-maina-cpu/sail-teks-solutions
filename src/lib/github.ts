import { GitHubRepo } from '@/types/project';

const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || process.env.GITHUB_USERNAME || 'kelvin-maina-cpu';
const token = process.env.GITHUB_TOKEN;

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc`,
      {
        headers,
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(8000),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories. Check your username and token configuration.');
    }

    const data = await response.json();

    return data
      .filter((repo: any) => !repo.archived && !repo.private)
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        topics: repo.topics ?? [],
        stargazers_count: repo.stargazers_count,
        updated_at: repo.updated_at,
      })) as GitHubRepo[];
  } catch (error) {
    console.error('GitHub repository fetch failed:', error);
    return [];
  }
}
