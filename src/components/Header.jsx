import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/img2.png";
import img2 from "../assets/img4.jpg";
import img3 from "../assets/img3.jpg";
import Counting from "./Counting";

const images = [img1, img2, img3];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
    exit: {
      opacity: 0,
      x: -80,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="bg-[#f8fef8] pt-32 pb-20 px-6 md:px-16 lg:px-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT: Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-left"
          initial="hidden"
          animate="visible"
          variants={slideLeft}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-700 mb-6 leading-tight">
            We Promote Better <br />
            <span className="text-[#3d960d]">Communication</span>
          </h1>

          <p className="text-gray-700 mb-10 text-lg leading-relaxed">
            Welcome to <strong>SpeakLogic.org</strong> — a nonprofit promoting logical communication through books and software.
            <br /><br />
            Click links for problems, solutions, downloads, and hardcopy orders to improve rational thinking and understanding.
          </p>

          <div className="flex items-center gap-5 flex-wrap">
            <motion.button
              className="bg-[#3d960d] text-white px-8 py-3 text-lg rounded-full font-semibold hover:bg-[#3eaa06] transition transform hover:scale-105"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>

            <motion.button
              className="flex items-center gap-3 text-[#333] font-medium group text-lg transition"
              whileHover={{ scale: 1.1 }}
            >
              <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#47be07] text-[#47be07] transition-all duration-300 group-hover:border-[#3eaa06] group-hover:text-[#3eaa06]">
                <FaPlay className="text-sm" />
              </span>
              Play Video
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT: Image Slider */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[650px] h-[320px] md:h-[360px] overflow-hidden rounded-xl shadow-lg">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt="slider"
                className="w-full h-full object-contain rounded-xl cursor-pointer"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              />
            </AnimatePresence>
          </div>

          {/* Slider Dots */}
          <div className="flex justify-center mt-4 gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  current === index ? "bg-[#3d960d]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Counting Section */}
      <Counting />
    </section>
  );
};

export default HeroSection;
