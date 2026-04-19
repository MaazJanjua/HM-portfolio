"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import React from 'react'
import Link from "next/link";
import { RiWhatsappLine } from "react-icons/ri";
// import Contact from '@/app/contact/page.js'

const page = () => {

  const midRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger);


  useGSAP(() => {
    gsap.fromTo(midRef.current, { height: '2vh',opacity:0 },
      {
        height: '29vh',
        duration: 1,
        ease: "power3.out",
        opacity: 1,
        scrollTrigger: {
          trigger: midRef.current,
          start: "top 90%",  // jab footer viewport me aaye
          end: "top 10%",
          scrub: true, // smooth scroll animation

          // stagger: true,
        },
      }
    )
  })



  return (
    <>
      <div className='bg-gray-950 text-white lg:h-auto h-auto flex flex-col  items-center lg:pb-[6vh] py-[2vh]'>


        {/* Div NO# 1 */}
        <div>
          <h1 className='text-[8vw] uppercase font-[Mobile-Device1]'>lets do work</h1>
        </div>

        {/* Div NO# 2 */}
        <div ref={midRef} className='footermiddiv bg-sky-950  w-[88vw] rounded-[1.2vw] flex justify-center items-center text-center uppercase text-[1vw] font-[anzo1]'>
          {/* <Contact /> */}
          <h1 ref={midRef} className="footermiddiv opacity-70">Owner-img-loading***</h1>
        </div>


        {/* Div NO# 3 */}
        <div className='flex justify-between w-[88vw] py-[4vh]'>
          <div className="lg:flex justify-between w-[48vw] items-start">
            <div className='lg:leading-12 leading-6'>
              <h1 className='uppercase lg:text-[1.2vw] text-[4.4vw] font-[anzo1] font-extrabold'>explore</h1>
              <Link
                href="/"
                className="uppercase lg:text-[.7vw] text-[3vw] font-[anzo1] hover:text-cyan-300"
              >
                home
              </Link>

              <Link href="/projects">
                <h1 className="uppercase lg:text-[.7vw] text-[3vw] font-[anzo1] hover:text-cyan-300">
                  Our-Work
                </h1>
              </Link>

              <Link href="/services">
                <h1 className="uppercase lg:text-[.7vw] text-[3vw] font-[anzo1] hover:text-cyan-300">
                  Our-services
                </h1>
              </Link>


              <Link href="/services">
                <h1 className="uppercase lg:text-[.7vw] text-[3vw] font-[anzo1] hover:text-cyan-300">
                  About-Us
                </h1>
              </Link>
              <Link href="/centectus">
                <h1 className="uppercase lg:text-[.7vw] text-[3vw] font-[anzo1] hover:text-cyan-300">
                  Contect-Us
                </h1>
              </Link>
              <div className="flex lg:items-center lg:justify-center items-start text-center gap-[.5vw]">
                <div><RiWhatsappLine /></div>
                <h1 className='uppercase lg:text-[.7vw] text-[3vw] font-[anzo1] '>03349521459</h1></div>
            </div>


            <div className='flex flex-col lg:leading-12 leading-4 lg:pt-0 pt-4 text-center justify-center  items-start '>
              <h1 className='uppercase lg:text-[1.2vw] text-[3vw] font-[anzo1] font-extrabold'>follow</h1>
              <div className="grid grid-cols-3 gap-2 lg:flex lg:flex-col text-start">
                <a href="https://www.instagram.com/muhammad.maaz.rajpoot/" target="_blank" rel="noopener noreferrer" className='uppercase lg:text-[.7vw] text-[2vw] font-[anzo1] underline hover:text-blue-600'>
                  Instagram
                </a>

                <a href="https://www.facebook.com/profile.php?id=100051346220876" target="_blank" rel="noopener noreferrer" className='uppercase lg:text-[.7vw] text-[2vw] font-[anzo1] underline hover:text-blue-600'>
                  Facebook
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='uppercase lg:text-[.7vw] text-[2vw] font-[anzo1] underline hover:text-blue-600'>
                  LinkedIn
                </a>

                <a href="https://www.tiktok.com/@maazrajpoot256" target="_blank" rel="noopener noreferrer" className='uppercase lg:text-[.7vw] text-[2vw] font-[anzo1] underline hover:text-blue-600'>
                  TikTok
                </a>

                <a href="https://github.com/MaazJanjua" target="_blank" rel="noopener noreferrer" className='uppercase lg:text-[.7vw] text-[2vw] font-[anzo1] underline hover:text-blue-600'>
                  GitHub
                </a>
              </div>

            </div>

          </div>

          <div className=' text-end lg:leading-10 leading-6'>
            <h1 className='uppercase lg:text-[1.2vw] text-[4vw] font-[anzo1] font-extrabold  spacing'>Terms/Pages</h1>



            <Link href="/privacy">
              <h1 className="uppercase lg:text-[.7vw] text-[2.9vw] font-[anzo1] underline hover:text-blue-400">
                Privacy Policy
              </h1>
            </Link>
            <Link href="/terms">
              <h1 className="uppercase lg:text-[.7vw] text-[2.9vw] font-[anzo1] underline hover:text-blue-400">
                Terms & Conditions

              </h1>
            </Link>
            <Link href="/refund">
              <h1 className="uppercase lg:text-[.7vw] text-[2.9vw] font-[anzo1] underline hover:text-blue-400">
                Refund Policy

              </h1>
            </Link>
            <Link href="/servicepolicy">
              <h1 className="uppercase lg:text-[.7vw] text-[2.9vw] font-[anzo1] underline hover:text-blue-400">
                Service Policy
              </h1>
            </Link>

          </div>
        </div>

        {/* Div NO# 4 */}
        <div className='flex justify-between w-[88vw] lg:text-[.8vw] text-[2.2vw] font-[anzo1] capitalize'>
          <div> <h2>© 2026 Hafiz-Maaz . All rights reserved.</h2></div>
          {/* <div className="flex justify-center text-center">
            <Link href="/terms">
              <h1 className="uppercase text-[.7vw] font-[anzo1] underline hover:text-cyan-300">
                Terms & Conditions
              </h1>
            </Link>
          </div> */}
          <div >
            <h1> under-development</h1>
          </div>
          <div> <h2> site by Hafiz-Maaz</h2></div>
        </div>
      </div>
    </>
  )
}

export default page
