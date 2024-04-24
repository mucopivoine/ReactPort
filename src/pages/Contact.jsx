import React from 'react'
import Header from './Header'
import Footer from '../components/Footer'
import Inbig from '../assets/Inbig.webp'
import Heroimg1 from '../components/Heroimg1'

function Contact() {
  return (
    <><div>
      
      <section className="lg:w-full mx-auto bg-black">
        <div className='soccer'>
          <img src={Inbig} className='bg-cover w-full h-[60vh] object-cover'></img>
        </div>
        <div className='absolute lg:top-[40%] lg:right-[30%]  lg:left-[30%] justify-center text-center items-center'>
          <h1 className='text-white text-4xl '>Contact Me</h1>
          <p className='text-white text-xl text-center justify-center items-center'>Lets get in touch by logging in your account and send message if any.</p>
        </div>
        <div className='bg-black flex flex-col py-10 px-4 mx-auto max-w-[600px]'>
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
  
    </>

  )
}

export default Contact