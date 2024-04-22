import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Home from './pages/Home'
import Layout from './layout/Layout'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App