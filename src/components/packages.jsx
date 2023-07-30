import React from 'react'

export default function Packages() {
  return (
    <div className='bg-black flex flex-col py-10 items-center w-full'>
          <h5 className='text-3xl font-semibold text-white'>Packages</h5>

          <div className='flex items-center w-full justify-center space-x-10 py-6 px-20 '>
            {packages?.map((pack)=>{
                 return(
                    <div className='flex flex-col h-96 w-1/3 items-center py-10 px-10 space-y-6' style={{background:`${pack?.bg}`}}>
                         <h5 className='text-white font-semibold text-lg' style={{color:`${pack?.color}`}}>{pack?.name}</h5>
                         <p className='text-xs font-light h-44' style={{color:"#878585"}}>
                            {pack?.desc}
                         </p>


                       <div className='flex flex-col items-center  space-y-4 py-4'>

                         <h5  className="text-2xl font-semibold" style={{color:`${pack?.color}`}}>{pack?.price}</h5>
                         <button
                             style={{background:`${pack?.btn}`,color:`${pack?.color}`}}
                             className="px-8 py-3 rounded-lg "
                            >
                            Book Appointment
                         </button>
                        </div>


                      </div>
                 )
            })

            }

          </div>

    </div>
  )
}


const packages=[
    {
        name:"Full Bath & Groom",
        desc:"Our comprehensive Full Bath & Groom service includes a luxurious bath to cleanse your dog's coat thoroughly, followed by professional grooming to ensure they look their absolute best. Your furry friend will leave our salon feeling pampered and looking fabulous from head to tail.",
        price:"$85.00",
        bg:"#313131",
        btn:"#41444B",
        color:"white"


    },
    
    {
        name:"Spa Grooming",
        desc:"Give your dog's paws the royal treatment with our Nail & Paw Treatment service. Our skilled groomers will trim and shape their nails, keeping them at the perfect length for comfort and style. We'll also attend to the pads, ensuring your pet's paws are smooth and well-cared for, leaving them ready to conquer any adventure.",
        price:"$100.00",
        bg:"#E9E8E7",
        btn:"#C4BAB1",
        color:"#41444B"



    },
    {
        name:"Specialty Grooming",
        desc:"Bring out the true beauty of your dog's coat with our Fluff & Brush service. Using expert brushing techniques, we'll untangle knots, remove loose fur, and leave their coat soft and radiant. Your pup will feel like a true superstar with this touch of grooming magic.",
        price:"$55.00",
        bg:"#FFFFFF",
        btn:"#E5A067",
        color:"black"



    },
]