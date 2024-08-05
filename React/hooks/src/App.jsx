import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import UseEffect from './UseEffect'

function App() {

  return (
    <>
      <BrowserRouter>
      <Link to={'useeffect'} >use Effect</Link>
      <Routes >
      <Route path='useeffect' element={<UseEffect/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
