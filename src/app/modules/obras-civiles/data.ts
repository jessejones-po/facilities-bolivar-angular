export interface CapacidadItem {
  icon: 'paintbrush' | 'zap' | 'shield-check' | 'video' | 'hard-hat';
  label: string;
}

export const OBRAS_CIVILES_CAPACIDADES: CapacidadItem[] = [
  { icon: 'paintbrush', label: 'Adecuación y acabados locativos.' },
  { icon: 'zap', label: 'Obras eléctricas y HVAC.' },
  { icon: 'shield-check', label: 'Certificaciones RETIE y pruebas normativas.' },
  { icon: 'video', label: 'Sistemas de seguridad y automatización.' },
  { icon: 'hard-hat', label: 'Control de obra y supervisión técnica.' },
];
