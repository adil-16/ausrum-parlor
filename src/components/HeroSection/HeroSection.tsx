import React from "react";
import Image from "next/image"; // Re-instated next/image as requested
import heroImagePlaceholder from "../../assets/hero.webp"; // Re-instated local asset import
import bottom from "../../assets/bottom.png"; // Re-instated local asset import
import whatsapp from '../../assets/whatsapp.png'; // Re-instated local asset import


const HeroSection = () => {
  return (
    // Main container section for the Hero.
    <section className="bg-white min-h-screen flex items-center justify-center p-4 pt-6 antialiased relative">
      {/* Inner content wrapper for max-width and centering, with responsive layout adjustments */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center justify-center lg:justify-between w-full max-w-7xl mx-auto rounded-2xl overflow-hidden p-0">
        {/* Left Content Area (Text and Button) */}
        <div className="flex-1 p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center text-center lg:text-left space-y-5 sm:space-y-6 lg:space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-4xl play-bold xl:text-5xl flex flex-col text-[#292929] leading-tight tracking-tight">
            Beauty Is In The Details<span className="mr-4"></span>
            <span className="text-xl md:text-2xl poppins-regular text-[#B69951]">
              {" "}
              FIND YOUR PERFECT HAIR ARTIST
            </span>
          </h1>
          <p className="text-sm poppins-regular md:text-lg text-[#292929] leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Every strand tells a story, and the right stylist brings it to life.
            Discover the artistry in every cut, color, and style with a hair
            professional who truly understands you
          </p>
          <div className="">
            <button className="mt-8 bg-[#B69951]  text-white poppins-medium py-3 px-8 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              Book Now
            </button>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="flex-1 w-76 lg:w-auto mt-10 lg:mt-0 lg:mr-4 flex justify-center items-center z-[1000]"> {/* z-1000 adjusted to z-[1000] */}
          {/* Using Next.js Image component as requested */}
          <Image
            src={heroImagePlaceholder}
            alt="Hair Artist"
            width={800} // Set appropriate width based on aspect ratio
            height={600} // Set appropriate height based on aspect ratio
            className="w-full z-[100] h-auto max-h-[600px] object-cover rounded-2xl dynamicBorder transform transition-transform duration-300 " // z-100 adjusted to z-[100]
            priority // Load this image with high priority
          />
        </div>
      </div>

      {/* Chat with Us Button (Fixed Position) */}
      <div className="fixed bottom-6 right-6 z-[500000]"> {/* z-500000 adjusted to z-[500000] */}
        <button className=" text-white font-semibold py-3 px-6 transition-all hover:scale-110 duration-500 ">
           {/* Using Next.js Image component for WhatsApp icon as requested */}
           <Image
            src={whatsapp}
            alt="WhatsApp Icon"
            width={55} // Set appropriate width based on aspect ratio
            height={55} // Set appropriate height based on aspect ratio
            className="w-full z-[100] h-auto rounded-full transform transition-transform duration-300 " // z-100 adjusted to z-[100]
            priority // Load this image with high priority
          />
        </button>
      </div>

      {/* Bottom decorative image. Using Next.js Image component for consistency if it resolves. */}
      {/* Note: direct use of `bottom.src` is for raw img tag, for Image component just `bottom` is needed */}
      <Image
        src={bottom}
        alt="Bottom visual"
        width={1920} // Example width, adjust as per image's actual ratio or desired display
        height={200} // Example height, adjust as per image's actual ratio or desired display
        className="w-full h-auto absolute -top-1 md:-top-5 left-0 z-1"
        // 'priority' can be added if this image is critical for above-the-fold content
      />
    </section>
  );
};

export default HeroSection;
