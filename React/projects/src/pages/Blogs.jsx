import React from 'react'
import { posts } from '../data'
import Blog from '../components/Blog'
import { Outlet } from 'react-router'

function Blogs() {
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
