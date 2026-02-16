"use client"
import ShimmerText from '@/components/kokonutui/shimmer-text';
import { TextLoop } from '@/components/motion-primitives/text-loop';
import { Carousel_002 } from '@/components/ui/skiper-ui/skiper48';
import React, { useState } from 'react'


const SuffelCard = () => {
  const [cIn, setcIn] = useState(0);
  const images = [
    {
      src: "https://i.pinimg.com/736x/c0/8a/80/c08a8026aba7b3e8e6d905b2416a56be.jpg",
      alt: "FAV SWEET",
    },
    {
      src: "https://i.pinimg.com/736x/7e/4c/5a/7e4c5a682427c8a47e2c7a46365763f7.jpg",
      alt: "FAV CITY",
    },
    {
      src: "https://i.pinimg.com/736x/8e/47/d0/8e47d0bd73dafa1d339cb2b2b13c2b7e.jpg",
      alt: "FAV COLOR",
    },
    {
      src: "	https://i.pinimg.com/736x/59/ee/40/59ee4047d303d7ccf7d9cd16fc3d864c.jpg",
      alt: "FAV HOBBY",
    }, {
      src: "https://i.pinimg.com/1200x/ec/da/d9/ecdad9e6f73970d0ba23ddc7ebc9128d.jpg",
      alt: "MY BEHAVIOUR",
    },
    {
      src: "https://i.pinimg.com/736x/77/4f/1b/774f1bd62a8b721ae3c62dc8cb0a53d6.jpg",
      alt: "FAV PLAYER",
    },
    // ... more images 	
  ];
  return (
    <div
      style={{
        background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
      }}
      className=' w-full flex flex-col md:flex-row pt-6 md:pt-10 px-2 sm:px-4 overflow-hidden' >
      <div className=' w-full grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 items-center justify-items-center' >
        <ShimmerText className=' text-4xl sm:text-6xl md:text-7xl order-2 md:order-1' text={images[cIn].alt.split(" ")[0]} />
        <Carousel_002
          className=' order-1 md:order-2 w-full max-w-full'
          cIndex={(i) => { setcIn(i % images.length) }}
          images={images}
          showPagination={true}
          showNavigation={true}
          loop={true}
          //autoplay={true}
          spaceBetween={40}
        />

        <ShimmerText className=' text-amber-300 text-4xl sm:text-6xl md:text-7xl order-3' text={images[cIn].alt.split(" ")[1]} />
      </div>


    </div>
  )
}

export default SuffelCard
