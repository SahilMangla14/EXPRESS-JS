const express = require('express')
const app = express()

let {people} = require('./data');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({extended : false}))

// get method - default method that the browser performs
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people})
})


// post method
app.post('/login',(req,res)=>{
    console.log(req.body);
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:true,person:name})
    }
    res.status(201).json({success: true, person:name})
})


// parse json
app.use(express.json()) // need to use inorder to get the data submitted by the user in javascript example
app.post('/api/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'please provide name value'})
    }
    res.status(201).json({Success:true,person:name})
})


app.post('/api/postman/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'please provide name value'})
    }
    res.status(200).json({Success:true, data:[...people,name]})
})


app.put('/api/people/:id',(req,res)=>{
    const {id} = req.params
    const {name} = req.body

    const person = people.find((person)=>{
        return person.id === Number(id)
    }) 

    if(!person){
        return res.status(404).json({success:false,msg:`no person with id : ${id}`})
    }

    const newPeople = people.map((person)=>{
        if(person.id===Number(id)){
            person.name = name;
        }
        return person
    })

    res.status(200).json({success:true, data : newPeople})
})

app.delete('/api/people/:id',(req,res)=>{
    const person = people.find((person)=>{
        return person.id === Number(req.params.id)
    })

    if(!person){
        res.status(404).json({success:false, msg:`no person with id : ${req.params.id}`})
    }

    const newPeople = people.filter((person)=>{
        if(person.id!==(Number)(req.params.id)) return person
    })

    res.status(200).json({success:true, data: newPeople})  // return likhne ki zarurat nahi hoti khud hi return hota hai but agar if conditions hai unme bhi hum response bhej rahe toh return likhna padega
})

app.listen(5000,()=>{
    console.log('Server is listening on port 5000...')
})



// app.use applies middleware function to all the methods

// express.static is a built-in middleware function
// The express.static() function is a built-in middleware function in Express. It serves static files and is based on serve-static.
// Syntax:
// express.static(root, [options])
// Parameters: The root parameter describes the root directory from which to serve static assets. Return Value: It returns an Object.

// express.urlencoded is a built-in middleware function
// The express.urlencoded() function is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
// Syntax: 
// express.urlencoded( [options] )
// Parameter: The options parameter contains various property like extended, inflate, limit, verify etc.
// Return Value: It returns an Object.
// basically jab bhi user ne jo information submit ki hai, agar vo chahiye toh express.urlencoded middleware function ka use karna hai


