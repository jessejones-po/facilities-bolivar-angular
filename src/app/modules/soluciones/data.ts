import type { SolutionItem, SolutionContent } from './types';

export const SOLUTION_ITEMS: SolutionItem[] = [
  { id: 'infraestructura', label: 'Infraestructura Crítica', icon: 'lightning' },
  { id: 'espacios', label: 'Gestión Integral de Espacios', icon: 'location' },
  { id: 'cumplimiento', label: 'Cumplimiento y Control', icon: 'document' },
  { id: 'usuario', label: 'Servicios para el Usuario', icon: 'paper-plane' },
  { id: 'tecnica', label: 'Gestión Técnica Especializada', icon: 'gear' },
];

export const SOLUTION_CONTENT_MAP: Record<string, SolutionContent> = {
  infraestructura: {
    title: 'Gestión de Infraestructura Crítica',
    description:
      'Garantizamos la disponibilidad de los sistemas esenciales del edificio: energía, climatización y respaldo operativo, para asegurar continuidad y eficiencia.',
    image: 'assets/Infraestructuracritica.png',
    badge: 'Calidad de aire 50ppm',
  },
  espacios: {
    title: 'Gestión Integral de Espacios',
    description:
      'Optimizamos el uso y la operación de sus espacios mediante planificación, mantenimiento preventivo y mejora continua de las instalaciones.',
    image: 'assets/Gestionintegraldeespacios.png',
  },
  cumplimiento: {
    title: 'Cumplimiento y Control',
    description:
      'Garantizamos el cumplimiento normativo y el control de calidad mediante auditorías, documentación y planes de acción correctiva.',
    image: 'assets/Cumpliminentocontroloperativo.png',
  },
  usuario: {
    title: 'Servicios para el Usuario',
    description:
      'Gestionamos servicios orientados al bienestar de colaboradores y visitantes: recepción, limpieza, cafetería y soporte logístico.',
    image: 'assets/Serviciosparaelusuario.png',
  },
  tecnica: {
    title: 'Gestión Técnica Especializada',
    description:
      'Contamos con técnicos especializados en HVAC, eléctrico, hidráulico y sistemas de seguridad para mantener su infraestructura en óptimas condiciones.',
    image: 'assets/Gestiontecnicaespecializada.png',
  },
};
