import Link from 'next/link';
import {
  SUPPORT_EMAIL, PHONE_DISPLAY, PHONE_TEL, LEGAL_NAME, ADDRESS_LINE_1, ADDRESS_LINE_2, HOURS,
} from '@/lib/siteConfig';
import { NAVY, ACCENT, ACCENT_BG } from '@/lib/theme';

const topicLabel = { color: ACCENT } as const;

export default function ContactInfo() {
  return (
    <div className="md:col-span-2 space-y-6">
      <div className="rounded-2xl p-6" style={{ background: '#fff', border: '1px solid #e8e4dc' }}>
        <h2 className="font-bold text-base mb-4" style={{ color: NAVY }}>Contact information</h2>
        <div className="space-y-3 text-sm text-gray-600">
          <div>
            <p className="font-semibold text-xs uppercase tracking-widest mb-1" style={topicLabel}>Email</p>
            <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:underline" style={{ color: NAVY }}>{SUPPORT_EMAIL}</a>
          </div>
          <div>
            <p className="font-semibold text-xs uppercase tracking-widest mb-1" style={topicLabel}>Phone</p>
            <a href={PHONE_TEL} className="hover:underline" style={{ color: NAVY }}>{PHONE_DISPLAY}</a>
          </div>
          <div>
            <p className="font-semibold text-xs uppercase tracking-widest mb-1" style={topicLabel}>Mailing address</p>
            <p>{LEGAL_NAME}</p>
            <p>{ADDRESS_LINE_1}</p>
            <p>{ADDRESS_LINE_2}</p>
          </div>
          <div>
            <p className="font-semibold text-xs uppercase tracking-widest mb-1" style={topicLabel}>Hours</p>
            {HOURS.map((h) => <p key={h}>{h}</p>)}
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-6" style={{ background: ACCENT_BG, border: `1px solid ${ACCENT}20` }}>
        <p className="text-sm font-semibold mb-2" style={{ color: NAVY }}>For employers</p>
        <p className="text-sm text-gray-600 mb-4">Interested in offering LifeEase Concierge as an employee benefit? Book a free demo with our team.</p>
        <Link href="/consultation" className="inline-block px-4 py-2.5 rounded-lg text-sm font-semibold text-white" style={{ background: NAVY }}>
          Book a Demo →
        </Link>
      </div>
    </div>
  );
}
