import React from 'react'
import Home from './components/home/Home'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About';

function App() {
  return (
    <div className=' font-poppins'>
    <Header/>
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}/>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
