import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
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

  const showPrevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
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

  const handlers = useSwipeable({
    onSwipedLeft: showNextImage,
    onSwipedRight: showPrevImage,

    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className='relative aspect-square overflow-hidden rounded-lg cursor-pointer'
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
          className={`absolute aspect-square w-full h-auto object-cover inset-0 transition-opacity duration-500 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className='absolute top-1 rounded-full left-0 w-full flex'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 mx-1 rounded-sm ${
              index < currentIndex
                ? "bg-gray-300" // Цвет для завершенных прогресс-баров
                : index === currentIndex
                ? "bg-accent" // Цвет для текущего прогресс-бара
                : "bg-gray-100" // Цвет для неактивных прогресс-баров
            }`}
            style={{
              width: `${index === currentIndex ? `${progress}%` : "100%"}`,
              transition: "width 0.1s linear",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
