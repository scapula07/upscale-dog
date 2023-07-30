import React from 'react'
import img1 from "../assets/bath.png"
import img2 from "../assets/clippers.png"
import img3 from "../assets/toothbrush.png"
import img4 from "../assets/scissors.png"

export default function Services() {
  return (
    <div className='px-20 py-6'>
        <div className='flex items-center space-x-4'>
            {services?.map((service)=>{
                 return(
                    <div className='flex flex-col space-y-6'>
                        <img 
                          src={service?.img}
                          className="w-8 h-8"
                        />
                        <div className='flex flex-col '>
                            <h5 className='font-semibold'>{service?.name}</h5>
                            <p className='text-xs font-light'>
                                {service?.desc}
                            </p>


                        </div>

                       
                    </div>
                 )
            })

            }

        </div>

    </div>
  )
}


const services=[
    {
        img:img4,
        name:"Face Trim",
        desc:"Face Trim: Precision grooming to shape and enhance your dog's adorable face, making them look their best."


    },
    {
        img:img1,
        name:"Bath",
        desc:"A soothing and revitalizing bathing experience to cleanse and refresh your furry friend's coat and skin."


    },
    {
        img:img3,
        name:"Flea Removal",
        desc:"Effective and gentle removal of pesky fleas, ensuring your pet's comfort and a flea-free environment."


    },
    {
        img:img2,
        name:"Teeth Cleaning",
        desc:"Promoting excellent dental hygiene by expertly cleaning your dog's teeth, giving them a dazzling smile and healthier mouth."


    }
]