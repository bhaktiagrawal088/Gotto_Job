// service-worker.js

const CACHE_NAME = 'Gotto_Job';
const urlsToCache = [
  'Gotto_Job/',
  'Gotto_Job/index.html',
  'Gotto_Job/about.html',
  'Gotto_Job/contact.html',
  'Gotto_Job/job-details.html',
  'Gotto_Job/job-listings.html',
  'Gotto_Job/css/style.css', // adjust if your CSS path is different
  'Gotto_Job/js/bootstrap.min.js',
  'Gotto_Job/js/counter.js',
  'Gotto_Job/js/custom.js',
  'Gotto_Job/js/jquery.min.js',
  'Gotto_Job/js/owl.carousel.min.js',
  // Add image/font paths if needed
];

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch event
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
