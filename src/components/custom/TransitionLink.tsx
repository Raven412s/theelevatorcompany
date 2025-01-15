"use client"
import Link, { LinkProps } from 'next/link'
import React, { ReactNode } from 'react'
import { usePathname, useRouter } from "next/navigation";
import { AnimatePageOut } from '@/utils/animations';

interface Props extends LinkProps {
    children: ReactNode;
    href: string;
}

function sleep(ms:number): Promise<void>{
    return new Promise((resolve) =>setTimeout(resolve, ms))
}

const TransitionLink = ({href, children, ...props}: Props) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if(pathname !== href){
            await sleep(200)
            AnimatePageOut(href, router)
            await sleep(200)
        }
    }
  return (
    <Link
    onClick={handleTransition}
     href={href}
      {...props}>
        {children}
    </Link>
  )
}

export default TransitionLink
