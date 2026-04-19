'use client'
import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from "gsap";
import { transform } from 'framer-motion';
// import './TiltText.css'


const TiltText = () => {
    useGSAP(() => {
        const tl = gsap.timeline()
        tl.from(".topheadingtexttilt", {
            transform: "rotateX(90deg)",
            opacity: 0,
            duration: 2.4,
            stagger: 1,
            delay: 2,
            ease: "power3.out",

        })
        tl.fromTo(".seconddivtilttext", {
            width: 0,
            opacity: 0
        }, {
            width: window.innerWidth < 768 ? "75vw" : "40vw",
            // width: "40vw",
            duration: 1,
            opacity: 1,
            ease: "power1.inOut"
        })
        tl.fromTo(".midtilttext",
            { scale: 0.5, opacity: 0 },   // starting state
            { scale: 1, opacity: 1, duration: 2, ease: "power4.out" } // ending state
        );

        tl.from(".lastdivtilttext", {
            y: 50,
            duration: 1,
            opacity: 0,
            stagger: 1,
            ease: "power1.inOut"

        })
    })
    // const tl = gsap.timeline()

    // useGSAP(() => {
    //     gsap.from(".midtilttext, .topheadingtexttilt", {
    //         transform: "rotateX(90deg)",
    //         opacity: 0,
    //         duration: 2.4,
    //         stagger: 1,
    //         delay: 2,
    //         ease: "power3.out",

    //     })
    // })
    return (
        <div className='flex'>
            <div
                id="tiltDiv"

                className="uppercase
                 lg:pl-[5vw] lg:ml-0 ml-[-8vw]
                     flex flex-col justify-center items-center gap-0 
                      lg:mt-[10vw] "
            >
                <div style={{ perspective: "33000px", transformStyle: "preserve-3d" }} className="   text-[4vw] lg:text-[1.5vw] mt-[9vh] lg:mt-[6vh] topheadingtexttiltdiv">
                    <h1 className="font-bold font-[anzo1]  text-white topheadingtexttilt">
                        Hafiz-Maaz-Studio | Web Developer
                    </h1>
                </div>
                <div className="border-b-4  text-center  border-white w-[75vw]  lg:w-[40vw] seconddivtilttext"></div>
                <div className=" text-center font-[anzo3] leading-none midtilttext  midtilttextdiv" >
                    <h1 className="text-white   lg:ml-[0.1vw] ml-[-11vw] lg:text-[15vw] midtilttextdivtext"> <span className='text-[35vw] lg:text-[15vw] lg:font-[anzo3] font-[Mobile-Device1] ' > HM </span>  <span className='font-[Mobile-Device2] text-[23vw] lg:text-[15vw] lg:font-[anzo3]'>  Studio  </span> </h1>
                </div>

                <div className="lastdivtilttext lg:text-[1.3vw] text-[8.5vw]  font-[anzo1] leading-none ">
                    <h1 className="text-white  lastdivtilttexttext">
                        For Those Defining the Future of industries
                    </h1>
                </div>
            </div>
        </div>



    )
}

export default TiltText
