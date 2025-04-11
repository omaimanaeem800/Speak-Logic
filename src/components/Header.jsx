import React from "react";
import { FaPlay, FaCog } from "react-icons/fa";
import headerImg from "../assets/img1.webp";
import Counting from "./Counting";


const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f0fff0] to-[#f8fcf8] py-22 px-6 md:px-16 lg:px-32 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left */}
        <div className="flex-1 mt-36">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#e4f9dd] text-[#47be07] px-5 py-2 rounded-full font-semibold text-sm mb-6 shadow-sm">
            <FaCog className="text-[#47be07] animate-spin-slow" />
            Communicate & Execute
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-600 leading-tight mb-6 ">
            We Promote Better <br />
            <span className="text-[#47be07]">Communication</span>
          </h1>

          {/* Paragraph */}
          <p className="text-gray-700 mb-10 max-w-2xl leading-relaxed text-lg">
            Welcome to <strong>SpeakLogic.org</strong> — a nonprofit promoting
            logical communication through books and software.
            <br /> <br />
            Click links for problems, solutions, downloads, and hardcopy orders
            to improve rational thinking and understanding.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-5 flex-wrap">
            <button className="bg-[#41aa09] text-white px-8 py-3 text-lg rounded-full font-semibold hover:bg-[#3eaa06] transition shadow-lg hover:scale-105">
              Get Started
            </button>
            <button className="flex items-center gap-3 text-[#333] font-medium group text-lg transition">
              {/* Icon with rounded border and hover effect */}
              <span className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-[#47be07] text-[#47be07] transition-all duration-300 group-hover:border-[#3eaa06] group-hover:text-[#3eaa06]">
                <FaPlay className="text-sm" />
              </span>
              Play Video
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 flex justify-center items-center mt-36">
          <img
            src={headerImg}
            alt="Communication Illustration"
            className="w-full max-w-2xl mx-auto drop-shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    <Counting/>
    </section>
  );
};

export default HeroSection;
