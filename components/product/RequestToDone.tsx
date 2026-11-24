import { NAVY, ACCENT, IVORY } from '@/lib/theme';

const steps = [
  { n: '01', title: 'Create your account', desc: 'Sign up with the Company ID from your employer.' },
  { n: '02', title: 'Submit a request', desc: 'Text or type what you need — your concierge reviews it and gets started.' },
  { n: '03', title: 'Your concierge handles it', desc: 'Calls, bookings, orders and coordination are taken care of for you.' },
  { n: '04', title: 'You get updates', desc: 'We let you know when something needs your decision and when the task is complete.' },
];

export default function RequestToDone() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #e8e4dc' }} className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>From request to done</h2>
          <p className="text-gray-500">Here&apos;s what happens after you submit a task.</p>
        </div>
        <div className="space-y-4">
          {steps.map(({ n, title, desc }) => (
            <div key={n} className="flex gap-5 items-start rounded-2xl p-5" style={{ background: IVORY, border: '1px solid #e8e4dc' }}>
              <div className="text-2xl font-bold flex-shrink-0 w-10 text-right" style={{ color: ACCENT, fontFamily: 'Georgia, serif' }}>{n}</div>
              <div>
                <p className="font-bold text-base mb-1" style={{ color: NAVY }}>{title}</p>
                <p className="text-sm text-gray-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
