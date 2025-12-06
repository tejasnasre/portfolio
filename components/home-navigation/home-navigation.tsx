"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HomeNavigation() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="font-codefont bg-[#FEFFF0] w-full mx-auto p-10 md:px-36 py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="grid md:grid-cols-3 gap-6"
      >
        <Link href="/services" className="group relative">
          <div className="border-4 border-black p-6 bg-[#FEFFF0] h-full hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition duration-300">
            <h2 className="text-2xl font-bold mb-3">Services</h2>
            <p className="text-gray-600">
              Full stack development solutions using modern technologies.
            </p>
          </div>
        </Link>

        <Link href="/skills" className="group relative">
          <div className="border-4 border-black p-6 bg-[#FEFFF0] h-full hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition duration-300">
            <h2 className="text-2xl font-bold mb-3">Skills</h2>
            <p className="text-gray-600">
              Expertise in frontend, backend, and modern development tools.
            </p>
          </div>
        </Link>

        <Link href="/experience" className="group relative">
          <div className="border-4 border-black p-6 bg-[#FEFFF0] h-full hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition duration-300">
            <h2 className="text-2xl font-bold mb-3">Experience</h2>
            <p className="text-gray-600">My professional journey in tech.</p>
          </div>
        </Link>

        <Link href="/events" className="group relative">
          <div className="border-4 border-black p-6 bg-[#FEFFF0] h-full hover:shadow-[5px_5px_0px_0px_rgb(0,0,0)] transition duration-300">
            <h2 className="text-2xl font-bold mb-3">Events</h2>
            <p className="text-gray-600">
              Tech events I&lsquo;ve attended and organized.
            </p>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
