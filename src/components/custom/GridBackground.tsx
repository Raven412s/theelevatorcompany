import React, { PropsWithChildren } from 'react'

const GridBackground = ({children}:PropsWithChildren) => {
  return (
    <div className="h-full py-24 w-full  bg-grid-golden-400/[0.5]  relative flex items-center justify-center">
    {/* Radial gradient for the container to give a faded look */}
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        {children}
  </div>
  )
}

export default GridBackground
