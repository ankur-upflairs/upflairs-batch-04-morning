import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import CreateBlog from './pages/CreateBlog'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <ul style={{display:'flex',listStyle:'none',gap:'50px'}}>
        <li><Link to={''} >Home</Link></li>
        <li><Link to={'blogs'}>blogs</Link></li>
        <li><Link to={'createblog'}>create blog</Link></li>
      </ul>       
      
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='createblog' element={<CreateBlog/>}/>
      </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
