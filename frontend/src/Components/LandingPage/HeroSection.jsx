import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.section
      className="bg-gradient-to-r from-blue-700 via-red-500 to-blue-500 text-white py-32 px-6 text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Welcome to <span className="text-yellow-300">Navkar Physio</span>
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-10 text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Expert physiotherapy, pain management, and rehabilitation solutions
          for a healthier, active life.
        </motion.p>
        <motion.button
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book Appointment
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HeroSection;
