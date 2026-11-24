import { MapPin, Monitor, Bell, CheckCircle2, Users } from 'lucide-react';
import { NAVY, ACCENT, ACCENT_BG, IVORY } from '@/lib/theme';

const support = [
  { icon: MapPin, title: 'Local coordination', desc: 'Home services, pickups and errands coordinated in your area.' },
  { icon: Monitor, title: 'Online support', desc: 'Scheduling, research, bookings, travel planning and more.' },
  { icon: Users, title: 'Dedicated to you', desc: 'Your concierge learns your preferences and handles requests the way you like them done.' },
];

export default function ConciergeSupport() {
  return (
    <section style={{ background: '#fff', borderTop: '1px solid #e8e4dc', borderBottom: '1px solid #e8e4dc' }} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Support that fits the task.</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Depending on your request and location, your concierge works in person or online. Need someone to coordinate a home repair visit? We arrange it. Need research, bookings or scheduling? We take care of it.
            </p>
            <ul className="space-y-4">
              {support.map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: ACCENT_BG }}>
                    <Icon className="w-5 h-5" style={{ color: ACCENT }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: NAVY }}>{title}</p>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Portal mockup */}
          <div className="rounded-2xl overflow-hidden shadow-xl" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
            <div className="px-5 py-4 flex items-center justify-between" style={{ background: NAVY }}>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-white/60 font-medium">My Concierge Portal</span>
              <div />
            </div>
            <div className="p-5 space-y-3" style={{ background: IVORY }}>
              <div className="rounded-xl p-4" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>In Progress</span>
                <p className="text-sm font-semibold mt-2 mb-1" style={{ color: NAVY }}>Home repair — plumber visit</p>
                <p className="text-xs text-gray-500">Your concierge is coordinating the visit window with the plumber.</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: '#fffbeb', border: '1px solid #fde68a' }}>
                <div className="flex items-center gap-2 mb-2">
                  <Bell className="w-3.5 h-3.5 text-amber-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-600">Needs Your Decision</span>
                </div>
                <p className="text-sm font-semibold mb-1" style={{ color: NAVY }}>Flight booking — 2 options found</p>
                <p className="text-xs text-gray-500">Your concierge found 2 flights. Please review and confirm your preference.</p>
              </div>
              <div className="rounded-xl p-4" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
                <div className="flex items-center gap-1.5 mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" style={{ color: ACCENT }} />
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: ACCENT }}>Completed</span>
                </div>
                <p className="text-sm font-semibold" style={{ color: NAVY }}>Dinner reservation confirmed — Friday, 7pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
