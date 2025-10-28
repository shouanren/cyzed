# CYZΞD Community Translations

This is an ongoing progress

## Supported languages goal (28)

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
- Portuguese (Brasil) (pt-br)
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

Edit or create translations in:

```sh
/messages/{LANGUAGE}.json
```

When adding or editing translations:

- Preserve placeholders like `{_}` exactly as they appear in other files.
- Keep the top-level `$schema` key if present for JSON-based files.
- Validate JSON files after editing (e.g., with a JSON linter or `node -e "JSON.parse(require('fs').readFileSync('messages/pt.json','utf8'))"`).
  To add a new language, register it in:

```sh
/project.inlang/settings.json
```

When finished, create a merge request to submit your changes.

## Community & Contacts

Visit **cyzed.com** to join the Discord community and find other contacts.
