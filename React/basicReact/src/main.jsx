import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// module system => ejs 

import {Header} from './Header.jsx'
import Layout from './Layout.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <Layout/>
   )
 



//first letter of function componenet name must be capital
// function Header(){

// //it should return jsx
//    return <div className='a'>
//     this is header
//     <input type="text" />
//    </div>

// }
// function Content(){
//   return <div>
//     this is content
//   </div>
// }

// function Footer(){
//   return <div>
//     this is footer
//   </div>
// }

// function Layout(){
//   return <div>
//     <Header/>
//     <Content/>
//     <Footer/>
//   </div>
// }


// ReactDOM.createRoot(document.getElementById('root')).render(
//  <Layout/>
//   )
  




// to use function component call it as a tag 
// ReactDOM.createRoot(document.getElementById('root')).render(
//   [<Header ></Header>,<Content/>,<Footer/>]
//   )
  


//jsx =>writing html inside js =>javascript xtension
//whole/complete jsx must wrap inside a single tag
// let el1=<h1>hello world</h1><p>hello</p>//this is wrong
// let el1= <div>
//   <h1>hello world</h1>
//   <p>this is my first react app</p>
// </div>
// //every tag must be closed
// let el2=<div className='a' >
// <input type="text" ></input>
// <br />
// <input type="text" />
// </div>
//use className insteed of class


// ReactDOM.createRoot(document.getElementById('root')).render(
// [el1,el2]
// )



//render multiple elements
// let el2='my first react app'
// let el1='hello world'
// ReactDOM.createRoot(document.getElementById('root')).render(
//  [ el1,el2]
// )

