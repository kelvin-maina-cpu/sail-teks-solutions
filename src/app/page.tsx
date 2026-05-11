'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaCheckCircle,
  FaCloud,
  FaCubes,
  FaEnvelope,
  FaIndustry,
  FaLock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRobot,
  FaServer,
} from 'react-icons/fa';
import { featuredProjects } from '@/data/featuredProjects';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

const services = [
  { title: 'Enterprise Software Development', description: 'Build scalable, secure applications that drive business growth and operational efficiency. Reduce development time by 40% with modern frameworks.', icon: FaCubes },
  { title: 'AI & Automation', description: 'Reduce operational costs and automate repetitive workflows using intelligent AI systems. Achieve up to 70% efficiency gains.', icon: FaRobot },
  { title: 'ERP Systems', description: 'Modernize operations with scalable ERP platforms tailored to finance, HR, inventory, and operations. Streamline processes and improve decision-making.', icon: FaServer },
  { title: 'Cloud Infrastructure & DevOps', description: 'Accelerate deployment and ensure high availability with robust cloud architectures. Cut infrastructure costs by 30% with optimized DevOps.', icon: FaCloud },
  { title: 'Banking Integrations', description: 'Secure Mpesa and banking integrations with real-time transaction processing and reconciliation. Enable seamless financial operations.', icon: FaIndustry },
  { title: 'IT Consultancy', description: 'Technology roadmaps, digital transformation planning, and executive-level advisory. Align IT strategy with business objectives.', icon: FaCheckCircle },
  { title: 'Operational Automation', description: 'Process automation, RPA, and intelligent operations for efficiency gains. Eliminate manual errors and boost productivity.', icon: FaLock },
];

const industries = [
  'Banking & Fintech',
  'Healthcare & Life Sciences',
  'Retail & Manufacturing',
  'Logistics & Telecom',
  'Mpesa / Banking Integration',
  'Travel & Hospitality',
];

const features = [
  {
    title: 'Enterprise-grade delivery',
    description: 'Solutions designed for reliability, performance, and growth across global organizations.',
  },
  {
    title: 'AI-driven innovation',
    description: 'Intelligent systems and automation that create measurable business impact.',
  },
  {
    title: 'Security-first engineering',
    description: 'Defense-in-depth, compliance readiness, and resilient systems tuned for risk reduction.',
  },
  {
    title: 'Client-focused execution',
    description: 'Clear communication, fast onboarding, and delivery that aligns with strategic goals.',
  },
];

const getCardImage = (subject: string) => {
  const text = subject.toLowerCase();

  if (text.includes('mpesa') || text.includes('bank') || text.includes('fintech') || text.includes('payment') || text.includes('stripe')) {
    return '/card-backgrounds/mpesa-integration.jpeg';
  }

  if (text.includes('cloud') || text.includes('devops') || text.includes('aws') || text.includes('azure') || text.includes('docker') || text.includes('kubernetes') || text.includes('deployment')) {
    return '/card-backgrounds/cloud-devops.jpeg';
  }

  if (text.includes('erp') || text.includes('sap') || text.includes('postgres')) {
    return '/card-backgrounds/erp-systems.jpeg';
  }

  if (text.includes('operational automation') || text.includes('workflow') || text.includes('support coverage') || text.includes('process automation')) {
    return '/card-backgrounds/operational-automation.jpeg';
  }

  if (text.includes('ai') || text.includes('automation') || text.includes('robot')) {
    return '/card-backgrounds/ai-automation.jpeg';
  }

  if (text.includes('consult') || text.includes('strategy') || text.includes('architecture') || text.includes('advisory') || text.includes('mission') || text.includes('vision') || text.includes('client-focused')) {
    return '/card-backgrounds/it-consultancy.jpeg';
  }

  if (text.includes('portfolio') || text.includes('project') || text.includes('react') || text.includes('next.js') || text.includes('software') || text.includes('development') || text.includes('api')) {
    return '/card-backgrounds/enterprise-software-development.jpeg';
  }

  if (text.includes('insight') || text.includes('thought') || text.includes('future')) {
    return '/card-backgrounds/ai-insights.png';
  }

  return '/card-backgrounds/portfolio-screenshot.png';
};

