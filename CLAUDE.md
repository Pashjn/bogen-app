# Bogen-Timer – Hinweise für Claude

- Reine statische Web-App (index.html, sw.js, manifest, icons), gehostet über GitHub Pages
  auf https://pashjn.github.io/bogen-app/ (Branch `main`, Root).
- Sprache der App und der Kommunikation: Deutsch. Nutzer ist kein Entwickler – einfach erklären.
- Regeln sind fest nach World Archery, nicht vom Nutzer einstellbar. Keine Passen-/Satzzählung,
  kein AB/CD. Nur: Disziplin wählen, Start / Shoot-off, Signale + Timer, „Nochmal“.

## Bei JEDER Änderung Version erhöhen (sonst kommt das Update nicht aufs iPhone)
1. `APP_VERSION` in index.html (+ Text in `#versionLabel`)
2. `version.json`
3. `VERSION` in sw.js
