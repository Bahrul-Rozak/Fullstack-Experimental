const http = require('http')

http.createServer((req, res) =>{
       if (req.url === '/events'){
              res.writeHead(200, {
                     'Content-Type' : 'text/event-stream',
                     'Cache-Control' : 'no-cache',
                     'Connection' : 'keep-alive'
              })

              setInterval(()=>{
                     res.write(`data: ${new Date().toLocaleTimeString()} \n\n`)
              }, 5000)
       } else{
              res.writeHead(404)
              res.end()
       }
}).listen(3000)

console.log(`server berjalan di http://localhost:3000`);