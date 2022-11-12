// const http = require('http')
// const { readFileSync } = require('fs')

// const homePage = readFileSync('./navbar-app/index.html')

// const server = http.createServer((req,res)=>{
//     const url = req.url
//     if(url==='/'){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write(homePage)
//         res.end()
//     }
//     else if(url==='/about'){
//         res.writeHead(200,{'content-type':'text/html'})
//         res.write("<h1>About Page</h1")
//         res.end()
//     }
//     else{
//         res.writeHead(404,{'content-type':'text/html'})
//         res.write('<h1>Page Not Found</h1>')
//         res.end()
//     }
// })

// server.listen(5000)

// Here we don't get the desired result
// if we do console.log(url)
// we will see that apart from index.html it is asking for other url's also becuase we use those url's in index.html file
// but while creating the server, we are providing status code 404 for anything other than home page and about page


// Correct version

const http = require('http')

const{readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req,res)=>{
    const url = req.url
    console.log(url)
    
    // home page
    if(url==='/'){
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write(homePage)
        res.end()
    }
    // about page
    else if(url==='/about'){
        res.writeHead(200,{'content-type' : 'text/html'})
        res.write('<h1>About Page</h1')
        res.end()
    }
    // styles
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }
    // image/logo
    else if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    else if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404, { 'content-type': 'text/html' })
        res.write('<h1>page not found</h1>')
        res.end()
    }
})

server.listen(5000)

// But in the above method, we have to write a lot of things
// that is why, we use express js
// We will see it in next tutorial