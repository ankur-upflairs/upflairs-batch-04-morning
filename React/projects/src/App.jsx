import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import CreateBlog from './pages/CreateBlog'
import Events from './pages/Events'
import ConditionalRendering from './pages/ConditionalRendering'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import SingleBlog from './pages/SingleBlog'
import Dashboard from './pages/Dashboard'
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar/>    
      
      <Routes>
        <Route path='' element={<Home/>}/>
        {/* <Route path='blogs' element={<Blogs/>}>
         <Route path=':id' element={<SingleBlog/>}/>
        </Route> */}
         <Route path='blogs' element={<Blogs/>}>  </Route>
         <Route path='blogs/:id' element={<SingleBlog/>}/>
        <Route path='createblog' element={<CreateBlog/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>        
      </Routes>      
      </BrowserRouter>
    </>
  )
}

export default App
