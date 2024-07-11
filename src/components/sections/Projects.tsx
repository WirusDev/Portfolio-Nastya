"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import ImageCarousel from "../ui/ImageCarousel";

const images = [
  "/images/prod/lingoaa.jpg",
  "/images/prod/cerise.jpg",
  "/images/prod/Twist.png",
];
const projectData = [
  {
    imgSrc: "/images/prod/Regen-Bock.png",
    imgAlt: "Regen-Bock",
    title: "Regen-Bock",
    description: "How to park your car at your garage?",
    link: "/projects/regenbock",
  },
  {
    imgSrc: "/images/prod/cerise.jpg",
    imgAlt: "Cerise",
    title: "Cerise",
    description: "Beauty Studio Website",
    link: "/projects/cerise",
  },
];

const projectData_2 = [
  {
    imgSrc: "/images/prod/Regen-Bock.png",
    imgAlt: "Regen-Bock",
    title: "Regen-Bock",
    description: "How to park your car at your garage?",
    link: "/projects/regenbock",
  },
  {
    imgSrc: "/images/prod/cerise.jpg",
    imgAlt: "Cerise",
    title: "Cerise",
    description: "Beauty Studio Website",
    link: "/projects/cerise",
  },
];

export default function Projects() {
  return (
    <div>
      <div className='divider'>Default</div>

      <div className='grid gap-4 grid-cols-1 md:grid-cols-3 xl:grid-cols-4 min-h-[300px]'>
        <ImageCarousel images={images} />
        <ImageCarousel images={images} />
        <ImageCarousel images={images} />
        <ImageCarousel images={images} />
      </div>
    </div>
  );
}
