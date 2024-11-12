"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";

import { motion } from "framer-motion";



const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);


  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)"
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)"
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when : "beforeChildren",
        staggeredChildren : 0.2,
      },
    },
  };

  const listItemVariants = {
  closed: {
    x: -10,
    opacity: 0,
  },
  opened: {
    x: 0,
    opacity: 1,
  },
  };



  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Main Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>

      {/* Branding */}
      <div className="hidden md:flex lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Mehak</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>

      {/* Social Icons */}
      <div className="hidden md:flex gap-4">
        <Link href="https://github.com/mehak-2">
          <img src="/github.png"  alt="GitHub" width={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/mehak-45a190245/">
          <img src="/linkedin.webp"  alt="LinkedIn" width={24} />
        </Link>
        <Link href="https://x.com/mehak_codes">
          <img src="/twitter .png"  alt="Twitter" width={24} />
        </Link>
      </div>

      {/* Responsive Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen((prev) => !prev)} // Toggle menu on click
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
        >
          <motion.div variants={topVariants}
          animate = {open ? "opened" : "closed"}
          className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div variants={centerVariants} 
                    animate = {open ? "opened" : "closed"}

          className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div variants={bottomVariants}
                    animate = {open ? "opened" : "closed"}

          className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>


       {/* Mobile Menu List */}
{open && (
    <motion.div
        variants={listVariants} 
        initial="closed" 
        animate="opened" 
        className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
    >
        {links.map((link) => (
            <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}
            >
                <Link href={link.url} key={link.title}>
                    {link.title}
                </Link>
            </motion.div>
        ))}
    </motion.div>
)}
      </div>
    </div>
  );
};

export default Navbar;
