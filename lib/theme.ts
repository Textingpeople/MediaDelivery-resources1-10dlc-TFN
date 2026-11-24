// LifeEase design tokens (navy / teal / cream)
export const NAVY = '#0f2744';
export const ACCENT = '#0d9488';
export const ACCENT_BG = '#f0fdfa';
export const IVORY = '#faf8f4';
export const BORDER = '#e8e4dc';
export const FOOTER_BG = '#0a1e38';
export const MUTED = '#94a3b8';

export const inputStyle = {
  background: '#fff',
  border: `1px solid ${BORDER}`,
  color: NAVY,
  width: '100%',
  borderRadius: '12px',
  padding: '12px 16px',
  fontSize: '14px',
  outline: 'none',
} as const;

export const labelStyle = {
  color: '#6b7280',
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
};
