import React from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react';

interface Props{
    name:string
    exerpt:string
    point1:string
    point2:string
    point3:string
    point4:string
}

const PricingPlanCard = ({name,exerpt,point1,point2,point3,point4}:Props) => {
  return (
    <div className='w-full mt-[30px] p-[20px] hover:mt-[-15px] transition-all flex flex-col bg-[#151515] rounded-md shadow-[#151515] shadow-lg cursor-pointer hover: '>
          <div><h1>{name}</h1></div>
          <div className='pb-4'><p>{exerpt}</p></div>
          <div className='py-2 flex'><ArrowUpRight className='text-blue-800'/><p>{point1}</p></div>
          <div className='py-2 flex'><ArrowUpRight className='text-blue-800'/><p>{point2}</p></div>
          <div className='py-2 flex'><ArrowUpRight className='text-blue-800'/><p>{point3}</p></div>
          <div className='py-2 flex'><ArrowUpRight className='text-blue-800'/><p>{point4}</p></div>

          <Link href={'/'} className='mt-[20px] px-[20px] py-[20px] hover:bg-gradient-to-l  bg-gradient-to-r from-purple-950 to-[blue] '>
             <div>
               <h2>Start Now</h2>
              </div>
          </Link>
    </div>
  )
}

export default PricingPlanCard