import React from 'react'
import logo from "../assets/logo.png"

export default function Header() {
  return (
     <div className='w-full flex items-center lg:justify-between justify-end px-6 lg:px-24 bg-white py-4'>
       
            <img
             src={logo}
             className="w-24 lg:flex hidden"
             />
      
            <div className='flex items-center lg:space-x-10 space-x-4'>
                <h5 className='lg:text-sm text-xs font-semibold text-white px-6 py-1 ' style={{background:"black"}}>Home</h5>
                <h5 className='text-sm font-semibold lg:flex hidden'>About Us</h5>
                <h5 className='lg:text-sm text-xs  font-semibold  lg:hidden block'>About</h5>
                <h5 className='lg:text-sm text-xs  font-semibold'>Contact Us</h5>

            </div>

     </div>
  )
}
