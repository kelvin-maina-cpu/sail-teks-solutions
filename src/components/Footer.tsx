import Link from 'next/link';
import { FaEnvelope, FaGlobe, FaLinkedin, FaTwitter } from 'react-icons/fa';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/90 py-12">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 sm:grid-cols-[1.2fr_0.9fr] sm:px-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">SAILTEKS SOLUTIONS</p>
          <p className="max-w-xl text-slate-400">
            We deliver enterprise software, AI systems, secure cloud platforms, and integration engineering for organizations that need speed, trust, and growth.
          </p>
          <div className="flex items-center gap-3 text-slate-300">
            <a
              href="mailto:sailtechsolutions1@gmail.com"
              className="inline-flex items-center gap-2 text-sm text-slate-200 transition duration-200 hover:text-white"
            >
              <FaEnvelope className="h-5 w-5 text-cyan-300" /> sailtechsolutions1@gmail.com
            </a>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Quick links</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="#services" className="transition hover:text-white">Services</Link>
              </li>
              <li>
                <Link href="#portfolio" className="transition hover:text-white">Portfolio</Link>
              </li>
              <li>
                <Link href="#contact" className="transition hover:text-white">Contact</Link>
              </li>
              <li>
                <Link href="#insights" className="transition hover:text-white">Insights</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/privacy" className="transition hover:text-white">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms" className="transition hover:text-white">Terms of Service</Link>
              </li>
              <li>
                <Link href="/security" className="transition hover:text-white">Security Standards</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/careers" className="transition hover:text-white">Careers</Link>
              </li>
              <li>
                <Link href="/case-studies" className="transition hover:text-white">Case Studies</Link>
              </li>
              <li>
                <Link href="/profile.pdf" className="transition hover:text-white">Company Profile</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Follow</h3>
            <div className="mt-4 flex items-center gap-3 text-slate-300">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 p-2 text-slate-300 transition duration-200 hover:border-cyan-400 hover:text-white">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 p-2 text-slate-300 transition duration-200 hover:border-cyan-400 hover:text-white">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://kevs-portfolio-three.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 p-2 text-slate-300 transition duration-200 hover:border-cyan-400 hover:text-white">
                <FaGlobe className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 px-6 pt-6 text-sm text-slate-500 sm:px-8">
        &copy; {new Date().getFullYear()} SAILTEKS SOLUTIONS. Built for global technology leaders.
      </div>
    </footer>
  );
}
