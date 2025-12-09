"use client";
import { motion } from "framer-motion";
import { CalendarDays, MapPin, Ticket } from "lucide-react";

const event = [
  {
    id: 1,
    title: "Rocking New Year Concert",
    date: "12 Jan • 2025",
    location: "Dhaka Arena, Bangladesh",
    ticket: "https://ticket-link.com",
    status: "UPCOMING",
  },
  {
    id: 2,
    title: "Unplugged Live Session",
    date: "05 Feb • 2025",
    location: "Chattogram Art Hall",
    ticket: "https://ticket-link.com",
    status: "UPCOMING",
  },
  {
    id: 3,
    title: "Music Night Festival",
    date: "20 Nov • 2024",
    location: "Sylhet Stadium",
    status: "FINISHED",
  },
];

export default function events() {
  return (
    <section className="w-full min-h-screen py-28 bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl md:text-5xl font-extrabold uppercase
        bg-gradient-to-r from-red-500 to-yellow-300 bg-clip-text text-transparent
        tracking-[0.30em] drop-shadow-[0_0_45px_rgba(255,0,0,0.7)] mb-20"
      >
        event & Tours
      </motion.h2>

      {/* Event Items */}
      <div className="max-w-6xl mx-auto space-y-10">
        {event.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.12 }}
            whileHover={{ scale: 1.03 }}
            className="border border-white/10 rounded-2xl p-6
            bg-white/5 backdrop-blur-sm 
            shadow-[0_0_25px_rgba(255,0,0,0.25)]
            hover:shadow-[0_0_35px_rgba(255,0,0,0.7)]
            transition-all duration-500"
          >
            <div className="flex items-center justify-between flex-wrap gap-4">
              
              <div>
                <h3 className="text-xl md:text-2xl font-bold">
                  {event.title}
                </h3>

                <div className="mt-3 space-y-1 text-gray-300 text-sm md:text-base">
                  <p className="flex items-center gap-2">
                    <CalendarDays size={18} className="text-red-400" /> {event.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={18} className="text-red-400" /> {event.location}
                  </p>
                </div>
              </div>

              {/* Buttons + Status */}
              <div className="text-right space-y-2">

                {/* Status Badge */}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold inline-block
                  ${
                    event.status === "UPCOMING"
                      ? "bg-red-600 text-white"
                      : "bg-gray-600 text-gray-200"
                  }`}
                >
                  {event.status}
                </span>

                {/* Ticket Button */}
                {event.ticket && (
                  <motion.a
                    whileHover={{ x: 6 }}
                    href={event.ticket}
                    target="_blank"
                    className="flex items-center gap-2 text-black font-bold 
                    bg-gradient-to-r from-yellow-400 to-red-500
                    px-4 py-2 rounded-xl shadow-lg text-sm float-right"
                  >
                    <Ticket size={18} /> Tickets
                  </motion.a>
                )}
              </div>

            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer Text */}
      <motion.p
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="text-center mt-16 text-gray-400 text-xs md:text-sm"
      >
        More Shows Coming Soon…
      </motion.p>
    </section>
  );
}
