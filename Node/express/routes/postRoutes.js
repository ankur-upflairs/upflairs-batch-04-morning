const express=require('express')
let router=express.Router()


router.get('/', (req, res) => {
    //get all posts from data base and send them
    res.json({ posts: 'this is all posts' })
})
//to get single post
router.get('/:id', (req, res) => {
    let params=req.params
    //get single post from data base and send them

    res.json({ message: `this is post with id ${params.id}`})
})
//to a create a post
router.post('/', (req, res) => {
    //extract data and save it to db
    res.json({ message: 'post added' })
})
router.put('/:id', (req, res) => {
    let {id}=req.params
    //extract data and update it to db  
    res.json({ message: 'post updated' })
})
router.delete('/:id', (req, res) => {
    let {id}=req.params
    //to delete the data
    res.json({ message: 'post deleted' })
})


module.exports=router