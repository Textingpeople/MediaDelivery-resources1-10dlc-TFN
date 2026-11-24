import Link from 'next/link';
import { Clock, ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { NAVY, ACCENT, IVORY } from '@/lib/theme';

const ACCENT_BG = '#0d948822';

export default function Hero() {
  return (
    <section style={{ background: IVORY }} className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6" style={{ background: ACCENT_BG, color: ACCENT }}>
              Exclusive Employee Benefit
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
              Your personal concierge,{' '}
              <span style={{ color: ACCENT }}>always on call.</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              Professional help with life&apos;s everyday tasks — from booking appointments and reservations to ordering groceries, planning travel, and everything in between. Available exclusively to you as an employee benefit.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link href="/signup" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold transition-all" style={{ background: NAVY, color: '#fff' }}>
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/login" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold transition-all" style={{ border: `2px solid ${NAVY}`, color: NAVY }}>
                Login
              </Link>
              <Link href="/consultation" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold transition-all" style={{ border: `2px solid ${ACCENT}`, color: ACCENT, background: 'transparent' }}>
                For Employers — Book Demo
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl opacity-40" style={{ background: `linear-gradient(135deg, ${ACCENT_BG}, #eff6ff)` }} />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #0f2744 0%, #1e3a5f 100%)', minHeight: '380px' }}>
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pb-32 text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: 'rgba(255,255,255,0.1)' }}>
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <p className="text-white text-xl font-semibold mb-2" style={{ fontFamily: 'Georgia, serif' }}>More evenings like this.</p>
                <p className="text-blue-200 text-sm">Less time on hold. More time with family.</p>
              </div>
              <div className="absolute bottom-5 left-5 right-5 rounded-xl p-4 shadow-lg" style={{ background: 'rgba(255,255,255,0.97)' }}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_BG }}>
                    <MessageSquare className="w-4 h-4" style={{ color: ACCENT }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Your concierge: Car service booked for Thursday at 2pm, and your grocery order arrives Saturday morning. Anything else?
                    </p>
                  </div>
                </div>
                <div className="mt-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                  <span className="text-xs" style={{ color: ACCENT }}>Request complete</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
