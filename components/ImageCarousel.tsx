"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageCarouselProps {
  images: string[];
  interval?: number;
  width?: number;
  height?: number;
  className?: string;
  showIndicators?: boolean;
}

export default function ImageCarousel({
  images,
  interval = 3000,
  width = 800,
  height = 400,
  className = '',
  showIndicators = true,
}: ImageCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, images.length, interval]);

  const handleImageClick = () => {
    window.open(images[currentImage], '_blank');
  };

  const handleIndicatorClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImage(index);
  };

  return (
    <div
      className={`relative cursor-pointer overflow-hidden rounded-xl shadow-md group ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onClick={handleImageClick}
    >
      <Image
        width={width}
        height={height}
        src={images[currentImage]}
        alt={`Carousel image ${currentImage + 1}`}
        className="w-full object-cover transition-opacity duration-500"
      />

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => handleIndicatorClick(e, idx)}
              className={`h-2 rounded-full transition-all ${
                idx === currentImage
                  ? 'bg-white w-6'
                  : 'bg-white/50 hover:bg-white/75 w-2'
              }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Pause indicator (optional) */}
      {isPaused && images.length > 1 && (
        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
          Paused
        </div>
      )}
    </div>
  );
}