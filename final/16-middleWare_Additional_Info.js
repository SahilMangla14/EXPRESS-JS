const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')
const morgan = require('morgan')
app.use([logger , authorize]) // These will be called in order

// req => middleware => res

// 1.) use vs route
// 2.) options - our own / express / third party

// app.use([logger,authorize])
// app.use(express.static('./public'))
app.use(morgan('tiny'))

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
    console.log(req.user) // req.user is undefined as user is not a property of req but when we called middleware funcion it sets req.user to be object with some value. That is what it prints here
    res.send('Items');
})


app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})