export const capitalize = (s: string) => (s ? s.charAt(0).toUpperCase() + s.slice(1) : '—');

export const orDash = (s: string) => s || '—';
