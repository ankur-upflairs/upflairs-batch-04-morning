import React, { useEffect, useState } from 'react'


function UseEffect() {
    const [posts,setPosts]=useState({})
    const [postId,setPostId]=useState(1)
    useEffect(()=>{
        getData(postId)
    },[postId])
   
    async function getData(id=1){
        let res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        let data=await res.json()
        console.log(data)
        setPosts(data)
    }

  return (
    <div>
      <input type="number" onChange={(e)=>setPostId(e.target.value)}/>
      <div className="card container">
            <div className="card-header">
               <span className='fw-bold'> Title -</span> {posts.title}
            </div>
            <div className="card-body">
                <p className="card-text"><span className='fw-bold'> Post Text -  </span>{posts.body}</p>
                <p>posted by userId {posts.userId}</p>
            </div>
        </div>
    </div>
  )
}







// function UseEffect() {
//     //every hooks must start with use keyword
//     //hooks provide react features to functional component
//     //hooks must be inside of a component and top of component
//     //can't use hook condition and loop
//     const [posts,setPosts]=useState([])
//     const [postId,setPostId]=useState(1)
//     useEffect(()=>{
//         getData(postId)
//     },[postId])//dependency array
//     // if dependency array is blank then cb fn only runs once 
//     //if value in dependency array is changed than it re-runs cb fn
//     async function getData(id=1){
//         let res=await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         let data=await res.json()
//         console.log(data)
//         setPosts(data)
//     }

//   return (
//     <div>
//       <input type="number" onChange={(e)=>setPostId(e.target.value)}/>
//     </div>
//   )
// }

export default UseEffect
