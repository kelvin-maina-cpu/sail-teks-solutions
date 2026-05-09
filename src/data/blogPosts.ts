export interface BlogPost {
  title: string;
  description: string;
  date: string;
  category: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'How I built the Explore Kenya app',
    description: 'A practical breakdown of the product decisions, API choices, and deployment process behind a travel discovery platform.',
    date: 'May 2026',
    category: 'Case Study',
    url: '/blog/explore-kenya',
  },
  {
    title: '5 lessons from building a modern school website',
    description: 'Why mobile UX, performance, and clean authoring workflows are essential for education brands.',
    date: 'April 2026',
    category: 'Development',
    url: '/blog/school-website-lessons',
  },
  {
    title: 'Remote-ready delivery for international clients',
    description: 'How I keep communication clear, timelines predictable, and deployments reliable across timezones.',
    date: 'March 2026',
    category: 'Remote Work',
    url: '/blog/remote-delivery',
  },
];
