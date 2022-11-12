// Middleware are functions that execute during the request to the server
// Each middleware function has access to request and response object

const express = require('express')
const app = express()
const logger = require('./logger')

app.use(logger) // will be called for each get below it
// app.use('/api',logger) 
app.get('/',(req,res)=>{
    res.send('Home')
})

app.get('/about',(req,res)=>{
    res.send('About');
})

app.get('/api/Products',(req,res)=>{
    res.send('Products');
})

app.get('/api/items',(req,res)=>{
    res.send('Items');
})


app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})