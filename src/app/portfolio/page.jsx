"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    id: 1,
    color: "from-blue-100 to-violet-100",
    title: "FaHub",
    desc: "It is an Ecommerce Shopping Website",
    image: "/Images/1pro.jpeg",  // Corrected path
    link: "/projects/nextjs-medium-blog",
  },
  {
    id: 2,
    color: "from-blue-100 to-violet-100",
    title: "Chat App",
    desc: "It is a Chat App using React JS",
    image: "/Images/2pro.jpeg",  // Corrected path
    link: "/projects/nextjs-ecommerce",
  },
  {
    id: 3,
    color: "from-blue-100 to-violet-100",
    title: "Grocery Store",
    desc: "It is an Ecommerce Website using React JS",
    image: "/Images/3pro.jpeg",  // Corrected path
    link: "/projects/nextjs-blog",
  },
  {
    id: 4,
    color: "from-blue-100 to-violet-100",
    title: "School Management System",
    desc: "It is a Management System Using Java, Mysql, J2EE, Ajax, Jquery",
    image: "/Images/4pro.jpeg",  // Corrected path
    link: "/projects/react-portfolio",
  },
  {
    id: 5,
    color: "from-blue-100 to-violet-100",
    title: "Keyframes App",
    desc: "It is made using React Js, APIs, JSON",
    image: "/Images/5pro.jpeg",  // Corrected path
    link: "/projects/react-node-app",
  },
];




const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div className="h-full">
      <div className="min-h-screen relative overflow-y-auto" ref={ref}>
        {/* Animated "My Works" Section */}
        <motion.div
          className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-white font-bold text-6xl sm:text-8xl lg:text-9xl xl:text-10xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              letterSpacing: "2px",
              textShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
              color: "black",
            }}
          >
            My Works
          </motion.h1>
        </motion.div>

        {/* Portfolio Items */}
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {items.map((item) => (
              <motion.div
                key={item.id}
                className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col gap-8 text-white">
                  <motion.h1
                    className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    {item.title}
                  </motion.h1>
                  <motion.div
                    className="relative w-80 h-56 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-lg shadow-lg"
                    />
                  </motion.div>
                  <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link
                    href={item.link}
                    className="flex justify-end"
                    aria-label={`View demo for ${item.title}`}
                  >
                    <motion.button
                      className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      See Demo
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Final Section - "Do you have a project?" */}
        <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-gray-400 z-20">
          <h1 className="text-8xl">Do you have a project?</h1>
          <div className="relative">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                ease: "linear",
                repeat: Infinity,
              }}
              viewBox="0 0 300 300"
              className="w-64 h-64 md:w-[500px] md:h-[500px]"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0a 60,60 0 0, 1 -120 ,0"
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Full Stack Developer 
                </textPath>
              </text>
            </motion.svg>

            <Link
              href="/contact"
              aria-label="Contact me"
              className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center z-10"
            >
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
