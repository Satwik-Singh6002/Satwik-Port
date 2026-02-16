import React from 'react'
import {
  AnimatedNumber_002,
  AnimatedNumber_003,

} from '@/components/ui/skiper-ui/skiper37'
import { div } from 'framer-motion/client'
import { cormorant_garamond, geist, inter, pacifico, playfair_Display, poppins, yatraOne } from '@/lib/fonts'
import { SlidingNumber } from '@/components/motion-primitives/sliding-number'
import CardFlip from '@/components/kokonutui/card-flip'
import ShimmerText from '@/components/kokonutui/shimmer-text'
const MyDetails = () => {
  const data = [
    {
      title: "Projects Built",
      subtitle: "Turning ideas into reality",
      value: 4,
      numberIn: 10,
      emptyRgba: "rgba(255, 99, 132, 0.5)",
      halfRgba: "rgba(255, 99, 132, 0.5)",
      fullRgba: "rgba(255, 99, 132, 0)",
      features: ["Clean and Green", "Py Chatbot", "E-Commerce", "Portfolio"]
    },
    {
      title: "Class XII Percentage",
      subtitle: "Specialized in MPCS",
      value: 76,
      numberIn: 10,
      emptyRgba: "rgba(255, 159, 64, 0.5)",
      halfRgba: "rgba(255, 159, 64, 0.5)",
      fullRgba: "rgba(255, 159, 64, 0)",
      features: ["Mathematics", "Physics", "Computer Science"]

    },
    {
      title: "Certifications",
      subtitle: "Continuous Learning",
      value: 3,
      numberIn: 10,
      emptyRgba: "rgba(255, 205, 86, 0.5)",
      halfRgba: "rgba(255, 205, 86, 0.5)",
      fullRgba: "rgba(255, 205, 86, 0)",
      features: ["Back End Web Dev", "Google", "Codesignal"]
    },
    {
      title: "Coding Languages",
      subtitle: "My Tech Stack",
      value: 5,
      numberIn: 10,
      emptyRgba: "rgba(57, 255, 20, 0.9)  ",
      halfRgba: "rgba(57, 255, 20, 0.9)  ",
      fullRgba: "rgba(57, 255, 20, 0)  ",
      features: ["Python", "JavaScript", "React.js", "HTML5", "CSS3"]
    },
    {
      title: "Internships",
      subtitle: "Professional Experience",
      value: 1,
      numberIn: 10,
      emptyRgba: "rgba(153, 102, 255, 0.5)",
      halfRgba: "rgba(153, 102, 255, 0.5)",
      fullRgba: "rgba(153, 102, 255, 0)",
      features: ["IITianCraft", "Web Developer", "React App"]
    }

  ]
  return (
    <div

      style={{
        background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
      }}


      className=' pb-10 md:pb-15 pt-6 md:pt-10 px-2 sm:px-4 overflow-hidden'>
      <div className=" flex justify-center flex-col mt-20 md:mt-30 mb-10 md:mb-15 ">
        <ShimmerText className='  text-3xl sm:text-5xl md:text-6xl' text={"MY STATS"} />
        {/* <ShimmerText className=' text-5xl' text={"THIS YEAR"} /> */}
      </div>
      <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto'>
        {
          data.map((item, i) => (
            <div key={i} className=' text-white flex flex-col items-center  '>

              {/* <h1 className={` ${geist.className} text-center  font-medium text-5xl`}>{item.title}</h1>
               <AnimatedNumber_003  data={item.value} des={item.numberIn} />
               <SlidingNumber value={10000}/> */}
              <CardFlip description={`${item.value}`} title={item.title} key={i} subtitle={item.subtitle} features={item.features} />



            </div>

          ))
        }


      </div>

      {/* <AnimatedNumber_002/> */}
    </div>
  )
}

export default MyDetails
