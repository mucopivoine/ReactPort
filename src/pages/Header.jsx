import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
   <header className="bg-black text-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between  z-10 bg-black w-full top-0">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block  font-bold" href="#">
           <p className='text-3xl'>Portfolio.</p></a>
</div>
      <div className="hidden md:block ">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6  text-xl">
            <li>
              <a className="text-white transition hover:text-gray-200/75" href="/"> Home </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-200/75" href="About"> About </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-200/75" href="Project"> Project </a>
            </li>

            <li>
              <a className="text-white transition hover:text-gray-200/75" href="Contact"> Contact </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        
        

        <div className="block md:hidden">
          <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default Header