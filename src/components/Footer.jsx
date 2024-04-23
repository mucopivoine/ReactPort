import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
function Footer() {
  return (
    <div>
        <div className='footer w-full py-5 justify-between px-0 bg-black'>
           <div className='footercontainer max-w-[1140px]  grid lg:grid-cols-2 sm:grid-cols-1 p-7'>
            <div className='left h-full max-w-[100%] flex flex-col p-5 '>
                <div className='location flex mb-3'>
                    <FaHome size={20} className='text-white mr-4'/>
                    <div>
                      <p className='text-white'>123 Housing Society</p>
                      <p className='text-white'>Kicukiro</p>
                    </div>
                </div>
                <div className='phone flex gap-5'>
                
                  <FaPhone size={20} className='text-white'/>
                  <h4 className='text-white font-bold'>0788404142</h4>
                </div>
                <div className='email flex gap-5'>
                 
                  <FaMailBulk size={20} className='text-white'/>
                  <h4 className='text-white font-bold'>info@gmail.com</h4>
                </div>
             </div>
             <div className='right h-full max-w-[100%] flex flex-col p-4 '>
               <h4 className='text-white font-bold text-xl '>About the project</h4>
               <p className='text-white'>This is my react portfolio which I worked on after knowing basic properties and terms used in react . I enjoy discussing with how to work on it and how to develop new projects.</p>
               <div className='social flex mt-4 gap-3'>
              <Link to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"><FaFacebook size={30} className='text-white mr-2'/></Link> 
               <Link to="https://www.instagram.com/"><FaInstagram size={30} className='text-white mr-2'/></Link>
               <Link to="https://www.linkedin.com/learning"><FaLinkedin size={30} className='text-white mr-2'/></Link>
               </div>
             </div>
            </div> 
        </div>
    </div>
  )
}

export default Footer