"use client";

import React, { useState } from "react";
import NavImage from "./NavImage";
import NavLinks from "./NavLinks";
import NavButton from "./NavButton";
import NavLang from "./NavLang";
import Link from "next/link";
import { motion } from "motion/react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="w-full  bg-white lg:px-10 ">
        <motion.div
          initial={{ y: -25, opacity: 0 }}   //ANNIMATIONS
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex items-center justify-between px-6 py-4"
        >
          <NavImage />
          {/* Hamburger Icon */}
          <button
            className="lg:hidden flex items-center px-3 py-2 border rounded text-[#74B117] border-[#74B117]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Desktop Links */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <NavLinks />
          </div>
          <div className="hidden lg:flex gap-4 ml-auto">
            <NavButton />
            <NavLang />
          </div>
        </motion.div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden px-6 pb-4">
            <div className="flex lg:justify-center ">
              <ul className="flex flex-col lg:flex-row  text-[#333333]  gap-5">
                <Link
                  href="#"
                  className="hover:border-b"
                  onClick={() => setMenuOpen(false)}
                >
                  <li>Home</li>
                </Link>
                <Link
                  href="#about-1"
                  className="hover:border-b"
                  onClick={() => setMenuOpen(false)}
                >
                  <li>About Ifá</li>
                </Link>
                <Link
                  href="#verses-1"
                  className="hover:border-b"
                  onClick={() => setMenuOpen(false)}
                >
                  <li>Explore verses</li>
                </Link>
                <Link
                  href="#app-1"
                  className="hover:border-b "
                  onClick={() => setMenuOpen(false)}
                >
                  <li>Features</li>
                </Link>
                <Link
                  href="#price-1"
                  className="hover:border-b "
                  onClick={() => setMenuOpen(false)}
                >
                  <li>Pricing</li>
                </Link>
                <Link
                  href="#"
                  className="lg:ms-18  "
                  onClick={() => setMenuOpen(false)}
                >
                  <li className="font-[900]">Login</li>
                </Link>
              </ul>
            </div>
            <div className="flex flex-col  gap-4 mt-4">
              <NavButton />
              <NavLang />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
