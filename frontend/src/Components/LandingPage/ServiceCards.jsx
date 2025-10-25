import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Physiotherapy", description: "Improve mobility and relieve pain with expert care.", icon: "💪" },
  { title: "Pain Management", description: "Effective solutions for chronic and acute pain.", icon: "💊" },
  { title: "Rehabilitation", description: "Customized recovery plans for injuries and surgeries.", icon: "🏃‍♂️" },
];

const ServiceCards = () => {
  return (
    <section className="py-24 px-6 bg-gray-50 text-center" id="services">
      <h2 className="text-4xl font-bold mb-12 text-red-500">Our Services</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-blue-700">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
