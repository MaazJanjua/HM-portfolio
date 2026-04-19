'use client'

import { ReactLenis } from 'lenis/react'
import ProjectCardPage from '@/app/projects/page.js'
import React, { useEffect, useRef } from 'react';
import Home from '@/homeMainPage/page.js'
import Services from "@/app/services/page.js";
import FlipText from '../../src/cleanText/page.js'
// import textPage from '@/cleanText/page.js'
// import PageClean from '@/cleanText/page.js'

import './globals.css'

const Page = () => {
  // const scrollContainerRef = useRef(null);
  // const introRef = useRef(null); 
  // useEffect(() => {
  //   let locomotiveScroll;

  //   const initLocomotive = async () => {
  //     if (typeof window === 'undefined') return;

  //     const LocomotiveScroll = (await import('locomotive-scroll')).default;


  //     const waitIntro = setInterval(() => {
  //       if (!introRef.current || introRef.current.style.display === 'none') {
  //         clearInterval(waitIntro);

  //         locomotiveScroll = new LocomotiveScroll({
  //           el: scrollContainerRef.current,
  //           smooth: true,
  //           multiplier: 1,
  //           class: 'is-reveal',
  //         });
  //       }
  //     }, 50);
  //   };

  //   initLocomotive();

  //   return () => {
  //     if (locomotiveScroll) locomotiveScroll.destroy();
  //   };
  // }, []);

  return (
    <>
      <ReactLenis root />
      <main className='bg-gray-950'
      //  ref={scrollContainerRef}
      >
        <Home />
        {/* <PageClean /> */}
        <FlipText/>
        <div className='hidden sm:block '>
        <ProjectCardPage />
        </div> 
        <Services />
      </main>
    </>
  );
};

export default Page;

