// Service worker : garde l'appli disponible hors connexion.
const CACHE = "500mots-e731250cc3";
const FILES = [
  "./", "index.html", "manifest.webmanifest",
  "icons/apple-touch-icon.png", "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/favicon-32.png",
  "fonts/amiri-quran.woff2", "fonts/alegreya.woff2", "fonts/alegreya-sans-regular.woff2", "fonts/alegreya-sans-medium.woff2", "fonts/alegreya-sans-bold.woff2"
];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return; // récitations, liens externes : réseau direct
  e.respondWith(
    caches.open(CACHE).then(async cache => {
      const hit = await cache.match(req, {ignoreSearch: true});
      const net = fetch(req).then(res => { if (res && res.ok) cache.put(req, res.clone()); return res; }).catch(() => null);
      if (hit) { e.waitUntil(net); return hit; }
      const res = await net;
      return res || (req.mode === "navigate" ? cache.match("index.html") : Response.error());
    })
  );
});
