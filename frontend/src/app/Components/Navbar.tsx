"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#2c4143] border-b border-white/30 py-3.5 px-4 dark:bg-gray-900 sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src="/images/logo.svg" alt="Logo" width={160} height={100} />
          </a>

          {/* Hamburger Button (for mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-300 rounded-lg 
            md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Menu + Button Container */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full md:flex md:items-center md:w-auto md:space-x-6`}
            id="navbar-default"
          >
            <ul
              className="flex flex-col p-4 md:p-0 mt-4 rounded-lg 
              md:flex-row md:space-x-8 md:mt-0"
            >
              <li>
                <a
                  href="https://neogreens.com/about-us/"
                  className="relative block py-2 px-3 text-white font-normal md:p-0 transition-all duration-300 
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
                  hover:after:w-full after:transition-all after:duration-300 text-xl"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="relative block py-2 px-3 text-white font-normal text-lg md:p-0 transition-all duration-300 
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white 
                  hover:after:w-full after:transition-all after:duration-300 text-xl"
                >
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Coming Soon Button */}
            <button
              className="mt-3 md:mt-0 py-3 px-5 text-gray-300 border border-gray-400 rounded-full font-medium text-lg 
              transition-all duration-300 hover:text-white hover:border-white text-xl"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;