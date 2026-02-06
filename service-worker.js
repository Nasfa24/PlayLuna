const CACHE_NAME = 'luna-game-v1';
const urlsToCache = [
  './index.html',
  './werewolf.html',
  './ulartangga.html',
  './manifest.json',
  './icon.svg' 
];

// ... (kode bawahnya sama persis seperti sebelumnya) ...
// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});