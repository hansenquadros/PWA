const staticHungryPanda = "hungry-panda-v1";
const assets = [
  "/",
  "/static/index.html",
  "/static/css/style.css",
  "/static/js/app.js",
  "/static/images/im1.jpg",
  "/static/images/im2.jpg",
  "/static/images/im3.jpg",
  "/static/images/im4.jpg",
  "/static/images/im5.jpg",
  "/static/images/im6.jpg",
  "/static/images/im7.jpg",
  "/static/images/im8.jpg",
  "/static/images/im9.jpg",
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticHungryPanda).then(cache => {
      cache.addAll(assets)
    })
  )
  console.log('Service worker installed');
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activated');
 });


self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      console.log("Fetch",fetchEvent);
      return res || fetch(fetchEvent.request)
    })
   )
 });
