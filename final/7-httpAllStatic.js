const express = require('express')
const app = express()
// console.log(express)
// console.log(app)

// setup static and middleware
app.use(express.static('./public')) // bina invoke waala

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))  // here we need to provide the absolute path

        // Two methods
        // 1) adding to static assets
        // 2) SSR -> server side rendering
        // Let us see 1) for now
// })

// Isn't index.html a static site
// Answer is yes
// So we should also put it into public folder
// By defalut the root entry will be index.html



app.all('*',(req,res)=>{
    res.status(404).send('resource not found')
})


app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
})


// app.use()
// The app.use() function is used to mount the specified middleware function(s) at the path which is being specified. It is mostly used to set up middleware for your application.

// Syntax:

// app.use(path, callback)
// Parameters:

// path: It is the path for which the middleware function is being called. It can be a string representing a path or path pattern or regular expression pattern to match the paths.
// callback: It is a middleware function or a series/array of middleware functions.