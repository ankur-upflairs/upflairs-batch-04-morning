import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import UseEffect from './UseEffect'
import TodoList from './TodoList'

function App() {

  return (
    <>
      <BrowserRouter>
      <Link to={'useeffect'} >use Effect</Link>
      <br />
      <Link to={'todo'} >Todo List</Link>

      <Routes >
      <Route path='useeffect' element={<UseEffect/>}/>
      <Route path='todo' element={<TodoList/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
