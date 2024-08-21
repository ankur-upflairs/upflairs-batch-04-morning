import React ,{useState,useEffect} from 'react'
import { posts } from '../data'
import { useParams } from 'react-router'
import axios from 'axios'

function SingleBlog() {
  const [post,setPost]=useState([])
    let {id}=useParams()
    // let post=posts.find((v,i)=>v.id==params.id)
    // let {id,title,body,author,image,date}=post
    useEffect(()=>{
      async function getData(){
       let res= await axios.get('http://localhost:3000/post/'+id)
       console.log(res.data)
       setPost(res.data.post)
      }
      getData()
    },[])
  return (
    <div>
      <img src={post.image} alt="" />
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>created by {post.user}</p>
      <p>created at {post.createdAt}</p>
    </div>
  )
}

export default SingleBlog
