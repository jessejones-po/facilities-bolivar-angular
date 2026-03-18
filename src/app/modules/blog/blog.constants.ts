/**
 * Constantes de contenido del módulo Blog.
 * Editar aquí para actualizar la interfaz sin modificar componentes.
 * Al añadir objetos a FAQ_DATA o BLOG_POSTS, la UI se actualiza automáticamente.
 */

/**
 * Ruta base para imágenes del blog.
 * Colocar los archivos en: public/assets/blog/
 * En cada post solo especificar el nombre: image: 'mi-imagen.jpg'
 */
export const BLOG_IMAGES_BASE = 'assets/blog/';

export const FAQ_DATA = [
  {
    id: 1,
    question: '¿Qué es Facility Management?',
    answer:
      'Es la gestión integral de infraestructura, servicios y operación de los espacios de trabajo para asegurar eficiencia, seguridad y continuidad del negocio.',
    isOpen: true,
  },
  {
    id: 2,
    question: '¿Facilities Bolívar reemplaza a mis proveedores actuales?',
    answer:
      'No necesariamente. Integramos y coordinamos los servicios existentes para mejorar control, eficiencia y resultados.',
    isOpen: false,
  },
  {
    id: 3,
    question: '¿Puedo empezar con una sola línea de servicio?',
    answer:
      'Sí. Podemos iniciar con una necesidad específica y evolucionar hacia un modelo integral según los objetivos de la organización.',
    isOpen: false,
  },
  {
    id: 4,
    question: '¿Qué tipo de empresas necesitan Facility Management?',
    answer:
      'Organizaciones de cualquier tamaño que busquen optimizar la operación de sus instalaciones: edificios corporativos, centros comerciales, industrias, hospitales y entidades del sector público.',
    isOpen: false,
  },
  {
    id: 5,
    question: '¿Cómo impacta el Facility Management en los costos?',
    answer:
      'Mediante indicadores operativos, niveles de servicio (SLA) y herramientas tecnológicas que permiten monitoreo y mejora continua.',
    isOpen: false,
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: 'Eficiencia Energética: Hoja de ruta para reducir el OPEX.',
    excerpt:
      'Estrategias prácticas para optimizar el consumo energético en edificios corporativos.',
    slug: 'eficiencia-energetica-hoja-ruta-opex',
    image: 'https://picsum.photos/seed/blog1/600/360', // O 'eficiencia-energetica.jpg' en public/assets/blog/
    publishedAt: '2025-01-15',
  },
  {
    id: 2,
    title: 'Nuevos estándares ESG para edificios corporativos.',
    excerpt:
      'Cómo adaptar tu infraestructura a los requisitos ambientales, sociales y de gobernanza.',
    slug: 'estandares-esg-edificios-corporativos',
    image: 'https://picsum.photos/seed/blog2/600/360',
    publishedAt: '2025-01-10',
  },
  {
    id: 3,
    title: 'Gestión de activos: de reactivo a predictivo.',
    excerpt:
      'La evolución hacia el mantenimiento predictivo y su impacto en la continuidad operativa.',
    slug: 'gestion-activos-predictivo',
    image: 'https://picsum.photos/seed/blog3/600/360',
    publishedAt: '2025-01-05',
  },
];

/** Textos de la sección Blog (badge, título) */
export const BLOG_SECTION = {
  badge: 'Actualidad',
  titlePrefix: 'Conocimiento en',
  titleHighlight: 'Facility Management',
};
