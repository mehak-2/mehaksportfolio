"use client"

import { motion } from "framer-motion";

const TestPage = () => {
    const variants = {
        variant1: {
            x: 400,
            y: 300,
            opacity: 0.5,
            transition: {
                duration: 3
            }
        },
        variant2: {
            x: 100,
            y: -300,
            rotate: 90, // Corrected to "rotate" instead of "rotation"
        }
    };

    return (
        <div className="h-full flex items-center justify-center">
            <motion.div
                className="w-96 h-96 bg-red-400 rounded"
                animate="variant1" // Target variant for animation
                variants={variants} // Pass in variants object
            ></motion.div>
        </div>
    );
};

export default TestPage;
