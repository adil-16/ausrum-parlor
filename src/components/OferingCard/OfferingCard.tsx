import Image from "next/image";
import React from "react";

interface OfferingCardProps {
  imageUrl?: string;
  altText: string;
  title: string;
  description?: string;
  price?: string; // optional, in case you want to make it dynamic later
}

const OfferingCard: React.FC<OfferingCardProps> = ({
  imageUrl,
  altText,
  description,
  title,
  price = "Starting from PKR 999",
}) => {
  return (
    <div
      className={`group bg-[#B69951] relative min-w-[200px] rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out shadow-md ${
        imageUrl ? "h-[450px] inShadow" : "min-h-[200px] md:min-h-[160px]"
      }`}
    >
      {" "}
      {/* Image */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={altText}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL="/placeholder.jpg"
        />
      )}
      {/* Gradient overlay */}
      <div className=" absolute inset-0  group-hover:bg-gradient-to-t group-hover:from-[#B69951] group-hover:to-transparent z-10 " />
      {/* Text overlay */}
      <div className=" glass absolute bottom-0 left-0 right-0 z-20 p-4 flex flex-col  items-start">
        <h4 className="text-white text-xl md:text-2xl play-regular">{title}</h4>
        <span className="text-white text-sm md:text-sm poppins-regular">{description}</span>
        <span className="text-black text-sm md:text-sm poppins-semibold px-4 py-1 rounded-4xl bg-white mt-2">{price}</span>
      </div>
    </div>
  );
};

export default OfferingCard;
