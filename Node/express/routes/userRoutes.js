const express=require('express')
const router=express.Router()

router.post('/signup',(req,res)=>{
    res.json({massage:"user created"})
})

router.post('/login',(req,res)=>{
    res.json({massage:"user authenticated"})
})

module.exports=router

