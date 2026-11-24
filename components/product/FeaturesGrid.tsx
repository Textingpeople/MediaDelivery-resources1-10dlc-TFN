import { Monitor, Bell, CheckCircle2, Clock, Shield, MessageSquare } from 'lucide-react';
import { NAVY, ACCENT, ACCENT_BG, IVORY } from '@/lib/theme';

const features = [
  { icon: MessageSquare, title: 'Text or portal requests', desc: 'Send any everyday task to your dedicated concierge by text or through the portal — whichever is easier in the moment.' },
  { icon: Monitor, title: 'Dedicated concierge', desc: 'A concierge handles research, scheduling, bookings and coordination for you and learns how you like things done.' },
  { icon: Bell, title: 'Status updates', desc: 'Get notified when your request is in progress, when your concierge needs a quick decision from you, and when it is done.' },
  { icon: CheckCircle2, title: 'Task tracking portal', desc: 'See every active and completed request, communicate with your concierge, and review updates in one place.' },
  { icon: Clock, title: 'Updates until it is done', desc: 'Your concierge keeps you informed as tasks progress. No need to follow up — we come to you when something needs your input.' },
  { icon: Shield, title: 'Private & confidential', desc: 'Your personal requests are never shared with your employer. Full confidentiality, always.' },
];

export default function FeaturesGrid() {
  return (
    <section style={{ background: IVORY, borderTop: '1px solid #e8e4dc' }} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Everything included</h2>
          <p className="text-gray-500 text-lg">Every employee in a participating program gets the full service.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ background: ACCENT_BG }}>
                <Icon className="w-5 h-5" style={{ color: ACCENT }} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: NAVY }}>{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
