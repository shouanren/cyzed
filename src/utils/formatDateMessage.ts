/**
 * Replace {day}, {month}, {year} placeholders in a message template
 * using the provided locale to localize the month name.
 *
 * Example:
 * const d = new Date(2025, 9, 25);
 * const msg = 'Última atualização: {day} de {month} de {year}';
 * formatDateMessage(msg, d, 'pt-BR'); // "Última atualização: 25 de outubro de 2025"
 */
export function formatDateMessage(
  template: string,
  date: Date,
  locale = 'en'
): string {
  if (!template || !(date instanceof Date) || Number.isNaN(date.getTime())) {
    return template;
  }

  const day = date.getDate();
  const year = date.getFullYear();
  const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);

  return template
    .replace(/\{day\}/g, String(day))
    .replace(/\{month\}/g, month)
    .replace(/\{year\}/g, String(year));
}

export default formatDateMessage;
