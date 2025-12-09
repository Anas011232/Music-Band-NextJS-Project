"use client";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl md:text-5xl font-extrabold uppercase
        bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent
        tracking-[0.15em] mb-12"
      >
        Terms & Conditions
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-6 text-gray-300 text-sm md:text-base leading-relaxed"
      >
        <h2 className="text-xl font-bold text-red-400 mt-6">1. Acceptance of Terms</h2>
        <p>
          By accessing and using this website, you agree to comply with these Terms & Conditions. If you do not agree, please do not use our site.
        </p>

        <h2 className="text-xl font-bold text-red-400 mt-6">2. Use of Content</h2>
        <p>
          All content on this site including music, images, and text is owned by the band or used with permission. Unauthorized use, reproduction, or distribution is prohibited.
        </p>

        <h2 className="text-xl font-bold text-red-400 mt-6">3. User Responsibilities</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Provide accurate information in contact forms</li>
          <li>Respect copyright and intellectual property</li>
          <li>Use the website for lawful purposes only</li>
        </ul>

        <h2 className="text-xl font-bold text-red-400 mt-6">4. Limitation of Liability</h2>
        <p>
          The band is not responsible for any direct, indirect, or consequential damages arising from the use of this website or reliance on any content.
        </p>

        <h2 className="text-xl font-bold text-red-400 mt-6">5. Modifications</h2>
        <p>
          We reserve the right to modify these Terms & Conditions at any time. Updates will be posted on this page.
        </p>

      </motion.div>
    </section>
  );
}
