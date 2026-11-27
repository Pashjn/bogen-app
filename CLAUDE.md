# Archery Timer (Repo: bogen-app) – Hinweise für Claude

- Reine statische Web-App (index.html, sw.js, manifest, icons, version.json), gehostet über
  GitHub Pages auf https://pashjn.github.io/bogen-app/ (Branch `main`, Root).
- **App-Texte auf Englisch.** Kommunikation mit dem Nutzer auf Deutsch. Nutzer ist kein
  Entwickler – einfach erklären.
- Regeln sind fest nach World Archery, nicht vom Nutzer einstellbar. Keine Passen-/Satzzählung,
  kein AB/CD. Nur: Disziplin wählen, Start / Shoot-off, Signale + Timer, „Again“.

## Versionen
Angezeigte Version: `alpha v1.0`, dann `alpha v1.1`, `alpha v1.2`, … (Nutzer-Vorgabe).
Intern gibt es zusätzlich eine ganzzahlige Build-Nummer für das Auto-Update.

Bei JEDER Änderung, die aufs iPhone soll:
1. index.html: `APP_VERSION` (Build) +1 und `APP_LABEL` auf die nächste Version (v1.1 …)
2. version.json: `version` = neuer Build, `label` = neues Label
3. sw.js: `VERSION` = 'b<Build>'

Die App vergleicht beim Start `version.json.version` mit `APP_VERSION` und lädt sich neu,
wenn der Server höher ist (nie während einer laufenden Runde).

## Sprachen
App-Texte in EN / DE / FR über das `I18N`-Objekt in index.html. Neue Texte immer in allen
drei Sprachen anlegen (Schlüssel per `T('key')` oder `data-i18n="key"`).

## Später (erst wenn der Nutzer ausdrücklich OK sagt!)
Veröffentlichung für Vereinsmitglieder: App auf https://www.arrowclub.lu/ verlinken, z. B. mit
QR-Code, evtl. eigene Adresse wie timer.arrowclub.lu (GitHub-Pages-Custom-Domain).
Vorher NICHTS davon umsetzen oder auf der Website ändern.
