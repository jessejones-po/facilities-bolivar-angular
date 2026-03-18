export const COTIZACION_FORM = {
  title:
    '¿Listo para generar eficiencia en la gestión de su infraestructura? Hablemos y descubra cómo podemos ayudarle.',
  cardIntro:
    'Déjenos sus datos. Un asesor experto le llamará. Todos los campos marcados con (*) son obligatorios.',
  fields: {
    nombreCompleto: { label: 'Nombre completo', placeholder: 'Ej: Carolina García' },
    celular: { label: 'Celular de contacto', placeholder: 'Ej: 322 7890989' },
    correo: { label: 'Correo electrónico', placeholder: 'Ej: carolina@yopmail.com' },
    motivo: { label: '¿Cuál es el motivo de la cotización?', placeholder: 'Elija una opción' },
  },
  checkbox: {
    prefix: 'Autorizo la utilización de mis datos personales con ',
    link: 'fines comerciales.',
    linkHref: '/politicas-privacidad#fines-comerciales',
  },
  submit: 'Enviar',
  back: 'Regresar',
  successMessage: '¡Solicitud recibida! Nos contactaremos pronto.',
  errorMessage: 'Error de conexión. Verifique su internet e intente de nuevo.',
} as const;

export const MOTIVO_OPCIONES = [
  { value: '', label: 'Elija una opción' },
  { value: 'nosotros', label: 'Nosotros' },
  { value: 'soluciones', label: 'Soluciones' },
  { value: 'tecnologia', label: 'Tecnología' },
  { value: 'obras-civiles', label: 'Obras Civiles' },
  { value: 'reconocimiento', label: 'Reconocimiento' },
  { value: 'blog', label: 'Blog' },
  { value: 'otro', label: 'Otro' },
] as const;
