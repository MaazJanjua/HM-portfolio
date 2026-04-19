'use client'
import React, { useState, useEffect } from "react";
import 'remixicon/fonts/remixicon.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const Header = () => {

    const [showLogo, setShowLogo] = useState(true);

    useGSAP(() => {
        gsap.from(".toplogodiv", {
            opacity: 0,
            x: -150,
            duration: 2,
            ease: "power4.out"
        });

        gsap.from(".secondmaindiv", {
            opacity: 0,
            x: 100,
            duration: 1.2,
            ease: "power4.inOut"
        });
    }, []);

    useEffect(() => {
        let lastY = window.scrollY;

        const handleScroll = () => {
            setShowLogo(!(window.scrollY > lastY && window.scrollY > 50));
            lastY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4">

            {/* LOGO */}
            <div className={`transition-all duration-500 ${showLogo ? "opacity-100" : "opacity-0 -translate-y-6"}`}>
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-34 lg:h-34">
                    <Image
                        src="/image/headerLogo.png"
                        alt="logo"
                        fill
                        className="object-contain select-none"
                    />
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="secondmaindiv flex items-center gap-4">

                <Link href="/contact">
                    <button
                        className="lg:px-7 lg:py-4 px-[16] py-[6] rounded-full border text-white text-xs sm:text-sm uppercase font-extrabold font-[anzo2] bg-linear-to-r from-black via-gray-700 to-purple-400 hover:opacity-90 transition"
                    >
                        Plan a Call
                    </button>
                </Link>

                <i className="ri-donut-chart-line text-gray-300 lg:text-[2vw] text-[8vw] opacity-70"></i>

            </div>

        </div>
    );
};

export default Header;