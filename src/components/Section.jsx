import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import phoneImage from "../assets/phone-app-screen.webp";
import {
  FaCommentDots,
  FaTimesCircle,
  FaLightbulb,
  FaEye,
  FaCheckCircle,
  FaChartLine,
  FaClone,
  FaBook,
  FaGlobe,
  FaRegCommentDots,
} from "react-icons/fa";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const points = [
  {
    title: "Communication Drives Function",
    desc: "Effective communication is essential for successfully executing any function or task.",
    icon: <FaCommentDots size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Error Correction Is Vital",
    desc: "To function properly, communication errors must first be identified and corrected.",
    icon: <FaTimesCircle size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Principle of Communication",
    desc: "Understanding this principle is necessary to recognize and fix communication issues.",
    icon: <FaLightbulb size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Awareness is the First Step",
    desc: "We can't automatically learn principles — awareness and learning are required.",
    icon: <FaEye size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Learning Enables Correction",
    desc: "Once the principle is learned, it helps in correcting errors for better function execution.",
    icon: <FaCheckCircle size={28} className="text-[#41aa09]" />,
  },
];

const pointsRight = [
  {
    title: "Analysis Leads to Insight",
    desc: "Communication must be analyzed to identify the source of errors and apply principles.",
    icon: <FaChartLine size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Portability & Presentation",
    desc: "Corrected communication is portable and presentable — the principle can be taught or learned anywhere.",
    icon: <FaClone size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Resources for Learning",
    desc: "Books, tutorials, and downloadable software are available for continued learning.",
    icon: <FaBook size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Universal Applicability",
    desc: "These principles can be applied regardless of location, thanks to their portability.",
    icon: <FaGlobe size={28} className="text-[#41aa09]" />,
  },
  {
    title: "Feedback Enhances Understanding",
    desc: "Constructive feedback plays a critical role in helping users refine their communication skills.",
    icon: <FaRegCommentDots size={28} className="text-[#41aa09]" />,
  },
];

const SolutionSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      className="font-sora max-w-7xl mx-auto px-4 py-12 mb-24 mt-28"
      ref={ref}
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Our Solution Process & Learning principles
        </h2>
        <div className="w-12 h-1 bg-[#41aa0980] mx-auto mt-3 mb-2 rounded" />
        <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
          A step-by-step approach to identifying and correcting communication
          errors by understanding and applying core communication principles.
        </p>
      </div>

      <motion.div
        className="flex flex-col lg:flex-row items-start justify-between gap-4 lg:gap-2 mt-14"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
      >
        {/* Left Points */}
        <div className="space-y-8 w-full max-w-sm mx-auto">
          {points.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-start flex-row-reverse justify-end space-x-reverse space-x-4"
              variants={fadeUp}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="bg-[#eaf7dc] p-5 rounded-full">{item.icon}</div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-base text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          className="w-full flex justify-center"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <img
            src={phoneImage}
            alt="Phone Preview"
            className="w-full max-w-[260px] md:max-w-[300px] h-auto"
          />
        </motion.div>

        {/* Right Points */}
        <div className="space-y-8 w-full max-w-sm mx-auto">
          {pointsRight.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex items-start space-x-4"
              variants={fadeUp}
              transition={{ delay: idx * 0.1 + 0.3 }}
            >
              <div className="bg-[#eaf7dc] p-5 rounded-full">{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-base text-gray-600">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SolutionSection;
