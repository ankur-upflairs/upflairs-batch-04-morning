import React, { useEffect,useState } from 'react'
// import { posts } from '../data'
import Blog from '../components/Blog'
import { Outlet } from 'react-router'
import axios from 'axios'
let url='http://localhost:3000/'
function Blogs() {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    async function getData(){
     let res= await axios.get(url+'post')
     console.log(res.data)
     setPosts(res.data.posts)
    }
    getData()
  },[])

  return (
    <>
      <Outlet/>
     <div className='row row-cols-3 justify-content-center gap-5 mt-4'>
      {posts.map((post,i)=>{
        return <Blog {...post} key={post.id}/>
      })
      }
    </div>
    </>
   
  )
}

export default Blogs
