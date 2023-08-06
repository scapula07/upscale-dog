import React from 'react'
import test from "../assets/testimonials.png"
export default function Testimonials() {
    return (
       <div className='flex items-center flex-col w-full lg:space-y-7 space-y-4 py-16 px-20'> 
         <div className='flex flex-col space-y-1 items-center'>
           <h5 className='lg:text-3xl text-sm font-semibold ' >TESTIMONIALS</h5>
           <h5 className='text-sm font-light text-center w-3/4 lg:block hidden'>Here’s a  review of what our clients have to say
 about our services</h5>
  
         </div>
  
         <div className='lg:py-8 '>
           <img 
             src={test}
           />
         </div>
          
  
     
  
      </div>
    )
  }