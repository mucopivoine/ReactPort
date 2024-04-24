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
        <Link className="block  font-bold" to="/">
           <p className='text-3xl'>Portfolio.</p></Link>
</div>
      <div className="hidden md:block ">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6  text-xl">
            <li>
              <Link className="text-white transition hover:text-gray-200/75" to="/"> Home </Link>
            </li>

            <li>
              <Link className="text-white transition hover:text-gray-200/75" to="/About"> About </Link>
            </li>

            <li>
              <Link className="text-white transition hover:text-gray-200/75" to="/Project"> Project </Link>
            </li>

            <li>
              <Link className="text-white transition hover:text-gray-200/75" to="/Contact"> Contact </Link>
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