import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes ,NavLink } from 'react-router-dom'
import UseEffect from './UseEffect'
import TodoList from './TodoList'
import TodoListReducer from './UseReducer'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavLink to={'useeffect'} >use Effect</NavLink>
      <br />
      <NavLink to={'todo'} >Todo List</NavLink>
      <br />
      <NavLink to={'reducer'} >Todo List Reducer</NavLink>
      
      <Routes >
      <Route path='useeffect' element={<UseEffect/>}/>
      <Route path='todo' element={<TodoList/>} />
      <Route path='reducer' element ={<TodoListReducer/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
