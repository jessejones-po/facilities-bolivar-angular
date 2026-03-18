export interface Certificacion {
  src: string;
  alt: string;
  label?: string;
  variant?: 'icontec' | 'ccs' | 'ruc';
}

export interface Testimonio {
  quote: string;
  author: string;
  role: string;
  companyLogo: string;
  companyName: string;
}

export const CERTIFICACIONES: Certificacion[] = [
  {
    src: 'assets/Iso9001.png',
    alt: 'ICONTEC ISO 9001',
    label: 'ISO 9001',
    variant: 'icontec',
  },
  {
    src: 'assets/Iso14001.png',
    alt: 'ICONTEC ISO 14001',
    label: 'ISO 14001',
    variant: 'icontec',
  },
  {
    src: 'assets/Iso45001.png',
    alt: 'ICONTEC ISO 45001',
    label: 'ISO 45001',
    variant: 'icontec',
  },
  {
    src: 'assets/Ccs.png',
    alt: 'CCS - Consejo Colombiano de Seguridad',
    label: 'CCS',
    variant: 'ccs',
  },
];

export const TESTIMONIOS: Testimonio[] = [
  {
    quote:
      'Facilities Bolívar es un aliado clave para la continuidad de nuestro negocio. Su cercanía, conocimiento y capacidad analítica nos permiten garantizar que la infraestructura funcione de manera óptima para nuestros equipos y clientes, incluso ante contingencias.',
    author: 'Mireya Moreno',
    role: 'VP de Servicios Administrativos',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Davivienda_logo.svg/200px-Davivienda_logo.svg.png',
    companyName: 'Davivienda',
  },
  {
    quote:
      'La experticia de Facilities Bolívar en gestión de infraestructura nos ha permitido enfocarnos en nuestro core business. Su compromiso con la calidad y el cumplimiento normativo es ejemplar.',
    author: 'Carlos Rodríguez',
    role: 'Director de Operaciones',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Compensar_logo.svg/200px-Compensar_logo.svg.png',
    companyName: 'Compensar',
  },
  {
    quote:
      'Trabajar con Facilities Bolívar ha transformado nuestra forma de gestionar los espacios. Su enfoque en sostenibilidad y eficiencia operativa alinea perfectamente con nuestros valores corporativos.',
    author: 'Ana Martínez',
    role: 'Gerente de Facility Management',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Davivienda_logo.svg/200px-Davivienda_logo.svg.png',
    companyName: 'Empresa Líder',
  },
];
