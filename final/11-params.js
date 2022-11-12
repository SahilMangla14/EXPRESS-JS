const express = require('express')
const app = express()

const {products} = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href="/api/products">products</a>')
})

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
      const { id, name, image } = product
      return { id, name, image }
    })
  
    res.json(newProducts)
})

// app.get('/api/products/1',(req,res)=>{
//     const singleProduct = products.find((product)=> product.id===1)
//     res.json(singleProduct)
// })

// But not a good method to hardcode it
// Instead use route params


app.get('/api/products/:productID',(req,res)=>{
    // console.log(req)
    // When we write like :/variable name -> whatever the user provides here will be set as value of this variable and this goes in params object of req object
    console.log(req.params)
    const { productID } = req.params  // here we destructure that product id
    const singleProduct = products.find(
        (product) => product.id === Number(productID)
    )
    // If productId is not found we get undefined
    if(!singleProduct){
        res.status(404).send("Product does not exist")
    }
    // console.log(singleProduct)
    return res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send("hello world")
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})


// So, whenever you think of route parameters, think of them as placeholders.
// where user provides a data and then using requests and params, we can access that data and then setup some kind of logic
