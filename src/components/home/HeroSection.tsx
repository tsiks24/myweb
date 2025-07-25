
import React from 'react'
import Btn from '../shared/Btn'

function HeroSection() {


  return (
     <div className='w-[95%] lg:w-[80%] flex flex-col'>
    <div className='flex flex-row w-full relative '>
          <div className='flex-1'>
               <div className='w-full py-4'>
                   <h3 className='py-2'>Transforming Visions into</h3>
                   <h4 className='py-2 md:text-[70px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 '> Digital Reality </h4>
               </div>
              <div className='py-4'><Btn text='Explore' href='/'/></div> 
          </div>
          <div className='flex-1'>

          </div>
    </div>
    </div>
  )
}

export default HeroSection