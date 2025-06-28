
import React from "react";
import Image from "next/image"; // Kept next/image as requested, to be used in KeyFeatureCard

import KeyFeatureCard from "../KeyFeatureCard/KeyFeatureCard";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";


const KeyFeaturesSection: React.FC = () => {
  return (
    <section className="bg-[#B69951] relative w-full px-6">
      <section className=" pb-16 max-w-7xl mx-auto relative z-10 ">
        <h2 className="text-3xl md:5xl lg:text-5xl xl:text-6xl gafiya text-white text-center mb-10">
          Spotlight Features
        </h2>
        {/* Grid for KeyFeatureCards, responsive layout */}
        <div className="grid grid-cols-2 lg:flex lg:flex-row lg:flex-nowrap gap-3">
          {/* Each KeyFeatureCard receives a value, description, and the placeholder image URL */}
          <KeyFeatureCard
            value="Customer Satisfaction"
            description="Years of Experience"
            image={f1} // Using placeholder URL
            num={1}
          />
          <KeyFeatureCard
            value="IFFA Winner"
            description="Years of Experience"
            image={f2} // Using placeholder URL
            num={2}
          />
          <KeyFeatureCard
            value="Quality Products"
            description="Professional Artists"
            image={f3} // Using placeholder URL
            num={3}
          />
          <KeyFeatureCard
            value="Glamorous Results"
            description="Exceptional Services"
            image={f4} // Using placeholder URL
            num={4}
          />
        </div>
      </section>

      {/* If the 'bottom' image is meant to be here, please let me know where it should be placed
          and provide its intended styling or context. */}
    </section>
  );
};

export default KeyFeaturesSection;
