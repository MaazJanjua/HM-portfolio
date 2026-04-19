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
  const policyRef = useRef(null);
  const conditionsRef = useRef(null);
  const nonRefundRef = useRef(null);
  const finalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = [
        headerRef.current,
        introRef.current,
        policyRef.current,
        conditionsRef.current,
        nonRefundRef.current,
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
                Refund Policy
              </h1>
              <div className="w-20 h-1 bg-sky-500/60 mt-3 rounded-full"></div>
            </div>

            {/* Intro */}
            <div ref={introRef} className="mb-10 p-5 bg-sky-950/20 rounded-xl border border-sky-800/20">
              <p className="text-gray-200 leading-relaxed font-[anzo2] lg:text-[.9vw]">
                Welcome to HMStudio. This Refund Policy explains how refunds are handled for our digital services including Full-Stack Development, UI/UX Design, E-commerce websites, WordPress, Canva designs, and Facebook Ads. By placing an order, you agree to this policy.
              </p>
            </div>

            {/* Policy */}
            <div ref={policyRef} className="mb-10">
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                General Policy
              </h2>
              <p className="text-gray-300 bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 font-[anzo2] lg:text-[.8vw]">
                All payments are processed through PayFast. Due to the nature of digital services, refunds are limited and only applicable under specific conditions mentioned below.
              </p>
            </div>

            {/* Conditions */}
            <div ref={conditionsRef} className="mb-10">
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                Eligible Refund Conditions
              </h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 font-[anzo2] lg:text-[.8vw]">
                <li>If the project has not been started yet.</li>
                <li>If HMStudio is unable to deliver the project due to internal issues.</li>
                <li>If there is a mutual agreement between client and HMStudio.</li>
              </ul>
            </div>

            {/* Non Refund */}
            <div ref={nonRefundRef} className="mb-10">
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                Non-Refundable Cases
              </h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 font-[anzo2] lg:text-[.8vw]">
                <li>Once the project has been started or development has begun.</li>
                <li>If the client fails to provide required information or delays communication.</li>
                <li>After partial or full delivery of the project.</li>
                <li>For design or development work already completed.</li>
              </ul>
            </div>

            {/* Final */}
            <div ref={finalRef} className="mb-6">
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                Final Note
              </h2>
              <p className="text-gray-300 bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 font-[anzo2] lg:text-[.8vw]">
                HMStudio aims to maintain transparency and fairness in all transactions. We strongly recommend clients to review project requirements carefully before making payment through PayFast.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;