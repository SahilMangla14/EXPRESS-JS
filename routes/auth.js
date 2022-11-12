const express = require('express')
const router = express.Router()

// post method
router.post('/',(req,res)=>{
    console.log(req.body);
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:true,person:name})
    }
    res.status(201).json({success: true, person:name})
})