const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('user hit the server')
    res.end('home page') // if i don't write this then, on sending the request we do get the console msg but the borwser keeps loading
})

server.listen(5000)  // this 5000 is a port
// http has port
// 5000 is one of the port


// res.end() is necessary because it signals to the server that all the response headers and body have been sent
// and that the sever could consider this message complete. 
// It must be called on each response

