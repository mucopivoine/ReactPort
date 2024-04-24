import React from 'react'
import pict1 from '../assets/pict1.png'
import countriesapp from '../assets/countriesapp.png'
import contactapi from '../assets/contactapi.png'
import Header from './Header'
import Footer from '../components/Footer'
import Inbig from '../assets/Inbig.webp'
import '..//App.css';

function Project() {
  return (
    <div>
    
      <section className="lg:w-full mx-auto bg-black ">
        <div className='soccer'>
          <img src={Inbig} className='bg-cover w-full h-[60vh] object-cover'></img>
        </div>
    <div className='absolute lg:top-[40%] lg:right-[30%]  lg:left-[30%] justify-center text-center items-center'>
      <h1 className='text-white text-4xl '>My projects</h1>
        <p className='text-white text-xl text-center justify-center items-center'>Here are some of the projects that I've been working on recently</p>
        </div>
   
<div >
    <div className="mx-auto  max-w-screen-xl mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
      <div className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          
          <div>
            <div className="flex justify-center ">
             <img src={pict1}/>
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
              <img src={countriesapp}/>
            </div>

            <p className="mt-0.5 text-lg font-medium text-gray-900">Contries-API-APP</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error natus vel quos ab aliquam facilis laborum deserunt delectus quisquam!
        </p>
      </div>

      <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex items-center gap-4">
          

          <div>
            <div className="flex justify-center gap-0.5 text-green-500">
              <img src={contactapi}/>
              
            </div>

            <p className="mt-0.5 text-lg font-medium text-gray-900">Contact-APP</p>
          </div>
        </div>

        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a
          consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus
          error officiis atque voluptates magnam!
        </p>
      </blockquote>
    </div>
    </div>
</section>
    </div>
  )
}

export default Project