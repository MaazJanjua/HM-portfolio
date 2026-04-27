'use client'
import { forwardRef } from 'react'
import React from 'react'
import Image from 'next/image'
// import Link from 'next/link'
// import './style.css'

const Card = forwardRef(({ id, frontSrc, frontAlt, backText, headingtext, LiveLink }, ref) => {

    return (
        <>
            <div className="card relative " id={id} ref={ref}>


                <div className="card-wrapper  ">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <Image
                                priority
                                src={frontSrc}
                                width={500}
                                height={500}
                                alt={frontAlt}
                            />
                        </div>

                        <div className="flip-card-back flex flex-col justify-between items-center bg-green-900 ">
                            <div><h2 className='text-[21px] font-[anzo1]'>{headingtext}</h2></div>
                            <div> <p className='text-[.8vw] font-[anzo2]'>{backText}</p></div>
                            <div className=' h-[4vh] w-full  text-center'><a
                                href={LiveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500  z-999  underline mt-3 cursor-pointer font-[anzo1] text-[.91vw]"
                            >
                                View Live Project
                            </a></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
})

export default Card
