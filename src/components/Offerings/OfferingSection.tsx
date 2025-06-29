"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import OfferingCard from "../OferingCard/OfferingCard";

const OfferingsSection: React.FC = () => {
  const offerings = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/dermatologist-performing-laser-hair-removal-patient_107420-65637.jpg",
      altText: "Skincare Solutions",
      title: "Skincare Solutions",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/tender-african-woman-relaxing-enjoying-healthy-spa-massage-with-oil_176420-13958.jpg",
      altText: "Spa / Massage",
      title: "Spa / Massage",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/stylist-curling-hair-young-woman_23-2148113049.jpg",
      altText: "Hair Styling",
      title: "Hair Styling",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/close-up-asmr-recording-salt_23-2149313878.jpg",
      altText: "Nail Art",
      title: "Nail Art",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/woman-cosmetologist-making-beauty-procedures_1303-26013.jpg",
      altText: "Bridal Package",
      title: "Bridal Package",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/girl-receiving-facial-treatment-beauty-salon_23-2148194171.jpg",
      altText: "Youthful Glow",
      title: "Youthful Glow",
    },
  ];

  return (
    <section className="bg-white w-full py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl lg:text-6xl gafiya text-[#B69951] text-center mb-10">
          Our Offerings
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          color="white"
          style={{color:"black"}}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {offerings.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="h-[450px] rounded-lg overflow-hidden bg-gray-100 shadow-md">
                <OfferingCard {...item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OfferingsSection;
 