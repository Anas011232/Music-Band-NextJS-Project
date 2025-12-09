"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { albumsData } from "../albumsData.js";

import { useState } from "react";
import { SiSpotify } from 'react-icons/si';
import { FiYoutube, FiMaximize } from 'react-icons/fi';
import { useParams } from "next/navigation.js";

export default function AlbumPage() {
  const params = useParams();
  const { year } = params;
  const album = albumsData.find(a => a.year === year);

  const [selectedTrack, setSelectedTrack] = useState(null);

  if (!album) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-white text-xl px-4">
        Album not found!
      </div>
    );
  }

  return (
    <section className="w-full  min-h-screen pt-24 py-12  bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-4 md:px-16 lg:px-24">
      
      {/* Album Header */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
        >
          <Image
            src={album.cover}
            alt={album.title}
            fill
            className="object-cover w-full h-full rounded-2xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 drop-shadow-lg mb-2">
            {album.title}
          </h1>
          <p className="text-red-500 text-sm sm:text-lg md:text-xl mb-6">Released: {album.year}</p>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            Dive into the discography. Select any track to view full details and streaming links.
          </p>
        </motion.div>
      </div>

      {/* Tracks Grid + Streaming Links */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {/* Tracks Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className={`col-span-1 ${selectedTrack ? 'lg:col-span-2 xl:col-span-3' : 'lg:col-span-3 xl:col-span-4'} transition-all duration-500`}
        >
          <h2 className="text-3xl font-bold mb-6 text-yellow-400 border-b-2 border-red-500 pb-2">Tracklist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {album.tracks.map(track => (
              <motion.div
                key={track.trackNumber}
                whileHover={{ scale: 1.02, backgroundColor: "#1f2937" }}
                transition={{ duration: 0.2 }}
                className={`p-4 sm:p-5 rounded-xl shadow-lg cursor-pointer transition-all border ${
                  selectedTrack?.trackNumber === track.trackNumber
                    ? "bg-red-900/50 border-red-500 scale-[1.01]"
                    : "bg-gray-800/80 border-gray-700 hover:border-red-500/50"
                }`}
                onClick={() => setSelectedTrack(track)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1">
                    <span className="text-red-500 mr-2">{track.trackNumber}.</span> {track.title}
                  </h3>
                  <FiMaximize className="text-gray-400 ml-4 flex-shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Streaming Links + Track Details */}
        {selectedTrack && (
          <div className="col-span-1 bg-gray-800/90 border border-red-500 rounded-2xl p-6 shadow-2xl sticky top-8 h-fit lg:mt-[5.75rem]">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 mb-4 border-b border-gray-700 pb-2">
              {selectedTrack.title}
            </h3>

            <div className="text-gray-300 space-y-2">
              <p><span className="text-yellow-400 font-semibold">Lyric:</span> {selectedTrack.lyric}</p>
              <p><span className="text-yellow-400 font-semibold">Tune:</span> {selectedTrack.tune}</p>
              <p><span className="text-yellow-400 font-semibold">Music Arranged By:</span> {selectedTrack.musicArrangedBy}</p>
              <p><span className="text-yellow-400 font-semibold">Performed By:</span> {selectedTrack.performedBy.join(", ")}</p>
              <p><span className="text-yellow-400 font-semibold">Voice:</span> {selectedTrack.voice.join(", ")}</p>
              <p><span className="text-yellow-400 font-semibold">Drums/Percussion:</span> {selectedTrack.drumsPercussion.join(", ")}</p>
              <p><span className="text-yellow-400 font-semibold">Guitar:</span> {selectedTrack.guitar.join(", ")}</p>
              <p><span className="text-yellow-400 font-semibold">Keyboard:</span> {selectedTrack.keyboard.join(", ")}</p>
              <p><span className="text-yellow-400 font-semibold">Bass:</span> {selectedTrack.bass.join(", ")}</p>
              <p><span className="text-yellow-400 font-semibold">Produced By:</span> {selectedTrack.producedBy}</p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              {selectedTrack.links.spotify && (
                <a
                  href={selectedTrack.links.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-500 transition-all text-center shadow-md"
                >
                  <SiSpotify className="mr-2" size={20} />
                  Listen on Spotify
                </a>
              )}
              {selectedTrack.links.youtube && (
                <a
                  href={selectedTrack.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center px-4 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500 transition-all text-center shadow-md"
                >
                  <FiYoutube className="mr-2" size={20} />
                  Watch on YouTube
                </a>
              )}

              <button
                onClick={() => setSelectedTrack(null)}
                className="mt-2 text-sm text-gray-400 hover:text-red-400 transition-colors"
              >
                Close Details
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Back Button */}
      <div className="mt-16 text-center">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-red-500 to-yellow-400 text-black font-bold rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            &larr; Back to Discography
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
