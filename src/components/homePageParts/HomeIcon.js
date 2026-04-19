'use client'

//YEAH KAM KA HA 
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

const HomeIcons = () => {
  const iconsRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(iconsRef.current, {
      opacity: 0,
      x: 100,
      // y: 100,
      rotate: 360,
      delay: 1.5,
      duration: 2,
      stagger: 0.3, // <-- ye key part hai (icons one-by-one animate honge)
      ease: "back.out(1.7)",
      repeat: -1,     // infinite repeat
      repeatDelay: 2, // har repeat ke beech 3 sec ka gap
      // yoyo: true,     

    });
  }, []);

  return (
    <div className="absolute right-[40vw] top-[74vh] lg:top-1/5 lg:right-10 translate-y-1/2 flex lg:flex-col space-y-1 space-x-6 lg:space-x-0.1 p-2 text-[9vw] lg:text-[2.5vw] ">
       <a
        href="https://github.com/MaazJanjua"
        target="_blank"
        rel="noopener noreferrer"
        ref={(el) => (iconsRef.current[0] = el)}
      >
      <i
        
        className="ri-github-fill text-white  hover:text-gray-600 cursor-pointer"
      ></i>
      </a>
      <a
        href="https://www.instagram.com/muhammad.maaz.rajpoot/"
        target="_blank"
        rel="noopener noreferrer"
        ref={(el) => (iconsRef.current[1] = el)}
      >
        <i className="ri-instagram-fill text-white  hover:text-gray-600 cursor-pointer"
        >

        </i>
      </a>
      <a
        href="https://linked-in.com/"
        target="_blank"
        rel="noopener noreferrer"
        ref={(el) => (iconsRef.current[2] = el)}
      >
        <i
          className="ri-linkedin-box-fill text-white   hover:text-gray-600 cursor-pointer"
        ></i>
      </a>
      <a
        href="https://linked-in.com/"
        target="_blank"
        rel="noopener noreferrer"
        ref={(el) => (iconsRef.current[3] = el)}
      >
        <i
          className="ri-facebook-box-fill text-white   hover:text-gray-600 cursor-pointer"
        ></i>
      </a>
    </div>
  );
};

export default HomeIcons;
