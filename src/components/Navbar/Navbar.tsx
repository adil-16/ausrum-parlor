"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-3000 p-4 px-8 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl flex justify-between items-center relative">
        {/* Left Section: Contact */}
        <div className="flex-shrink-0">
          <div className="bg-[#B69951] hidden md:flex flex-col text-center hover:bg-[#B69951] text-sm md:text-sm text-white poppins-semibold py-1 px-4 md:px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
            Contact Us
            <br />
            <div className="flex">
              {/* Icon and number */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <h1 className="poppins-regular text-sm">+92 0321875323</h1>
            </div>
          </div>
        </div>

        {/* Center: Absolutely Positioned Logo */}
        <Link href="/">
          <div className="absolute left-10 md:left-1/2 transform -top-8 -translate-x-1/2 border-6 rounded-b-full md:w-40 md:h-36 w-28 border-[#B69951] flex items-center justify-center overflow-hidden bg-white">
            {" "}
            {/* <div
            className={`${
              scrolled ? "text-[#B69951]" : "text-[#B69951]"
            } text-3xl md:text-5xl gafiya`}
          >
            Glam
          </div> */}
            <Image
              src={
                "data:image/jpeg;base64,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"
              }
              alt="Hair Artist"
              width={800} // Set appropriate width based on aspect ratio
              height={600} // Set appropriate height based on aspect ratio
              className="w-full z-100 h-auto max-h-[600px] object-cover rounded-2xl  transform transition-transform duration-300 "
              priority
            />
          </div>
        </Link>

        {/* Right Section: Button */}
        <div className="flex-shrink-0">
          <ul className="flex space-x-6 items-center">
            <button className="bg-[#B69951] hover:bg-[#B69951] text-sm md:text-base text-white poppins-medium py-2 px-4 md:px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
              Book Now
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
