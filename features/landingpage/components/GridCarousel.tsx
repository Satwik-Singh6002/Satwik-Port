import { Skiper30 } from '@/components/ui/skiper-ui/skiper30'
import React from 'react'

const GridCarousel = () => {
  const image = [
    "/photo1.jpg",   // Column 1
    "/photo2.jpg",
    "/photo3.jpg",
    "/photo4.jpg",   // Column 2
    "/photo5.jpg",
    "/photo6.jpeg",
    "/photo7.jpeg",  // Column 3
    "/photo8.jpeg",
    "/photo9.jpeg",
    "/photo6.jpeg",  // Column 4
    "/photo7.jpeg",
    "/photo8.jpeg",
  ];
  return (
    <div className="relative">
      <Skiper30 img={image} />
    </div>
  )
}

export default GridCarousel
