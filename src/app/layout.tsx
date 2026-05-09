import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'SAILTEKS SOLUTIONS | Enterprise AI, Cloud, and Digital Transformation',
  description: 'Trusted technology partner for enterprise software, AI automation, secure cloud platforms, ERP systems, and banking integrations. Accelerate your digital transformation with proven expertise.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
