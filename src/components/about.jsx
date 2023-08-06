import React from 'react'
import about from "../assets/about.png"

export default function About() {
  return (
    <div className='py-16 px-20'>
        <div className='flex space-x-8 lg:block hidden ' style={{background:"F6F3F3"}}>
            <div className=' w-1/2 lg:block hidden'>
                <img 
                  src={about}
                />


            </div>
            <div className='flex flex-col w-1/2 space-y-4 lg:block hidden'>
                <h5 className='text-2xl font-semibold'> About us</h5>
                <div className='text-sm'>
                    <p>
                      Welcome to Upscale Tails Grooming Services, where we pride ourselves on making your furry companion look and feel their best. Our experienced and compassionate groomers provide individualized attention, creating a stress-free grooming experience for dogs of all sizes. With top-notch facilities and pet-friendly products, we prioritize your pet's well-being and ensure they receive the highest level of care. Your dog's health and happiness are at the heart of everything we do.
                    </p>
                    <br></br>
                    <p>
                        At Upscale Tails Grooming Services, we offer specialized grooming tailored to your dog's needs. From Full Bath & Groom to Nail & Paw Treatment and Fluff & Brush, each service is designed for your pet's specific requirements.
                        Beyond grooming, we educate owners on pet care and offer helpful tips to maintain your dog's routine. Our salon provides a warm, welcoming environment, treating your furry friend with love and attention.
                        Choose Upscale Tails Grooming Services for lasting relationships and pampered pets. Book an appointment today!

                    </p>

                </div>
                
          </div>

        </div>

    </div>
  )
}
