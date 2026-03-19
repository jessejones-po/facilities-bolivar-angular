export interface CapacidadItem {
  icon: 'paintbrush' | 'zap' | 'shield-check' | 'video' | 'hard-hat';
  label: string;
}

/** Etiquetas cortas alineadas al maestro Desktop-2 (franja inferior en mayúsculas). */
export const OBRAS_CIVILES_CAPACIDADES: CapacidadItem[] = [
  { icon: 'paintbrush', label: 'Adecuación' },
  { icon: 'zap', label: 'Hidrosanitarias' },
  { icon: 'shield-check', label: 'Certificaciones RETIE' },
  { icon: 'video', label: 'Seguridad' },
  { icon: 'hard-hat', label: 'Control de obra' },
];
