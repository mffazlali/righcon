const CACHE_STATIC_NAME = 'static-v1'
const CACHE_DYNAMIC_NAME = 'dynamic-v1'

self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event)
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function(cache) {
      cache.addAll([
        '/',
        '/offline',
        '/manifest.webmanifest',
        '/_next/static/chunks/main-app.js?v=1730654085153',
        '/medias/images/logo.svg',
      ])
    }),
  )
})

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event)
  caches.keys()
    .then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
          console.log('[Service Worker] Removing old cache.', key)
          return caches.delete(key)
        }
      }))
    })
  return self.clients.claim()
})

self.addEventListener('fetch', function(event) {
  console.log('[Service Worker] fetching Service Worker ...', event)
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response
        } else {
          return fetch(event.request)
            .then(function(res) {
              if (event.request.url.includes('main-app.js')) {
                caches.open(CACHE_STATIC_NAME).then(function(cache) {
                  cache.put('/main-app.js', res.clone())
                })
              }
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone())
                  return res
                })
                .catch(function(err) {
                })
            })
            .catch(function(err) {
              return caches.open(CACHE_STATIC_NAME)
                .then(function(cache) {
                  return cache.match('/offline')
                })
            })
        }
      })
      .catch(function(err){
        return caches.open(CACHE_STATIC_NAME)
          .then(function(cache) {
            if (event.request.url.includes('main-app')) {
              return cache.match('/main-app.js')
            }
          })
      })
  )
})
