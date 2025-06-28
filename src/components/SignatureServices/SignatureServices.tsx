import React from "react";
import Image from "next/image"; // Recommended for optimizing images in Next.js
import hairStylingImagePlaceholder from "../../assets/sig.avif";

const SignatureServices = () => {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center antialiased font-inter mb-12 ">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-7xl gap-8 lg:gap-16 mr-0  lg:mr-16 xl:mr-0">
        <div className="flex-1 w-full h-screen m-0  lg:w-auto  ">
          {/* Using Next.js Image component for optimization */}
          <Image
            src={hairStylingImagePlaceholder}
            alt="Hair Styling Service"
            width={800} // Original image width for aspect ratio
            height={600} // Original image height for aspect ratio
            className="w-full h-auto max-h-full object-cover "
            priority // Load this image with high priority as it's a primary visual
          />
        </div>

        {/* Right Content Area (Services List and Buttons) */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-0 flex flex-col justify-center text-center lg:text-left my-24 ">
          <h2 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl gafiya text-gray-900 mb-8 sm:mb-10 tracking-tight leading-tight">
            SIGNATURE SERVICES
          </h2>

          <div className="space-y-6 sm:space-y-8 mb-10 p-4 ">
            {/* Service Item 1: Acrylic Nails */}
            <div className="flex flex-col  justify-between items-start sm:items-baseline gap-2 ">
              <div className="flex items-baseline w-full gap-4">
                <h3 className="text-lg lg:text-xl milker text-gray-800 whitespace-nowrap">
                  ACRYLIC NAILS
                </h3>
                <div className="flex-grow border-b-2 border-gray-100" />
                <span className="text-lg poppins-black text-gray-900 whitespace-nowrap">
                  Rs. 12000
                </span>
              </div>
              <p className="text-sm md:text-base poppins-medium text-black mt-2">
                Enhance your look with elegant and long-lasting acrylic nails
              </p>
            </div>
            <div className="flex flex-col  justify-between items-start sm:items-baseline gap-2 ">
              <div className="flex items-baseline w-full gap-4">
                <h3 className="text-lg lg:text-xl milker text-gray-800 whitespace-nowrap">
                  ACRYLIC NAILS
                </h3>
                <div className="flex-grow border-b-2 border-gray-100" />
                <span className="text-lg poppins-black text-gray-900 whitespace-nowrap">
                  Rs. 12000
                </span>
              </div>
              <p className="text-sm md:text-base poppins-medium text-black mt-2">
                Enhance your look with elegant and long-lasting acrylic nails
              </p>
            </div>
          </div>
          <div className="flex justify-end w-full">
            <button className="mt-3 bg-[#B69951]  text-white poppins-medium py-3 px-16 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
              Explore
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureServices;
