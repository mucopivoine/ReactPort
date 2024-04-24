import React from 'react'
import Inbig from '../assets/Inbig.webp'
import { Link } from 'react-router-dom'
import '..//App.css'
import Header from './Header'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      
      <div className='h-full w-full'>
      <div className='mask'> 
        <img src={Inbig} className='bg-cover w-full h-[100vh]  object-cover'></img>
      </div>
      <div className='absolute translate-x-2/4 top-[50%] lg:right-[50%] sm:right-[50%] sm:left-[0px] justify-center items-center text-center'>
        <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl  p-3 text-white'>Hi! I'M <span className='text-red-700'>Pivoine.</span></p>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-bold text-white'>Front End Developer.</h1>
      <div className=' space-x-4 mt-4'>
      <Link to="/project" className="bg-white border text-black lg:p-2 sm:p-1">Projects</Link>
      <Link to="/contact" className=" border text-white lg:p-2 sm:p-1">Contacts</Link>
      </div>
      </div>
      </div>
    
    </div>
  )
}

export default Home