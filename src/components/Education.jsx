import React from "react";
import { motion } from "framer-motion";

function Education() {
  const educationList = [
    {
      degree: "Bachelor of Science in Textile Engineering",
      institution: "Uttara University",
      year: "2022-2026",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "MEH Arif College",
      year: "2021",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "MEH Arif College",
      year: "2019",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="education" className="bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-10">
          Education
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {educationList.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                {item.degree}
              </h3>
              <p className="text-gray-700 text-lg">{item.institution}</p>
              <p className="text-gray-500 text-sm mt-1">{item.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
