import Image from 'next/image'
import React from 'react'


function Hero() {
  return (
    <div>
        <div className='m-w-[1030px] ml-auto mr-auto'>
           <div className=' flex items-center'>
           <div className=' text-7xl p-32 '>
                <h1 className='font-serif'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
                <p className='flex justify-between text-2xl text-[#A29875] h-[147] w-[902]'>An example of intricate workmanship and detail,
                     elegant necklaces and long and short chains form a part of our desirable collection.</p>
                     <button className='bg-[#A29875] text-[#FFFFFF] text-2xl'>Explore</button>
            </div>
            <div className='pr-20'>
                <Image src="/person.png"  width={800} height={600} alt='Description'></Image>
              
            </div>
           </div>

        </div>
    </div>
  )
}

export default Hero