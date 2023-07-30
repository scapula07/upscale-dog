import React from 'react'

export default function Grooming() {
  return (
    <div className='flex flex-col py-10 px-20'>
        <h5 className='text-3xl '>All Grooming Services</h5>

        <div className='grid grid-flow-row grid-cols-4  gap-4 gap-y-8 h-full w-full py-14'>
            {["Bath","Haircut","Nail Trim","Nail Trim","Brush","Face Trim","Nail Dremel","Nail Dremel","Fluff & brush","Flea Bath","Paw pad Treatment","Paw pad Treatment"].map((text)=>{
                return(
                    <h5 className='text-xs'>{text}</h5>
                )
            })

            }

        </div>

    </div>
  )
}
