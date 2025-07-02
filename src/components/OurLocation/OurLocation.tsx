"use client";

import React, { useState } from "react";
import Image from "next/image";
import mapPlaceholder from "../../assets/map.png";

const OurLocation = () => {
  const [locationContent] = useState({
    heading: "Location",
    mapImage: mapPlaceholder,
    contacts: [
      {
        type: "Address",
        value: "G10 Markaz, Islamabad, Islamabad Capital Territory",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              className="text-[#292929]"
              fillRule="evenodd"
              d="M3 2.25a.75.75 0 0 0 0 1.5v16.5h-.75a.75.75 0 0 0 0 1.5H15v-18a.75.75 0 0 0 0-1.5H3ZM6.75 19.5v-2.25a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h.75a.75.75 0 0 1 0 1.5h-.75A.75.75 0 0 1 6 6.75ZM6.75 9a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM6 12.75a.75.75 0 0 1 .75-.75h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 6a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75Zm-.75 3.75A.75.75 0 0 1 10.5 9h.75a.75.75 0 0 1 0 1.5h-.75a.75.75 0 0 1-.75-.75ZM10.5 12a.75.75 0 0 0 0 1.5h.75a.75.75 0 0 0 0-1.5h-.75ZM16.5 6.75v15h5.25a.75.75 0 0 0 0-1.5H21v-12a.75.75 0 0 0 0-1.5h-4.5Zm1.5 4.5a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Zm.75 2.25a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75v-.008a.75.75 0 0 0-.75-.75h-.008ZM18 17.25a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75h-.008a.75.75 0 0 1-.75-.75v-.008Z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        type: "Phone",
        value: "03218927365",
        icon: (
          <path
            fillRule="evenodd"
            d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
            clipRule="evenodd"
          />
        ),
      },
    ],
  });

  return (
    <div className="md:px-12 bg-white w-full flex flex-col-reverse md:flex-row items-center max-w-7xl font-inter antialiased my-12 mx-auto">
      {/* Left: Contact Information */}
      <div className="w-full p-12 md:p-4 md:w-1/2 mt-4">
        <h2 className="text-3xl lg:text-5xl xl:text-6xl milker text-[#B69951] mb-10">
          {locationContent.heading}
        </h2>

        <div className="space-y-8">
          {locationContent.contacts.map((item, index) => (
            <div key={index} className="flex items-center gap-4 w-4/6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="size-6 text-[#292929]"
                viewBox="0 0 24 24"
              >
                {item.icon}
              </svg>
              <h3 className="poppins-semibold text-base text-[#292929]">
                {item.value}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Map Area */}
      <div className="group relative w-full md:w-1/2 sm:h-80 md:h-[80vh] overflow-hidden m-0">
        <Image
          src={locationContent.mapImage}
          alt="Our Location Map"
          fill
          style={{ objectFit: "cover" }}
          className="w-full"
          priority
        />
        <div className="absolute inset-0 group-hover:bg-[#0c0c0c69] z-10 transition-opacity duration-300" />
        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#B69951] text-white font-medium py-3 px-12 rounded-full shadow-xl transform hover:scale-105 focus:outline-none">
          Our Location
        </button>
      </div>
    </div>
  );
};

export default OurLocation;
