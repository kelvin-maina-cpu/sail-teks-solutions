import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope } from 'react-icons/fa';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-3 text-lg font-semibold text-white">
          <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950 p-1 shadow-black/20 shadow-lg sm:h-16 sm:w-16">
            <Image src="/logo.png" alt="SAILTEKS SOLUTIONS" width={72} height={72} className="h-full w-full object-contain" />
          </div>
          <span className="inline-flex text-base font-bold uppercase tracking-[0.18em] text-cyan-200">
            SAILTEKS SOLUTIONS
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
          <Link href="#about" className="transition hover:text-white">
            About
          </Link>
          <Link href="#services" className="transition hover:text-white">
            Services
          </Link>
          <Link href="#portfolio" className="transition hover:text-white">
            Portfolio
          </Link>
          <Link href="#contact" className="transition hover:text-white">
            Contact
          </Link>
<a href="mailto:sailtechsolutions1@gmail.com" className="inline-flex items-center gap-2 rounded-full border border-cyan-400 bg-cyan-500/15 px-4 py-2 text-cyan-100 transition duration-200 hover:border-cyan-300 hover:bg-cyan-500/25 hover:text-white">
            <FaEnvelope className="h-5 w-5 text-cyan-200" />
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
