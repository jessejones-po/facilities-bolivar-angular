import type { FaqItem, BlogPost } from './types';
import { FAQ_DATA, BLOG_POSTS, BLOG_IMAGES_BASE } from './blog.constants';

/**
 * Mapea FAQ_DATA a formato FaqItem para el acordeón.
 * Añadir ítems en blog.constants.ts actualiza la UI automáticamente.
 */
export function getFaqItems(): FaqItem[] {
  return FAQ_DATA.map((item) => ({
    id: `faq-${item.id}`,
    question: item.question,
    answer: item.answer,
  }));
}

/**
 * Obtiene el id del primer FAQ abierto por defecto.
 */
export function getInitialOpenFaqId(): string | null {
  const open = FAQ_DATA.find((item) => item.isOpen);
  return open ? `faq-${open.id}` : null;
}

/**
 * Construye la URL completa de la imagen.
 * Si image es solo el nombre del archivo (ej: 'eficiencia-energetica.jpg'), se concatena con BLOG_IMAGES_BASE.
 * Si es URL completa (http/https) o ruta absoluta (/), se usa tal cual.
 */
function buildImageUrl(image: string): string {
  if (image.startsWith('http') || image.startsWith('/')) {
    return image;
  }
  return `${BLOG_IMAGES_BASE}${image}`;
}

/**
 * Mapea BLOG_POSTS a formato BlogPost con ruta completa de imagen.
 * Solo especificar el nombre del archivo en blog.constants.ts (ej: image: 'eficiencia-energetica.jpg').
 */
export function getBlogPosts(): BlogPost[] {
  return BLOG_POSTS.map((post) => ({
    id: `post-${post.id}`,
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    imageUrl: buildImageUrl(post.image),
    publishedAt: post.publishedAt,
  }));
}
