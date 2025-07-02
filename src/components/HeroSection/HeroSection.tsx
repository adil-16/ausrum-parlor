'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import heroImagePlaceholder from '../../assets/bg2.avif';
import bottom from '../../assets/bottom.png';
import whatsapp from '../../assets/whatsapp.png';

export default function HeroSection() {
  const [content] = useState({
    title: 'Beauty Is In The Details',
    subtitle: 'FIND YOUR PERFECT HAIR ARTIST',
    description:
      'Every strand tells a story, and the right stylist brings it to life. Discover the artistry in every cut, color, and style with a hair professional who truly understands you.',
    backgroundImage: heroImagePlaceholder,
  });

  return (
    <section className="bg-white min-h-screen flex items-center justify-center p-4 pt-6 antialiased relative">
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center justify-center lg:justify-between w-full max-w-7xl mx-auto rounded-2xl overflow-hidden p-0">
        {/* Text Section */}
        <div className="flex-1 p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center text-center lg:text-left space-y-5 sm:space-y-6 lg:space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-4xl play-bold xl:text-5xl flex flex-col text-[#292929] leading-tight tracking-tight">
            {content.title}
            <span className="text-xl md:text-2xl poppins-regular text-[#B69951]">
              {content.subtitle}
            </span>
          </h1>
          <p className="text-sm poppins-regular md:text-lg text-[#292929] leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {content.description}
          </p>
          <div>
            <button className="mt-8 bg-[#B69951] text-white poppins-medium py-3 px-8 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              Book Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 w-76 lg:w-auto mt-10 lg:mt-0 lg:mr-4 flex justify-center items-center z-[1000]">
          <Image
            src={content.backgroundImage}
            alt="Hair Artist"
            width={800}
            height={600}
            className="w-full z-[100] h-auto max-h-[600px] object-cover rounded-2xl dynamicBorder transform transition-transform duration-300"
            priority
          />
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-[500000]">
        <button className="text-white font-semibold py-3 px-6 transition-all hover:scale-110 duration-500">
          <Image
            src={whatsapp}
            alt="WhatsApp Icon"
            width={55}
            height={55}
            className="w-full z-[100] h-auto rounded-full transition-transform duration-300"
            priority
          />
        </button>
      </div>

      {/* Decorative Bottom Image */}
      <Image
        src={bottom}
        alt="Bottom visual"
        width={1920}
        height={200}
        className="w-full h-auto absolute -top-1 md:-top-5 left-0 z-1"
      />
    </section>
  );
}
