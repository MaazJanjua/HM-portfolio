// 'use client'
// import { style as motionStyle } from 'framer-motion/client'
// import React from 'react'
// import style from './page.module.css'

// const page = () => {
//   return (
//     <>
//       <section className={style.intro}>
//         <h1 className={style.introh1}>Lorem ipsum <span className='' > dolor sit amet.</span></h1>
//       </section>



//       <section className={style.cta}>
//         <h1 className={style.ctah1}>Terms & Conditions:</h1>
//         <p className={style.twop}>All content provided on this website is for informational and professional purposes only. You may view, browse, and share the content for personal or non-commercial use, but copying or reproducing without permission is not allowed.</p>
//       </section>


//       <section className={style.outro}>
//         <h1 className={style.outroh1}>Terms & Conditions:-----03</h1>
//       </section>
//     </>
//   )
// }

// export default page

"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Page = () => {
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const servicesRef = useRef(null);
  const paymentRef = useRef(null);
  const deliveryRef = useRef(null);
  const usageRef = useRef(null);
  const finalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = [
        headerRef.current,
        introRef.current,
        servicesRef.current,
        paymentRef.current,
        deliveryRef.current,
        usageRef.current,
        finalRef.current,
      ];

      sections.forEach((section) => {
        if (section) {
          gsap.set(section, { opacity: 0, y: 40 });
        }
      });

      sections.forEach((section) => {
        if (section) {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-950 via-slate-900 to-gray-950 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">

        <div className="relative rounded-2xl backdrop-blur-sm bg-gray-950/40 border border-sky-800/30 shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-sky-400 via-indigo-500 to-transparent"></div>

          <div className="p-6 md:p-8 lg:p-10">

            {/* Header */}
            <div ref={headerRef} className="mb-8 border-b border-sky-800/30 pb-6">
              <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-sky-200 via-blue-300 to-indigo-200 bg-clip-text text-transparent uppercase font-[anzo1]">
                Terms & Conditions
              </h1>
              <div className="w-20 h-1 bg-sky-500/60 mt-3 rounded-full"></div>
            </div>

            {/* Intro */}
            <div ref={introRef} className="mb-10 p-5 bg-sky-950/20 rounded-xl border border-sky-800/20">
              <p className="text-gray-200 leading-relaxed font-[anzo2] lg:text-[.9vw]">
                Welcome to HMStudio. By accessing or using our services, you agree to comply with these Terms & Conditions. These terms apply to all services including Full-Stack Development, UI/UX Design, E-commerce websites, WordPress, Canva design, and Facebook Ads.
              </p>
            </div>

            {/* Services */}
            <div ref={servicesRef} className="mb-10">
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                Services
              </h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 font-[anzo2] lg:text-[.8vw]">
                <li>Full-Stack Web Development (React, Node.js, MongoDB)</li>
                <li>UI/UX Design and Prototyping</li>
                <li>E-commerce Website Development</li>
                <li>WordPress Website Development</li>
                <li>Canva Graphic Design Services</li>
                <li>Facebook Ads Setup & Management</li>
              </ul>
            </div>

            {/* Payment */}
            <div ref={paymentRef} className="mb-10">
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                Payment Terms (PayFast)
              </h2>
              <p className="text-gray-300 bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 font-[anzo2] lg:text-[.8vw]">
                All payments are processed via PayFast. A 30%–50% advance payment is required before project initiation. Remaining payment must be completed after project delivery approval. Work ownership is transferred only after full payment.
              </p>
            </div>

            {/* Delivery */}
            <div ref={deliveryRef} className="mb-10">
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                Project Delivery
              </h2>
              <p className="text-gray-300 bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 font-[anzo2] lg:text-[.8vw]">
                Delivery timelines depend on project complexity. Basic projects take 3–7 days while advanced full-stack or e-commerce systems may take longer based on requirements and revisions.
              </p>
            </div>

            {/* Usage */}
            <div ref={usageRef} className="mb-10">
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                Client Responsibilities
              </h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 font-[anzo2] lg:text-[.8vw]">
                <li>Provide complete project requirements before starting</li>
                <li>Ensure timely communication and feedback</li>
                <li>Delays in response may affect delivery schedule</li>
              </ul>
            </div>

            {/* Final */}
            <div ref={finalRef}>
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                Agreement
              </h2>
              <p className="text-gray-300 bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 font-[anzo2] lg:text-[.8vw]">
                By hiring HMStudio, you agree to all terms mentioned above. HMStudio reserves the right to update these terms at any time without prior notice.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
