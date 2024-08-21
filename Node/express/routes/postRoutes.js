const express=require('express')
let router=express.Router()
let {getAllPost, getSinglePost, createPost, updatePost, deletePost}=require('../controllers/postController.js')
let multer=require('multer')
const auth=require('../utils/auth.js')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'static/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now()
      cb(null,  uniqueSuffix + file.originalname)
    }
  })
  
  const image = multer({ storage: storage })


router.get('/', getAllPost)
//to get single post
router.get('/:id',getSinglePost)
//to a create a post
router.post('/',auth,image.single('image'),createPost )
router.put('/:id',auth,updatePost)
router.delete('/:id',auth, deletePost)

module.exports=router