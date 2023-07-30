import React from 'react'
import midImg from "../assets/middog.png"

export default function Midsection() {
  return (
    <div className='relative w-full h-full ' style={{height:"700px"}}>
        <img 
           src={midImg}
           className="w-full h-full"
        />

        <div className='absolute top-0 w-full h-full z-20 flex flex-col items-center'>
            <div className='flex flex-col items-center w-full h-full justify-center space-y-3'>
                <h5 className='text-7xl font-semibold flex flex-col text-white items-center'>
                <span>
                Mobile
                </span>
                <span>
                Grooming
                </span>

                </h5>
                <p className='text-lg font-light text-center' style={{color:"#D2D0CE"}}>Unleash the Beauty Within Your Best Friend One Paw At A Time</p>

                <div className='py-5'>
                    <button 
                        style={{background:"#F79646"}}
                        className="text-white font-semibold px-8 text-lg py-3 rounded-lg"
                    >
                        Book Appointment</button>
            </div>

            </div>


           

        </div>

    </div>
  )
}
