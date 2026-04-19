'use client'
import { forwardRef } from 'react'
import React from 'react'
import Image from 'next/image'
// import './style.css'

const Card = forwardRef(({ id, frontSrc, frontAlt, backText, headingtext }, ref) => {
  
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

                        <div className="flip-card-back flex justify-center ">
                            <h2 className='text-[21px]'>{headingtext}</h2>
                            <p>{backText}</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
})

export default Card
