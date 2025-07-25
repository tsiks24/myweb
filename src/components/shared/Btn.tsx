import React from 'react'
import Link from 'next/link'

interface Props {
    href:string;
    text:string;
    
}


const Btn = ({href, text}:Props) => {
  return (
    <div>
                  <Link href={href}>
                              <div className='card   '>
        
                        <p className='absolute font-semibold left-[20%] top-[30%] z-10'>{text}</p>
                        <div className='overlay border-t-[50px] border-[#1602ce]'></div>
                        <div className='overlay2 border-b-[50px] border-[#1602ce]'></div>
                        
      
                         </div>
                   </Link>

       
   
    </div>
    
  )
}

export default   Btn