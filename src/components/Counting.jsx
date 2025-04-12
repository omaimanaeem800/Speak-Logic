import React, { useEffect, useState } from "react";
import { FaBook, FaAppStore, FaLaptop, FaBox } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const LearningSection = () => {
  const [booksCount, setBooksCount] = useState(0);
  const [appsCount, setAppsCount] = useState(0);
  const [softwaresCount, setSoftwaresCount] = useState(0);
  const [kitsCount, setKitsCount] = useState(0);

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setBooksCount((prev) => (prev < 30 ? prev + 1 : prev));
        setAppsCount((prev) => (prev < 10 ? prev + 1 : prev));
        setSoftwaresCount((prev) => (prev < 5 ? prev + 1 : prev));
        setKitsCount((prev) => (prev < 10 ? prev + 1 : prev));
      }, 40);
      return () => clearInterval(interval);
    }
  }, [inView]);

  const features = [
    {
      icon: <FaBook size={28} />,
      count: booksCount,
      label: "Books",
      sub: "To help with the learning of the principle",
    },
    {
      icon: <FaAppStore size={28} />,
      count: appsCount,
      label: "Apps",
      sub: "To help with the application of the principle",
    },
    {
      icon: <FaLaptop size={28} />,
      count: softwaresCount,
      label: "Softwares",
      sub: "To help with the application of the principle",
    },
    {
      icon: <FaBox size={28} />,
      count: "10",
      label: "Learning Kits",
      sub: "To help with the teaching of the principle",
    },
  ];

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-[#f4fff6] to-[#fafffc] py-20 px-6 md:px-16 lg:px-32"
    >
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="group w-full sm:w-[280px] lg:w-[250px] bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.05] relative overflow-hidden"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#e0ffe3] to-[#d2f9ff] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl z-0" />

            <div className="relative z-10 flex flex-col items-center text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#e5fbe2] text-[#3dae0b] flex items-center justify-center text-2xl shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#33a102]">
                {item.count}+ {item.label}
              </h3>
              <p className="text-sm text-gray-600">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningSection;
