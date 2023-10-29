import React from 'react'
import Image from 'next/image'

const Win = () => {
  return (
    <div className='flex flex-col justify-center items-center text-center mx-auto my-auto bg-[#353966] h-full gap-5'>
        <div>
        <Image 
        src='/images/win.png'
        width={204}
        height={132}/>
        </div>
        <div className='font-black text-4xl text-stone-100 flex flex-col gap-6'>
            <div>
            You Won!!!
            </div>
            <div className='text-xl'>
            congrats, you just won “Product Name”  
            </div>
            
        </div>
        
    </div>
  )
}

export default Win