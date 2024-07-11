import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const showNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0);
  };

  useEffect(() => {
    if (hovered) {
      intervalRef.current = setInterval(showNextImage, 2000); // Меняет изображение каждые 2 секунды
      progressRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(progressRef.current!);
            return 100;
          }
          return prevProgress + 0.5; // Обновление прогресса каждый 10 мс
        });
      }, 10); // Обновление прогресса каждые 10 мс
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (progressRef.current) {
        clearInterval(progressRef.current);
        progressRef.current = null;
      }
      setProgress(0);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (progressRef.current) {
        clearInterval(progressRef.current);
      }
    };
  }, [hovered]);

  return (
    <div
      className='relative aspect-[9/16]  overflow-hidden rounded-lg cursor-pointer'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Slide ${index}`}
          width={512}
          height={512}
          className={`absolute aspect-[9/16]  w-full h-auto object-cover inset-0  transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <progress
        className='progress absolute top-0 left-0 w-full'
        value={progress}
        max='100'
      ></progress>
    </div>
  );
};

export default ImageCarousel;
