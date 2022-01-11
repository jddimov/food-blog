import { useState } from 'react'
import Carousel from './carousel/Carousel'
import one from './pics/(1).jpg'
import two from './pics/(2).jpg'
import three from './pics/(3).jpg'
import four from './pics/(4).jpg'
import five from './pics/(5).jpg'
import six from './pics/(6).jpg'

function Test() {
  const slides = [
    // "https://picsum.photos/id/1032/1280/400",
    // "https://picsum.photos/id/1033/1280/400",
    // "https://picsum.photos/id/1037/1280/400",
    // "https://picsum.photos/id/1035/1280/400",
    // "https://picsum.photos/id/1036/1280/400",
    five,
    
  ]

  return (
    <div className="container" >
      <Carousel slides={slides} controls indicators  />
    </div>
  )
}

export default Test
