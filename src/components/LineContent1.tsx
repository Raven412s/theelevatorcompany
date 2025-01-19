import React from 'react'
import AnimatedText from '@/components/animated/AnimatedText'

const LineContent1 = () => {
  return (
    <div className="flex w-full gap-3 justify-between px-10 py-16">
    <h3 className="text-7xl mx-8 font-semibold max-w-[350px]"><AnimatedText phrase={"WHAT WE CREATE"}/></h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" viewBox="0 0 24 24">
      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
    </svg>

<div className="flex flex-col items-start w-3/5">
  <div className="flex justify-start items-end mb-6">
    <p className="text-2xl mt-2">Luxury Home Lifts</p>
    <div className="w-[1px] h-8 bg-gray-400 ml-5" />
    <p className="text-xl align-baseline  ml-6">
    FELIX, FELIX 2.0, CLIMBER X, PNEUMATIC VACUUM.
    </p>
  </div>
  <div className="flex justify-start items-end">
    <p className="text-2xl mt-2">Commercial Lifts</p>
    <div className="w-[1px] h-8 bg-gray-400 ml-[33px]" />
    <p className="text-xl align-baseline  ml-8">
    ELIVIO, ELIVIO 2.0, ELEVENTRA.
    </p>
  </div>
</div>
</div>
  )
}

export default LineContent1
