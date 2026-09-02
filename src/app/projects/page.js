"use client";
import React from "react";
import "./projectCard.css";

import Card from "@/app/projects1/page.js";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const page = () => {

  const container = useRef(null);
  const cardRefs = useRef([]);

  useGSAP(
    () => {
      const cards = cardRefs.current;
      const totalScrollHeight = window.innerHeight * 3;
      const position = [14, 38, 62, 86];
      const rotation = [-15, -7.5, 7.5, 15];


      ScrollTrigger.create({
        trigger: container.current.querySelector(".cards"),
        start: "top top",
        end: () => `+=${totalScrollHeight}`,
        pin: true,
        pinSpacing: true,
      });

      const totalCards = cards.length;

      cards.forEach((card, index) => {
        const spreadStart = 10;
        const spreadEnd = 90;

        const step = (spreadEnd - spreadStart) / (totalCards - 1);
        const leftPosition = spreadStart + index * step;

        gsap.to(card, {
          left: `${leftPosition}%`,
          ease: "none",
          scrollTrigger: {
            trigger: container.current.querySelector(".cards"),
            start: "top top",
            end: () => `+=${window.innerHeight}`,
            scrub: 0.5,
          },
        });
      });

      cards.forEach((card, index) => {
        const frontEl = card.querySelector(".flip-card-front");
        const backEl = card.querySelector(".flip-card-back");

        const staggerOffset = index * 0.05;
        const startOffset = 1 / 3 + staggerOffset;
        const endOffset = 2 / 3 + staggerOffset;
        ScrollTrigger.create({
          trigger: container.current.querySelector(".cards"),
          start: "top top",
          end: () => `+=${totalScrollHeight}`,
          scrub: 1,
          id: `rotate-flip-${index}`,
          onUpdate: (self) => {
            const progress = self.progress;
            if (progress >= startOffset && progress <= endOffset) {
              const animationProgress = (progress - startOffset) / (1 / 3);
              const frontRotation = -180 * animationProgress;
              const backRotation = 180 - 180 * animationProgress;
              const cardRotation = rotation[index] * (1 - animationProgress);

              gsap.to(frontEl, { rotateY: frontRotation, ease: "power1.out" });
              gsap.to(backEl, { rotateY: backRotation, ease: "power1.out" });

              gsap.to(card, {
                xPercent: -50,
                yPercent: -50,
                rotate: cardRotation,
                ease: "power1.out",
              });
            }
          },
        });
      });
    },
    { scope: container },
  );

  const projects  = [
  {
    id: 1,
    image: "/image/kanban.jpg",
    heading: "Kanban Task Manager",
    text: "A responsive Kanban task management app built with HTML, CSS, and JavaScript. Features drag-and-drop task management, task creation and deletion, stage-based organization, task counters, and localStorage persistence for a smooth and productive workflow.",
    liveLink: "https://kan-ban-todo.vercel.app/"
  },

  {
    id: 2,
    image: "/image/snake-game.jpg",
    heading: "Snake Game",
    text: "An interactive Snake Game built with HTML, CSS, JavaScript, and Tailwind CSS. Includes smooth gameplay, real-time score tracking, high-score persistence, keyboard controls, responsive design, and dynamic game mechanics.",
    liveLink: "https://snake-game1-smoky.vercel.app/"
  },

  {
    id: 3,
    image: "/image/password-manager.jpg",
    heading: "Password Manager",
    text: "A React-based password manager designed to securely organize and manage credentials. Supports adding, editing, deleting, and viewing saved passwords with masked data, confirmation prompts, and an intuitive user interface.",
    liveLink: "https://lustrous-crumble-7be450.netlify.app/"
  },

  {
    id: 4,
    image: "/image/full-stack-project.jpg",
    heading: "Full-Stack E-commerce Platform",
    text: "A production-ready full-stack e-commerce platform built with React, Node.js, Express, and MongoDB. Includes secure authentication, product and category management, cart and wishlist functionality, order processing, payment integration, and scalable backend architecture.",
    liveLink: "https://full-stack-app-pink-sigma.vercel.app/"
  },

  {
    id: 5,
    image: "/image/shopify-project.jpg",
    heading: "Shopify Store",
    text: "A professionally designed Shopify store focused on a clean shopping experience, responsive design, product presentation, and conversion-focused layouts. Built to provide businesses with a modern and easy-to-manage online storefront.",
    liveLink: "https://jyg6xe-c8.myshopify.com/"
  }
];
  return (
    <>
      <div className="container" ref={container}>

        <section className="cards">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              id={`card-${project.id}`}
              frontSrc={project.image}
              frontAlt="Card Image"
              headingtext={project.heading}
              backText={project.text}
              LiveLink={project.liveLink}
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default page;
