const express = require('express')
const router = express.Router()

let {people} = require('../data');

router.get('/',(req,res)=>{
    res.status(200).json({success:true,data:people})
})

router.post('/',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'please provide name value'})
    }
    res.status(201).json({Success:true,person:name})
})


router.post('/people',(req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:'please provide name value'})
    }
    res.status(200).json({Success:true, data:[...people,name]})
})


router.put('/:id',(req,res)=>{
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

router.delete('/:id',(req,res)=>{
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

module.exports = router