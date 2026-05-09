import type { FeaturedProject } from '@/types/project';

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'ERP Modernization Platform',
    description: 'Complete ERP system overhaul for a manufacturing company, integrating inventory, finance, and HR modules.',
    tags: ['ERP', 'Cloud Migration', 'Automation'],
    url: 'https://example.com/erp-platform',
    metrics: 'Reduced operational processing time by 40%.',
  },
  {
    title: 'AI Workflow System',
    description: 'Intelligent automation platform using AI to streamline customer support and internal processes.',
    tags: ['AI', 'Automation', 'Machine Learning'],
    url: 'https://example.com/ai-workflow',
    metrics: 'Automated 70% of repetitive customer support tasks.',
  },
  {
    title: 'Banking Integration Platform',
    description: 'Secure Mpesa and banking API integrations with real-time transaction processing.',
    tags: ['Fintech', 'APIs', 'Security'],
    url: 'https://example.com/banking-integration',
    metrics: 'Processed secure real-time transactions with automated reconciliation.',
  },
];
