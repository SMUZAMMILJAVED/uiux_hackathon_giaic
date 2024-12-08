"use client";

import Link from "next/link";
import { FiShoppingCart, FiSearch, FiUser, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="shadow bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 sm:px-8">
        {/* Left Side: Search Icon for Desktop */}
        <FiSearch className="hidden sm:block w-8 h-8 text-[#22202E] cursor-pointer" />

        {/* Center: Company Name */}
        <h1 className="text-2xl font-bold text-[#22202E] sm:text-center">
          Avion
        </h1>

        {/* Right Side: Icons */}
        <div className="flex items-center space-x-6">
          {/* Search Icon for Mobile */}
         <FiSearch className="block sm:hidden w-8 h-8 text-[#22202E] cursor-pointer" />
          {/* Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block sm:hidden"
          >
            {isMenuOpen ? (
              <FiX className="w-8 h-8 text-[#22202E]" />
            ) : (
              <FiMenu className="w-8 h-8 text-[#22202E]" />
            )}
          </button>
          {/* Cart and User Icons (Desktop Only) */}
          <Link href={"/cart"}>       <FiShoppingCart className="hidden sm:block w-8 h-8 text-[#22202E] cursor-pointer" /> </Link>
          <FiUser className="hidden sm:block w-8 h-8 text-[#22202E] cursor-pointer" />
        </div>
      </div>

      {/* Horizontal Line Below Top Section */}
      <div className="border-b"></div>

      {/* Navigation Links */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } sm:flex justify-center bg-white`}
      >
        <ul className="flex flex-col sm:flex-row sm:space-x-8 py-3 text-lg font-medium text-[#22202E]">
          <li className="text-center">
            <Link href="/plants" className="hover:underline">
              Plants
            </Link>
          </li>
          <li className="text-center">
            <Link href="/camera" className="hover:underline">
              Camera
            </Link>
          </li>
          <li className="text-center">
            <Link href="/tables" className="hover:underline">
              Tables
            </Link>
          </li>
          <li className="text-center">
            <Link href="/chairs" className="hover:underline">
              Chairs
            </Link>
          </li>
          <li className="text-center">
            <Link href="/crockery" className="hover:underline">
              Crockery
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
