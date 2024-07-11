if('serviceWorker' in navigator){
       navigator.serviceWorker.register('service-worker.js')
       .then(function(registration){
              console.log('Service worker terdaftar', registration)
       }).catch(function(error){
              console.log('gagal', error)
       })
}