"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function about() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6 overflow-hidden">
      
      {/* MAIN HEADING */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-5xl font-extrabold uppercase
        bg-gradient-to-r from-yellow-300 via-red-500 to-yellow-300 bg-clip-text text-transparent
        drop-shadow-[0_0_35px_rgba(255,0,0,1)]
        tracking-[0.3em] mb-20"
      >
        The Band Story
      </motion.h2>

      {/* WRAPPER */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* BAND PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative w-full h-[450px] rounded-3xl overflow-hidden 
          shadow-[0_0_35px_rgba(255,0,0,0.35)] 
          hover:shadow-[0_0_60px_rgba(255,0,0,0.95)]
          transition-all duration-700 group"
        >
          <Image
            src="/i1.jpg"
            fill
            alt="Band"
            className="object-cover group-hover:scale-110 transition-all duration-700"
          />

          {/* FILM OVERLAY EFFECT */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 opacity-60"></div>

          {/* NAME ON IMAGE */}
          <div className="absolute bottom-6 left-6 uppercase text-xl font-bold tracking-widest">
            <span className="bg-gradient-to-r from-yellow-300 to-red-500 bg-clip-text text-transparent">
              Artcell
            </span>
          </div>
        </motion.div>

        {/* TEXT BLOCK */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
            Formed in <span className="text-red-400 font-semibold">Dhaka, Bangladesh</span>, 
            we are a rock/alternative fusion band driven by emotion, storytelling, and the 
            passion to reshape the sound of our generation. Our music blends the essence of
            Bangla roots with modern sonic elements.
          </p>

          <p className="text-lg md:text-xl leading-relaxed text-gray-200 mb-6">
            Every track we create is inspired by the chaos of life — love, pain, dreams,
            and the moments that define who we are. We believe music should not just be
            heard, but <span className="text-red-400 font-bold">felt.</span>
          </p>

          {/* SIGNATURE LINE */}
          <motion.p
            whileHover={{ scale: 1.05 }}
            className="mt-6 inline-block text-red-400 uppercase tracking-[0.3em] font-bold"
          >
            — Music That Speaks The Heart
          </motion.p>
        </motion.div>

      </div>

      {/* SCROLL HINT */}
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-center mt-20 text-red-500 opacity-70"
      >
        ▼ More Coming ▼
      </motion.div>
    </section>
  );
}
