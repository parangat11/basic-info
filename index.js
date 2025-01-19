const path = require('path')
let express = require('express')
let app = express()

app.get("/", (req, res, next) => {
    let options = {
        root: path.join(__dirname),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    }
    let fileName = "index.html"
    res.sendFile(fileName, options, err => {
        if(err) {
            next(err)
        }
        else {
            console.log('Sent: ', fileName)
        }
    })
})

app.get("/about", (req, res, next) => {
    let options = {
        root: path.join(__dirname),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    }
    let fileName = "about.html"
    res.sendFile(fileName, options, err => {
        if(err) {
            next(err)
        }
        else {
            console.log('Sent: ', fileName)
        }
    })
})

app.get("/contact-me", (req, res, next) => {
    let options = {
        root: path.join(__dirname),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    }
    let fileName = "contact-me.html"
    res.sendFile(fileName, options, err => {
        if(err) {
            next(err)
        }
        else {
            console.log('Sent: ', fileName)
        }
    })
})

app.get("/:name", (req, res, next) => {
    let options = {
        root: path.join(__dirname),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    }
    let fileName = "404.html"
    res.sendFile(fileName, options, err => {
        if(err) {
            next(err)
        }
        else {
            console.log('Sent: ', fileName)
        }
    })
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})