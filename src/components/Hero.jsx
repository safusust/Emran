import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen bg-gradient-to-br from-purple-600 to-blue-700 text-white flex flex-col items-center justify-center text-center relative overflow-hidden"
    >
      {/* Background Animations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400 rounded-full opacity-20 blur-xl"
          animate={{ scale: [1, 1.5, 1], rotate: [0, 360, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full opacity-30 blur-2xl"
          animate={{ scale: [1, 1.3, 1], rotate: [0, -360, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Profile Picture */}
      <motion.img
        src={profile}
        alt="Profile"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-36 h-36 rounded-full border-4 border-blue-300 shadow-lg z-10"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-extrabold tracking-wide mt-6"
      >
        Hi, I'm <span className="text-blue-300">Emran Khoka</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-xl mt-4 text-gray-200"
      >
        Innovative Textile Engineer skilled in sustainable fabrics and modern production techniques.
      </motion.p>

      {/* Call to Action Button */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
      >
        Contact Me
      </motion.a>

      {/* Social Icons */}
      <div className="mt-6 flex space-x-6 z-10">
        <a
          href="https://www.facebook.com/emrankhoka420"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-300 hover:scale-110 transition-transform"
        >
          <FaFacebook size={28} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-300 hover:scale-110 transition-transform"
        >
          <FaInstagram size={28} />
        </a>
        <a
          href="https://wa.me"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-300 hover:scale-110 transition-transform"
        >
          <FaWhatsapp size={28} />
        </a>
      </div>
    </section>
  );
}

export default Hero;
