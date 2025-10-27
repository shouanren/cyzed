"use client"; // Add this line at the very top

import React from 'react';
import formatDateMessage from '../utils/formatDateMessage';
// Import the message templates. JSON import works if `resolveJsonModule` is enabled in tsconfig.
import enMessages from '../../messages/en.json';
import ptBRMessages from '../../messages/pt-br.json';

export const LastUpdatedExample: React.FC = () => {
  const date = new Date(2025, 9, 25); // Oct 25, 2025 (months are 0-based)

  const enTemplate = enMessages.pp_last_updated || 'Last updated: {month} {day}, {year}';
  // For English prefer 'Month day, year' formatting
  const enMonth = new Intl.DateTimeFormat('en', { month: 'long' }).format(date);
  const enMsg = enTemplate
    .replace(/\{month\}/g, enMonth)
    .replace(/\{day\}/g, String(date.getDate()))
    .replace(/\{year\}/g, String(date.getFullYear()));

  const ptTemplate = ptBRMessages.pp_last_updated || 'Última atualização: {day} de {month} de {year}';
  const ptMsg = formatDateMessage(ptTemplate, date, 'pt-BR');

  return (
    <div>
      <h3>Last updated examples</h3>
      <p><strong>en:</strong> {enMsg}</p>
      <p><strong>pt-BR:</strong> {ptMsg}</p>
    </div>
  );
};

export default LastUpdatedExample;