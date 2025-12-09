"use client";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram, FaSpotify } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="bg-black border-t border-red-600/30 pt-12 pb-6 px-6 sm:px-12 text-white relative overflow-hidden">

            {/* Background Glow Effect */}
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-gradient-to-t from-red-700/40 blur-3xl"></div>

            {/* Content Wrapper */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
            >

                {/* About Section */}
                <div>
                    <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-red-500 to-yellow-400 bg-clip-text text-transparent mb-4">
                        Artcell
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                        The legendary Bangladeshi rock band. Explore discography, albums,
                        tracks, and exclusive behind-the-music insights.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-bold text-red-400 mb-3">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-yellow-400 transition">Home</Link></li>
                        <li><Link href="/music" className="hover:text-yellow-400 transition">Discography</Link></li>
                        <li><Link href="/gallery" className="hover:text-yellow-400 transition">Gallery</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
                    </ul>
                </div>

                
                <div>
                    <h4 className="text-lg font-bold text-red-400 mb-3">Privacy & Terms</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/privacy-policy" className="hover:text-yellow-400 transition">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms-and-conditions" className="hover:text-yellow-400 transition">
                                Terms & Conditions
                            </Link>
                        </li>
                    </ul>
                </div>


                {/* Social Media */}
                <div>
                    <h4 className="text-lg font-bold text-red-400 mb-4">Connect With Us</h4>

                    <div className="flex gap-4">
                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="https://facebook.com"
                            target="_blank"
                            className="text-gray-400 hover:text-blue-500 transition text-xl"
                        >
                            <FaFacebook />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="https://youtube.com"
                            target="_blank"
                            className="text-gray-400 hover:text-red-500 transition text-xl"
                        >
                            <FaYoutube />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="https://instagram.com"
                            target="_blank"
                            className="text-gray-400 hover:text-pink-500 transition text-xl"
                        >
                            <FaInstagram />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="https://spotify.com"
                            target="_blank"
                            className="text-gray-400 hover:text-green-500 transition text-xl"
                        >
                            <FaSpotify />
                        </motion.a>
                    </div>
                </div>

            </motion.div>

            {/* Copyright */}
            <div className="relative z-10 border-t border-gray-700/40 mt-10 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Anas Bin Rafiq — All Rights Reserved.
            </div>

        </footer>
    );
}
