self.addEventListener('install', function (event) {
  console.log('[Serwice worker] Installing ...', event)
  event.waitUntil(
    caches.open('static').then(cache => {
      console.log('precahing')
      cache.add('./index.html')
      cache.add('/')
    })
  )
})

self.addEventListener('activate', function (event) {
  console.log('[Serwice worker] Activating ...', event)
  return self.clients.claim()
})

self.addEventListener('fetch', function (event) {
  console.log('[Serwice worker] Fetching something ...', event)
  event.respondWith(
    cache.match(event.request).then(response => {
      if (response) {
        return response
      } else {
        fetch(event.request)
      }
    })
  )
})
