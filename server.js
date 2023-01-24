const express = require('express')
const cors = require('cors')
const fs = require('fs')
const http = require('http')
const app = express()
const port = 8080 //서버 포트 번호
const server = http.createServer(app)

app.use(cors())

app.use(express.static('public'));

app.get('/', (req, res)=>{
    fs.readFile('./Start.html', function(err, data) {
        if(err) {
          res.send('Error')
        } else {
          res.writeHead(200, {'Content-Type':'text/html'})
          res.write(data)
          res.end()
        }
      })
});

app.get('/map', (req, res)=>{
    fs.readFile('./map.html', function(err, data) {
        if(err) {
          res.send('Error')
        } else {
          res.writeHead(200, {'Content-Type':'text/html'})
          res.write(data)
          res.end()
        }
      })
});

server.listen(port, ()=>{
    console.log(`서버가 실행됩니다. http://localhost:${ port }`);
});