const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/posts') {
        // console.log(req.headers)
        res.setHeader('Content-Type','text/html')
        res.writeHead(200)
        res.write('hello this is my page')
        res.end()
    }
    else if(req.url=='/home'){        
        res.end('this is home page')

    }
})

server.listen(3000, () => {
    console.log('server is running on port 3000')
})

