export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  updated_at: string;
}

export interface FeaturedProject {
  title: string;
  description: string;
  tags: string[];
  url: string;
  homepage?: string;
  metrics?: string;
}

export interface CaseStudy {
  title: string;
  summary: string;
  problem: string;
  approach: string;
  result: string;
  technologies: string[];
  url: string;
}
