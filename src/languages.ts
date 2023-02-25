export const LANGUAGE_CODES = ['en', 'fr'] as const;

export type LanguageCode = (typeof LANGUAGE_CODES)[number];
