import { createSignal } from 'solid-js';
import './App.css';
import { m } from './paraglide/messages';
import { locales, getLocale, setLocale } from './paraglide/runtime';
import type { Locale } from './paraglide/runtime';
import { LastUpdated } from './components/last-updated';

function App() {
  const [open, setOpen] = createSignal(false);

  return (
    <>
      <h1>{m.community()}</h1>
      <div class="card">
        <p>
          {m.current_languages()}({locales.length})
        </p>
        <section class="grid grid-cols-4 gap-3">
          {locales.map((locale: Locale) =>
            locale === getLocale() ? (
              <button aria-readonly disabled>{` ${locale} `}</button>
            ) : (
              <button onClick={() => setLocale(locale)}>{locale}</button>
            ),
          )}
        </section>
        <hr />
        <p>Edit a language file in </p>
        <code>{`/messages/{{LANGUAGE}}.tsx`}</code>
        <p>if adding a new language add it in the settings file too:</p>
        <code>{`/project.inlang/settings.json`}</code>
        <p>create a merge request to merge your changes</p>
        <hr />
        <LastUpdated date={new Date(2025, 9, 28)} />
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
