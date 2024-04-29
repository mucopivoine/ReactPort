import React from 'react'
import Inbig from '../assets/Inbig.webp'
import { Link } from 'react-router-dom'
import treebk from "../assets/treebk-removebg-preview.png";
import pict1 from '../assets/pict1.png'
import countriesapp from '../assets/countriesapp.png'
import contactapi from '../assets/contactapi.png'

function Homepage() {
  return (
    <div className='bg-black'>
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

      <section className='bg-black mx-auto mt-20 '>
        <div className=' bg-black justify-center text-center items-center'>
          <h1 className='text-4xl text-white'>About</h1>
          <p className='text-white text-xl'>Here are some courses that that I've learned so far</p>
        </div>
        <div className='mx-auto max-w-screen-xl'>
          <div className='container mt-10 mx-auto py-4 flex flex-col-reverse lg:flex-row items-center gap-10 bg-black'>
            <div className="h-1/6 rounded-full w-[25%] ml-10 mr-10">
              <img src={treebk} alt="" />
            </div>
            <div className="flex flex-col ">
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

      <section className='lg:w-full mx-auto pt-20'>

        <div className='justify-center text-center items-center '>
          <h1 className='text-white text-4xl '>My projects</h1>
          <p className='text-white text-xl text-center justify-center items-center'>Here are some of the projects that I've been working on recently</p>
        </div>

        <div className="mx-auto  max-w-screen-xl mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
          <div className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">
              <div>
                <div className="flex justify-center ">
                  <img src={pict1} />
                </div>

                <p className="mt-0.5 text-lg font-medium text-gray-900">The rock paper scissor game</p>
              </div>
            </div>
            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
              consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
              error officiis atque voluptates magnam!
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">

              <div>
                <div className="flex justify-center">
                  <img src={countriesapp} />
                </div>

                <p className="mt-0.5 text-lg font-medium text-gray-900">Contries-API-APP</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error natus vel quos ab aliquam facilis laborum deserunt delectus quisquam!
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-4">


              <div>
                <div className="flex justify-center gap-0.5 text-green-500">
                  <img src={contactapi} />

                </div>
                <p className="mt-0.5 text-lg font-medium text-gray-900">Contact-APP</p>
              </div>
            </div>

            <p className="mt-4 text-gray-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
              consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
              error officiis atque voluptates magnam!
            </p>
          </div>
        </div>

      </section >

      <section className="lg:w-full mx-auto pt-10">
      <div className='justify-center text-center items-center mt-10'>
          <h1 className='text-white text-4xl '>Contact Me</h1>
          <p className='text-white text-xl text-center justify-center items-center'>Lets get in touch by logging in your account and send message if any.</p>
        </div>
        <div className='flex flex-col py-10 px-4 mx-auto max-w-[600px]'>
          <label className='text-white mb-3'>Your name</label>
          <input type='text' className='mb-4 py-[10px] px-[18px] text-lg bg-slate-800 border-gray-700 text-white'></input>
          <label className='text-white mb-3' >Enter Email</label>
          <input type='text' className='mb-4 py-[10px] px-[18px] text-lg bg-slate-800 border-gray-700 text-white'></input>
          <label className='text-white mb-3'> Subject</label>
          <input type='text' className='mb-4 py-[10px] px-[18px] text-lg bg-slate-800 border-gray-700 text-white'></input>
          <label className='text-white mb-3'> Message</label>
          <textarea rows={6}  placeholder='Type your message here' className='mb-4 py-[10px] px-[18px] text-lg bg-slate-800 border-gray-700 text-white'/>

          <button className='btn text-white border-2 p-4 bg-yellow-400'>Submit</button>
          </div>
      </section>

   
          


        </div>
  )
}

export default Homepage