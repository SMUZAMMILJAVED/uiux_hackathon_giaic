"use client";

import Image from "next/image";
import chairImage from "/public/chair.jpeg"; // Replace with your actual chair image path

const Hero = () => {
  return (
    <section className="px-0 sm:px-8 lg:px-28 py-0 sm:py-8 lg:py-12 flex flex-col sm:flex-row h-auto sm:h-[100vh]">
      {/* Left Section (Text Content) */}
      <div className="flex flex-col justify-center items-start w-full sm:w-1/2 bg-[#2A254B] text-white p-8 sm:p-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6">Welcome to My Store</h1>
        <p className="text-lg mb-8">
          Explore our exclusive range of premium furniture that blends comfort with elegance.
        </p>
        <button className="px-6 py-3 bg-[#6C63FF] hover:bg-[#4A47A3] rounded-lg text-lg font-medium transition">
          Shop Now
        </button>
        <p className="mt-8 text-base">
          Our products are designed to meet your lifestyle and needs.
        </p>
      </div>

      {/* Right Section (Image) */}
      <div
        className="w-full sm:w-1/2 bg-[#E0F7FF] flex justify-center items-center relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/chair.jpeg')", // Use your image path here
        }}
      >
        {/* Empty div just for background */}
      </div>
    </section>
  );
};

export default Hero;
