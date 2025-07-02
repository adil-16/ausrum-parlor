import React from 'react'
import OfferingCard from "@/components/OferingCard/OfferingCard";

export default function TopServices() {


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


    return (
        <>
            <h2 className="text-3xl md:text-4xl xl:text-5xl play-regular mt-28 text-gray-900 mb-10 text-center md:text-left">
                SIGNATURE SERVICES
            </h2>
            {/* Featured Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 ">
                {featuredServices.map((service) => (
                    <OfferingCard key={service.id} {...service} />
                ))}
            </div>
        </>
    )
}
