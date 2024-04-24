import React from 'react'
import Header from './Header'
import Footer from '../components/Footer'
import '..//App.css'
import Inbig from '../assets/Inbig.webp'
import treebk from "../assets/treebk-removebg-preview.png";
function About() {
  return (
    <div>
      
      <section className='lg:w-full mx-auto bg-black'>
        <div className='soccer'>
          <img src={Inbig} className='bg-cover w-full h-[60vh] object-cover'></img>
        </div>
        <div className='absolute lg:top-[40%] lg:right-[30%] lg:left-[30%] justify-center text-center items-center'>
          <h1 className='text-white text-4xl '>About</h1>
          <p className='text-white text-xl'>Here are some courses that that I've taken so far</p>
        </div>
        <div className='mx-auto max-w-screen-xl'>
          <div className='container mt-10 mx-auto py-4 flex flex-col-reverse lg:flex-row items-center gap-10'>
          <div className="h-1/6 rounded-full w-[25%] ml-10 mr-10">
            <img src={treebk} alt="" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-red-300 font-semibold text-3xl">ABOUT ME</h1>
            <h1 className="text-xl font-medium text-white">Better Design</h1>
            <h1 className="text-xl font-medium text-white">Better Experience</h1>
            <p className="mt-2 text-white">  At sheCanCode school we study how to make designs using Graphic design skills ,Javascript,UI/UX designs and HTML with CSS webdesigns.</p>
            <h2 className="text-gray-500 mt-2 font-medium">HTML</h2>
            <div className="w-[600px] bg-gray-200 h-2 rounded-md">
              <div className="w-5/6 bg-red-300 h-2 rounded-md"></div>
            </div>
            <h2 className="text-gray-500 mt-2 font-medium">CSS</h2>
            <div className="w-[600px] bg-gray-200 h-2 rounded-md">
              <div className="w-4/6 bg-red-300 h-2 rounded-md"></div>
            </div>
            <h2 className="text-gray-500 mt-2 font-medium">JavaScipt</h2>
            <div className="w-[600px] bg-gray-200 h-2 rounded-md">
              <div className="w-3/6 bg-red-300 h-2 rounded-md"></div>
            </div>
            <h2 className="text-gray-500 mt-2 font-medium">React</h2>
            <div className="w-[600px] bg-gray-200 h-2 rounded-md">
              <div className="w-2/6 bg-red-300 h-2 rounded-md"></div>
            </div>
          </div>
          </div>

        </div>
      </section>


     
       
    </div>
  )
}

export default About