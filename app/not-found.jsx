"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">
      
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-7xl md:text-9xl font-extrabold text-red-600 mb-6 drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-2xl md:text-4xl font-bold mb-6"
      >
        Oops! Page Not Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-gray-300 text-center mb-8 max-w-lg"
      >
        The page you are looking for does not exist. You might have mistyped the URL or the page has been moved.
      </motion.p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="/"
          className="bg-gradient-to-r from-red-500 to-yellow-400 text-black font-bold px-6 py-3 rounded-xl shadow-lg"
        >
          Back to Home
        </Link>
      </motion.div>

    </section>
  );
}
