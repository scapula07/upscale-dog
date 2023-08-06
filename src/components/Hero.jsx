import React from 'react'
import bg from "../assets/hero2.png"
import dog from "../assets/dog1.png"

export default function Hero() {
  return (
    <div className='py-4 w-full hidden lg:block'>
        <div className='w-full relative ' style={{height:"700px"}}>
            <img 
              src={bg}
              className="w-full h-full"
            />

            <div className='w-full absolute top-0 h-full flex z-20'>
                 <div className='h-full flex items-center px-24 '>
                      <div className='h-12 py-12'>
                            <button 
                                        style={{background:"#F79646"}}
                                        className="text-white font-semibold px-8 text-lg py-3 rounded-lg"
                                        >
                                    Book Appointment
                                </button>
                      </div>
                     

                 </div>
                           
              

                 </div>
               

            </div>
             
       

    </div>
  )
}
