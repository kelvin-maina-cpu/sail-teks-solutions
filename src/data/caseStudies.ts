import type { CaseStudy } from '@/types/project';

export const caseStudies: CaseStudy[] = [
  {
    title: 'PCEA School Website',
    summary: 'Modernized school communications and enrollment with a mobile-first website and CMS-ready content flow.',
    problem: 'The school needed a more polished web presence that supported announcements, admissions, and teacher profiles while working well on mobile devices.',
    approach: 'I rebuilt the site with responsive design, clear page structure, and easy update workflows so staff can manage content without development support.',
    result: 'Delivered a fast, accessible website with a 40% faster mobile load time and a smoother admissions workflow in under 4 weeks.',
    technologies: ['Next.js', 'Tailwind CSS', 'React', 'SEO'],
    url: 'https://github.com/your-github-username/pcea-school-website',
  },
  {
    title: 'Explore Kenya Travel App',
    summary: 'Built a travel discovery MVP that highlights destinations, local tours, and booking pathways for explorers.',
    problem: 'The startup needed a minimum viable product to showcase curated experiences and local businesses before fundraising.',
    approach: 'I created a clean UI backed by GitHub-driven deployment, integrated map and listing pages, and prioritized mobile navigation for tourists.',
    result: 'Launched a polished prototype in 3 weeks with a working destination explorer and demo-ready investor flow.',
    technologies: ['React', 'GitHub API', 'Tailwind CSS', 'Vercel'],
    url: 'https://github.com/your-github-username/explore-kenya',
  },
  {
    title: 'SAILTECH CRM Dashboard',
    summary: 'Delivered a business dashboard that centralizes leads, sales activity, and performance metrics in one intuitive interface.',
    problem: 'The client had scattered lead information across spreadsheets and needed a single source of truth for sales activity.',
    approach: 'I designed a responsive dashboard, built data views for leads and deals, and added export-ready reporting components for easy handoff.',
    result: 'Reduced manual tracking by 60% and helped the business move faster with a clear dashboard and repeatable workflow.',
    technologies: ['TypeScript', 'React', 'API integration', 'Analytics'],
    url: 'https://github.com/your-github-username/sailtech-crm-dashboard',
  },
];
