'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import hairStylingImagePlaceholder from '../../assets/sig.avif';

const SignatureServices = () => {
  // 🧠 Dynamic content state
  const [content] = useState({
    heading: 'SIGNATURE SERVICES',
    image: hairStylingImagePlaceholder,
    services: [
      {
        title: 'ACRYLIC NAILS',
        price: 'Rs. 12000',
        description: 'Enhance your look with elegant and long-lasting acrylic nails',
      },
      {
        title: 'LUXURY HAIR SPA',
        price: 'Rs. 8500',
        description: 'Rejuvenate your scalp and strands with our nourishing hair spa treatment',
      },
      {
        title: 'BRIDAL GLOW FACIAL',
        price: 'Rs. 15000',
        description: 'Reveal your radiance with our premium bridal facial experience',
      },
    ],
  });

  return (
    <section className="bg-white min-h-screen flex items-center justify-center antialiased font-inter mb-12">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-8 lg:gap-16 lg:mr-16 xl:mr-0">
        {/* Image */}
        <div className="flex-1 w-full h-screen m-0 lg:w-auto">
          <Image
            src={content.image}
            alt="Signature Service"
            width={800}
            height={600}
            className="w-full h-auto max-h-full object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-0 flex flex-col justify-center text-center lg:text-left my-24">
          <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl gafiya text-gray-900 mb-8 sm:mb-10 tracking-tight leading-tight">
            {content.heading}
          </h2>

          <div className="space-y-6 sm:space-y-8 mb-10 p-4">
            {content.services.map((item, index) => (
              <div key={index} className="flex flex-col justify-between items-start sm:items-baseline gap-2">
                <div className="flex items-baseline w-full gap-4">
                  <h3 className="text-lg lg:text-xl milker text-gray-800 whitespace-nowrap">
                    {item.title}
                  </h3>
                  <div className="flex-grow border-b-2 border-gray-100" />
                  <span className="text-lg poppins-black text-gray-900 whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-sm md:text-base poppins-medium text-black mt-2">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-end w-full">
            <Link href="/services">
              <button className="mt-3 bg-[#B69951] text-white poppins-medium py-3 px-16 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                Explore
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureServices;
