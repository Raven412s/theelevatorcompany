import clsx from 'clsx'
import React, { PropsWithChildren, RefObject } from 'react'

interface boundedProps extends PropsWithChildren  {
    className?: string

}

const Bounded = ({children, className}: boundedProps) => {
  return (
    <section
    className={clsx("h-screen w-full px-4 py-8 mx-auto my-8 sm:px-6 sm:py-4 sm:mx-auto sm:my-2 md:px-8 md:py-6 md:mx-auto md:my-4 lg:px-10 lg:py-8 lg:mx-auto lg:my-6 ", className)}>
    <div className="h-full w-full flex items-center justify-center flex-col px-2 py-4 mx-auto my-4 sm:px-2 sm:py-4 sm:m-2 md:px-4 md:py-6 md:m-4 lg:px-5 lg:py-8 lg:mx-auto lg:my-6 ">
        {children}
    </div>
   </section>
  )
}

export default Bounded
