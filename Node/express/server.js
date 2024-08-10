const express = require('express')

const app = express()


app.get('/post', (req, res) => {
    res.json({ posts: 'this is all posts' })
})
app.get('/post/:id', (req, res) => {
    let params=req.params
    res.json({ message: `this is post with id ${params.id}`})
})
app.post('/post', (req, res) => {
    res.json({ message: 'post added' })
})
app.put('/post/:id', (req, res) => {
    let {id}=req.params
    res.json({ message: 'post updated' })
})
app.delete('/post/:id', (req, res) => {
    let {id}=req.params
    res.json({ message: 'post deleted' })
})

app.listen(3000, '', () => {
    console.log(`server is running on port 3000...`)
})


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
