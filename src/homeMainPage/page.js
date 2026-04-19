import React, { useRef, useState } from 'react'

import TiltText from '../components/homePageParts/titleText.js'
import HomeIcons from '@/components/homePageParts/HomeIcon.js'
import SideTilt from '@/components/homePageParts/SideTitle.js'
const Page1 = () => {

  return (
    <div className='' data-scroll-container >
      <div
        data-scroll data-scroll-container data-scroll-speed="1"
        id="page1-in"
        className="h-screen  lg:w-full lg:h-screen static flex justify-center items-center lg:p-4 py-[10vh]  bg-gray-950   "
      >
        <div className="pl-9 pt-7 h-[91vh] shadow-xl shadow-sky-950 bg-cover rounded-[37px] bg-gray-900 w-[97vw] 
       ">
          {/* <img className=" relative bottom-0 text-4xl h-44 mb-6" src={HeaderImg} alt="logo" /> */}
          <TiltText />
          <HomeIcons />
          <SideTilt />
        
        </div>
      </div>
    </div>
  )
}

export default Page1


// import React from 'react'

// const page = () => {
//   return (
//     <div>
//       home
//     </div>
//   )
// }

// export default page
