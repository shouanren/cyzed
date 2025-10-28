import type { Locale } from './../paraglide/runtime';
export function getTextDir(locale: Locale) {
  // Extend if you support more RTL languages
  return [
    'ar', // Arabic
    'he', // Hebrew
    'fa', // Persian (Farsi)
    'ur', // Urdu
    'ps', // Pashto
    'syr', // Syriac
    'dv', // Divehi/Maldivian
    'yi', // Yiddish
    'ku', // Kurdish (Sorani)
    'ug', // Uighur
    'iw', // Hebrew (old code, replaced by "he")
    'arc', // Aramaic
    'ks', // Kashmiri
    'sd', // Sindhi
    'nqo', // N'Ko
    'sam', // Samaritan
  ].includes(locale)
    ? 'rtl'
    : 'ltr';
}
