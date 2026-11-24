import { DISCLAIMER_LINE } from '@/lib/siteConfig';
import { ACCENT, BORDER } from '@/lib/theme';

export default function Disclaimer() {
  return (
    <div
      className="max-w-4xl mx-auto rounded-xl p-5 text-sm text-gray-600 leading-relaxed"
      style={{ background: '#fff', border: `1px solid ${BORDER}`, borderLeft: `4px solid ${ACCENT}` }}
    >
      <p>{DISCLAIMER_LINE}</p>
    </div>
  );
}
