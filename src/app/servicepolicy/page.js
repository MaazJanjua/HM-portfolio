"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin for Next.js (client-side only)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Page = () => {
  // Refs for animated elements
  const headerRef = useRef(null);
  const introRef = useRef(null);
  const servicesRef = useRef(null);
  const paymentRef = useRef(null);
  const deliveryRef = useRef(null);
  const revisionsRef = useRef(null);
  const clientRespRef = useRef(null);
  const ownershipRef = useRef(null);
  const communicationRef = useRef(null);

  useEffect(() => {
    // Context to avoid conflicts in Next.js strict mode
    const ctx = gsap.context(() => {
      // Initial fade-in animations for all sections
      const sections = [
        headerRef.current,
        introRef.current,
        servicesRef.current,
        paymentRef.current,
        deliveryRef.current,
        revisionsRef.current,
        clientRespRef.current,
        ownershipRef.current,
        communicationRef.current,
      ];

      // Set initial states: hidden and slightly moved
      sections.forEach((section) => {
        if (section) {
          gsap.set(section, {
            opacity: 0,
            y: 40,
          });
        }
      });

      // Create ScrollTrigger animations for each section
      sections.forEach((section, index) => {
        if (section) {
          gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%", // when top of element hits 85% of viewport
              end: "bottom 60%",
              toggleActions: "play none none reverse",
              // Optional: add a slight stagger effect by delaying based on index
              // but we'll handle individually
            },
          });
        }
      });

      // Additional text animation for list items inside services (staggered)
      if (servicesRef.current) {
        const listItems = servicesRef.current.querySelectorAll("li");
        gsap.fromTo(
          listItems,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(0.8)",
            scrollTrigger: {
              trigger: servicesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate all other paragraphs and list items inside each section for extra polish
      const allParagraphs = document.querySelectorAll(".animated-text");
      allParagraphs.forEach((p) => {
        gsap.fromTo(
          p,
          { opacity: 0, y: 15 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: p,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Add a subtle glow effect on headings when they appear
      const headings = document.querySelectorAll(".section-heading");
      headings.forEach((heading) => {
        gsap.fromTo(
          heading,
          { textShadow: "0px 0px 0px rgba(56, 189, 248, 0)" },
          {
            textShadow: "0px 0px 8px rgba(56, 189, 248, 0.4)",
            duration: 0.5,
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    });

    return () => ctx.revert(); // Cleanup ScrollTrigger on unmount
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-sky-950 via-slate-900 to-gray-950 py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Card Container with glassmorphic effect for modern professional look */}
        <div className="relative rounded-2xl backdrop-blur-sm bg-gray-950/40 border border-sky-800/30 shadow-2xl overflow-hidden">
          {/* Decorative gradient line at top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-sky-400 via-indigo-500 to-transparent"></div>

          {/* Inner content with padding */}
          <div className="p-6 md:p-8 lg:p-10">
            {/* Header Section */}
            <div ref={headerRef} className="mb-8 border-b border-sky-800/30 pb-6">
              <h1 className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-sky-200 via-blue-300 to-indigo-200 bg-clip-text text-transparent tracking-tight uppercase font-[anzo1] ">
                Service Policy
              </h1>
              <div className="w-20 h-1 bg-sky-500/60 mt-3 rounded-full "></div>
            </div>

            {/* Intro Paragraph */}
            <div
              ref={introRef}
              className="mb-10 p-5 bg-sky-950/20 rounded-xl border border-sky-800/20 backdrop-blur-sm"
            >
              <p className="text-gray-200 leading-relaxed text-base md:text-lg font-medium animated-text lg:text-[.9vw] font-[anzo2]">
                Welcome to HMStudio. We provide professional digital solutions including Full-Stack Web Development, UI/UX Design, E-commerce Website Development, WordPress websites, Canva-based designs, and Facebook Ads management. Our focus is to deliver modern, responsive, and user-friendly digital products tailored to client needs.
              </p>
            </div>

            {/* Services We Offer */}
            <div ref={servicesRef} className="mb-10">
              <h2 className="section-heading text-2xl md:text-3xl font-bold text-sky-200 mb-4 flex items-center gap-2 uppercase font-[anzo1]">
                <span className="text-sky-400 text-3xl ">✦</span> Services We Offer
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-2">
                <li className="flex items-start gap-2 text-gray-200 bg-gray-900/40 p-3 rounded-lg border border-gray-700/50 hover:border-sky-500/40 transition-all duration-300 lg:text-[.7vw] font-[anzo2]">
                  <span className="text-sky-400 text-xl ">▹</span> Full-Stack Web Development (React, Node.js, MongoDB)
                </li>
                <li className="flex items-start gap-2 text-gray-200 bg-gray-900/40 p-3 rounded-lg border border-gray-700/50 hover:border-sky-500/40 transition-all duration-300 lg:text-[.7vw] font-[anzo2]">
                  <span className="text-sky-400 text-xl">▹</span> UI/UX Design (Modern and User-Centered Interfaces)
                </li>
                <li className="flex items-start gap-2 text-gray-200 bg-gray-900/40 p-3 rounded-lg border border-gray-700/50 hover:border-sky-500/40 transition-all duration-300 lg:text-[.7vw] font-[anzo2]">
                  <span className="text-sky-400 text-xl">▹</span> E-commerce Website Development (Custom Online Stores)
                </li>
                <li className="flex items-start gap-2 text-gray-200 bg-gray-900/40 p-3 rounded-lg border border-gray-700/50 hover:border-sky-500/40 transition-all duration-300 lg:text-[.7vw] font-[anzo2]">
                  <span className="text-sky-400 text-xl">▹</span> WordPress Basic Website Development
                </li>
                <li className="flex items-start gap-2 text-gray-200 bg-gray-900/40 p-3 rounded-lg border border-gray-700/50 hover:border-sky-500/40 transition-all duration-300 lg:text-[.7vw] font-[anzo2]">
                  <span className="text-sky-400 text-xl">▹</span> Canva Designs (Social Media Posts, Banners, Ads)
                </li>
                <li className="flex items-start gap-2 text-gray-200 bg-gray-900/40 p-3 rounded-lg border border-gray-700/50 hover:border-sky-500/40 transition-all duration-300 lg:text-[.7vw] font-[anzo2]">
                  <span className="text-sky-400 text-xl">▹</span> Facebook Ads Setup & Basic Campaign Management
                </li>
              </ul>
            </div>

            {/* Payment Policy */}
            <div ref={paymentRef} className="mb-10">
              <h2 className="section-heading text-2xl md:text-3xl font-bold text-sky-200 mb-3 flex items-center gap-2 uppercase font-[anzo1]">
                <span className="text-sky-400 text-3xl ">💰</span> Payment Policy (PayFast Requirement)
              </h2>
              <p className="text-gray-300 leading-relaxed animated-text bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 lg:text-[.8vw] font-[anzo2]">
                All payments are securely processed through PayFast. A 30% to 50% advance payment is required before starting any project. The remaining balance must be cleared upon project completion. Work will only be delivered after full payment confirmation.
              </p>
            </div>

            {/* Delivery Timeline */}
            <div ref={deliveryRef} className="mb-10">
              <h2 className="section-heading text-2xl md:text-3xl font-bold text-sky-200 mb-3 flex items-center gap-2 uppercase font-[anzo1]">
                <span className="text-sky-400 text-3xl">⏱️</span> Delivery Timeline
              </h2>
              <p className="text-gray-300 leading-relaxed animated-text bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 lg:text-[.8vw] font-[anzo2]">
                Delivery time depends on project complexity. Simple websites may take 3–7 days, while advanced full-stack or e-commerce projects may require more time depending on requirements and feedback.
              </p>
            </div>

            {/* Revisions Policy */}
            <div ref={revisionsRef} className="mb-10">
              <h2 className="section-heading text-2xl md:text-3xl font-bold text-sky-200 mb-3 flex items-center gap-2 uppercase font-[anzo1]">
                <span className="text-sky-400 text-3xl">🔄</span> Revisions Policy
              </h2>
              <p className="text-gray-300 leading-relaxed animated-text bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 lg:text-[.8vw] font-[anzo2]">
                We offer 2–3 free revisions to ensure client satisfaction. Any additional or major changes beyond the initial scope may incur extra charges.
              </p>
            </div>

            {/* Client Responsibility */}
            <div ref={clientRespRef} className="mb-10">
              <h2 className="section-heading text-2xl md:text-3xl font-bold text-sky-200 mb-3 flex items-center gap-2 uppercase font-[anzo1]">
                <span className="text-sky-400 text-3xl">📋</span> Client Responsibility
              </h2>
              <p className="text-gray-300 leading-relaxed animated-text bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 lg:text-[.8vw] font-[anzo2]">
                Clients are required to provide complete project details, content, and requirements before starting the project. Delays in communication or information may affect delivery timelines.
              </p>
            </div>

            {/* Ownership & Rights */}
            <div ref={ownershipRef} className="mb-10">
              <h2 className="section-heading text-2xl md:text-3xl font-bold text-sky-200 mb-3 flex items-center gap-2 uppercase font-[anzo1]">
                <span className="text-sky-400 text-3xl">⚖️</span> Ownership & Rights
              </h2>
              <p className="text-gray-300 leading-relaxed animated-text bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 lg:text-[.8vw] font-[anzo2]">
                After full payment, all project rights and ownership will be transferred to the client. HMStudio reserves the right to showcase the project in its portfolio unless otherwise agreed.
              </p>
            </div>

            {/* Communication */}
            <div ref={communicationRef} className="mb-6">
              <h2 className="section-heading text-2xl md:text-3xl font-bold text-sky-200 mb-3 flex items-center gap-2 uppercase font-[anzo1]">
                <span className="text-sky-400 text-3xl">📞</span> Communication
              </h2>
              <p className="text-gray-300 leading-relaxed animated-text bg-gray-900/30 p-4 rounded-lg border-l-4 border-sky-500 lg:text-[.8vw] font-[anzo2]">
                Communication is handled through WhatsApp or email. We aim to respond within 24 hours during working days.
              </p>
            </div>

            {/* Footer signature with subtle animation */}
            <div className="mt-12 pt-6 border-t border-sky-800/30 text-center text-gray-400 text-sm">
              <p className="opacity-80 lg:text-[.9vw] font-[anzo2]">© 2025 HMStudio — Excellence in Digital Craftsmanship</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;