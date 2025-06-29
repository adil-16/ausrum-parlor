// import Navbar from "@/components/Navbar/Navbar";
import OurLocation from "@/components/OurLocation/OurLocation";
import top from "../assets/top.png";
import Image from "next/image";
import HeroSection from "../components/HeroSection/HeroSection";
import KeyFeaturesSection from "@/components/KeyFeatues/KeyFeatues";
import OfferingsSection from "@/components/Offerings/OfferingSection";
import SignatureServices from "@/components/SignatureServices/SignatureServices";
// import Footer from "@/components/Footer/footer";
import Link from "next/link";
// Main HomePage Component
const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden ">
        {/* <div className="absolute inset-0 z-0 "></div> */}
        <div className="flex flex-row justify-center items-center w-full h-screen  mx-auto call-bg">
          <div className="absolute inset-0 bg-[#000000a8] bg-opacity-80 z-10"></div>

          <div className="flex flex-col  max-w-6xl">
            <div className="relative z-10 p-6 text-left">
              <h1 className="text-5xl text-center md:text-7xl gafiya text-white leading-tight drop-shadow-lg shadow-pink-400 tracking-wide">
                Elegant & Empowering
              </h1>
              <p className="mt-2 text-xl md:text-3xl text-center text-[#B69951] play-bold">
                Discover your true beauty with us.
              </p>
              <div className="flex gap-3 justify-center">
                <Link href="/services">
                  <button className="mt-8 bg-[#B69951] text-xs sm:text-sm md:text-base text-white poppins-medium py-3 px-5 md:px-8 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                    Explore Services
                  </button>
                </Link>
                <Link href="/appointment">
                  <button className="mt-8 border-[#B69951] text-xs sm:text-sm md:text-base border-2 text-[#B69951] hover:bg-[#B69951] hover:text-white poppins-medium py-3 px-5 md:px-8 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                    Book Us Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* <img
            src={t.src}
            alt="Top visual"
            className="w-[35%] h-full object-contain "
          /> */}
        </div>

        <Image
          src={top}
          alt="Top visual"
          className="w-full h-auto absolute -bottom-1 md:-bottom-10 z-100"
          priority
        />
      </section>

      <main className=" ">
        <KeyFeaturesSection />
        <HeroSection />
        <OfferingsSection />
        <div className="overflow-hidden whitespace-nowrap py-8  text-white bg-[#B69951] text-4xl relative mb-12">
          <div className="inline-block animate-marquee gafiya px-4 break-words">
            <span className="mx-12">
              “Beauty begins the moment you decide to be yourself.”
            </span>
            <span className="mx-12">
              “Invest in your skin. It is going to represent you for a long
              time.”
            </span>
            <span className="mx-12">“Be your own kind of beautiful.”</span>
            <span className="mx-12">“Confidence breeds beauty.”</span>
            <span className="mx-12">“A little self-care goes a long way.”</span>
          </div>
        </div>

        <SignatureServices />

        {/* Call to Action Section */}
        <section className="bg-pink-200 relative p-8 h-[90vh] text-center shadow-lg flex flex-col justify-center items-center call-bg">
          <div className="absolute inset-0 bg-[#0c0c0c9a] bg-opacity-80 z-10"></div>

          <h2 className="text-4xl md:text-7xl font-bold gafiya text-[#B69951] mb-2 lg:mb-4 z-100">
            Ready to look your best?
          </h2>
          <p className="text-base md:text-xl text-[#ffffff] mb-8 z-100 play-bold">
            Book your appointment today and let us transform you.
          </p>
          <Link href="/appointment">
          <button className="bg-[#B69951] z-100  text-white play-bold py-3 px-8 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
            Book an Appointment
          </button>
          </Link>
        </section>

        {/* Our Location Section */}
        <section className="mb-16">
          <OurLocation />
        </section>
      </main>
      {/* Footer */}
    </div>
  );
};

export default App;
