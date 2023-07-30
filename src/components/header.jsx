import React from 'react'
import logo from "../assets/logo.png"

export default function Header() {
  return (
     <div className='w-full flex items-center justify-between px-24 bg-white py-4'>
       
            <img
             src={logo}
             className="w-24"
             />
      
            <div className='flex items-center space-x-10 '>
                <h5 className='text-sm font-semibold text-white px-6 py-1 ' style={{background:"black"}}>Home</h5>
                <h5 className='text-sm font-semibold'>About Us</h5>
                <h5 className='text-sm font-semibold'>Contact Us</h5>

            </div>

     </div>
  )
}
