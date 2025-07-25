import React from 'react'
import { APP_NAME } from '@/lib/constants'
import Card from '../shared/Card'
import Btn from '../shared/Btn'

function About() {
  return (
    <div className='flex flex-col w-[95%] lg:w-[80%] py-[50px] justify-center items-center'>
      <div className='w-full flex flex-col md:flex-row'>
        
       <div className='flex-1'> <h2>Welcome to {APP_NAME}</h2> <h1 className='py-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 '> Easy solutions for your business sites</h1></div>
        <div className='flex-1 flex flex-col md:flex-row md:ml-[12px]  gap-5 '> 
          <div className='flex-1'><Card name='Quality Work'/></div>
          <div className='flex-1'><Card name='Satisfaction Guarantee'/></div>
        </div>
     </div>
      <div className='flex flex-col md:flex-row gap-5 py-5 w-full '>  
            <div className='flex-1'><Card name='Quality Work'/></div>
          <div className='flex-1'><Card name='Satisfaction Guarantee'/></div>
          <div className='flex-1'><Card name='Quality Work'/></div>
          <div className='flex-1'><Card name='Satisfaction Guarantee'/></div>
     </div>
      <div className='w-[80%] flex gap-5 flex-row '>
                    <div className=' bg-[#151515] p-[10px] rounded-md flex-2 justify-center items-center flex'><p className=''>Trust the experts for all your <span className='bg-clip-text bg-gradient-to-r text-transparent from-purple-500 to-cyan-500'>web design & development</span> needs.</p></div>
                    <div className='flex-1'><Btn text="About Us" href='/'/></div>
            </div>
    </div>
  )
}

export default About