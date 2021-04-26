self.addEventListener('install', function (event) {
  console.log('[Serwice worker] Installing ...', event)
  event.waitUntil(
    caches.open('static').then(function (cache) {
      console.log('precahing')
      cache.add('./index.html')
      cache.add('./img/Logo.png')
      
      cache.add('/')
      console.log(cache)
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
    caches.match(event.request).then(response => {
      if (response) {
        return response
      } else {
        return fetch(event.request)
      }
    })
  )
})
