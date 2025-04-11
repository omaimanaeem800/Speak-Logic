import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../../public/Artboard 1.png"; // Adjust path if needed
import FixedSocialIcons from "./SocialSidebar";

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-gray-800 pt-12 pb-8 px-6 md:px-20 lg:px-36 font-sans">
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-12">
          {/* 1st Column */}
          <div className="md:w-[30%] text-[18px] leading-relaxed text-gray-800">
            <img src={logo} alt="SpeakLogic" className="h-16 mb-8" />

            <p className="mb-1">A108 Adam Street</p>
            <p className="mb-4">New York, NY 535022</p>

            <div className="flex gap-2 mb-1 font-semibold text-gray-600">
              <span>Phone:</span>
              <span className="font-normal text-gray-800">
                +1 5589 55488 55
              </span>
            </div>

            <div className="flex gap-2 mb-6 font-semibold text-gray-600">
              <span>Email:</span>
              <span className="font-normal text-gray-800">
                info@example.com
              </span>
            </div>

            <div className="flex space-x-4 mt-2">
              {[FaXTwitter, FaInstagram, FaFacebookF, FaLinkedinIn].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-full border border-gray-300 hover:border-[#379f00] transition duration-300 cursor-pointer group"
                  >
                    <Icon className="text-gray-700 group-hover:text-[#379f00] text-xl transition duration-300" />
                  </div>
                )
              )}
            </div>
          </div>

          {/* 2nd Column */}
          <div className="md:w-[15%]">
            <h4 className="font-medium text-gray-700 mb-4 text-xl">
              Useful Links
            </h4>
            <ul className="space-y-3 text-gray-500 text-[18px] font-normal ">
              {["Home", "Problem", "Solution", "Forums", "Books"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="cursor-pointer hover:text-[#379f00] transition duration-200"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* 3rd Column */}
          <div className="md:w-[10%]">
            <h4 className="font-medium text-gray-700 mb-4 text-xl">
              Resources
            </h4>
            <ul className="space-y-3 text-gray-500 text-[18px] font-normal ">
              {["Softwares", "Videos", "FAQs"].map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-[#379f00] transition duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 4th Column - Map */}
          <div className="flex-1">
            <h4 className="font-medium text-gray-700 text-xl mb-8">
              Get Connected
            </h4>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7783471175457!2d-73.98970298459243!3d40.69428817933405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a19c3db5b5f%3A0x4b0c7ee6ed2b116e!2sDowntown%20Brooklyn%2C%20Brooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1681153840492!5m2!1sen!2sus"
                width="140%"
                height="330"
                allowFullScreen
                loading="lazy"
                className="w-full h-[300px] border-none"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm sm:text-md text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-black">SpeakLogic</span>. All
          rights reserved.
        </div>
        <FixedSocialIcons />
        
      </footer>
    </>
  );
};

export default Footer;
