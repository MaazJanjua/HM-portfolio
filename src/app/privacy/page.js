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
  const dataRef = useRef(null);
  const usageRef = useRef(null);
  const paymentRef = useRef(null);
  const securityRef = useRef(null);
  const finalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = [
        headerRef.current,
        introRef.current,
        dataRef.current,
        usageRef.current,
        paymentRef.current,
        securityRef.current,
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
                Privacy Policy
              </h1>
              <div className="w-20 h-1 bg-sky-500/60 mt-3 rounded-full"></div>
            </div>

            {/* Intro */}
            <div ref={introRef} className="mb-10 p-5 bg-sky-950/20 rounded-xl border border-sky-800/20">
              <p className="text-gray-200 leading-relaxed font-[anzo2] lg:text-[.9vw]">
                Welcome to HMStudio. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our services including web development, UI/UX design, e-commerce solutions, WordPress, Canva design, and Facebook Ads.
              </p>
            </div>

            {/* Data Collection */}
            <div ref={dataRef} className="mb-10">
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 font-[anzo2] lg:text-[.8vw]">
                <li>Client name and contact details (email, WhatsApp)</li>
                <li>Project requirements and business information</li>
                <li>Payment details processed securely via PayFast</li>
              </ul>
            </div>

            {/* Usage */}
            <div ref={usageRef} className="mb-10">
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2 font-[anzo2] lg:text-[.8vw]">
                <li>To deliver and manage your project</li>
                <li>To communicate project updates</li>
                <li>To improve our services and support</li>
              </ul>
            </div>

            {/* Payment */}
            <div ref={paymentRef} className="mb-10">
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                Payment Information (PayFast)
              </h2>
              <p className="text-gray-300 bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 font-[anzo2] lg:text-[.8vw]">
                All payments are securely handled through PayFast. We do not store your card or banking details. Payment processing is managed by PayFast’s secure system.
              </p>
            </div>

            {/* Security */}
            <div ref={securityRef} className="mb-10">
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                Data Protection
              </h2>
              <p className="text-gray-300 bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 font-[anzo2] lg:text-[.8vw]">
                We take appropriate security measures to protect your personal data. Your information is never sold or shared with third parties without consent, except when required for service delivery.
              </p>
            </div>

            {/* Final */}
            <div ref={finalRef}>
              <h2 className="text-2xl font-bold text-sky-200 mb-3 uppercase font-[anzo1]">
                Policy Updates
              </h2>
              <p className="text-gray-300 bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 font-[anzo2] lg:text-[.8vw]">
                HMStudio reserves the right to update this Privacy Policy at any time. Clients are advised to review this page periodically for changes.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Page;