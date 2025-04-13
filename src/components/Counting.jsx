import React, { useEffect, useState } from "react";
import { FaBook, FaAppStore, FaLaptop, FaBox } from "react-icons/fa";
import { motion } from "framer-motion";

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // 1 second
    const stepTime = Math.abs(Math.floor(duration / target));
    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(counter);
    }, stepTime);

    return () => clearInterval(counter);
  }, [target]);

  return <>{count}+</>;
};

const LearningStats = () => {
  const items = [
    {
      icon: <FaBook size={24} />,
      number: 30,
      label: "Books|Logic-based Learning",
      desc: "To help with the learning of the principle",
    },
    {
      icon: <FaAppStore size={24} />,
      number: 10,
      label: "Apps|For Problem Solving",
      desc: "To help with the application of the principle",
    },
    {
      icon: <FaLaptop size={24} />,
      number: 5,
      label: "Softwares|Learning & Application",
      desc: "To help with the application of the principle",
    },
    {
      icon: <FaBox size={24} />,
      number: 10,
      label: "Learning Kits|Learning kits for All",
      desc: "To help with the teaching of the principle",
    },
  ];

  return (
    <motion.div
      className="bg-white rounded-[40px] px-2 py-10 mx-4 md:ml-0 mt-20 shadow-sm w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-9">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center space-x-4 w-full md:w-auto group">
            <div className="bg-[#e8f7d4] text-[#41aa09] rounded-full w-14 h-12 flex items-center justify-center shadow-md transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white">
              {item.icon}
            </div>
            <div>
              <p className="text-[#2c9605] font-semibold text-lg">
                <AnimatedCounter target={item.number} /> {item.label.replace(/^[0-9+]+\s?/, '')}
              </p>
              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default LearningStats;
