"use client";
import React from "react";
import "./projectCard.css";

import Card from "@/app/projects1/page.js";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const page =  () => {

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

  const projects = [
    {
      id: 1,
      image: "/image/kanban.jpg",
      heading: "HEADING-01",

      text: "A dynamic Kanban Todo application built using HTML, CSS, and JavaScript enabling users to manage tasks efficiently through an intuitive drag-and-drop interface. Supports task creation, deletion and real-time movement across different stages. Includes task counters for better tracking and productivity insights. Utilizes localStorage to persist data, ensuring tasks remain saved across sessions. Designed with confirmation prompts to enhance user control and prevent accidental deletions.",
    },
    {
      id: 2,
      image: "/image/snake-game.jpg",
      heading: "HEADING-02",

      text: "An interactive Snake Game developed using HTML, CSS, JavaScript and Tailwind CSS featuring smooth gameplay and responsive design. Includes real-time score tracking, high score storage, and time-based gameplay mechanics. Implemented keyboard controls with planned mobile support for broader accessibility. Designed to adapt seamlessly across different screen sizes with dynamic resizing. This project highlights my skills in game logic, DOM manipulation, and user-focused design.",
    },

    {
      id: 3,
      image: "/image/password-manager.jpg",
      heading: "HEADING-03",

      text: "A secure Password Manager application built with React.js, allowing users to store, edit and delete credentials efficiently. Implements masked password display for enhanced privacy, ensuring sensitive data remains protected. Includes confirmation prompts before deletion to prevent accidental data loss. Designed with a clean and intuitive user interface for smooth user experience. This project demonstrates my skills in state management, CRUD operations and building secure user-focused applications.",
    },
    {
      id: 4,
      image: "/image/full-stack-project.jpg",
      heading: "HEADING-04",
      text: "A complete full-stack web application built with modern technologies, covering frontend, backend and database integration. Designed with secure authentication and scalable architecture to handle real-world usage. Focused on performance clean UI/UX and efficient data handling. Implements best practices for maintainability and future growth. This project demonstrates my ability to deliver end-to-end production-ready web solutions.",
    },
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
              ref={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default page;
