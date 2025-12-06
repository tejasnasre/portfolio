"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { FaDownload } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Left Content */}
      <motion.div variants={itemVariants} className="space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full">
          <Code2 className="w-4 h-4" />
          <span className="text-sm font-medium">
            Founding Engineer & Full Stack Developer
          </span>
        </div>{" "}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          I code top notch{" "}
          <span className="relative inline-block">
            mobile and web apps
            <div className="absolute -bottom-2 left-0 w-full h-3 bg-blue-200 -z-10"></div>
          </span>
        </h1>
        <div className="space-y-4 max-w-lg">
          <p className="text-lg text-gray-700 leading-relaxed">
            Hi, I&lsquo;m <span className="font-bold">Tejas</span>, a Founding
            Engineer at Tap In and a Full Stack Developer. I specialize in
            building high-performance mobile and web applications using React
            Native, Next.js, and TypeScript.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            I&lsquo;ve shipped scalable products like Eazefly and Nexmeet, and
            I&lsquo;m actively involved in the open-source community and tech
            events.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <motion.a
            href="https://drive.google.com/file/d/1G94qT8b58NY1swuccmTnMbm0uYIha8wN/view?usp=drive_link"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-2 px-6 py-3 bg-blue-100 text-black border-2 border-black rounded-full font-medium transition-shadow hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Resume <FaDownload className="w-4 h-4" />
            <div className="absolute top-0 right-0 -mt-2 -mr-2 w-4 h-4 bg-yellow-300 rounded-full border-2 border-black"></div>
          </motion.a>
        </div>
      </motion.div>

      {/* Right Content - Profile Summary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="relative aspect-square max-w-md mx-auto">
          {/* Border Frame */}
          <div className="absolute inset-0 border-2 border-black bg-linear-to-br from-blue-100 to-white rounded-3xl transform rotate-2"></div>
          <div className="absolute inset-0 border-2 border-black bg-linear-to-br from-blue-100 to-white rounded-3xl transform -rotate-2"></div>

          {/* Main Image Container */}
          <div className="relative h-full border-2 border-black bg-[#FEFFF0] rounded-3xl overflow-hidden">
            <Image
              width={500}
              height={500}
              src="https://ahsoaaowohdxdpflqvib.supabase.co/storage/v1/object/public/portfolio-imgs/profile-img.jpg"
              alt="Developer Portrait"
              className="object-contain w-full"
            />

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center">
              <span className="text-xl">:)</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
