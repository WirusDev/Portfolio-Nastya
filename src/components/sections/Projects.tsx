"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ImageCarousel from "../ui/ImageCarousel";

const CDprojectData = [
  {
    imgSrc: [
      "/images/prod/CD/regenbock/Vis.jpeg",
      "/images/prod/CD/regenbock/webseite.jpeg",
      "/images/prod/CD/regenbock/poster.jpeg",
      "/images/prod/CD/regenbock/Briefbogen.jpeg",
      "/images/prod/CD/regenbock/Danke.jpeg",
      "/images/prod/CD/regenbock/box.jpeg",
      "/images/prod/CD/regenbock/logo.jpeg",
    ],
    imgAlt: "Regen-Bock Project",
    title: "Regen-Bock ",
    description: ["CD", "Logo", "Webdesign", "Branding"],
    link: "/projects/regenbock",
  },
  {
    imgSrc: [
      "/images/prod/CD/alamode/1-plakat.JPG",
      "/images/prod/CD/alamode/2-visit.PNG",
      "/images/prod/CD/alamode/3-web.jpg",
      "/images/prod/CD/alamode/4-groß-plakat.JPG",
      "/images/prod/CD/alamode/5-plakat2.JPG",
      "/images/prod/CD/alamode/6-verpackung.JPG",
    ],
    imgAlt: "AlaMode Project",
    title: "AlaMode",
    description: ["CD", "Logo", "Website", "Branding"],
    link: "/projects/cerise",
  },
  {
    imgSrc: [
      "/images/prod/CD/cerise/1.logo.png",
      "/images/prod/CD/cerise/2.visit.png",
      "/images/prod/CD/cerise/3.preiss.jpeg",
    ],
    imgAlt: "Cerise",
    title: "Cerise",
    description: ["CD", "Logo", "Website", "Mobile App"],
    link: "/projects/cerise",
  },
  {
    imgSrc: [
      "/images/prod/CD/galerija/1.galerija .png",
      "/images/prod/CD/galerija/2.visit.png",
      "/images/prod/CD/galerija/3. träger.JPG",
      "/images/prod/CD/galerija/4.logo.jpg",
    ],
    imgAlt: "galerija",
    title: "galerija",
    description: ["CD", "Logo", "Website", "Mobile App"],
    link: "/projects/cerise",
  },
];
const EDprojectData = [
  {
    imgSrc: [
      "/images/prod/editorial/musikk und protest/1.png",
      "/images/prod/editorial/musikk und protest/2.png",
      "/images/prod/editorial/musikk und protest/3.png",
      "/images/prod/editorial/musikk und protest/4.png",
      "/images/prod/editorial/musikk und protest/5.png",
      "/images/prod/editorial/musikk und protest/6.png",
    ],
    imgAlt: "musikk und protest",
    title: "musikk und protest ",
    description: ["CD", "Logo", "Webdesign", "Branding"],
    link: "/projects/regenbock",
  },
  {
    imgSrc: [
      "/images/prod/editorial/Zeitung_DRUCK/1.png",
      "/images/prod/editorial/Zeitung_DRUCK/2.png",
    ],
    imgAlt: "Zeitung_DRUCK",
    title: "Zeitung_DRUCK",
    description: ["Editorial", "Webdesign", "Branding"],
    link: "/projects/regenbock",
  },
  {
    imgSrc: [
      "/images/prod/editorial/KI und das Bild/1.PNG",
      "/images/prod/editorial/KI und das Bild/2.png",
      "/images/prod/editorial/KI und das Bild/3.png",
      "/images/prod/editorial/KI und das Bild/4.png",
      "/images/prod/editorial/KI und das Bild/5.png",
      "/images/prod/editorial/KI und das Bild/6.png",
    ],
    imgAlt: "Zeitung_DRUCK",
    title: "Zeitung_DRUCK",
    description: ["Editorial", "Webdesign", "Branding"],
    link: "/projects/regenbock",
  },
];

export default function Projects() {
  return (
    <div>
      {/* CORPORATE */}
      <div className='chat chat-start my-4'>
        <div className='chat-bubble chat-bubble-accent text-2xl '>
          <h2>Corporate Design / Branding</h2>
        </div>
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 min-h-[300px]'>
        {CDprojectData.map((project, index) => (
          <div key={index}>
            {/* <Link href={project.link} className='mb-8'> */}
            <ImageCarousel images={project.imgSrc} />
            {/* </Link> */}
            <div className='h-1'></div>
            {CDprojectData[index].description.map((desc, index) => (
              <div
                key={index}
                className='badge  bg-gray-400 text-black badge-md text-lg p-3 m-1 '
              >
                {desc}
              </div>
            ))}
          </div>
        ))}
      </div>
      <br />
      {/* EDITORIAL */}
      <div className='chat chat-start my-4'>
        <div className='chat-bubble chat-bubble-accent text-2xl '>
          <h2>Editorial Design</h2>
        </div>
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 min-h-[300px]'>
        {EDprojectData.map((project, index) => (
          <div key={index}>
            {/* <Link href={project.link} className='mb-8'> */}
            <ImageCarousel images={project.imgSrc} />
            {/* </Link> */}
            <div className='h-1'></div>
            {EDprojectData[index].description.map((desc, index) => (
              <div
                key={index}
                className='badge bg-gray-400 text-black badge-md text-lg p-3 m-1 '
              >
                {desc}
              </div>
            ))}
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}
