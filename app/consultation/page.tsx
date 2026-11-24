import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import DemoForm from '@/components/consultation/DemoForm';
import { NAVY, ACCENT, IVORY } from '@/lib/theme';

const covers = [
  { title: 'Full Service Overview', desc: 'See exactly what tasks our concierges handle — from appointment scheduling to travel planning and everything in between.' },
  { title: 'Live Portal Demo', desc: "We'll walk you through the employee experience — how to submit requests, track progress, and communicate with your concierge." },
  { title: 'Pricing & Plans', desc: 'Understand the benefit structure, pricing, and how to roll this out as an employee perk at your organization.' },
  { title: 'Q&A Session', desc: 'Ask anything. Our team will answer all your questions about implementation, privacy, and customization.' },
];

export default function ConsultationPage() {
  return (
    <div className="min-h-screen" style={{ background: IVORY, color: NAVY }}>
      <SiteNav />

      {/* Hero banner */}
      <div className="py-14 px-4 text-center" style={{ background: NAVY }}>
        <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5" style={{ background: 'rgba(13,148,136,0.2)', color: '#5eead4' }}>
          No Commitment Required
        </span>
        <h1 className="text-4xl font-bold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>Book Your Free Demo</h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#94a3b8' }}>
          Learn how LifeEase Concierge&apos;s personal concierge service can benefit your employees. We&apos;ll walk you through everything in 30 minutes or less.
        </p>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <DemoForm />

          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>What we&apos;ll cover</h2>
            <div className="space-y-5">
              {covers.map(({ title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: ACCENT }} />
                  <div>
                    <p className="font-semibold text-sm mb-1" style={{ color: NAVY }}>{title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