const getCardBackground = (subject: string): CSSProperties => {
  const text = subject.toLowerCase();
  const image = getCardImage(subject);
  let palette = {
    a: 'rgba(34, 211, 238, 0.34)',
    b: 'rgba(59, 130, 246, 0.24)',
    c: 'rgba(15, 23, 42, 0.94)',
  };

  if (text.includes('ai') || text.includes('automation') || text.includes('robot')) {
    palette = { a: 'rgba(34, 211, 238, 0.42)', b: 'rgba(16, 185, 129, 0.22)', c: 'rgba(8, 47, 73, 0.92)' };
  } else if (text.includes('cloud') || text.includes('aws') || text.includes('azure') || text.includes('docker') || text.includes('kubernetes')) {
    palette = { a: 'rgba(56, 189, 248, 0.44)', b: 'rgba(99, 102, 241, 0.22)', c: 'rgba(15, 23, 42, 0.92)' };
  } else if (text.includes('bank') || text.includes('fintech') || text.includes('mpesa') || text.includes('stripe') || text.includes('payment')) {
    palette = { a: 'rgba(20, 184, 166, 0.38)', b: 'rgba(250, 204, 21, 0.16)', c: 'rgba(19, 78, 74, 0.92)' };
  } else if (text.includes('erp') || text.includes('sap') || text.includes('postgres') || text.includes('operations')) {
    palette = { a: 'rgba(14, 165, 233, 0.36)', b: 'rgba(168, 85, 247, 0.18)', c: 'rgba(30, 41, 59, 0.94)' };
  } else if (text.includes('health')) {
    palette = { a: 'rgba(45, 212, 191, 0.34)', b: 'rgba(34, 197, 94, 0.2)', c: 'rgba(6, 78, 59, 0.92)' };
  } else if (text.includes('retail') || text.includes('manufacturing')) {
    palette = { a: 'rgba(251, 146, 60, 0.28)', b: 'rgba(34, 211, 238, 0.22)', c: 'rgba(67, 56, 202, 0.84)' };
  } else if (text.includes('logistics') || text.includes('telecom')) {
    palette = { a: 'rgba(96, 165, 250, 0.34)', b: 'rgba(45, 212, 191, 0.2)', c: 'rgba(12, 74, 110, 0.92)' };
  } else if (text.includes('travel') || text.includes('hospitality')) {
    palette = { a: 'rgba(125, 211, 252, 0.34)', b: 'rgba(244, 114, 182, 0.16)', c: 'rgba(15, 118, 110, 0.82)' };
  } else if (text.includes('security') || text.includes('compliance') || text.includes('lock')) {
    palette = { a: 'rgba(34, 211, 238, 0.3)', b: 'rgba(248, 113, 113, 0.15)', c: 'rgba(15, 23, 42, 0.96)' };
  }

  return {
    backgroundImage: `
      linear-gradient(135deg, ${palette.c}, rgba(2, 6, 23, 0.7)),
      url("${image}"),
      radial-gradient(circle at 18% 18%, ${palette.a}, transparent 34%),
      radial-gradient(circle at 86% 10%, ${palette.b}, transparent 32%),
      repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 18px)
    `,
    backgroundBlendMode: 'normal, luminosity, screen, screen, overlay',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
};

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <section className="relative min-h-[calc(100vh-90px)] overflow-hidden border-b border-slate-800 px-6 py-16 sm:px-8 lg:min-h-[760px] lg:py-24">
        <Image
          src="/hero-section.webp"
          alt="SAILTEKS SOLUTIONS digital transformation background"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-950/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(100vh-218px)] max-w-7xl gap-12 lg:min-h-[568px] lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-200">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              Trusted technology partner for global teams
            </div>
            <div className="flex flex-col gap-4 rounded-[2rem] border border-cyan-500/10 bg-slate-950/80 p-4 shadow-[0_20px_80px_rgba(14,165,233,0.12)] sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">SAILTEKS SOLUTIONS</p>
                <p className="text-sm text-slate-300">Building Secure AI & Enterprise Platforms for Modern Businesses</p>
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900 p-2 sm:h-24 sm:w-24">
                <Image src="/logo.png" alt="SAILTEKS SOLUTIONS" width={96} height={96} className="object-contain" />
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Transforming African & Global Businesses Through AI, Cloud, and Intelligent Systems
              </h1>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }} className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              We help enterprises modernize operations, automate workflows, integrate secure payments, and scale faster with AI-powered systems.
            </motion.p>
            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Talk to an expert
              </Link>
              <Link href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500">
                Explore services
              </Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-4">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 px-4 py-3 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">ERPNext Certified</p>
              </div>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 px-4 py-3 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Secure API Engineering</p>
              </div>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 px-4 py-3 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Cloud-Native Architecture</p>
              </div>
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/5 px-4 py-3 text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Fintech Ready</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <motion.div style={getCardBackground('Platform Reliability')} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-3xl bg-slate-950/80 p-6 ring-1 ring-slate-800">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Platform Reliability</p>
                <p className="mt-3 text-2xl font-semibold text-white">99.9%</p>
              </motion.div>
              <motion.div style={getCardBackground('Solutions Delivered')} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="rounded-3xl bg-slate-950/80 p-6 ring-1 ring-slate-800">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Solutions Delivered</p>
                <p className="mt-3 text-2xl font-semibold text-white">15+</p>
              </motion.div>
              <motion.div style={getCardBackground('Support Coverage Security')} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="rounded-3xl bg-slate-950/80 p-6 ring-1 ring-slate-800">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Support Coverage</p>
                <p className="mt-3 text-2xl font-semibold text-white">24/7</p>
              </motion.div>
            </div>
            <div className="relative mt-12 overflow-hidden">
              <motion.div animate={{ x: [0, 50, 0], y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute left-10 top-10 rounded-2xl bg-cyan-500/10 p-4 text-center shadow-lg">
                <p className="text-sm text-cyan-300">AI Automation</p>
              </motion.div>
              <motion.div animate={{ x: [0, -30, 0], y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute right-20 top-20 rounded-2xl bg-cyan-500/10 p-4 text-center shadow-lg">
                <p className="text-sm text-cyan-300">ERP Integration</p>
              </motion.div>
              <motion.div animate={{ x: [0, 40, 0], y: [0, -25, 0] }} transition={{ duration: 7, repeat: Infinity, delay: 2 }} className="absolute bottom-10 left-20 rounded-2xl bg-cyan-500/10 p-4 text-center shadow-lg">
                <p className="text-sm text-cyan-300">Cloud Security</p>
              </motion.div>
              <motion.div animate={{ x: [0, -50, 0], y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute bottom-20 right-10 rounded-2xl bg-cyan-500/10 p-4 text-center shadow-lg">
                <p className="text-sm text-cyan-300">Banking APIs</p>
              </motion.div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/70 p-8 shadow-card backdrop-blur-md">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_36%)] opacity-80" />
            <div className="relative space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">AI-enabled transformation</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Modern digital platforms for business acceleration.</h2>
                <p className="mt-4 text-slate-300">Integrated systems, intuitive dashboards, and secure APIs that keep teams connected and customers delighted.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div style={getCardBackground('Cloud adoption AWS Azure GCP')} className="rounded-3xl border border-white/10 bg-slate-950/75 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Cloud adoption</p>
                  <p className="mt-3 text-xl font-semibold text-white">AWS, Azure, GCP</p>
                </div>
                <div style={getCardBackground('Security compliance support')} className="rounded-3xl border border-white/10 bg-slate-950/75 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Security</p>
                  <p className="mt-3 text-xl font-semibold text-white">24/7 compliance support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-800 bg-slate-950/60 py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About us</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">We help businesses modernize technology, protect operations, and unlock new value with intelligent systems.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                SAILTEKS SOLUTIONS combines deep technology expertise, strategic consulting, and secure delivery to help enterprises transform legacy systems and scale innovation across industries.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div style={getCardBackground('Mission cloud AI enterprise systems')} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Mission</p>
                <p className="mt-4 text-slate-200">Empower organizations with future-ready technology and trusted delivery across cloud, AI, and enterprise systems.</p>
              </div>
              <div style={getCardBackground('Vision resilient digital transformation')} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Vision</p>
                <p className="mt-4 text-slate-200">To be the leading partner for resilient digital transformation in fast-moving industries worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">What we do</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Services designed for large-scale growth and strong digital operations.</h2>
          <p className="mx-auto max-w-2xl text-slate-400">Deep expertise in software development, AI, ERP, cloud transformation, and integration engineering for ambitious organizations.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article key={service.title} style={getCardBackground(`${service.title} ${service.description}`)} whileHover={{ y: -6 }} className="group rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 transition duration-300 hover:border-cyan-400/40 hover:bg-slate-900/95">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 shadow-[0_12px_30px_rgba(14,165,233,0.08)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-slate-400">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-950/60 py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Capabilities</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Technology stack that powers modern enterprise solutions.</h2>
              <p className="max-w-xl text-slate-400">We architect modern platforms using the latest cloud, analytics, development, and security technologies for future-ready operations.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {['Next.js', 'React', 'Node.js', 'Python', 'AWS', 'Azure', 'Docker', 'Kubernetes', 'Power BI', 'SAP', 'PostgreSQL', 'GraphQL'].map((tech) => (
                <div key={tech} style={getCardBackground(tech)} className="rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-4 text-center text-sm uppercase tracking-[0.3em] text-slate-200">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Industries we serve</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Deep experience across regulated and high-growth sectors.</h2>
          <p className="mx-auto max-w-2xl text-slate-400">From Mpesa and banking integrations to personal business platforms, we deliver secure payment, operations, and digital transformation solutions for both enterprise and growing businesses.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry) => (
            <motion.div key={industry} style={getCardBackground(industry)} whileHover={{ y: -4 }} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 transition hover:border-cyan-400/30">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                <FaIndustry className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{industry}</h3>
              <p className="mt-3 text-slate-400">Modern digital systems, integrations, and automation tailored for this sector.</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="trusted-technologies" className="border-t border-slate-800 bg-slate-950/60 py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="space-y-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Trusted technologies</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Built on enterprise-grade platforms</h2>
            <p className="mx-auto max-w-2xl text-slate-400">We leverage industry-leading technologies to deliver secure, scalable, and innovative solutions.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-4 lg:grid-cols-6">
            {['AWS', 'Azure', 'React', 'Docker', 'Kubernetes', 'SAP', 'Stripe', 'Mpesa'].map((tech) => (
              <motion.div key={tech} style={getCardBackground(tech)} whileHover={{ scale: 1.05 }} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 text-center transition">
                <p className="text-lg font-semibold text-white">{tech}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 space-y-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Who we work with</p>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {['Startups', 'SMEs', 'Enterprises', 'NGOs', 'Government', 'Healthcare', 'Fintech'].map((client) => (
                <div key={client} style={getCardBackground(client)} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-center">
                  <p className="text-sm font-medium text-slate-100">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="border-t border-slate-800 bg-slate-950/60 py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Portfolio</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Featured transformations and product launches.</h2>
            </div>
            <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400 hover:bg-slate-950">
              Schedule a strategy session <FaArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <motion.article key={project.title} style={getCardBackground(`${project.title} ${project.description} ${project.tags.join(' ')}`)} whileHover={{ y: -6 }} className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 shadow-card transition hover:border-cyan-400/40">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Project</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <span className="rounded-2xl bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">Live</span>
                </div>
                <p className="mt-5 text-slate-400">{project.description}</p>
                {project.metrics && <p className="mt-3 text-sm font-semibold text-cyan-300">{project.metrics}</p>}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-slate-800 bg-slate-950/90 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.url} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
                  View details <FaArrowRight className="h-3.5 w-3.5" />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-work" className="border-t border-slate-800 bg-slate-950/60 py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="space-y-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">How we work</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Our proven process for enterprise transformation</h2>
            <p className="mx-auto max-w-2xl text-slate-400">A structured approach that ensures successful delivery, from discovery to deployment and beyond.</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <motion.div style={getCardBackground('Discovery business analysis')} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="rounded-[2rem] border border-slate-800 p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-2xl font-bold text-cyan-300">01</div>
              <h3 className="text-xl font-semibold text-white">Discovery</h3>
              <p className="mt-2 text-slate-400">Understanding business challenges and technical requirements through in-depth analysis.</p>
            </motion.div>
            <motion.div style={getCardBackground('Strategy Architecture scalable systems')} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="rounded-[2rem] border border-slate-800 p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-2xl font-bold text-cyan-300">02</div>
              <h3 className="text-xl font-semibold text-white">Strategy & Architecture</h3>
              <p className="mt-2 text-slate-400">Planning secure and scalable system design with cutting-edge technology stacks.</p>
            </motion.div>
            <motion.div style={getCardBackground('Development Integration software APIs')} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="rounded-[2rem] border border-slate-800 p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-2xl font-bold text-cyan-300">03</div>
              <h3 className="text-xl font-semibold text-white">Development & Integration</h3>
              <p className="mt-2 text-slate-400">Agile implementation with continuous collaboration and rigorous testing.</p>
            </motion.div>
            <motion.div style={getCardBackground('Deployment Optimization cloud monitoring')} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="rounded-[2rem] border border-slate-800 p-6 text-center">
              <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10 text-2xl font-bold text-cyan-300">04</div>
              <h3 className="text-xl font-semibold text-white">Deployment & Optimization</h3>
              <p className="mt-2 text-slate-400">Monitoring, scaling, and long-term support for sustained performance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-800 bg-slate-950/60 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to Modernize Your Business Infrastructure?</h2>
          <p className="mt-4 text-lg text-slate-300">Schedule a strategy session with SAILTEKS SOLUTIONS and discover how AI, automation, and secure digital systems can accelerate your growth.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              Book Consultation
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:border-slate-500">
              Start a Project
            </Link>
            <Link href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-8 py-4 text-sm font-semibold text-slate-100 transition hover:border-slate-500">
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Why choose us</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Premium delivery for ambitious teams that need speed, trust, and innovation.</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <motion.article key={feature.title} style={getCardBackground(`${feature.title} ${feature.description}`)} whileHover={{ y: -4 }} className="rounded-[2rem] border border-slate-800 bg-slate-950/90 p-8 transition hover:border-cyan-400/30">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                <FaCheckCircle className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-slate-400">{feature.description}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-slate-800 bg-slate-950/60 py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">Start your digital transformation with a trusted partner.</h2>
                <p className="max-w-2xl text-slate-400">Reach out for a discovery workshop, secure proof-of-concept, or strategic technology roadmap.</p>
                <div className="space-y-4">
                  <p className="text-sm text-slate-300"><strong>Response guarantee:</strong> We typically respond within 12-24 hours.</p>
                  <p className="text-sm text-slate-300"><strong>Security assurance:</strong> All inquiries are handled securely and confidentially.</p>
                </div>
              </div>

              <div style={getCardBackground('Contact secure global delivery')} className="grid gap-4 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8">
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                    <FaEnvelope className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Email</p>
                    <p className="mt-2 text-base font-semibold text-white">sailtechsolutions1@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                    <FaPhoneAlt className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Phone</p>
                    <p className="mt-2 text-base font-semibold text-white">0111869298</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300">
                    <FaMapMarkerAlt className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Office</p>
                    <p className="mt-2 text-base font-semibold text-white">Nairobi, Kenya - Remote global delivery</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <section id="insights" className="border-t border-slate-800 bg-slate-950/60 py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="space-y-6 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Insights & thought leadership</p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">Expert perspectives on digital transformation</h2>
            <p className="mx-auto max-w-2xl text-slate-400">Stay ahead with our latest insights on AI, cloud, and enterprise innovation.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.article style={getCardBackground('AI African Enterprises automation')} whileHover={{ y: -4 }} className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 transition">
              <h3 className="text-xl font-semibold text-white">The Future of AI in African Enterprises</h3>
              <p className="mt-3 text-slate-400">How AI is reshaping business operations across the continent, with real-world case studies.</p>
              <Link href="/blog/ai-african-enterprises" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
                Read more <FaArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.article>
            <motion.article style={getCardBackground('Mpesa Integrations payments financial services')} whileHover={{ y: -4 }} className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 transition">
              <h3 className="text-xl font-semibold text-white">How Mpesa Integrations Are Transforming Payments</h3>
              <p className="mt-3 text-slate-400">Secure integration strategies for modern payment systems and financial services.</p>
              <Link href="/blog/mpesa-integrations" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
                Read more <FaArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.article>
            <motion.article style={getCardBackground('ERP Strategies cloud infrastructure')} whileHover={{ y: -4 }} className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6 transition">
              <h3 className="text-xl font-semibold text-white">Modern ERP Strategies for Growing Businesses</h3>
              <p className="mt-3 text-slate-400">Why secure cloud infrastructure matters for enterprise scalability and compliance.</p>
              <Link href="/blog/erp-strategies" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200">
                Read more <FaArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
