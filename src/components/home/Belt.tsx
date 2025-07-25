import React from 'react'
import data from '@/lib/data'


function Belt() {
  
  return (
    <div className='w-full hidden md:flex flex-row justify-evenly py-4 my-[50px] bg-gradient-to-r from-purple-700 to-blue-700'>
        {data.belt.map((b,j)=>(
                 <h1 key={j}  className='font-[200] uppercase'>{b.name}   -</h1>
        ))}
     
    </div>
  )
}

export default Belt