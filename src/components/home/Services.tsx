import React from 'react'
import data from '@/lib/data'


function Services() {
  return (
    <div className='w-[95%] flex-col md:w-[80%] py-[50px] ' >
         <div className='w-full justify-between flex flex-col md:flex-row'>
                  <div className=''>
                    <h1 className='py-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 '> Featured Services</h1>
                  </div>
                  <div className=''>
                     <p></p>
                  </div>
         </div>

     <div className='flex flex-col md:flex-row w-full gap-5'>
        {data.serv.map((b,i)=>(
        <div className='flex  flex-col bg-no-repeat bg-cover yr items-center justify-end flex-1 h-[300px] relative py-[40px] border-purple-700 border-[5px] rounded-md mt-[10px]  px-[10px]' key={i} style={{backgroundImage:`url(${b.src}`}}>
              <div className='w-full h-full absolute  top-0 opacity-30 bg-[#1602ce] z-10'></div>
            <div className='xr w-[95%] relative bg-purple-500 backdrop-blur-3xl z-20 rounded-md'>
                 <div className='p-2'><h2>{b.name}</h2></div>
                <div className='p-2 '><p>{b.exerpt}</p></div>
            </div> 
           
               
        </div>
      ))}
         </div>
    

    </div>
  )
}

export default Services