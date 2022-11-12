const express = require('express')
const app = express()
const {products} = require('./data.js')
app.get('/',(req,res)=>{
    // res.json([{name:'john'},{name:'susan'}])
    res.json(products)
    // We can not send two json responses
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})

// res.json() basics
// Express response objects have a json() function. The res.json() function takes a single parameter, an object obj, serializes it to JSON, and sends it in the HTTP response body.

// Express also sets the content-type header to application/json. Most HTTP clients, like Axios, handle automatically transforming JSON strings into JavaScript objects using JSON.parse() when the content type is application/json.

// The res.json() uses JSON.stringify() under the hood to serialize objects into JSON. You can configure the arguments that Express passes to JSON.stringify() using app.use(). For example, to make Express pretty print JSON, you can use app.set('json spaces', 2) as shown below.