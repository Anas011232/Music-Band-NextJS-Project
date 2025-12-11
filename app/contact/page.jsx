"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
// emailjs import commented for now
// import emailjs from "emailjs-com";

export default function ContactPage() {
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    alert("Form submit attempted! Add EmailJS keys to enable sending.");
    setSuccess("Form submit attempted (EmailJS not configured).");
    e.target.reset();
  };

  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-2xl md:text-4xl font-extrabold uppercase
        bg-gradient-to-r from-red-500 to-yellow-300 bg-clip-text text-transparent
        tracking-[0.25em] drop-shadow-[0_0_45px_rgba(255,0,0,0.7)] mb-16"
      >
        Contact The Band
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}      // Side animation removed
          whileInView={{ opacity: 1, y: 0 }}   // Fade + small lift animation
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold text-red-500">Get in Touch</h3>
          <p className="text-gray-300">
            Have questions, collaborations, or want to book the band? Reach out using the form or via our direct contact info.
          </p>

          <div className="space-y-4 text-gray-200 text-sm md:text-base">
            <p className="flex items-center gap-3">
              <Mail className="text-red-500" /> band@example.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-red-500" /> +880 123 456 789
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="text-red-500" /> Dhaka, Bangladesh
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}      // Side animation removed
          whileInView={{ opacity: 1, y: 0 }}   // Fade + slight upward
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-6 space-y-6 shadow-[0_0_25px_rgba(255,0,0,0.3)] hover:shadow-[0_0_35px_rgba(255,0,0,0.7)] transition-all duration-500"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="from_name"
            className="w-full p-3 rounded-lg bg-black/30 border border-red-500 focus:border-yellow-400 outline-none text-white placeholder-gray-400"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            name="from_email"
            className="w-full p-3 rounded-lg bg-black/30 border border-red-500 focus:border-yellow-400 outline-none text-white placeholder-gray-400"
            required
          />

          <textarea
            placeholder="Your Message"
            name="message"
            rows={5}
            className="w-full p-3 rounded-lg bg-black/30 border border-red-500 focus:border-yellow-400 outline-none text-white placeholder-gray-400"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-gradient-to-r from-yellow-400 to-red-500 text-black font-bold px-6 py-3 rounded-xl shadow-lg w-full md:w-auto"
          >
            Send Message
          </motion.button>

          {success && <p className="text-green-400 font-semibold mt-2">{success}</p>}
        </motion.form>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-center mt-16 text-red-500 opacity-70"
      >
        🎸 Stay Tuned & Rock On! 🎶
      </motion.div>
    </section>
  );
}
