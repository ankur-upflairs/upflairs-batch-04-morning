import React from 'react'
import Blog from './Blog'
import nature from './assets/img/download.jpg'
import car from './assets/img/car.jpg'
import { data } from './data'

function Blogs() {
    return (
      <div style={{display:'flex',gap:'20px'}}>
       <Blog {...data[0]} />
       <Blog {...data[1]} />
       <Blog {...data[2]} />

      </div>
    )
  }



// function Blogs() {
//     return (
//       <div style={{display:'flex',gap:'20px'}}>
//        <Blog title={data[0].title} image={data[0].image} />
//        <Blog title={data[1].title} image={data[1].image} />
//        <Blog title={data[2].title} image={data[2].image} />

//       </div>
//     )
//   }


// function Blogs() {
//   return (
//     <div style={{display:'flex',gap:'20px'}}>
//       <Blog image={nature} title={'technology blog'}/>
//       <Blog image={car} title={'pollution'} />
//       {/* <Blog/>
//       <Blog/> */}
//     </div>
//   )
// }

export default Blogs
