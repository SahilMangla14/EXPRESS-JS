// Middleware are functions that execute during the request to the server
// Each middleware function has access to request and response object

const express = require('express')
const app = express()

// req => middleware => res
// req,res and next should be in this order only
const logger = (req,res,next)=>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method,url,time)
    // either terminate it by writing
    // res.send("Testing dskfjaskdfasld")
    // or do
    next() // It will pass to next function
}

// here logger will have access to req,res and next
app.get('/',logger,(req,res)=>{
    // const method = req.method
    // const url = req.url
    // const time = new Date().getFullYear()
    // console.log(method,url,time)
    // Not a good method to do the same thing for differnt get functions
    // Instead we should make function for this
    res.send('Home')
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})