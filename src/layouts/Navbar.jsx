import React, { useState } from 'react'
import { FaBars, FaRegUser } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import { TfiShoppingCart } from 'react-icons/tfi'
import { Link } from 'react-router'

const Navbar = () => {
  const [show,setShow]=useState(false);
  return (
    <nav className="sticky top-0 bg-white shadow z-50 mb-0.5">
      <div className="container  flex justify-between items-center py-14">
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
        {/* for computer */}
        <div className="hidden md:block">
          <ul className=" flex text-secondary font-medium text-lg ">
            <li><Link to="/" className='px-2 lg:px-5 inline-block'>Home</Link></li>
            <li><Link to="/shop" className='px-2 lg:px-5 inline-block'>Shop</Link></li>
            <li><Link to="/blog" className='px-full inline-block'>Blog</Link></li>
            <li><Link to="/contact" className='px-2 lg:px-5 inline-block'>contact</Link></li>
          </ul>
        </div>  
        {/* for mobile    */}
        <div className={`md:hidden fixed ${show? "translate-x-0":"translate-x-full"}  top-24 right-0 bg-background  w-screen transition duration-500 pt-8 pb-4`}>
          <ul className=" flex flex-col items-center  text-secondary font-medium text-lg ">
            <li><Link to="/" className='px-screen inline-block'>Home</Link></li>
            <li><Link to="/shop" className='px-full inline-block'>Shop</Link></li>
            <li><Link to="/blog" className='px-full inline-block'>Blog</Link></li>
            <li><Link to="/contact" className='px-full inline-block'>contact</Link></li>
          </ul>
        </div>     
        <div className="flex gap-6 text-secondary items-center text-xl">
          <Link to="/signUp"><FaRegUser /></Link>
          <Link to="/cart"><TfiShoppingCart /></Link>
        </div>
        <button onClick={()=>setShow(!show)} className='md:hidden cursor-pointer'>
          {
            !show?
            <FaBars />:<IoCloseSharp />
          }
          
        </button>
      </div>
    </nav>
  )
}

export default Navbar
