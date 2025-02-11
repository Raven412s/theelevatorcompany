import React from 'react'
import Line from './custom/Line'
import LineContent1 from './LineContent1'
import Bounded from './common/Bounded'

function LineWDets1() {
  return (
    <Bounded
    className='
    !mx-0 !px-0 !pb-0 !mb-0
    sm:!mx-0 sm:!px-0 sm:!pb-0 sm:!mb-0
    md:!mx-0 md:!px-0 md:!pb-0 md:!mb-0
    lg:!mx-0 lg:!px-0 lg:!pb-0 lg:!mb-0
    '>
    <Line gap='my-2' />
     <LineContent1/>
    <Line gap='my-2' />
    </Bounded>
  )
}

export default LineWDets1
