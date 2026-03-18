export interface NavItem {
  label: string;
  url: string;
  moduleId: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Nosotros', url: '#nosotros', moduleId: 'nosotros' },
  { label: 'Soluciones', url: '#soluciones', moduleId: 'soluciones' },
  { label: 'Tecnología', url: '#tecnologia', moduleId: 'tecnologia' },
  { label: 'Obras Civiles', url: '#obras-civiles', moduleId: 'obras-civiles' },
  { label: 'Reconocimiento', url: '#reconocimiento', moduleId: 'reconocimiento' },
  { label: 'Blog', url: '#blog', moduleId: 'blog' },
];

export const CTA_NAV = {
  label: 'Solicitar diagnóstico',
  routerLink: '/solicitar-diagnostico',
} as const;
