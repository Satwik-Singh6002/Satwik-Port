import React from 'react'
import { Skiper58, TextRoll } from '@/components/ui/skiper-ui/skiper58'
import { ColorTheme } from '@/lib/theme'
import { bodoniModa, geist, inter, notoSansDevanagari, pacifico, pixelifySans, rozhaOne, yatraOne } from '@/lib/fonts';
import { CrowdCanvas } from '@/components/ui/skiper-ui/skiper39';
import { h1 } from 'framer-motion/client';
import { SpringMouseFollow } from '@/components/ui/skiper-ui/skiper61';
import DynamicText from '@/components/kokonutui/dynamic-text';



const Hero = () => {
  const { bgPrimary, bgSecondary, textPrimary, textSecondary, border } = ColorTheme();

  return (
    <div
      style={{
        background: "radial-gradient(125% 125% at 50% 90%, #000000 40%, #0d1a36 100%)",
      }}

      className={` relative  h-full  flex-col  w-full flex justify-center items-center `}>

      <div className={` px-2 sm:px-4 md:px-0 w-full max-w-full z-70 absolute top-14 sm:top-18 flex flex-col overflow-hidden`}>
        {/* <TextRoll  className={` ${textSecondary}   ${bodoniModa.className} text-9xl pb-0  pt-0 mb-2 h-full `} center >
        HELLO
        </TextRoll> */}
        <DynamicText>

        </DynamicText>
        <div className=' w-full flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 '>
          <div className=' '>
            <TextRoll className={` ${textPrimary} ${geist.className} text-amber-300 font-medium text-4xl sm:text-6xl md:text-8xl `} center >
              i'm
            </TextRoll>
          </div>

          <TextRoll className={` ${textPrimary} ${geist.className} font-medium text-4xl sm:text-6xl md:text-8xl `} center >
            SATWIK
          </TextRoll>
        </div>



      </div>
      <div className="relative min-h-[50vh] sm:min-h-screen h-screen z-50 w-full overflow-hidden">
        <CrowdCanvas src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/open-peeps-sheet.png' rows={15} cols={7} />
      </div>




    </div>
  )
}

export default Hero
