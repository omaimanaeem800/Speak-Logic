import React, { useEffect, useState } from "react";
import { FaBook, FaAppStore, FaLaptop, FaBox } from "react-icons/fa";
import { useInView } from "react-intersection-observer";  // For triggering animations when in view

const LearningSection = () => {
  const [booksCount, setBooksCount] = useState(0);
  const [appsCount, setAppsCount] = useState(0);
  const [softwaresCount, setSoftwaresCount] = useState(0);
  const [kitsCount, setKitsCount] = useState(0);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        if (booksCount < 30) setBooksCount((prev) => prev + 1);
        if (appsCount < 10) setAppsCount((prev) => prev + 1);
        if (softwaresCount < 5) setSoftwaresCount((prev) => prev + 1);
        if (kitsCount < 100) setKitsCount((prev) => prev + 1);
      }, 50);

      return () => clearInterval(interval);
    }
  }, [inView, booksCount, appsCount, softwaresCount, kitsCount]);

  return (
    <div className="rounded-[30px] px-12 py-16 bg-white shadow-xl transition-all duration-500 hover:shadow-2xl font-sora mt-22">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
        
        {/* Section 1: Books */}
        <div className="flex flex-col items-start text-left space-y-2 hover:scale-105 transform transition-all duration-300">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e8f7d4] text-[#41aa09] hover:bg-[#41aa09] hover:text-white shadow-lg transition-all duration-300">
              <FaBook size={28} />
            </div>
            <div>
              <p className="font-semibold text-xl text-[#41aa09]">{booksCount}+ Books</p>
              <p className="text-sm text-gray-600">Logic-based Learning</p>
            </div>
          </div>
        </div>

        {/* Section 2: Apps */}
        <div className="flex flex-col items-start text-left space-y-2 hover:scale-105 transform transition-all duration-300">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e8f7d4] text-[#41aa09] hover:bg-[#41aa09] hover:text-white shadow-lg transition-all duration-300">
              <FaAppStore size={28} />
            </div>
            <div>
              <p className="font-semibold text-xl text-[#41aa09]">{appsCount}+ Apps</p>
              <p className="text-sm text-gray-600">For Problem Solving</p>
            </div>
          </div>
        </div>

        {/* Section 3: Softwares */}
        <div className="flex flex-col items-start text-left space-y-2 hover:scale-105 transform transition-all duration-300">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e8f7d4] text-[#41aa09] hover:bg-[#41aa09] hover:text-white shadow-lg transition-all duration-300">
              <FaLaptop size={28} />
            </div>
            <div>
              <p className="font-semibold text-xl text-[#41aa09]">{softwaresCount}+ Softwares</p>
              <p className="text-sm text-gray-600">Learning & Application</p>
            </div>
          </div>
        </div>

        {/* Section 4: Learning Kits */}
        <div className="flex flex-col items-start text-left space-y-2 hover:scale-105 transform transition-all duration-300">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#e8f7d4] text-[#41aa09] hover:bg-[#41aa09] hover:text-white shadow-lg transition-all duration-300">
              <FaBox size={28} />
            </div>
            <div>
              <p className="font-semibold text-xl text-[#41aa09]">{kitsCount} Learning Kits</p>
              <p className="text-sm text-gray-600">Learning kits for All</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LearningSection;
