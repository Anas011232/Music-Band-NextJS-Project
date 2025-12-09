"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const artists = [
    {
        name: "KAZI ASHEQEEN (SHAJU)",
        role: "LEAD VOCALS & GUITAR",
        img: "/a1.jpg",
    },
    {
        name: "TAMANNA AKTER",
        role: "DRUMS",
        img: "/a2.jpg",
    },
    {
        name: "SAEF AL NAZI (CEZANNE)",
        role: "BASS",
        img: "/a3.jpg",
    },

];

export default function Artists() {
    return (
        <section className="w-full py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
            <h2
                className="text-center text-2xl md:text-4xl font-extrabold uppercase bg-gradient-to-r from-red-500 to-yellow-300 
  bg-clip-text text-transparent 
  drop-shadow-[0_0_45px_rgba(255,0,0,0.9)]
  tracking-[0.25em] mb-20"
            >
                BAND MEMBERS
            </h2>




            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 px-6 md:px-16">
                {artists.map((artist, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: index * 0.12 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.06, rotate: -1 }}
                        className="relative h-[520px] rounded-3xl overflow-hidden group shadow-[0_0_20px_rgba(255,0,0,0.15)] hover:shadow-[0_0_35px_rgba(255,0,0,0.55)] transition-all duration-700"
                    >
                        <Image
                            src={artist.img}
                            alt={artist.name}
                            fill
                            className="object-cover w-full h-full  group-hover:grayscale-0 transition-all duration-700"
                        />

                        {/* Black gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-all duration-700 group-hover:via-black/20" />

                        {/* Name + Role */}
                        <div className="absolute bottom-6 left-6">
                            <h3 className="text-xl md:text-2xl font-bold tracking-wide drop-shadow-lg">
                                {artist.name}
                            </h3>
                            <p className="text-red-500 font-semibold text-sm md:text-base mt-1 tracking-wide">
                                {artist.role}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
