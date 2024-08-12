const express=require('express')
let router=express.Router()
let {getAllPost, getSinglePost, createPost, updatePost, deletePost}=require('../controllers/postController.js')

router.get('/', getAllPost)
//to get single post
router.get('/:id',getSinglePost)
//to a create a post
router.post('/',createPost )
router.put('/:id',updatePost)
router.delete('/:id', deletePost)


module.exports=router