'use client'


import * as React from 'react'
import Link from 'next/link'
import { LayoutGrid } from 'lucide-react'
import data from '@/lib/data'



import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'


export default function SideNav (){
 
  return (
    <Drawer  direction='right' >
      <DrawerTrigger className='header-button flex items-center !p-2   '>
        <LayoutGrid className='h-5 w-5 mr-1 text-white' />
      
      </DrawerTrigger>
      <DrawerHeader>
              <DrawerTitle className='flex items-center'>
                
               
              </DrawerTitle>
              <DrawerDescription></DrawerDescription>
            </DrawerHeader>
      <DrawerContent className='border-none w-[350px] mt-0 top-0 bg-gradient-to-bl from-purple-950 to-[blue] text-white z-100'>
        <div className='flex flex-col h-full'>
         
          <div className=' text-foreground flex items-center justify-between  '>
           
         
          </div>

        
          <div className='flex-1 overflow-y-auto'>
            
            <nav className='flex flex-col pl-[40px] pt-[40px] text-white'>
              {data.menu.map((l,id) => (
                <DrawerClose asChild key={id}>
                  <Link
                    href={l.href}
                    className={`flex items-center justify-between item-button`}
                  >
                    <h2 className='p-2'>{l.name}</h2>
                   
                  </Link>
                </DrawerClose>
              ))}
            </nav>
          </div>

        
        
        </div>
      </DrawerContent>
    </Drawer>
  )
}