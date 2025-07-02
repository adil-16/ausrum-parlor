'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function COASection() {
  const [ctaContent] = useState({
    heading: 'Ready to look your best?',
    subtext: 'Book your appointment today and let us transform you.',
    buttonText: 'Book an Appointment',
    buttonLink: '/appointment',
    overlay: '#0c0c0c9a',
    background: 'bg-pink-200',
  });

  return (
    <section
      className={`${ctaContent.background} relative p-8 h-[90vh] text-center shadow-lg flex flex-col justify-center items-center call-bg`}
    >
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: ctaContent.overlay }}
      ></div>

      <h2 className="text-4xl md:text-7xl font-bold gafiya text-[#B69951] mb-2 lg:mb-4 z-[100]">
        {ctaContent.heading}
      </h2>
      <p className="text-base md:text-xl text-white mb-8 play-bold z-[100]">
        {ctaContent.subtext}
      </p>
      <Link href={ctaContent.buttonLink} className="z-[100]">
        <button className="bg-[#B69951] text-white play-bold py-3 px-8 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
          {ctaContent.buttonText}
        </button>
      </Link>
    </section>
  );
}
