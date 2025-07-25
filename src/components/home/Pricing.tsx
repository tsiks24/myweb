import React from 'react'
import data from '@/lib/data'
import PricingPlanCard from '../shared/PricingPlanCard'

function Pricing() {
  return (
    <div className='w-[95%] lg:w-[80%] flex flex-col  justify-center py-[50px] items-center'>
        <div> <h1 className='py-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 '> Pricing </h1></div>
        <div className='flex flex-col md:flex-row gap-5 '>
           {data.pricing.map((r,s)=>(
           <div key={s} className=' flex-1'><PricingPlanCard name={r.name} exerpt={r.exerpt} point1={r.point1} point2={r.point2} point3={r.point3} point4={r.point4}/></div>
        ))}
        </div>
        
      
    </div>
  )
}

export default Pricing