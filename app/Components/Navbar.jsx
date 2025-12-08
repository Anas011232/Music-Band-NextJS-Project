"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { FaHome, FaInfoCircle, FaMusic, FaImages, FaMicrophone, FaEnvelope, FaFacebookF, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll lock for menu modal
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Detect scroll for blur + shadow effect on top navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuLinks = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "About", href: "/about", icon: <FaInfoCircle /> },
    { name: "Music", href: "/music", icon: <FaMusic /> },
    { name: "Gallery", href: "/gallery", icon: <FaImages /> },
    { name: "Events", href: "/events", icon: <FaMicrophone /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaYoutube />, href: "https://youtube.com" },
    { icon: <FaMusic />, href: "https://spotify.com" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 text-white transition-all duration-500
        ${scrolled
          ? "bg-black/40 backdrop-blur-md shadow-[0_0_25px_rgba(255,0,0,0.4)] translate-y-0"
          : "bg-black"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Left Menu Button */}
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-red-500 transition duration-300"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Center Band Name */}
        <div className="text-2xl font-bold tracking-widest hover:text-red-500 transition duration-300 cursor-pointer">
          Artcell
        </div>

        {/* Right Social Links */}
        <div className="hidden md:flex space-x-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300 text-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Slide-in Menu (Desktop) */}
      <div
        className={`hidden md:flex fixed top-0 left-0 h-full w-64 bg-black  transform transition-transform duration-700 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} flex-col p-8 space-y-6`}
      >
        <div className="text-center text-2xl font-bold mb-6 text-red-500">Artcell</div>
        <button
          onClick={toggleMenu}
          className="self-end text-white hover:text-red-500 transition duration-300"
        >
          <HiX className="w-6 h-6" />
        </button>

        {menuLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-xl py-2 flex items-center space-x-2 transition-all duration-300
              ${pathname === link.href ? "text-red-500 font-semibold" : "text-white hover:text-red-500"}
            `}
            onClick={() => setIsOpen(false)}
          >
            <span className="text-red-500">{link.icon}</span>
            <span className="group relative">
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
            </span>
          </a>
        ))}

        <div className="flex space-x-4 mt-4">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300 text-xl"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Slide-in Menu (Mobile) */}
      <div
        className={`md:hidden fixed top-0 left-0 h-full bg-black z-50 transform transition-transform duration-700 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} w-3/5 flex flex-col justify-start p-6`}
      >
        <div className="text-2xl font-bold text-red-500 mb-8">Artcell</div>
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white hover:text-red-500 transition duration-300"
        >
          <HiX className="w-6 h-6" />
        </button>

        {menuLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`text-xl py-4 flex items-center space-x-3 transition-all duration-300
              ${pathname === link.href ? "text-red-500 font-semibold" : "text-white hover:text-red-500"}
            `}
            onClick={() => setIsOpen(false)}
          >
            <span className="text-red-500">{link.icon}</span>
            <span className="group relative">
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-red-500 transition-all group-hover:w-full"></span>
            </span>
          </a>
        ))}

        <div className="flex space-x-6 mt-8">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition duration-300 text-xl"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
