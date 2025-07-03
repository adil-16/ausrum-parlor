// import Navbar from "@/components/Navbar/Navbar";
import OurLocation from "@/components/OurLocation/OurLocation";
import COASection from "../components/COA/COASection";
import HeroSection from "../components/HeroSection/HeroSection";
import KeyFeaturesSection from "@/components/KeyFeatues/KeyFeatues";
import OfferingsSection from "@/components/Offerings/OfferingSection";
import SignatureServices from "@/components/SignatureServices/SignatureServices";
import LendingSection from "../components/LendingSection/LendingSection";

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <LendingSection />

      <main className=" ">
        <KeyFeaturesSection />
        <HeroSection />
        <OfferingsSection />

        {/* <div className="overflow-hidden whitespace-nowrap py-8  text-white bg-[#B69951] text-4xl relative mb-12">
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
        </div> */}

        <SignatureServices />
        <COASection />
        <section className="mb-16">
          <OurLocation />
        </section>
      </main>
    </div>
  );
};

export default App;
