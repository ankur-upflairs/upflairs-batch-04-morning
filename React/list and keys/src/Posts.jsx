import React from 'react'
import Post from './Post'
import { posts } from './postdata'



function Posts() {
    return (
      <div>
        {posts.map((v,i)=>{
            return <Post {...v} key={v.id} />
        })}
      </div>
    )
  }
  


// function Posts() {
//   return (
//     <div>
//       <Post {...posts[0]}/>
//       <Post {...posts[1]}/>

//     </div>
//   )
// }

export default Posts
