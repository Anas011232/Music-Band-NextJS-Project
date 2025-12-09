"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { albumsData } from "../music/albumsData";


export default function MusicPage() {
  const [visibleAlbums, setVisibleAlbums] = useState(albumsData.slice(0, 5));

  const showAllAlbums = () => setVisibleAlbums(albumsData);

  return (
    <section className="w-full py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <h2 className="text-center text-2xl md:text-4xl font-extrabold uppercase bg-gradient-to-r from-red-500 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_45px_rgba(255,0,0,0.9)] tracking-[0.25em] mb-16">
      DISCOGRAPHY
      </h2>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {visibleAlbums.map((album) => (
            <Link key={album.id} href={`/music/${album.year}`}>
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 rounded-xl overflow-hidden cursor-pointer shadow-[0_0_10px_rgba(255,0,0,0.2)] hover:shadow-[0_0_25px_rgba(255,0,0,0.6)] transition-all duration-500 transform hover:scale-105">
                <Image
                  src={album.cover}
                  alt={album.title}
                  fill
                  className="object-cover w-full h-full rounded-xl"
                />
                <div className="absolute bottom-0 w-full bg-black/60 py-2 text-center">
                  <p className="text-white font-semibold text-sm">{album.title}</p>
                  <p className="text-red-500 text-xs mt-1">{album.year}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {visibleAlbums.length < albumsData.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={showAllAlbums}
            className="px-6 py-3 border border-red-500 text-red-500 font-semibold rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            Explore All Discography
          </button>
        </div>
      )}
    </section>
  );
}
