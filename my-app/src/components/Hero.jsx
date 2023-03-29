import React from 'react'
import {
    CloudUploadIcon,
    DatabaseIcon,
    PaperAirplaneIcon,
    ServerIcon,
} from '@heroicons/react/solid'

import smImg from '../images/small_img.jpg'
import bgImg from '../images/big_img.jpg'

const Hero = () => {
  return (
    <div>
      <img className='w-screen' src={smImg}/>
      <img className='w-screen' src={bgImg}/>
    </div>
  )
}

export default Hero
