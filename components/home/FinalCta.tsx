import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { NAVY, ACCENT } from '@/lib/theme';

export default function FinalCta() {
  return (
    <section style={{ background: NAVY }} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
          Ready to reclaim your time?
        </h2>
        <p className="text-lg mb-10" style={{ color: '#94a3b8' }}>
          New here? Create your account with your Company ID. Want to offer this to your team? Book a free employer demo.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white transition-all" style={{ border: '2px solid rgba(255,255,255,0.3)' }}>
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold transition-all" style={{ background: ACCENT, color: '#fff' }}>
            Book Employer Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
