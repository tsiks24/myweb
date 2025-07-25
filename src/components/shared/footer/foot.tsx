import React from 'react'
import { APP_NAME } from '@/lib/constants'

function Foot() {
  return (
   <div className='bg-[#151515]'>
    <div className=" w-full pb-5  pt-[40px] ">
    <div className="h-full w-full flex flex-col items-center flex-wrap justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 w-[90%] lg:w-[80%] gap-6 pb-8">
        <div className="col-span-1 text-center md:text-start md:justify-start md:items-start flex flex-col justify-center items-center ">
         
          <p className="text-white pb-2 pt-4">
          A global network that offers knowledge, tools, and resources for decision-makers and practitioners to enhance solar energy adoption and promote sustainable living in their communities.
          </p>
          <div className='flex flex-row w-full gap-3 md:items-start md:justify-start items-center justify-center'>
                  <div className='bg-[#151515] p-2 cursor-pointer'></div>
                  <div className='bg-[#151515]  p-2 cursor-pointer'></div>
                  <div className='bg-[#151515] p-2 cursor-pointer'></div>
                  <div className='bg-[#151515]  p-2 cursor-pointer'></div>
          </div>
        </div>

        <div className="col-span-1 md:ml-12 text-center md:text-start">
          <h1 className="font-semibold  md:text-[30px] text-[20px] text-white   py-4">Useful Links</h1>
        
        </div>

      

        <div className="col-span-1 text-center md:text-start">
          <h1 className="font-semibold text-white md:text-[30px] text-[20px] py-4  ">Contact </h1>
          <div className='flex flex-row w-full gap-2 py-2 justify-center items-center md:items-start md:justify-start'>
            <div className='bg-[#151515]  p-2 cursor-pointer'></div>
            <p className="py-2 text-white">078565789</p>
          </div>

          <div className='flex flex-row w-full gap-2 py-2 justify-center items-center md:items-start md:justify-start'>
            <div className='bg-[#151515]  p-2 cursor-pointer'></div>
            <p className="py-2 text-white">Harare </p>
          </div>

          <div className='flex flex-row w-full gap-2 py-2 justify-center items-center md:items-start md:justify-start'>
            <div className='bg-[#151515]  p-2 cursor-pointer'></div>
            <p className="py-2 text-white">{APP_NAME}@gmail.com </p>
          </div>
        </div>

          <div className="col-span-1 text-center md:text-start">
          <h1 className="font-semibold text-white py-4 md:text-[30px] text-[20px]  ">Explore</h1>
          
          <br />
          
        </div>
      </div>
                 
      <div className="w-[95%] lg:w-[80%] text-center py-5 flex md:flex-row flex-col  justify-between items-center">
        
        <div className="py-8 text-white ">&copy; 2025 All rights reserved | {APP_NAME}  </div>
        <div className='flex flex-row text-white gap-2 items-center justify-center '>
          <p className='cursor-pointer'>Privacy Policy</p>
         
          <p className='cursor-pointer'>Terms of Service</p>

        </div>

       
      </div>
    </div>
  </div>
  </div>
  )
}

export default Foot