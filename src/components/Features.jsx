import {
  FaRegCommentDots,
  FaBookOpen,
  FaGlobe,
  FaRegLightbulb,
} from "react-icons/fa";
import { motion } from "framer-motion";

const cards = [
  {
    icon: <FaRegCommentDots className="text-yellow-600 text-2xl" />,
    title: "Purpose of Speak Logic",
    description:
      "Promotes better communication by incorporating logic into everyday exchanges.",
    bg: "bg-orange-50",
    border: "border-yellow-600",
  },
  {
    icon: <FaBookOpen className="text-blue-600 text-2xl" />,
    title: "Educational Resources",
    description:
      "Offers books and software to support learning rational and logical communication skills.",
    bg: "bg-blue-50",
    border: "border-blue-600",
  },
  {
    icon: <FaGlobe className="text-green-600 text-2xl" />,
    title: "Easy Access & Navigation",
    description:
      "Users can download or order hardcopy materials directly from the website for convenience.",
    bg: "bg-green-50",
    border: "border-green-600",
  },
  {
    icon: <FaRegLightbulb className="text-rose-500 text-2xl" />,
    title: "Interactive Learning",
    description:
      "Includes problem and solution links for practical, hands-on understanding of logical thinking.",
    bg: "bg-rose-50",
    border: "border-rose-500",
  },
];

// Animation variant for staggered effect
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Features = () => {
  return (
    <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 mt-12 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className={`${card.bg} rounded-xl p-6 sm:p-8`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <div
              className={`w-14 h-14 flex items-center justify-center rounded-full border-2 ${card.border} mb-4`}
            >
              {card.icon}
            </div>
            <h3 className="font-medium text-lg text-gray-800 mb-2">
              {card.title}
            </h3>
            <p className="text-gray-700 text-sm">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;
