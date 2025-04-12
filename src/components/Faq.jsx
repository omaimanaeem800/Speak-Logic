import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import arrow from "../assets/faq.png"; // 

const faqs = [
  {
    question: "What is The Speak Logic Project?",
    answer:
      "The Speak Logic Project was started to promote better communication. It is a non-profit organization aimed at improving communication. Learn more by clicking this link.",
  },
  {
    question: "Why does The Speak Logic Project exist?",
    answer:
      "Communication is a vital part of life. Errors in communication can lead to mistakes in everything we do. The Speak Logic Project exists to promote better communication and help people communicate clearly.",
  },
  {
    question: "What is communication?",
    answer:
      "Communication is the driving force behind everything we do. It is crucial to understand its importance in our daily lives.",
  },
  {
    question: "Why promote better communication?",
    answer:
      "To understand the importance of communication, we must look at how errors in communication lead to problems in life. The Speak Logic Project aims to reduce these errors and improve communication.",
  },
  {
    question: "What can I do to get started?",
    answer:
      "You can get started by downloading the books, participating in the forum, analyzing communication issues, and helping others learn about the project.",
  },
  {
    question: "Why is proper communication important?",
    answer:
      "Proper communication ensures that tasks are executed without error. Communication drives actions, and when it’s done properly, the function is executed flawlessly.",
  },
];

// Animation variants for smooth transitions
const faqItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row px-6 md:px-32 py-16 items-start gap-12 font-sora leading-relaxed mb-28">
      {/* Left Section */}
      <div className="w-full lg:w-[40%]">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Have a question? Check out the FAQ
        </h2>
        <p className="text-gray-600 mb-10">
          Here are some compiled questions and answers. If you have more
          questions, feel free to contact us.
        </p>
        <img
          src={arrow}
          alt="Arrow"
          className="w-[320px] h-[250px] hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right Section (FAQ List) */}
      <div className="w-full lg:w-[55%] flex flex-col gap-8">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={faqItemVariants}
              className="transition-all"
            >
              <div
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className={`bg-white shadow-lg rounded-lg p-6 mb-4 cursor-pointer hover:scale-105 hover:shadow-xl transition-all ${
                  isOpen ? "border-l-4 border-green-500" : "border-l-4 border-transparent"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span
                    className={`text-lg font-semibold text-gray-800 ${
                      isOpen ? "text-green-500" : "text-gray-700"
                    }`}
                  >
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <FaChevronDown className="text-green-500" />
                  ) : (
                    <FaChevronRight className="text-gray-500" />
                  )}
                </div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="mt-4 text-gray-700 text-sm"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
