self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("cube-app").then((cache) => {
      return cache.addAll([
        "/full_project_pwa.html",
        "/manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
