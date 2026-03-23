import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    console.log("home ma")
  return (
    <>
    <nav className='flex items-center gap-[4vw] px-[6%] py-4 bg-white sticky top-0 justify-between shadow'>
        <img src="../../public/vividify-logo.png" alt="logo" className='w-40' />
        <div className='hidden md:flex gap-8 items-center text-gray-700 font-medium'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/service'>Service</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/contacts'>Contacts</Link>
            <Link to='/tools'>Tools</Link>
        </div>
        <a href='...' className='bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all text-sm'>Free Website Audit</a>
    </nav>
    </>
  )
}

export default Navbar
