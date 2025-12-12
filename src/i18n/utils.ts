import es from './es.json';
import en from './en.json';

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es,
  en,
} as const;

/**
 * Obtiene las traducciones según el idioma actual
 * @param lang - Código del idioma ('es' | 'en')
 * @returns Objeto con todas las traducciones
 */
export function getI18N(lang: keyof typeof ui = defaultLang) {
  return ui[lang] || ui[defaultLang];
}

/**
 * Obtiene el idioma desde la URL actual
 * @param url - URL de Astro (Astro.url)
 * @returns Código del idioma
 */
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/**
 * Genera una ruta localizada
 * @param lang - Código del idioma
 * @param path - Ruta sin idioma (ej: '/', '/about')
 * @returns Ruta con idioma (ej: '/', '/en/', '/en/about')
 */
export function getLocalizedPath(lang: keyof typeof ui, path: string = '/') {
  // Si es el idioma por defecto (español), no agregar prefijo
  if (lang === defaultLang) return path;

  // Para otros idiomas, agregar prefijo
  return `/${lang}${path}`;
}
