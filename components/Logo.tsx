import Link from 'next/link';
import { BRAND } from '@/lib/siteConfig';
import { NAVY, ACCENT } from '@/lib/theme';

// Text + SVG wordmark (no image file needed)
export default function Logo({
  variant = 'dark',
  size = 'md',
}: {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
}) {
  const dark = variant === 'dark';
  const fontSize = size === 'lg' ? 26 : size === 'sm' ? 18 : 22;
  const markSize = size === 'lg' ? 40 : size === 'sm' ? 28 : 34;

  return (
    <Link href="/" aria-label={`${BRAND} home`} className="inline-flex items-center gap-2.5 flex-shrink-0">
      <span
        className="inline-flex items-center justify-center rounded-lg"
        style={{ width: markSize, height: markSize, background: dark ? NAVY : 'rgba(255,255,255,0.12)' }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" width={markSize * 0.6} height={markSize * 0.6} fill="none" stroke={dark ? '#2dd4bf' : '#5eead4'} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontSize, color: dark ? NAVY : '#fff', letterSpacing: '-0.01em', lineHeight: 1 }}>
        LifeEase<span style={{ color: dark ? ACCENT : '#5eead4' }}> Concierge</span>
      </span>
    </Link>
  );
}
