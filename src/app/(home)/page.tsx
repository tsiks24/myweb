import About from '@/components/home/About'
import Belt from '@/components/home/Belt'
import HeroSection from '@/components/home/HeroSection'
import Services from '@/components/home/Services'
import React from 'react'
import Pricing from '@/components/home/Pricing'

function page() {
  return (
    <div className='flex relative flex-col justify-center items-center w-full h-full bg-[black]  z-30 mb-[500px]'>
                <HeroSection/>
                <Belt/>
                <About/>
                <Services/>
                <Pricing/>
    </div>
  
  )
}

export default page