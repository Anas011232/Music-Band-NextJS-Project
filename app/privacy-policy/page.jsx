"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-24 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl md:text-5xl font-extrabold uppercase
        bg-gradient-to-r from-red-500 to-yellow-300 bg-clip-text text-transparent
        tracking-[0.15em] mb-12"
      >
        Privacy Policy
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-6 text-gray-300 text-sm md:text-base leading-relaxed"
      >
        <p>
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or interact with our band.
        </p>

        <h2 className="text-xl font-bold text-red-400 mt-6">Information We Collect</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Personal details you provide through contact forms (name, email, message)</li>
          <li>Technical information such as IP address, browser type, and device information</li>
          <li>Analytics data to improve website performance</li>
        </ul>

        <h2 className="text-xl font-bold text-red-400 mt-6">How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>To respond to your messages and inquiries</li>
          <li>To improve website content and user experience</li>
          <li>To send promotional or informational emails (if opted in)</li>
        </ul>

        <h2 className="text-xl font-bold text-red-400 mt-6">Data Protection</h2>
        <p>
          We take the security of your information seriously. We implement appropriate technical and organizational measures to protect your data from unauthorized access, disclosure, or misuse.
        </p>

        <h2 className="text-xl font-bold text-red-400 mt-6">Third-Party Services</h2>
        <p>
          We may use third-party services (like analytics tools or email providers) that help us manage the website efficiently. These services are bound to privacy agreements and only use data for specified purposes.
        </p>

        <h2 className="text-xl font-bold text-red-400 mt-6">Changes to This Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. Any changes will be posted on this page with the effective date.
        </p>

      </motion.div>
    </section>
  );
}
