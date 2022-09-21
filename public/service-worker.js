const CACHE_NAME = "my-pwa-cache";

const urlsToCache = [
  "/",
  "static/js/bundle.js",
  "https://api.dictionaryapi.dev/api/v2/entries/en/",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Abre um cache e armazena nossos arquivos em cache
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (!cacheWhitelist.includes(key)) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
