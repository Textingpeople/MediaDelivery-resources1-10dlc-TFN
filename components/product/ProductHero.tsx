import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { NAVY, ACCENT, ACCENT_BG, IVORY } from '@/lib/theme';

export default function ProductHero() {
  return (
    <section className="py-20" style={{ background: IVORY }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: ACCENT_BG, color: ACCENT }}>
          The Product
        </span>
        <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
          Your concierge. Real people. Everyday tasks done.
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          LifeEase Concierge is an employer-provided personal concierge benefit. Send everyday tasks to a dedicated concierge by text or through the portal — booking appointments and reservations, errands and grocery orders, coordinating home repairs and deliveries, travel planning and product research — and get status updates until the task is done.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold" style={{ background: NAVY, color: '#fff' }}>
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold" style={{ border: `2px solid ${ACCENT}`, color: ACCENT }}>
            Book a Demo for Your Team
          </Link>
        </div>
      </div>
    </section>
  );
}
