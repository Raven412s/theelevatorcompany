"use client"
import { AnimatePageIn, AnimatePageOut } from '@/utils/animations'
import React, { useEffect } from 'react'

export default function Template ({children}:{children: React.ReactNode}) {
  useEffect(() => {
    AnimatePageIn();
     }, [])

 return (
<div className="relative"> {/* Add relative to the parent container */}
  <div id="banner1" className='min-h-screen bg-[#f5f5f5] z-[9999] absolute top-0 left-0 w-25vw' />
  <div id="banner2" className='min-h-screen bg-[#f5f5f5] z-[9999] absolute top-0 left-25vw w-25vw' />
  <div id="banner3" className='min-h-screen bg-[#f5f5f5] z-[9999] absolute top-0 left-50vw w-25vw' />
  <div id="banner4" className='min-h-screen bg-[#f5f5f5] z-[9999] absolute top-0 left-75vw w-25vw' />
    {children}
 </div>
 )
}
