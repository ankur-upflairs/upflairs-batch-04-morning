import React from 'react'


function Blog(props) {
   let {image,title}=props

    return (
      <div style={{width:'200px'}}>
        <img src={image} alt="blog image" />
        <h3>{title}</h3>
        <button>read more</button>
      </div>
    )
  }







// function Blog(props) {
//     console.log(props)

//     return (
//       <div style={{width:'200px'}}>
//         <img src={props.image} alt="blog image" />
//         <h3>{props.title}</h3>
//         <button>read more</button>
//       </div>
//     )
//   }


// function Blog() {
//   return (
//     <div style={{width:'200px'}}>
//       <img src="https://picsum.photos/200" alt="blog image" />
//       <h3>About nature</h3>
//       <button>read more</button>
//     </div>
//   )
// }

export default Blog
