const express = require('express')
const app = express()

const {products} = require('./data.js')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    //res.json(products) // If we want to send back the complete products data with description
    // If we want to send back products data without response
    const newProducts = products.map((product)=>{
        const {id,name,image} = product;
        return {id,name,image};
    })

    res.json(newProducts)
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})