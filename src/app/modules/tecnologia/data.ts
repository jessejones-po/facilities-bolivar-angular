export interface TecnologiaFeature {
  icon: 'assistant' | 'ai' | 'drone' | 'tools';
  label: string;
  highlighted?: boolean;
}

export const TECNOLOGIA_FEATURES: TecnologiaFeature[] = [
  {
    icon: 'assistant',
    label: 'Asistente virtual de atención de servicio',
  },
  {
    icon: 'ai',
    label: 'Desarrollo de aplicaciones con IA que brindan seguridad a los profesionales',
  },
  {
    icon: 'drone',
    label: 'Inspección técnica avanzada. Trazabilidad absoluta mediante drones y sensores térmicos.',
    highlighted: true,
  },
  {
    icon: 'tools',
    label: 'Flexibilidad en la construcción de herramientas para garantizar eficiencias',
  },
];
