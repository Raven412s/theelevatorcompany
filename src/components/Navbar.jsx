"use client"
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import {useWindowScroll} from 'react-use'
import gsap from 'gsap'
import Link from 'next/link'
const navItems = ['Customizations-and-Range',  'About', ]
import Rounded from '@/components/common/RoundedButton'

const Navbar = () => {
const navContainerRef = useRef(null)

const [lastScrollY, setLastScrollY] = useState(0)
const [isNavVisible, setIsNavVisible] = useState(true)
const { y: currentScrollY} = useWindowScroll()

useEffect(() => {
    if (currentScrollY === 0) {
        setIsNavVisible(true)
        navContainerRef.current.classList.remove('floating-nav')
    } else if (currentScrollY > lastScrollY){
        setIsNavVisible(false)
        navContainerRef.current.classList.add('floating-nav')
    } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true)
        navContainerRef.current.classList.add('floating-nav')
    }

    setLastScrollY(currentScrollY)
}, [currentScrollY, lastScrollY])

useEffect(() => {
    gsap.to(navContainerRef.current,{
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2
    })
}, [isNavVisible])



  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border border-transparent  !rounded-[1.2rem] transition-all duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2  '>
            <nav className='flex size-full  items-center justify-start '>
                <div className='flex items-center gap-7 self-start '>
                    <a href="/">
                    <img src="/images/the-elevator-company.png" alt="logo" className='w-16' />
                    </a>
                    <Rounded >
                    <p className='flex gap-3 !max-w-max items-center justify-start'>Products <TiLocationArrow/></p>
                    </Rounded>
                </div>
                <div className="flex h-full items-center ">
                    <div className="hidden md:block">
                        {navItems.map((item)=>(
                            <Link href={`/${item.toLowerCase()}`} key={item} className='nav-hover-btn !text-sm  '>{item}</Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar
