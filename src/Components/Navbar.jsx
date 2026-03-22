import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    console.log("home ma")
  return (
    <>
    <nav className='flex gap-[4vw] bg-amber-700 justify-between px-5'>
        <img src="../../public/vividify-logo.png" alt="logo" className='w-[15vw] ml-[2vw]' />
        <div className='flex gap-[4vw] justify-between'>
            <Link to='/' className='bg-amber-950 text-amber-50'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/service'>Service</Link>
            <Link to='/faq'>FAQ</Link>
            <Link to='/contacts'>Contacts</Link>
            <Link to='/tools'>Tools</Link>
        </div>
        <a href='...' className='bg-blue-600 rounded-4xl p-[2vw] flex align-middle text-white w-[15vw]'>Free Website Audit</a>
    </nav>
    </>
  )
}

export default Navbar
