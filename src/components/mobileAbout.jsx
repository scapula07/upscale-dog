import React from 'react'
import dog1 from "../assets/dogabt.png"
import dog2 from "../assets/dog3.png"
export default function MobileAbout() {
  return (
    <div className='pt-10'>
         <div className='relative h-56'>
            <div className='flex w-full h-full'>
                <img 
                  src={dog2}
                  className="w-1/2 h-full"
                />
                <img 
                   src={dog1}
                   className="w-1/2 h-full"
                />

            </div>

            <div className='absolute top-0 z-20 h-full w-full flex items-center justify-center'> 
               <h5 className='text-2xl font-semibold text-white'>About us</h5>

            </div>

         </div>


         <div className='w-full flex flex-col space-y-6 px-4 py-4' >
            <p className='text-xs ' style={{color:"rgba(110, 106, 106, 1)"}}>Welcome to Upscale Tails Grooming Services, where we pride ourselves on making your furry companion look and feel their best. Our experienced and compassionate groomers provide individualized attention, creating a stress-free grooming experience for dogs of all sizes. With top-notch facilities and pet-friendly products, we prioritize your pet's well-being and ensure they receive the highest level of care. Your dog's health and happiness are at the heart of everything we do.</p>
            <p className='text-xs ' style={{color:"rgba(110, 106, 106, 1)"}}>At Upscale Tails Grooming Services, we offer specialized grooming tailored to your dog's needs. From Full Bath & Groom to Nail & Paw Treatment and Fluff & Brush, each service is designed for your pet's specific requirements. Beyond grooming, we educate owners on pet care and offer helpful tips to maintain your dog's routine. Our salon provides a warm, welcoming environment, treating your furry friend with love and attention. Choose Upscale Tails Grooming Services for lasting relationships and pampered pets. Book an appointment today!</p>
         </div>

    </div>
  )
}
