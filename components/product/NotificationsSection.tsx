import { Bell, CheckCircle2, Clock } from 'lucide-react';
import { NAVY, ACCENT, ACCENT_BG, IVORY } from '@/lib/theme';

const notifyPoints = [
  { title: 'Task completed', desc: 'Your concierge confirms when a task is fully done — no need to follow up.' },
  { title: 'Decision needed', desc: 'When your input is required (e.g., choosing between two options), we let you know.' },
  { title: 'Status updates', desc: 'For longer tasks, your concierge sends progress updates so you always know where things stand.' },
];

const notifications = [
  { type: 'done', title: 'Grocery order placed', body: 'Your grocery order is confirmed. Delivery window: Saturday morning.' },
  { type: 'action', title: 'Decision needed: Contractor quote', body: 'Two quotes received for your repair. Review and tell us which you prefer.' },
  { type: 'update', title: 'Travel itinerary ready', body: 'Your concierge has prepared your trip itinerary. Ready to review.' },
];

export default function NotificationsSection() {
  return (
    <section style={{ background: IVORY }} className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>Stay informed. Only when it matters.</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We don&apos;t flood you with updates. You hear from us when a task is complete, when your concierge needs a quick decision from you, or when something unexpected comes up. Everything else, we handle quietly in the background.
            </p>
            <div className="space-y-4">
              {notifyPoints.map(({ title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: ACCENT }} />
                  <div>
                    <p className="font-semibold text-sm mb-0.5" style={{ color: NAVY }}>{title}</p>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {notifications.map(({ type, title, body }) => (
              <div
                key={title}
                className="rounded-2xl p-4 flex gap-4 items-start"
                style={{ background: type === 'action' ? '#fffbeb' : '#fff', border: type === 'action' ? '1px solid #fde68a' : '1px solid #e8e4dc' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: type === 'done' ? ACCENT_BG : type === 'action' ? '#fef3c7' : '#f3f4f6' }}
                >
                  {type === 'done' && <CheckCircle2 className="w-5 h-5" style={{ color: ACCENT }} />}
                  {type === 'action' && <Bell className="w-5 h-5 text-amber-500" />}
                  {type === 'update' && <Clock className="w-5 h-5 text-gray-400" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold mb-1" style={{ color: NAVY }}>{title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
