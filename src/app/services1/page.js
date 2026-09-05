'use client'
import React from 'react';
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'
import { Foldit } from 'next/font/google';
import Link from "next/link";

const foldit = Foldit({
    weight: ['400', '700'],
    subsets: ['latin']
});

gsap.registerPlugin(ScrollTrigger);

const page = () => {

    const cards = [
        {
            index: "01",
            type: "Service",
            buttonText: "Book Now",
            buttonLink: "/contact",
            title: "Web Development",
            image: "https://res.cloudinary.com/do3j9i0pl/image/upload/v1788346675/card_1_z6lrj2.jpg",
            description: "High-performance, responsive websites built with modern technologies like React, Next.js, and JavaScript—designed to deliver speed, scalability, and an exceptional user experience."
        },

        {
            index: "02",
            type: "Service-02",
            buttonText: "Book Now",
            buttonLink: "/contact",
            title: "WordPress Development",
            image: "https://res.cloudinary.com/do3j9i0pl/image/upload/v1788269664/Hire_WordPress_Developer_Mumbai_Worldindia_Provides_Top-Tier_Talent_pie4fk.jpg",
            description: "Professional WordPress websites tailored to your business, with custom themes, powerful functionality, responsive design, and easy-to-manage content."
        },

        {
            index: "03",
            type: "Service-03",
            buttonText: "Book Now",
            buttonLink: "/contact",
            title: "E-commerce Development",
            image: "https://res.cloudinary.com/do3j9i0pl/image/upload/v1788269021/card_4_kougtz.jpg",
            description: "Conversion-focused e-commerce stores with secure payments, product management, smart shopping experiences, and scalable solutions built to grow your online business."
        },

        {
            index: "04",
            type: "Service-04",
            buttonText: "Book Now",
            buttonLink: "/contact",
            title: "Shopify Store",
            image: "https://res.cloudinary.com/do3j9i0pl/image/upload/v1788268858/shopify_3_l1dv4u.jpg",
            description: "Modern Shopify stores built for growth, featuring custom designs, optimized product pages, responsive layouts, secure checkout, and a seamless shopping experience."
        },

        {
            index: "06",
            type: "Service-06",
            buttonText: "Book Now",
            buttonLink: "/contact",
            title: "UI/UX Design",
            image: "https://res.cloudinary.com/do3j9i0pl/image/upload/v1788346791/card_5_t9xdsw.jpg",
            description: "Intuitive and visually engaging UI/UX designs that combine user needs, modern aesthetics, and seamless interactions to create memorable digital experiences."
        },

        {
            index: "07",
            type: "Service-07",
            buttonText: "Book Now",
            buttonLink: "/contact",
            title: "SEO Optimization & Google Ranking Services",
            image: "https://res.cloudinary.com/do3j9i0pl/image/upload/v1788346847/card_7_g8oes3.jpg",
            description: "Data-driven SEO strategies to improve Google visibility, increase organic traffic, optimize website performance, and attract more qualified customers to your business."
        }
    ];

    const container = useRef(null);

    useGSAP(() => {
        const stickyCards = document.querySelectorAll(".sticky-card")
        stickyCards.forEach((card, index) => {
            if (index < stickyCards.length - 1) {
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    endTrigger: stickyCards[stickyCards.length - 1],
                    end: 'top top',
                    pin: true,
                    pinSpacing: false,
                    // markers: true
                })

            };

            if (index < stickyCards.length - 1) {
                ScrollTrigger.create({
                    trigger: stickyCards[index + 1],
                    start: 'top bottom',
                    end: 'top top',
                    onUpdate: (self) => {
                        const progress = self.progress;
                        const scale = 1 - progress * 0.25;
                        const rotation = (index % 2 === 0 ? 5 : -5) * progress;
                        const afterOpacity = progress;

                        gsap.set(stickyCards[index], {
                            scale: scale,
                            rotation: rotation,
                            '--after-opacity': afterOpacity,
                        })

                    }
                })
            }

        })
    }, { scope: container });


    return (
        <div className=' w-full flex justify-center items-center'>
            <div className='sticky-cards relative w-[97vw] ' ref={container}>
                {cards.map((card, index) => (
                    <div
                        className="sticky-card relative flex gap-12 h-[90vh] p-6 bg-gray-900 will-change-transform rounded-[.5vw]
  after:content-['']
  after:absolute
  after:top-0
  after:left-0
  after:w-full
  after:h-full
  after:pointer-events-none
  after:z-2
  after:transition-opacity
  after:duration-100
  after:ease-in-ou
  after:opacity-(--after-opacity)
  
  
  max-[1000px]:flex-col max-[1000px]:gap-0 max-[1000px]:h-screen
  "         key={index}
                    >

                        <div className='sticky-card-index lg:flex-2 lg:grid flex justify-between items-center text-white text-[8vw] lg:text-[6vw] leading-20 h-[4vh] pt-[4vh] 
max-[1000px]:flex-1'>

                            <p className='font-[anzo3] lg:text-[7.5vw] text-[14vw] uppercase'>{card.type}</p>

                            {/* ✅ Button under type */}   
                            {card.buttonText && (
                                <Link href={card.buttonLink}>
                                    <button className="px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 lg:px-10 lg:py-3.5 
                   text-sm sm:text-base md:text-lg lg:text-base 
                   bg-gray-950 text-white rounded-md 
                   hover:bg-sky-900 transition-all duration-300 
                   font-medium shadow-md hover:shadow-lg 
                   active:scale-95 transform font-[anzo2]">
                                        {card.buttonText}
                                    </button>
                                </Link>
                            )}

                            {/* <p className="text-[3.5vw] leading-20 font-extrabold opacity-65 uppercase">
                                {card.comment}
                            </p> */}

                        </div>
                        {/* <div className='sticky-card-index flex-2 text-white text-[8vw] lg:text-[6vw] leading-39 h-[4vh] 
                        
                        max-[1000px]:flex-1
                        '> */}
                        {/* <p className={`${foldit.className}`} >{card.type}</p> */}
                        {/* <h1 className={`${foldit.className}`}>{card.index}</h1> */}
                        {/* <p className="text-[3.5vw] leading-20 font-extrabold opacity-65 uppercase">
                                {card.comment}
                            </p>

                        </div> */}
                        <div className='flex-4 pt-6 relative flex justify-start items-center  '>
                            <div className="sticky-card-content-wrapper w-3/4 flex flex-col gap-6 leading-8 
                            
                            
                            max-[1000px]:w-full
                            ">
                                <h1 className="sticky-card-header w-3.4 text-white lg:text-[2vw] text-[5vw] absolute uppercase font-extrabold font-[anzo1]">{card.title}</h1>
                                <div className="sticky-card-img mt-[6vh] ">
                                    <img src={card.image} className='aspect-5/3 ' alt="" />
                                </div>
                                <div className="sticky-card-copy flex gap-6
                                
                                max-[1000px]:flex-col max-[1000px]:gap-2
                                ">
                                    <div className="sticky-card-copy-title  flex-2 text-white lg:text-[1.2vw] text-[4vw]">
                                        <p className='font-[Mobile-Device1] '>(work with Precision)</p>
                                    </div>
                                    <div className="sticky-card-copy-description flex-4  text-white lg:text-[1vw] text-[3vw]">
                                        <p className='uppercase font-semibold font-[anzo2]'>{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
            </div >
        </div >
    );
};

export default page;