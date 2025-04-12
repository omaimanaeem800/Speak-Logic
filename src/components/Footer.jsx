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
        <div className="flex flex-col md:flex-row justify-between gap-12">
          {/* Logo and Social Media Icons */}
          <div className="w-full md:w-[30%] text-center">
            <img
              src={logo}
              alt="SpeakLogic"
              className="h-10 sm:h-12 mb-6 sm:mb-8 mx-auto"
            />
            <div className="flex justify-center gap-3 mt-4">
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

          {/* Footer Columns: Useful Links, Resources, and Quick Contact Information */}
          <div className="flex flex-wrap justify-between w-full md:w-[65%] gap-12">
            {/* 1st Column - Useful Links */}
            <div className="w-full sm:w-[23%]">
              <h4 className="font-medium text-gray-700 mb-2 sm:mb-4 text-base sm:text-lg">
                Useful Links
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-500 text-sm sm:text-base font-normal">
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

            {/* 2nd Column - Resources */}
            <div className="w-full sm:w-[23%]">
              <h4 className="font-medium text-gray-700 mb-2 sm:mb-4 text-base sm:text-lg">
                Resources
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-gray-500 text-sm sm:text-base font-normal">
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

            {/* 3rd Column - Quick Contact Information */}
            <div className="w-full sm:w-[30%]">
              <h4 className="font-medium text-gray-700 mb-2 sm:mb-4 text-base sm:text-lg">
                Quick Contact Information
              </h4>
              <div className="flex flex-col gap-2 sm:gap-4 items-start text-sm sm:text-base text-gray-600">
                <div className="text-left">
                  <div className="font-semibold text-gray-800 mb-1">Phone</div>
                  <p>+1 5589 55488 55</p>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800 mb-1">Email</div>
                  <p>info@example.com</p>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800 mb-1">Address</div>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs sm:text-sm text-gray-600">
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
