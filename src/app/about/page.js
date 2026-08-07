"use client";
import React, { useEffect } from "react";
// import moonImg from "../../assets/Images/earthmeri.png";
// import merivideo from "../../assets/Images/1.mp4";
import { useGSAP } from "@gsap/react";
import { Timeline } from "gsap/src/gsap-core";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


 

const About = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".mainaboutheading",
        start: "top 80%",
        end: "top 50%",
        // toggleActions: "play none none reverse"
      },
    });

    tl.from(".mainaboutheading", {
      transform: "translateZ(-75deg)",
      rotateX: -75,
      opacity: 0,
      duration: 1.4,
      stagger: 1,
      ease: "power1.inOut"
    });
    tl.from(".mainaboutheading1", {
      y: 200,
      duration: .5,
      opacity: 0,
      ease: "power3.out",
      // stagger:1,

    })
    tl.from(".mainaboutheading2", {
      opacity: 0,
      duration: 2
    })
    tl.from(".mainaboutheading3", {
      opacity: 0,
      duration: 2,
      width: 0
    })
   
  });




  useEffect(() => {
    window.particlesJS("particles-js", {
      particles: {
        number: {
          value: 80,
          density: { enable: true, value_area: 500 },
        },
        color: { value: "#ffffff" }, // white dots
        shape: { type: "circle" },
        opacity: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 14, opacity_min: 0.2 },
        },
        size: {
          value: 3,
          random: true,
        },
        move: {
          enable: true,
          speed: 3,
          direction: "none",
          out_mode: "out",
        },
        line_linked: {
          enable: false, // 👈 dots separate, no connecting lines
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: false }, // no hover effects
          onclick: { enable: false }, // no click effects
        },
      },
      retina_detect: true,
    });
  }, []);

  return (
    <div className=" relative text-white m-[1vw] h-[92vh] flex justify-center items-center  p-[.5vw]  next-section
    about-section  z-0 min-h-screen   
    ">
      {/* Particles Background */}
      <div
        id="particles-js"
        className="absolute inset-0"
        style={{ zIndex: 0, backgroundColor: "#101010" }}
      ></div>

      {/* Page Content */}
      <div className="relative z-10 w-[38vw] text-center max-w-5xl flex justify-center items-center flex-col " style={{ perspective: "1000px", transformStyle: "preserve-3d" }}>
        <h1 className="mainaboutheading text-[9vw]   font-[Mobile-Device1]">ABOUT</h1>
        <h3 className=" mainaboutheading1 font-[anzo1] text-[1.2vw] w-[44vw]">
          INTUITIVE APPROACH | FUTURE-FOCUSED STRATEGY | UNCOMPROMISING DISCIPLINE
        </h3>
        <p className=" break-all
 mt-[1.2vw]  font-[anzo1] text-[1.3vw] text-gray-500 w-[44vw] mainaboutheading2" >
          <span>
            Anyone can create. Some have the talent to design. But who can capture and translate
            your vision into a lasting legacy?
          </span>
          <br />
          <span>
            True design is more than aesthetics; web design is a complete extension of your brand - a seamless blend of visual identity, your story and messaging, your goals and strategy working together to create a powerful digital experience.
          </span>
          <br />
          <span>it’s your brand in action.</span>
        </p>
        <button className="mt-[3vw] mb-[2vw] px-[6vw] py-[.60vw] border-[6px]  text-white border-white bg-linear-to-r from-black-400 via-gray-700 to-purple-400
 font-bold rounded-2xl hover:bg-gray-200 mainaboutheading3 w-[25vw] text-[1vw] flex justify-center items-center">
          EXPLORE
        </button>


      </div>
      {/* <div className="z-21">
        <img src={moonImg} className="h-164  w-114" alt="" /></div>
      <video src={merivideo} className="z-21 w-99 h-99" autoPlay loop></video> */}
    </div>
  );
};

export default About;
