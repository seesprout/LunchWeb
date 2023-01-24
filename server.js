const express = require('express')
const cors = require('cors')
const fs = require('fs')
const http = require('http')
const app = express()
const port_Start = 5080 //StartPage 서버 포트 번호
const port_map = 8080 //Map 서버 포트 번호
const server = http.createServer(app)

app.use(cors())

app.get('http://localhost:8080', (req, res)=>{
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

app.get('http://localhost:5080', (req, res)=>{
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

server.listen(port_map, ()=>{
    console.log(`서버가 실행됩니다. http://localhost:${port_map}`);
});

server.listen(port_Start, ()=>{
    console.log(`서버가 실행됩니다. http://localhost:${port_Start}`);
});