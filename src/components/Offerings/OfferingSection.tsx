"use client";

import React, { useRef } from "react";
import OfferingCard from "../OferingCard/OfferingCard";
import bottom from "../../assets/bottom.png";
import back from "../../assets/back.png";

const OfferingsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = direction === "left" ? -300 : 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: e.deltaY, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white relative w-full">
      <div className="mb-16 max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl md:5xl lg:text-5xl xl:text-6xl gafiya text-[#B69951] text-center mb-10">
          Our Offerings
        </h2>

        <div className="relative">
          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            onWheel={handleWheel}
            className="slider-container flex gap-6 px-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {[
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
                  "https://img.freepik.com/free-photo/woman-cosmetologist-making-beauty-procedures_1303-26013.jpg?uid=R78257819&ga=GA1.1.1460434561.1749667684&semt=ais_hybrid&w=740",
                altText: "Bridal Package",
                title: "Bridal Package",
              },
              {
                imageUrl:
                  "https://img.freepik.com/free-photo/woman-cosmetologist-making-beauty-procedures_1303-26013.jpg?uid=R78257819&ga=GA1.1.1460434561.1749667684&semt=ais_hybrid&w=740",
                altText: "Relaxation Spa",
                title: "Relaxation Spa",
              },
              {
                imageUrl:
                  "https://img.freepik.com/free-photo/girl-receiving-facial-treatment-beauty-salon_23-2148194171.jpg?uid=R78257819&ga=GA1.1.1460434561.1749667684&semt=ais_hybrid&w=740",
                altText: "Youthful Glow",
                title: "Youthful Glow",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="min-w-[25%] h-[450px] flex-shrink-0 group relative rounded-lg overflow-hidden transform transition duration-300 ease-in-out shadow-md bg-gray-100"
              >
                <OfferingCard {...item} />
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="z-100 absolute top-1/2 -left-10 transform -translate-y-1/2  bg-[#B69951] bg-opacity-80 p-4 rounded-full shadow hover:bg-opacity-100"
          >
            <img
              src={back.src}
              alt="left"
              className="w-6 h-6 object-contain "
            />
          </button>
          <button
            onClick={() => scroll("right")}
            className="z-100 absolute top-1/2 -right-10 transform -translate-y-1/2  bg-[#B69951] bg-opacity-40 p-4 rounded-full shadow hover:bg-opacity-100"
          >
            <img
              src={back.src}
              alt="right"
              className="w-6 h-6 object-contain rotate-180"
            />
          </button>
        </div>
      </div>

      {/* Bottom Decorative Image */}
      
    </section>
  );
};

export default OfferingsSection;
