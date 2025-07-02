"use client";
import React, { useState } from 'react';

// Default tabs
const defaultTabs = ["All", "Hair", "Makeup"];

// Default services
const defaultServices = {
    Hair: [
        {
            title: "SIGNATURE HAIRCUT",
            price: "Rs. 6000",
            description: "Transform your look with our signature haircut, expertly tailored to enhance your features and style.",
        },
        {
            title: "SIMPLE HAIRCUT",
            price: "Rs. 3500",
            description: "Experience a fresh and clean look with our simple haircut, perfect for any style.",
        },
        {
            title: "HAIR TRIMMING",
            price: "Rs. 1500",
            description: "Maintain your hairstyle effortlessly with our precision hair trimming service.",
        },
        {
            title: "BLOW DRY",
            price: "Rs. 2000",
            description: "Add volume and bounce with our expert blow-dry styling service.",
        },
        {
            title: "KERATIN TREATMENT",
            price: "Rs. 12000",
            description: "Smooth and revitalize your hair with professional keratin treatment.",
        },
        {
            title: "HAIR COLORING",
            price: "Rs. 8000",
            description: "Enhance your look with rich, vibrant hair color customized to your style.",
        }
    ],
    Makeup: [
        {
            title: "BRIDAL MAKEUP",
            price: "Rs. 20000",
            description: "Luxurious bridal makeup that makes your special day even more radiant.",
        },
        {
            title: "PARTY MAKEUP",
            price: "Rs. 8000",
            description: "Look stunning for any occasion with our expert party makeup service. jbfewiuh uoigfwqu gu ewo",
        },
    ]
};

export default function Services({ tabs = defaultTabs, services = defaultServices }) {
    const [activeTab, setActiveTab] = useState('All');

    const getFilteredServices = () => {
        if (activeTab === 'All') {
            return [...(services.Hair || []), ...(services.Makeup || [])];
        }
        return services[activeTab] || [];
    };

    const filtered = getFilteredServices();

    return (
        <div className="px-4">
            {/* Tabs */}
            <div className="flex gap-4 mb-10 border-b border-[#B69951]">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`py-2 px-4 text-sm font-semibold transition-all duration-300 rounded-t-md ${activeTab === tab
                            ? "bg-[#B69951] text-white"
                            : "bg-white text-gray-400 hover:bg-gray-100"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Service List */}
            {filtered.length > 6 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                    {filtered.map((item, idx) => (
                        <ServiceItem key={idx} item={item} />
                    ))}
                </div>
            ) : (
                <div className="space-y-10">
                    {filtered.map((item, idx) => (
                        <ServiceItem key={idx} item={item} />
                    ))}
                </div>
            )}
        </div>
    );
}

const ServiceItem = ({ item }) => (
    <div className="flex flex-col  items-start gap-2">
        <div className="flex items-center w-full gap-4">
            <h3 className="text-lg lg:text-lg milker text-gray-900 whitespace-nowrap">
                {item.title}</h3>
            <div className="flex-grow border-b-2 border-gray-100" />
            <span className="text-lg poppins-black text-gray-900 whitespace-nowrap">
                {item.price}</span>
        </div>
        <p className="text-sm md:text-sm  poppins-medium text-black mt-2 ">{item.description}</p>
    </div>
);
