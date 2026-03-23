import React from 'react'
import Hero from '../Hero'
import WhatWeDo from '../WhatWeDo'
import OurServices from '../OurServices'
import AnimatedText from '../AnimatedText'

function Home() {
  return (
    <> 
    <div className='mt-[8vw]'>
      <Hero/>
      <AnimatedText/>
      <WhatWeDo/>
      <OurServices/>
    </div>     
    </>
  )
}

export default Home
