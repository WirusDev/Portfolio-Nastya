"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ImageCarousel from "../ui/ImageCarousel";

const projectData = [
  {
    imgSrc: [
      "/images/prod/CD/regenbock/vis.jpeg",
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
      "/images/prod/CD/alamode/poster.jpeg",
      "/images/prod/CD/alamode/vis.jpeg",
    ],
    imgAlt: "AlaMode Project",
    title: "AlaMode",
    description: ["CD", "Logo", "Website", "Mobile App"],
    link: "/projects/cerise",
  },
  {
    imgSrc: [
      "/images/prod/Twist.png",
      "/images/prod/cerise.jpg",

      "/images/prod/lingoaa.jpg",
    ],
    imgAlt: "Cerise",
    title: "Cerise",
    description: ["CD", "Logo", "Website", "Mobile App"],
    link: "/projects/cerise",
  },
];

export default function Projects() {
  return (
    <div>
      {/* <div className='divider text-4xl py-8'>TYPO</div> */}
      <div className='chat chat-start my-4'>
        <div className='chat-bubble chat-bubble-accent text-2xl '>
          <h2>Corporate Design / Branding</h2>
        </div>
      </div>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 min-h-[300px]'>
        {projectData.map((project, index) => (
          <div key={index}>
            <Link href={project.link} className='mb-8'>
              <ImageCarousel images={project.imgSrc} />
            </Link>
            <div className='h-1'></div>
            {projectData[index].description.map((desc, index) => (
              <div
                key={index}
                className='badge badge-accent badge-lg text-xl p-4 m-1 '
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
