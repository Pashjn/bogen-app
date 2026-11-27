// Offline-Cache für den Bogen-Timer.
// Online: immer zuerst die neueste Version vom Server holen.
// Offline: gespeicherte Version verwenden.
// Bei Änderungen VERSION erhöhen.
const VERSION = 'v3';
const CACHE = 'bogen-timer-' + VERSION;
const FILES = ['./', './index.html', './manifest.webmanifest', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(FILES.map((f) => new Request(f, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      // Netz zuerst (am HTTP-Cache vorbei), mit Zeitlimit für schlechtes Netz
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), 3000);
      const res = await fetch(e.request, { cache: 'no-cache', signal: ctrl.signal });
      clearTimeout(timer);
      if (res && res.ok) cache.put(e.request, res.clone());
      return res;
    } catch (err) {
      const cached = await cache.match(e.request, { ignoreSearch: true });
      if (cached) return cached;
      if (e.request.mode === 'navigate') return cache.match('./index.html');
      throw err;
    }
  })());
});
