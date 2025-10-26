import { createSignal } from 'solid-js';
import './App.css';
import { m } from './paraglide/messages';
import { locales, getLocale, setLocale } from './paraglide/runtime';
import type { Locale } from './paraglide/runtime';

function App() {
  const [open, setOpen] = createSignal(false);

  return (
    <>
      <h1>{m.community()}</h1>
      <div class="card">
        <p>
          {m.current_languages()}({locales.length})
        </p>
        {locales.map((locale: Locale) =>
          locale === getLocale() ? (
            ` ${locale} (current) `
          ) : (
            <button onClick={() => setLocale(locale)}>{locale}</button>
          ),
        )}
        <p>Edit a language file in </p>
        <code>{`/messages/{{LANGUAGE}}.tsx`}</code>
        <p>if adding a new language add it in the settings file too:</p>
        <code>cyzed/project.inlang/settings.json</code>
        <p>create a merge request to merge your changes</p>
      </div>
      <p class="read-the-docs">
        Visit{' '}
        <a href="https://cyzed.com" target="_blank">
          cyzed.com
        </a>{' '}
        to find discord community and other contacts.
      </p>
    </>
  );
}

export default App;
