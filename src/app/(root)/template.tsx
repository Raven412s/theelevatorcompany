"use client"
import { AnimatePageIn, AnimatePageOut } from '@/utils/animations'
import React, { useEffect } from 'react'

export default  function Template  ({children}:{children: React.ReactNode})  {
    useEffect(() => {
        AnimatePageIn();
    }, [])

  return (
    <div>
        <div id="banner1" className='min-h-screen bg-[#f5f5f5] z-[9999] fixed top-0 w-1/4 left-0' />
        <div id="banner2" className='min-h-screen bg-[#f5f5f5] z-[9999] fixed top-0 w-1/4 left-1/4' />
        <div id="banner3" className='min-h-screen bg-[#f5f5f5] z-[9999] fixed top-0 w-1/4 left-2/4' />
        <div id="banner4" className='min-h-screen bg-[#f5f5f5] z-[9999] fixed top-0 w-1/4 left-3/4' />
        {children}
    </div>
  )
}
