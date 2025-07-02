'use client';

import React from 'react';
import Image from 'next/image';
import KeyFeatureCard from '../KeyFeatureCard/KeyFeatureCard';

import f1 from '../../assets/f1.png';
import f2 from '../../assets/f2.png';
import f3 from '../../assets/f3.png';
import f4 from '../../assets/f4.png';

const keyFeatures = [
  {
    value: 'Customer Satisfaction',
    description: 'Years of Experience',
    image: f1,
  },
  {
    value: 'IFFA Winner',
    description: 'Years of Experience',
    image: f2,
  },
  {
    value: 'Quality Products',
    description: 'Professional Artists',
    image: f3,
  },
  {
    value: 'Glamorous Results',
    description: 'Exceptional Services',
    image: f4,
  },
];

export default function KeyFeaturesSection() {
  return (
    <section className="bg-[#B69951] relative w-full px-6">
      <div className="pb-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl gafiya text-white text-center mb-10">
          Spotlight Features
        </h2>

        {/* Dynamically generate cards */}
        <div className="grid grid-cols-2 lg:flex lg:flex-row lg:flex-nowrap gap-3">
          {keyFeatures.map((feature, index) => (
            <KeyFeatureCard
              key={index}
              num={index + 1}
              value={feature.value}
              description={feature.description}
              image={feature.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
