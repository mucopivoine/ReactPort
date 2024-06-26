import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Home from './pages/Home'
import Layout from './layout/Layout'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="/homepage" element={<Homepage/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project/>} />
          <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App