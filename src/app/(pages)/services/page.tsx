// app/services/page.tsx

"use client";

import React, { useState } from "react";
import Image from "next/image";
import OfferingCard from "@/components/OferingCard/OfferingCard";

const featuredServices = [
  {
    id: 1,
    title: "Signature Haircut",
    price: "Rs. 6000",
    altText: "Youthful Glow",
  },
  {
    id: 2,
    title: "Hair Wash & Blow Dry",
    price: "Rs. 2500",
    altText: "Youthful Glow",
    description:
      "Luxurious bridal makeup that makes your special day even more radiant.",
  },
  {
    id: 3,
    title: "L’Oréal Hair Mask",
    price: "Rs. 4000",
    altText: "Youthful Glow",
    description:
      "Luxurious bridal makeup that makes your special day even more radiant.",
  },
  {
    id: 1,
    title: "Signature Haircut",
    price: "Rs. 6000",
    altText: "Youthful Glow",
    description:
      "Luxurious bridal makeup that makes your special day even more radiant.",
  },
  {
    id: 2,
    title: "Hair Wash & Blow Dry",
    price: "Rs. 2500",
    altText: "Youthful Glow",
    description:
      "Luxurious bridal makeup that makes your special day even more radiant.",
  },
  {
    id: 3,
    title: "L’Oréal Hair Mask",
    price: "Rs. 4000",
    altText: "Youthful Glow",
    description:
      "Luxurious bridal makeup that makes your special day even more radiant.",
  },
];

const tabs = ["All", "Hair", "Makeup"];

const services = {
  Hair: [
    {
      title: "SIGNATURE HAIRCUT",
      price: "Rs. 6000",
      description:
        "Transform your look with our signature haircut, expertly tailored to enhance your features and style.",
    },
    {
      title: "SIMPLE HAIRCUT",
      price: "Rs. 3500",
      description:
        "Experience a fresh and clean look with our simple haircut, perfect for any style.",
    },
    {
      title: "HAIR TRIMMING",
      price: "Rs. 1500",
      description:
        "Maintain your hairstyle effortlessly with our precision hair trimming service.",
    },
    {
      title: "SIGNATURE HAIRCUT",
      price: "Rs. 6000",
      description:
        "Transform your look with our signature haircut, expertly tailored to enhance your features and style.",
    },
    {
      title: "SIMPLE HAIRCUT",
      price: "Rs. 3500",
      description:
        "Experience a fresh and clean look with our simple haircut, perfect for any style.",
    },
    {
      title: "HAIR TRIMMING",
      price: "Rs. 1500",
      description:
        "Maintain your hairstyle effortlessly with our precision hair trimming service.",
    },
  ],
  Makeup: [
    {
      title: "BRIDAL MAKEUP",
      price: "Rs. 20000",
      description:
        "Luxurious bridal makeup that makes your special day even more radiant.",
    },
    {
      title: "PARTY MAKEUP",
      price: "Rs. 8000",
      description:
        "Look stunning for any occasion with our expert party makeup service.",
    },
  ],
};

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All");

  const getFilteredServices = () => {
    if (activeTab === "All") {
      return [...services.Hair, ...services.Makeup];
    }
    return services[activeTab as keyof typeof services] || [];
  };

  return (
    <div className="min-h-screen bg-white px-4 md:px-12 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl xl:text-5xl play-regular mt-28 text-gray-900 mb-10 text-center md:text-left">
        SIGNATURE SERVICES
      </h2>

      {/* Featured Services Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 ">
        {featuredServices.map((service) => (
          <OfferingCard key={service.id} {...service} />
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-10 border-b-1 border-[#B69951]">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 text-sm poppins-semibold transition-all duration-300  ${
              activeTab === tab ? "bg-[#B69951] text-white" : "bg-white text-gray-400"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Service List */}
      {getFilteredServices().length > 6 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-15 gap-y-10">
          {getFilteredServices().map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between items-start sm:items-baseline gap-2"
            >
              <div className="flex items-baseline w-full gap-4">
                <h3 className="text-lg lg:text-xl milker text-[#1d1d1d] whitespace-nowrap">
                  {item.title}
                </h3>
                <div className="flex-grow border-b-2 border-gray-100" />
                <span className="text-lg poppins-black text-gray-900 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="text-sm md:text-base poppins-medium text-black mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-10">
          {getFilteredServices().map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between items-start sm:items-baseline gap-2"
            >
              <div className="flex items-baseline w-full gap-4">
                <h3 className="text-lg lg:text-xl milker text-black whitespace-nowrap">
                  {item.title}
                </h3>
                <div className="flex-grow border-b-2 border-gray-100" />
                <span className="text-lg poppins-black text-gray-900 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              <p className="text-sm md:text-base poppins-medium text-black mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
