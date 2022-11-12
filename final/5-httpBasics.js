const express = require('express')
const app = express() // we need to invoke it

app.get('/',(req,res)=>{
    console.log('user hit the resource')
    res.status(200).send('Home Page')
})

app.get('/about',(req,res)=>{
    res.status(200).send('About Page')
})

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000...')
})


// HTTP Methods
// app.get  -> Read Data
// app.post -> Insert Data
// app.put -> Update Data
// app.delete -> Delete Data

// app.all  -> this is for all the above 4 requests
// app.use
// app.listen

