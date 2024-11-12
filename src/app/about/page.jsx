"use client";

import { motion, useScroll, useInView } from "framer-motion";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });


  return (
    <motion.div
      className="min-h-screen bg-gray-100 text-gray-800"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="min-h-screen flex flex-col justify-center items-center" ref={containerRef}>
        
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-full lg:w-full xl:w-full">
          
          {/* Biography Section */}
          <div className="flex flex-col gap-8 md:gap-12 justify-center items-center text-center pt-24 sm:pt-32 lg:pt-40">
            <h1 className="text-3xl md:text-4xl font-bold">
              About Me
            </h1>
            <p className="text-lg">
              Outside the digital world, I immerse myself in the fascinating field of technology and hardware. For me, circuits and solder joints are like pieces of a puzzle each connection bringing me closer to new discoveries.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              My journey as a web developer is just one chapter in an ongoing adventure. I firmly believe that growth begins when you step out of your comfort zone. Exploring new places and cultures fuels my creativity and broadens my perspective.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              When I'm not coding, you’ll likely find me embracing the thrill of the open road. Cars are my passion, and I love the rush of driving powerful machines through uncharted routes.
            </p>
          </div>


          {/* Skills Section */}
          <div className="flex flex-col gap-12 justify-center py-16" ref={skillRef}>
            {/* Heading Animation */}
            <motion.h1
              initial={{ x: "-300px", opacity: 0 }}
              animate={isSkillRefInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 25 }}
              className="font-bold text-4xl text-center text-gradient"
            >
              SKILLS
            </motion.h1>


            {/* Skills List Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isSkillRefInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 25 }}
              className="flex gap-6 flex-wrap justify-center"
            >
              {["JavaScript", "React Js", "Java", "Spring Boot", "Node Js", "JSON", "Firebase", "MySql", "Tailwind CSS", "Next Js"].map((skill, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg p-4 text-sm cursor-pointer bg-black text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-blue-500 hover:text-white transform hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg"
                  whileHover={{ scale: 1.05, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Experience Section */}
          <div className="flex flex-col gap-16 justify-center pb-48" ref={experienceRef}>
            {/* Heading Animation */}
            <motion.h1
              initial={{ x: "-300px", opacity: 0 }}
              animate={isExperienceRefInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, type: "spring", stiffness: 100, damping: 25 }}
              className="font-bold text-4xl text-center text-gradient"
            >
              EXPERIENCE
            </motion.h1>

            {/* Experience Cards */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isExperienceRefInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 25 }}
              className="flex justify-center gap-12"
            >
              {/* Left Experience */}
              <motion.div
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="font-semibold text-lg">Full Stack Developer At THE GOOD GAME THEORY</div>
                <div className="italic text-sm">Worked on various React Js Projects</div>
                <div className="text-red-400 text-sm font-semibold">April 2024 - July 2024</div>
              </motion.div>

              {/* Center Line with Circle Animation */}
              <motion.div
                className="w-1/6 relative"
                initial={{ opacity: 0 }}
                animate={isExperienceRefInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 25 }}
              >
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <motion.div
                    className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"
                    initial={{ scale: 0 }}
                    animate={isExperienceRefInView ? { scale: 1, rotate: 360 } : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  />
                </div>
              </motion.div>

              {/* Right Experience */}
              <motion.div
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                whileHover={{ scale: 1.05, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="font-semibold text-lg">Full Stack Developer At Wow Diamond</div>
                <div className="italic text-sm">Worked on Full Stack Websites</div>
                <div className="text-red-400 text-sm font-semibold">July 2024 - August 2024</div>
              </motion.div>
            </motion.div>

            {/* Third Experience */}
            <motion.div
              className="flex justify-center gap-12 mt-16"
              initial={{ opacity: 0 }}
              animate={isExperienceRefInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, type: "spring", stiffness: 100, damping: 25 }}
            >
              {/* Left Experience (Third) */}
              <motion.div
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="font-semibold text-lg">Full Stack Developer At Jagruti Rehabilitation Centre</div>
                <div className="italic text-sm">Worked on Many More Projects</div>
                <div className="text-red-400 text-sm font-semibold">August 2024 - October 2024</div>
              </motion.div>

              {/* Center Line with Circle Animation */}
              <motion.div
                className="w-1/6 relative"
                initial={{ opacity: 0 }}
                animate={isExperienceRefInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5, type: "spring", stiffness: 100, damping: 25 }}
              >
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <motion.div
                    className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"
                    initial={{ scale: 0 }}
                    animate={isExperienceRefInView ? { scale: 1, rotate: 360 } : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
