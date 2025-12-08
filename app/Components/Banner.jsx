"use client";
import Image from 'next/image'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const slides = [
  { id: 1, img: "/banner1.jpg", title: "Welcome to Artcell Music", subtitle: "Feel the rhythm of your soul" },
  { id: 2, img: "/bbanner2.jpg", title: "Explore Our Albums", subtitle: "Every song tells a story" },
  { id: 3, img: "/banner3.jpg", title: "Join Our Concerts", subtitle: "Experience live music like never before" },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        current === index && (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full"
          >
            <Image src={slide.img} alt="" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="absolute top-1/3 left-1/2 -translate-x-1/2 text-center px-4"
            >
              <h2 className="text-6xl md:text-7xl font-extrabold 
              bg-gradient-to-r from-yellow-300 to-red-600 bg-clip-text text-transparent 
              drop-shadow-[0_0_15px_rgba(255,0,0,0.8)] border-[3px] 
              shadow-2xl p-3 rounded-xl">
                {slide.title}
              </h2>
              <p className="text-2xl md:text-3xl mt-4 font-semibold 
              text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
                {slide.subtitle}
              </p>
            </motion.div>
          </motion.div>
        )
      ))}

      {/* Navigation Buttons */}
      <div className="absolute left-5 right-5 top-1/2 flex justify-between">
        <button onClick={prevSlide} className="btn btn-circle bg-white/20 backdrop-blur-md border-none hover:bg-white/40 text-white">❮</button>
        <button onClick={nextSlide} className="btn btn-circle bg-white/20 backdrop-blur-md border-none hover:bg-white/40 text-white">❯</button>
      </div>
    </div>
  );
}
