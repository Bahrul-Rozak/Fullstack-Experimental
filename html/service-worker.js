self.addEventListener('install', function(event){
       event.waitUntill(
              caches.open('my-cache-v1').then(function(cache){
                     return cache.addAll([
                            '/',
                            '/sw.html'
                     ])
              })
       )
})

self.addEventListener('fetch', function(event){
       event.respondwith(
              caches.match(event.request).then(function(response){
                     return response || fetch(event.request)
              })
       )
})