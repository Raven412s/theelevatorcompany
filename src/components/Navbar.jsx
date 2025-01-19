"use client"
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import {useWindowScroll} from 'react-use'
import gsap from 'gsap'
const navItems = ['Nexus', "Vault", 'Prologue', 'About', 'Contact']

const Navbar = () => {
const navContainerRef = useRef(null)
// const audioElementRef = useRef(null)
// const [isAudioPlaying, setIsAudioPlaying] = useState(false)
// const [isIndicatorActive, setIsIndicatorActive] = useState(false)
const [lastScrollY, setLastScrollY] = useState(0)
const [isNavVisible, setIsNavVisible] = useState(true)
const { y: currentScrollY} = useWindowScroll()
// const toggleAdioIndicator = ()=>{
//     setIsAudioPlaying((prev)=>!prev)
//     setIsIndicatorActive((prev)=>!prev)
// }

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


// useEffect(() => {
//   if (isAudioPlaying) {
//     audioElementRef.current.play();
//   } else {
//     audioElementRef.current.pause();
//   }
// }, [isAudioPlaying])
  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border border-golden-400 !rounded-[1.2rem] transition-all duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2  '>
            <nav className='flex size-full  items-center justify-start '>
                <div className='flex items-center gap-7 self-start '>
                    <a href="/">
                    <img src="/images/the-elevator-company.png" alt="logo" className='w-16' />
                    </a>
                    <Button
                        id={'product-button'}
                        title={"Products"}
                        rightIcon={<TiLocationArrow/>}
                        containerClass={"bg-north-50 md:flex hidden items-center justify-center gap-1"}
                    />
                </div>
                <div className="flex h-full items-center ">
                    <div className="hidden md:block">
                        {navItems.map((item)=>(
                            <a href={`/${item.toLowerCase()}`} key={item} className='nav-hover-btn !text-sm  '>{item}</a>
                        ))}
                    </div>
                    {/* <button className='ml-10 flex items-center space-x-0.5' onClick={toggleAdioIndicator} >
                        <audio ref={audioElementRef} className='hidden' src='/audio/loop.mp3' loop/>
                        {[1,2,3,4].map((bar)=>(
                            <div className={`indicator-line ${isIndicatorActive ? 'active' : ' '} `} key={bar} style={{animationDelay: `${bar*0.1}s`}}/>
                        ))}
                    </button> */}
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Navbar
