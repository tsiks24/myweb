import React from 'react'


interface Props {
    
    
    name:string;
  

}


const Card = ({name}:Props) => {
  return (
    <div className='cursor-pointer w-full bg-[#151515] rounded-md flex messi h-[200px] relative justify-center items-center flex-col p-[20px]'>
         <div className='w-full cr7 absolute rounded-md top-0 opacity-70 bg-[#1602ce] z-10'></div>
          <div className='z-20'>{name}</div>
    </div>
  )
}

export default Card