self.addEventListener("install", () => {
  console.log("Silent Drop installed");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
