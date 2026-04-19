'use client'
import "./cleanText.css";

import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Page2 = () => {

    const containerRef = useRef(null);

    useGSAP(() => {

        const ctx = gsap.context(() => {

            // =============================
            // Typing Animation
            // =============================
            gsap.to(".typing-text", {
                duration: 2,
                ease: "power4.out",
                text: {
                    value: `
                        <span class='text-cyan-500'>©</span>
                        2026 HM.Studio<span class='text-cyan-950'>®</span> | 
                        <i class="ri-map-pin-line text-cyan-500"></i> PAKISTAN, ISLAMABAD |  
                        <i class="ri-gemini-fill text-cyan-500"></i> Sharefabad | Iqra Road
                    `,
                    parseHTML: true
                },
                scrollTrigger: {
                    trigger: ".typing-text",
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });

            // =============================
            // Flip Animation (ALL ELEMENTS TOGETHER)
            // =============================
            gsap.from(".rotateText", {
                rotateX: -60,
                y: 120,
                opacity: 0,
                transformOrigin: "top center",
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".rotateText",
                    start: "top 70%",
                }
            });

        }, containerRef);

        return () => ctx.revert(); // 🔥 IMPORTANT cleanup

    }, []);

    return (
        <div
            ref={containerRef}
            id='quoteSection'
            className='uppercase bg-gray-950 text-center p-3 lg:p-20 text-sky-950'
        >

            <div>

                <div className="textdiv">
                    <h3 className="typing-text text-gray-500 text-[2.8vw] lg:text-[1.8vw] font-[anzo1] tracking-widest pt-3"></h3>
                </div>

                <div className='lg:mt-[15vh] mt-[4vh] rotateText'>
                    <h1 className='text-[32vw] font-[anzo3] leading-[31vw]'>Clean Code</h1>
                </div>

                <div className='rotateText'>
                    <h1 className='text-[32vw] font-[anzo3] leading-[31vw]'>
                        <span className='border1'>defines</span>
                    </h1>
                </div>

                <div className='rotateText'>
                    <h1 className='text-[32vw] font-[anzo3] leading-[31vw]'>what</h1>
                </div>

                <div className='rotateText'>
                    <h1 className='text-[28vw] font-[anzo3] leading-[29vw]'>
                        <span className="border1">development</span>
                    </h1>
                </div>

                <div className='rotateText'>
                    <h1 className='text-[23vw] font-[anzo3] leading-[22vw]'>
                        <span className="border1">is</span> about !
                    </h1>
                </div>

            </div>
        </div>
    )
}

export default Page2;