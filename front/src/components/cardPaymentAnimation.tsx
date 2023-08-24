import { motion } from "framer-motion";

export default function CardPaymentAnimation() {
  return (
    <div className="bg-gray-400 w-[400px] h-[80px] rounded-[70px] mb-[700px] flex justify-center mt-80 relative">
      {/* Card Slot */}
      <div className="absolute bg-gray-600 w-[210px] h-[30px] top-[30px] rounded-t-xl"></div>

      {/* Card Animation */}
      <motion.div
        className="bg-blue-600 w-[200px] h-[250px] relative top-[200px] rounded-xl"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <div className="bg-white w-10 h-10 relative left-[100px] top-6 rounded-lg"></div>
      </motion.div>
    </div>
  );
}

const cardVariants = {
  hidden: { x: 0 },
  visible: {
    y: -170,
    transition: { duration: 1, repeat: Infinity },
  },
};
