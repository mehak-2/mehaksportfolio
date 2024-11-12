"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* Image Container */}
        <motion.div
          className="h-1/2 lg:h-full lg:w-1/2 relative"
          style={{ marginRight: "70px", marginTop: "40px" }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <img
           src="/Images/My_pic.jpeg"

            alt="My Image"
            width={500}
            height={500}
            className="object-cover rounded-full shadow-xl"
          />
        </motion.div>

        {/* Text Container */}
        <div className="h-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <motion.h1
            className="text-8xl md:text-8xl font-bold text-gray mt-16 sm:mt-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Hey!
          </motion.h1>

          {/* Description */}
          <motion.p
            className="md:text-4xl mt-16 sm:mt-12 text-BLACK text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I'm a Full Stack Developer
          </motion.p>

          {/* Quote */}
          <motion.p
            className="text-xl md:text-2xl font-semibold text-gray-400 mt-8 italic"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
"KEEP GOING UNTIL YOUR DREAMS BECOME YOUR REALTIY."

</motion.p>

          {/* Buttons */}
          <div className="w-full flex gap-4 mt-16 sm:mt-12 justify-center">
  <a href="/portfolio">
    <motion.button
      className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      View My Work
    </motion.button>
  </a>
  <a href="/contact">
    <motion.button
      className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      Contact Me
    </motion.button>
  </a>
</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
