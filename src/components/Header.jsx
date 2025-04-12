import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import flowImg1 from "../assets/img2.png";
import flowImg2 from "../assets/img4.jpg";
import flowImg3 from "../assets/img3.jpg";
import Counting from "./Counting";

const images = [flowImg1, flowImg2, flowImg3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeInOut" },
    },
  };

  return (
    <section className="bg-gradient-to-br from-[#f0fff0] to-[#f9fdf9] pt-36 pb-20 px-6 md:px-16 lg:px-32 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
        {/* LEFT: Content */}
        <motion.div
          className="flex-1 text-left"
          initial="hidden"
          animate="visible"
          variants={slideLeft}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-700 mb-6 leading-tight">
            We Promote Better <br />
            <span className="text-[#3d960d]">Communication</span>
          </h1>

          <p className="text-gray-700 mb-10 text-lg max-w-xl leading-relaxed">
            Welcome to <strong>SpeakLogic.org</strong> — a nonprofit promoting logical communication through books and software.
            <br />
            <br />
            Click links for problems, solutions, downloads, and hardcopy orders to improve rational thinking and understanding.
          </p>

          <div className="flex items-center gap-5 flex-wrap mb-8"> {/* Added margin-bottom here */}
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

        {/* RIGHT: Auto-sliding Images */}
        <motion.div
          className="flex-1 flex justify-center items-center w-full max-w-lg relative"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-transparent">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {images.map((img, i) => (
                <motion.img
                  key={i}
                  src={img}
                  alt={`slide-${i}`}
                  className="w-full flex-shrink-0 object-cover p-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </motion.div>

            {/* Dots */}
            <div className="absolute bottom-4 flex gap-2 justify-center w-full">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-5 h-1 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "bg-[#47be07]" : "bg-white"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Counting />
    </section>
  );
};

export default HeroSection;
