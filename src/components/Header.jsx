import React, { useState, useEffect } from "react";
import { FaPlay, FaCog } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import headerImg1 from "../assets/img1.webp";
import headerImg2 from "../assets/img2.jpg";
import headerImg3 from "../assets/img1.webp";
import Counting from "./Counting";

const images = [headerImg1, headerImg2, headerImg3];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#f0fff0] to-[#f8fcf8] py-22 px-6 md:px-16 lg:px-32 transition-all overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left Side */}
        <div className="flex-1 mt-36">
          <div className="inline-flex items-center gap-2 bg-[#e4f9dd] text-[#47be07] px-5 py-2 rounded-full font-semibold text-sm mb-6 shadow-sm">
            <FaCog className="text-[#47be07] animate-spin-slow" />
            Communicate & Execute
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-600 leading-tight mb-6">
            We Promote Better <br />
            <span className="text-[#3d960d]">Communication</span>
          </h1>
          <p className="text-gray-700 mb-10 max-w-2xl leading-relaxed text-lg">
            Welcome to <strong>SpeakLogic.org</strong> — a nonprofit promoting
            logical communication through books and software.
            <br /> <br />
            Click links for problems, solutions, downloads, and hardcopy orders
            to improve rational thinking and understanding.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <button className="bg-[#3d960d] text-white px-8 py-3 text-lg rounded-full font-semibold hover:bg-[#3eaa06] transition shadow-lg hover:scale-105">
              Get Started
            </button>
            <button className="flex items-center gap-3 text-[#333] font-medium group text-lg transition">
              <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#47be07] text-[#47be07] transition-all duration-300 group-hover:border-[#3eaa06] group-hover:text-[#3eaa06]">
                <FaPlay className="text-sm" />
              </span>
              Play Video
            </button>
          </div>
        </div>

        {/* Right Side with Carousel */}
        <div className="flex-1 flex flex-col items-center mt-36 w-full">
          <div className="relative w-full max-w-2xl overflow-hidden">
            <div className="w-full overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`carousel-img-${i}`}
                    className="w-full flex-shrink-0 object-cover"
                  />
                ))}
              </motion.div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {images.map((_, index) => (
              <span
                key={index}
                className={`w-6 h-1 rounded-full ${
                  index === currentIndex ? "bg-[#47be07]" : "bg-[#cceac1]"
                } transition-all`}
              />
            ))}
          </div>
        </div>
      </div>

      <Counting />
    </section>
  );
};

export default HeroSection;
