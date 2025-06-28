import React from "react";
import Image, { StaticImageData } from "next/image";

interface KeyFeatureCardProps {
  value: string;
  description: string;
  num: number;
  image: StaticImageData;
}

const KeyFeatureCard: React.FC<KeyFeatureCardProps> = ({
  value,
  description,
  image,
  num,
}) => {
  return (
    <div
      className="relative bg-white flex flex-col w-full justify-center items-center p-4 md:pb-6 rounded-lg text-center transform transition duration-300 ease-in-out"
    >
      <div className="w-full flex justify-end">
        <div className="flex justify-center items-center w-8 h-8 rounded-full bg-[#000]">
          <h1 className="text-white text-base play-regular">{num}</h1>
        </div>
      </div>

      <div className="relative h-32 lg:h-40 flex justify-center items-end">
        <div className="w-32 h-32 md:w-40 md:h-40 absolute dynamicBorder z-0" />
        <div className="relative z-10 w-20 h-20 md:w-28 md:h-28">
          <Image
            src={image}
            alt={`Feature ${num}`}
            layout="fill"
            className="object-contain rounded-2xl"
            priority
          />
        </div>
      </div>

      <div className="z-10 w-full mt-4">
        <h3 className="text-sm md:text-2xl lg:gafiya text-[#000000] mt-4">
          {value}
        </h3>
        <p className="text-[#000000] lg:play-regular text-xs md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

export default KeyFeatureCard;
