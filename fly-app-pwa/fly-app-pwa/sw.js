const CACHE_NAME = 'fly-app-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './images/fly1.jpg','./images/fly2.jpg','./images/fly3.jpg','./images/fly4.jpg',
  './images/fly5.jpg','./images/fly6.jpg','./images/fly7.jpg','./images/fly8.jpg',
  './images/fly9.jpg','./images/fly10.jpg','./images/fly11.jpg','./images/fly12.jpg'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
