"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  "/a1.jpg",
  "/a2.jpg",
  "/a3.jpg",
  "/a2.jpg",
  "/a3.jpg",
  "/a1.jpg",
  "/a2.jpg",
  "/a1.jpg",
];

export default function gallery() {
  return (
    <section className="w-full bg-black py-24 px-6 overflow-hidden">
      
      {/* MAIN HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-5xl font-extrabold uppercase 
        bg-gradient-to-r from-yellow-300 via-red-500 to-yellow-300 bg-clip-text text-transparent
        tracking-[0.25em] drop-shadow-[0_0_35px_rgba(255,0,0,0.8)] mb-20"
      >
        GALLERY
      </motion.h2>

      {/* MASONRY GRID GALLERY */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-7xl mx-auto">
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative w-full overflow-hidden rounded-xl cursor-pointer group
            shadow-[0_0_20px_rgba(255,0,0,0.3)]
            hover:shadow-[0_0_45px_rgba(255,0,0,0.9)]
            bg-black"
          >
            <div className="relative w-full h-auto">
              <Image
                src={src}
                width={600}
                height={800}
                alt="Gallery Image"
                className="w-full rounded-xl object-cover 
                transition-transform duration-[1200ms] 
                group-hover:scale-110 group-hover:rotate-2"
              />
            </div>

            {/* RED LIGHT GLOW TOP */}
            <div className="absolute top-0 left-0 w-full h-[40%] 
              bg-gradient-to-b from-red-600/40 to-transparent
              opacity-0 group-hover:opacity-100 transition-all duration-700"
            />

            {/* OVERLAY TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-4 left-4 text-white text-sm uppercase tracking-widest"
            >
              Live Shot
            </motion.div>
          </motion.div>
        ))}
      </div>

      
    </section>
  );
}
