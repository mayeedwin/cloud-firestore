// working workbox service worker

importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js');

if (workbox) {
  console.log('[ PWA Fire Bundle ] Hello from Workbox');
  [

  ],

  // "check updates from newtwork first"
workbox.routing.registerRoute(
        new RegExp('/'),
        new workbox.strategies.NetworkFirst(
        {
          cacheName: 'app',
          plugins: [
            new workbox.cacheableResponse.Plugin({
              statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
              maxAgeSeconds: 60 * 60 * 24 * 1,
            }),
          ],
        }
        )
      );

// Cache the Google Fonts webfont files with a cache first strategy for 1 year.
workbox.routing.registerRoute(
        /^https:\/\/fonts\.gstatic\.com/,
        new workbox.strategies.CacheFirst({
          cacheName: 'google-fonts-webfonts',
          plugins: [
            new workbox.cacheableResponse.Plugin({
              statuses: [0, 200],
            }),
            new workbox.expiration.Plugin({
              maxAgeSeconds: 60 * 60 * 24 * 365,
            }),
          ],
        })
      ); 

  /* Install a new service worker and have it update 
  and control a web page as soon as possible
  */
  
  workbox.core.skipWaiting();
  workbox.core.clientsClaim();
} 

else {
  console.log(`Boo! Workbox didn't load 😬`);
}

