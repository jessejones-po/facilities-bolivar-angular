/**
 * Constantes del Pre-footer y Footer.
 * Centraliza enlaces legales y textos para mantener consistencia.
 */

export const PRE_FOOTER = {
  title: 'Recupere su tranquilidad operativa.',
  subtitle: 'Inicie un diagnóstico experto para identificar oportunidades de ahorro.',
  ctaLabel: 'Solicitar diagnóstico',
} as const;

export const LEGAL_LINKS = [
  { label: 'Términos y condiciones de uso', href: '/terminos-condiciones' },
  { label: 'Políticas de Seguridad', href: '/politicas-seguridad' },
  { label: 'Políticas de Privacidad', href: '/politicas-privacidad' },
  { label: 'Ley FACTA', href: '/ley-facta' },
] as const;

export const SOCIAL_LINKS = [
  { label: 'YouTube', href: 'https://youtube.com', icon: 'youtube' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
] as const;

export const COPYRIGHT = '© 2025 - Facilities Bolívar · Todos los derechos reservados';
