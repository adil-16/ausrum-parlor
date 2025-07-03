import React from "react";
import TopServices from "../../../components/TopServices/TopServices";
import Services from "../../../components/Services/Services";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
}



export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white px-4 md:px-12 py-16 max-w-7xl mx-auto">
      <TopServices />
      <Services />
    </div>
  );
}
