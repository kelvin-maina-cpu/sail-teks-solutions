export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  outcome: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'SAILTEKS SOLUTIONS delivered a secure ERP modernization that gave our finance and operations teams real-time visibility across the business.',
    author: 'Daniel Kiptoo',
    role: 'CIO, Fintech Scale-up',
    outcome: 'Reduced reconciliation cycles by 45% and accelerated reporting timelines.',
  },
  {
    quote: 'The automation and integrations they built saved our customer support team hours every day and improved uptime across critical services.',
    author: 'Fatima Odongo',
    role: 'Operations Director, Logistics',
    outcome: 'Improved throughput by 35% with a secure, reliable workflow engine.',
  },
  {
    quote: 'Their technology strategy helped us move to the cloud confidently and modernize legacy systems without disrupting operations.',
    author: 'Samuel Mwangi',
    role: 'Head of IT, Healthcare Provider',
    outcome: 'Delivered a phased cloud migration that supports future growth and security compliance.',
  },
];
