import Link from 'next/link';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import Disclaimer from '@/components/Disclaimer';
import CompanyInfo from '@/components/CompanyInfo';
import { BRAND, LEGAL_NAME } from '@/lib/siteConfig';
import { NAVY, ACCENT, ACCENT_BG, IVORY } from '@/lib/theme';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ background: IVORY, color: NAVY }}>
      <SiteNav />

      {/* Hero */}
      <section className="py-20" style={{ background: IVORY }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: ACCENT_BG, color: ACCENT }}>
            About Us
          </span>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>
            We give employees their time back.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {BRAND} is a personal concierge and virtual assistance service offered exclusively as an employee benefit. We handle life&apos;s everyday tasks so your team can focus on what matters most — at work and at home.
          </p>
          <p className="text-sm text-gray-500 mt-4">{BRAND} is operated by {LEGAL_NAME}.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16" style={{ background: '#fff', borderTop: '1px solid #e8e4dc', borderBottom: '1px solid #e8e4dc' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Our mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Modern employees are stretched thin. Between demanding jobs, family responsibilities, and the endless stream of errands and appointments, there&apos;s rarely enough time in the day.
              </p>
              <p className="text-gray-600 leading-relaxed">
                {BRAND} was built to change that. We partner with employers to offer a dedicated concierge service that handles the tasks employees don&apos;t have time for — from booking appointments to arranging travel, coordinating home repairs, and everything in between.
              </p>
            </div>
            <div className="rounded-2xl p-8 text-center" style={{ background: ACCENT_BG }}>
              <p className="text-lg font-semibold mb-2" style={{ color: NAVY }}>A benefit employees actually use</p>
              <p className="text-gray-600 text-sm">Unlike traditional perks, concierge assistance solves real, daily problems — making it one of the most valued benefits in any package.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ background: IVORY }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>What we stand for</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Privacy first', body: 'Your personal requests are never shared with your employer. What you ask us to handle stays between you and your concierge.' },
              { title: 'Reliability', body: 'We follow through. When you submit a request, you can trust it will be handled — completely and correctly.' },
              { title: 'Human touch', body: 'Real people handle your requests. No bots, no automated responses — just dedicated professionals who care about getting it right.' },
            ].map(({ title, body }) => (
              <div key={title} className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
                <h3 className="text-lg font-bold mb-2" style={{ color: NAVY }}>{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-16" style={{ background: '#fff', borderTop: '1px solid #e8e4dc' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Company information</h2>
          <div className="text-left">
            <CompanyInfo />
          </div>
          <p className="text-sm text-gray-500 mt-4">{BRAND} is operated by {LEGAL_NAME}, a Wyoming limited liability company.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="px-6 py-3 rounded-xl text-sm font-semibold" style={{ border: `2px solid ${ACCENT}`, color: ACCENT }}>
              Contact Us
            </Link>
            <Link href="/consultation" className="px-6 py-3 rounded-xl text-sm font-semibold text-white" style={{ background: NAVY }}>
              Book a Demo
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 px-4 sm:px-6 lg:px-8" style={{ background: IVORY }}>
        <Disclaimer />
      </section>

      <SiteFooter />
    </div>
  );
}
