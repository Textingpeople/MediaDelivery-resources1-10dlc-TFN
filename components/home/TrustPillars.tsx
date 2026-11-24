import { Clock, Star, Shield } from 'lucide-react';
import { NAVY, ACCENT } from '@/lib/theme';

const ACCENT_BG = '#0d948822';

const pillars = [
  { icon: Clock, title: 'Save hours every week', body: 'Stop spending your lunch break on hold or running errands after work. We give you your time back.' },
  { icon: Star, title: 'Professional concierges', body: 'Trained specialists who know how to get everyday tasks done right.' },
  { icon: Shield, title: 'Completely confidential', body: 'Your personal requests and information are always private and never shared with your employer.' },
];

export default function TrustPillars() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #e8e4dc' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Why employees love it</h2>
          <p className="text-gray-500 text-lg">Built around your needs, your schedule, and your privacy</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: ACCENT_BG }}>
                <Icon className="w-8 h-8" style={{ color: ACCENT }} />
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: NAVY }}>{title}</h3>
              <p className="text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
