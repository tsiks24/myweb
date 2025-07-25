'use client'

import { useState, useEffect } from 'react'
import React from 'react'
import Btn from '../Btn'
import { APP_NAME } from '@/lib/constants'
import data from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'
import SideNav from '../SideBar'

function Navbar() {

const [isScrolled, setIsScrolled] = useState(false);

const handleScroll = () => {
    setIsScrolled(window.scrollY > 60); 
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`w-full justify-center items-center py-10 flex flex-col bg-transparent backdrop-blur-3xl ${isScrolled ? 'fixed z-[100] transition-transform' : 'relative '} `}>
         <div className='flex flex-row w-[95%] lg:w-[80%] '>
               <div className='w-[20%]'>
                 <Image width={1000} height={1000} src={'/'} className='w-[200px] h-[50px]' alt={`${APP_NAME} logo`}/>
               </div>
               <div className='w-[80%] md:flex flex-row justify-evenly hidden '>
                {data.menu.map((nav,i) => (
               <Link
                 href={nav.href}
                 key={i}
                 className=' !p-2'
               >
                 {nav.name}
               </Link>
             ))}
               </div >
               <div><SideNav/></div>
               <div className='w-[20%]'>
                <Btn text='Get In Touch' href='/' />
               </div>
         </div>
    </div>
  )
}

export default Navbar