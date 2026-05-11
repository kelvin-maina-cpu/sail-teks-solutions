'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setStatus('Please complete all fields before sending.');
      return;
    }

    const subject = encodeURIComponent(`SAILTEKS SOLUTIONS website inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:sailtechsolutions1@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundImage: `
          linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(8, 47, 73, 0.82)),
          url("/card-backgrounds/it-consultancy.jpeg"),
          radial-gradient(circle at 18% 18%, rgba(34, 211, 238, 0.34), transparent 34%),
          radial-gradient(circle at 88% 10%, rgba(20, 184, 166, 0.2), transparent 30%),
          repeating-linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0 1px, transparent 1px 18px)
        `,
        backgroundBlendMode: 'normal, luminosity, screen, screen, overlay',
      }}
      className="rounded-[2rem] border border-slate-800 bg-slate-900/80 bg-cover bg-center p-8 shadow-card"
    >
      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="text-sm font-semibold text-slate-300">
            Full name
          </label>
          <input
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-slate-300">
            Email address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-sm font-semibold text-slate-300">
            Your message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="mt-3 min-h-[160px] w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-white outline-none transition focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
            placeholder="Tell us about your project or challenge"
          />
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button type="submit" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            Send inquiry
          </button>
          {status ? <p className="text-sm text-rose-400">{status}</p> : <p className="text-sm text-slate-400">We will respond within one business day.</p>}
        </div>
      </div>
    </form>
  );
}
