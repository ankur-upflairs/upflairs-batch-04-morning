import React, { useState } from 'react'

function CreateBlog() {
  const [post, setPost] = useState({
    title: '', text: ''
  })
  function getFormData(e) {
    setPost({...post,[e.target.name]:e.target.value})
    console.log(post)
  }
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <label htmlFor="">
          Post title :
          <input type="text" name='title' onChange={getFormData} value={post.title} />
        </label> <br />
        <label htmlFor="">
          Post text:-
          <textarea name="text" onChange={getFormData} value={post.text}></textarea>
        </label><br />
        <input type="submit" />
      </form>
    </div>
  )
}



// function CreateBlog() {
//   const [title,setTitle]=useState('')
//   const [text,setText]=useState('')
//   console.log(title,text)
//   return (
//     <div>
//      <form >
//       <label htmlFor="">
//         Post title : 
//         <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
//       </label> <br />
//         <label htmlFor="">
//           Post text:-
//           <textarea name="" id="" onChange={(e)=>setText(e.target.value)} value={text}></textarea>
//         </label>
//      </form>
//     </div>
//   )
// }

export default CreateBlog
