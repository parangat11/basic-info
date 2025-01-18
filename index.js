let http = require('http')
let fs = require('fs')

http.createServer((req, res) => {
    const str = req.url.slice(1)
    switch(str) {
        case '':
            fs.readFile('index.html', (err, data) => {
                res.writeHead(200, {'Content-type': 'text/html'})
                res.write(data)
                return res.end()
            })
            break;
        case 'about':
            fs.readFile('about.html', (err, data) => {
                res.writeHead(200, {'Content-type': 'text/html'})
                res.write(data)
                return res.end()
            })
            break;
        case 'contact-me':
            fs.readFile('contact-me.html', (err, data) => {
                res.writeHead(200, {'Content-type': 'text/html'})
                res.write(data)
                return res.end()
            })
            break;
        default:
            fs.readFile('404.html', (err, data) => {
                res.writeHead(200, {'Content-type': 'text/html'})
                res.write(data)
                return res.end()
            })
    }
}).listen(8080)