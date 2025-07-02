'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import top from '../../assets/top.png';
import backgroundImage from '../../assets/lending.avif'; // Replace with your dynamic background if available

export default function LendingSection() {
  const [heroContent] = useState({
    title: 'Elegant & Empowering',
    subtitle: 'Discover your true beauty with us.',
    backgroundImage: backgroundImage, // You can also use a URL string
  });

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div className="flex flex-row justify-center items-center w-full h-screen mx-auto">
        <Image
          src={heroContent.backgroundImage}
          alt="Background"
          fill
          className="object-cover z-0"
          placeholder="blur"
          quality={90}
        />
        <div className="absolute inset-0 bg-[#000000a8] bg-opacity-80 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col max-w-6xl px-6 text-left">
          <h1 className="text-5xl text-center md:text-7xl gafiya text-white leading-tight drop-shadow-lg tracking-wide">
            {heroContent.title}
          </h1>
          <p className="mt-2 text-xl md:text-3xl text-center text-[#B69951] play-bold">
            {heroContent.subtitle}
          </p>
          <div className="flex gap-3 justify-center">
            <Link href="/services">
              <button className="mt-8 bg-[#B69951] text-xs sm:text-sm md:text-base text-white poppins-medium py-3 px-5 md:px-8 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                Explore Services
              </button>
            </Link>
            <Link href="/appointment">
              <button className="mt-8 border-[#B69951] text-xs sm:text-sm md:text-base border-2 text-[#B69951] hover:bg-[#B69951] hover:text-white poppins-medium py-3 px-5 md:px-8 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                Book Us Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Image Overlay */}
      <Image
        src={top}
        alt="Top visual"
        className="w-full h-auto absolute -bottom-1 md:-bottom-10 z-30"
        priority
      />
    </section>
  );
}
