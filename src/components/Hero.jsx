import React from 'react'
import bg from "../assets/herobg.png"
import dog from "../assets/dog1.png"

export default function Hero() {
  return (
    <div className='py-4 w-full'>
        <div className='w-full relative ' style={{height:"700px"}}>
            <img 
              src={bg}
              className="w-full h-full"
            />

            <div className='w-full absolute top-0 h-full flex z-20'>
                 <div className='w-1/2 relative z-20  h-full'>
                      <div className='flex flex-col items-center h-full justify-center w-full'>
                          <div>
                            <h5 className='text-7xl font-semibold text-white '>Upscale Tails</h5>
                            <h5 className='text-7xl font-semibold text-white '>Dog Grooming</h5>

                            <div className='py-6'>
                                <button 
                                   style={{background:"#F79646"}}
                                   className="text-white font-semibold px-8 text-lg py-3 rounded-lg"
                                >
                                    Book Appointment</button>
                            </div>
                          </div>
                         

                      </div>

                 </div>
                 <div className='w-1/2'>
                    <img 
                      src={dog}
                      className="w-full "
                      style={{height:"650px"}}
                    />

                 </div>

            </div>
             
        </div>

    </div>
  )
}
