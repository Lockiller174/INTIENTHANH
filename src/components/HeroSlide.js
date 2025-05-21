"use client";

import { useEffect, useState } from "react";

// Import images from src/assets
import banner1 from "../assets/banner/banner1.jpg";
import banner2 from "../assets/banner/banner2.jpeg";
import banner3 from "../assets/banner/banner3.jpeg";

const slides = [
  {
    id: 1,
    image: banner1,
    alt: "In ấn banner 1",
  },
  {
    id: 2,
    image: banner2,
    alt: "In ấn banner 2",
  },
  {
    id: 3,
    image: banner3,
    alt: "In ấn banner 3",
  },
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const next = () => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full h-full relative">
            <img src={slide.image} alt={slide.alt} />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 rounded-full p-2 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        Prev
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/60 rounded-full p-2 backdrop-blur-sm"
        aria-label="Next slide"
      >
        Next
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-brand-red" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;