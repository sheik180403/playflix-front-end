import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import React from 'react'
import Login from './Login'
import Register from './Register'
import Home from './Home'


import NavBar from './NavBar/NavBar'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>





    </>



  )
}

export default App
