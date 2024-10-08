const express = require('express')

const app = express()
const postRoutes=require('./routes/postRoutes.js')
const userRoutes=require('./routes/userRoutes.js')
const mongoose=require('mongoose')
const cors=require('cors')
const path=require('path')

// app.use(cors({
//     origin:'*',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type']
// }))
app.use(cors())
mongoose.connect('mongodb://localhost:27017/blog')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'static')))

// app.use('/post',(req, res, next) => {
//     console.log(req.ip,req.method,req.path)
//     next()
// })

app.use('/post',postRoutes)
app.use('/user',userRoutes)



app.listen(3000, '', () => {
    console.log(`server is running on port 3000...`)
})






// app.get('/post', (req, res) => {
//     //get all posts from data base and send them
//     res.json({ posts: 'this is all posts' })
// })
// //to get single post
// app.get('/post/:id', (req, res) => {
//     let params=req.params
//     //get single post from data base and send them

//     res.json({ message: `this is post with id ${params.id}`})
// })
// //to a create a post
// app.post('/post', (req, res) => {
//     //extract data and save it to db
//     res.json({ message: 'post added' })
// })
// app.put('/post/:id', (req, res) => {
//     let {id}=req.params
//     //extract data and update it to db  
//     res.json({ message: 'post updated' })
// })
// app.delete('/post/:id', (req, res) => {
//     let {id}=req.params
//     //to delete the data
//     res.json({ message: 'post deleted' })
// })

// app.listen(3000, '', () => {
//     console.log(`server is running on port 3000...`)
// })


// app.get('/post', (req, res) => {
//     res.send('this is all posts')
// })
// app.post('/post', (req, res) => {
//     res.send('post added')
// })
// app.put('/post', (req, res) => {
//     res.send('post updated')
// })
// app.delete('/post', (req, res) => {
//     res.send('post deleted')
// })

// app.listen(3000, '', () => {
//     console.log(`server is running on port 3000...`)
// })
