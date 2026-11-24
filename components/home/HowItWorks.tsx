import { NAVY, ACCENT } from '@/lib/theme';

const ACCENT_BG = '#0d948822';

const steps = [
  { n: '1', title: 'Sign Up', body: 'Create your account with the Company ID from your employer.' },
  { n: '2', title: 'Send a Request', body: 'Text or type any everyday task — big or small.' },
  { n: '3', title: 'We Handle It', body: 'Your dedicated concierge takes care of everything while you focus on what matters.' },
  { n: '4', title: 'Done', body: 'Get status updates and a confirmation when your task is complete.' },
];

export default function HowItWorks() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #e8e4dc', borderBottom: '1px solid #e8e4dc' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>How it works</h2>
          <p className="text-gray-500 text-lg">Simple, fast, and completely handled for you</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={s.n} className="relative text-center">
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] right-0 h-px" style={{ background: '#e8e4dc' }} />
              )}
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold" style={{ background: ACCENT_BG, color: ACCENT, border: `2px solid ${ACCENT}` }}>
                {s.n}
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: NAVY }}>{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
