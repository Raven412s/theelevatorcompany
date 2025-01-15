import React from 'react'
import "@/styles/entry.css";
const AnimatedEntry = ({className}) => {
  return (
    <>
            <h1  className={`${className}  relative overflow-hidden h-[50rem]  flex items-end  justify-center ml-2 w-[100vw] px-4 `}>
        <span className=" letters l1">v</span>
        <span className=" letters l2">I</span>
        <span className=" letters l3">a</span>
        <span className=" letters l4">c</span>
        <span className=" letters l5">a</span>
        <span className=" letters l6">m</span>
        <span className="letters absolute bottom-[2vh]  !text-6xl right-20  l7">Productions</span>
    </h1>
    </>
  )
}

export default AnimatedEntry
