# Simple Archery Timer (Repo: bogen-app) – Hinweise für Claude

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

## Website-Einbindung (vom Nutzer freigegeben)
Nur dezent im Footer von https://www.arrowclub.lu/: App-Symbol (icons/icon-192.png, ca. 48 px,
abgerundet) als drittes Logo neben FLTA und Ville de Dudelange in „Footer Widget 1“ (Astra),
Link direkt auf https://pashjn.github.io/bogen-app/ (neuer Tab), Alt-Text „Simple Archery Timer“.
Kein Hauptmenü, keine Startseite, kein Pop-up. Der Nutzer setzt das selbst in WordPress um
(kein WordPress-Passwort an Claude). Eigene Adresse wie timer.arrowclub.lu nur auf Nachfrage.
