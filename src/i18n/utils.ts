import es from './es.json';
import en from './en.json';

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'en';

export const ui = {
  es,
  en,
} as const;

export type Language = keyof typeof ui;

/**
 * Obtiene las traducciones según el idioma actual
 * @param lang - Código del idioma ('es' | 'en')
 * @returns Objeto con todas las traducciones
 */
export function getI18N(lang: Language = defaultLang) {
  return ui[lang] || ui[defaultLang];
}
