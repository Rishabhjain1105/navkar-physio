import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <motion.section
      className="py-24 px-6 bg-white text-center"
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-blue-700">About Us</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Navkar Physio & Pain Clinic provides personalized physiotherapy and
          pain management services using modern techniques and compassionate care
          to restore movement and improve your quality of life.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutSection;
