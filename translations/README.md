# CYZΞD Community Translations

This is an ongoing progress

## Supported languages goal (27)

- Arabic (arb)
- Bengali (bn)
- German (de)
- English (en)
- Spanish (es)
- Persian (fa)
- French (fr)
- Gujarati (gu)
- Hindi (hi)
- Indonesian (id)
- Italian (it)
- Japanese (ja)
- Korean (ko)
- Marathi (mr)
- Portuguese (pt)
- Russian (ru)
- Swedish (sv)
- Tamil (ta)
- Telugu (te)
- Thai (th)
- Turkish (tr)
- Ukrainian (uk)
- Vietnamese (vi)
- Chinese (zh)
- Chinese (Hong Kong) (zh-hk)
- Yoruba (yo)

## Editing and Adding Languages

Edit a language file in one of the following locations (this repo supports JSON translations and an optional TSX-based format):

- JSON files (current canonical format):

```sh
/messages/{LANGUAGE}.json
```

- Optional TSX modules (for React/TypeScript-based translations):

```sh
/messages/tsx/{LANGUAGE}.tsx
```

When adding or editing translations:
- Preserve placeholders like `{_}` exactly as they appear in other files.
- Keep the top-level `$schema` key if present for JSON-based files.
- Validate JSON files after editing (e.g., with a JSON linter or `node -e "JSON.parse(require('fs').readFileSync('messages/pt.json','utf8'))"`).

Create a merge request to submit your changes.

## Community & Contacts

Visit **cyzed.com** to join the Discord community and find other contacts.
