import React from 'react'
import { posts } from '../data'
import { useParams } from 'react-router'

function SingleBlog() {
    let params=useParams()
    let post=posts.find((v,i)=>v.id==params.id)
    let {id,title,body,author,image,date}=post
  return (
    <div>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{body}</p>
      <p>created by {author}</p>
      <p>created at {date}</p>
    </div>
  )
}

export default SingleBlog
