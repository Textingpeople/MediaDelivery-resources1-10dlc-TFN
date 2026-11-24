import { SERVICES } from '@/lib/services';
import { NAVY, ACCENT, IVORY } from '@/lib/theme';

const ACCENT_BG = '#0d948822';

export default function ServicesGrid() {
  return (
    <section style={{ background: IVORY }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold mb-3" style={{ color: NAVY, fontFamily: 'Georgia, serif' }}>We handle life&apos;s tasks</h2>
          <p className="text-gray-500 text-lg">Submit any request and your dedicated concierge takes care of the rest</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map(({ icon: Icon, label, desc }) => (
            <div key={label} className="rounded-2xl p-6 transition-all hover:-translate-y-1" style={{ background: '#fff', border: '1px solid #e8e4dc', boxShadow: '0 2px 8px rgba(15,39,68,0.06)' }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: ACCENT_BG }}>
                <Icon className="w-6 h-6" style={{ color: ACCENT }} />
              </div>
              <h3 className="text-base font-bold mb-2" style={{ color: NAVY }}>{label}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
