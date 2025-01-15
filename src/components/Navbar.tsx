import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import TransitionLink from './custom/TransitionLink'

const Navbar = () => {
  return (
    <nav className='top-0 fixed z-[9999] w-full flex space-x-8 gap-4 h-[4rem] bg-black text-white items-center justify-start'>
        <TransitionLink href={"/"}>
         <Image src="/images/the-elevator-company.png" alt={"logo"} width={80} height={80}  />
        </TransitionLink>
        <TransitionLink href={"/about"}>About</TransitionLink>
        <TransitionLink href={"/products"}>Products</TransitionLink>
        <TransitionLink href={"/customizations-and-range"}>Customizations & Range</TransitionLink>
    </nav>
  )
}

export default Navbar
