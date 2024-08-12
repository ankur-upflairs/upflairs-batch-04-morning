
exports.getAllPost=(req, res) => {
    //get all posts from data base and send them
    res.json({ posts: 'this is all posts' })
}
exports.getSinglePost=(req, res) => {
    let params=req.params
    //get single post from data base and send them
    res.json({ message: `this is post with id ${params.id}`})
}
exports.createPost=(req, res) => {
    //extract data and save it to db
    res.json({ message: 'post added' })
}
exports.updatePost=(req, res) => {
    let {id}=req.params
    //extract data and update it to db  
    res.json({ message: 'post updated' })
}
exports.deletePost=(req, res) => {
    let {id}=req.params
    //to delete the data
    res.json({ message: 'post deleted' })
}

