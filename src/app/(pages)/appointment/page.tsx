import React from "react";
import FormWrapper from "../../../components/FormWrapper/FormWrapper"; // ← Used directly now since it's a client component

export default function AppointmentPage() {
  return (
    <section className="relative min-h-screen call-bg">
      <div className="absolute inset-0 bg-[#000000a8] z-10" />
      <div className="relative z-10 flex items-center justify-center min-h-screen pt-12 pb-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4">
            <div className="w-full max-w-full lg:w-lg">
              <FormWrapper />
            </div>
            <div className="w-full lg:w-1/2 text-white space-y-4 max-w-xl text-center lg:text-left">
              <h1 className="text-2xl lg:text-4xl gafiya uppercase">
                Make your reservation
              </h1>
              <p className="text-sm lg:text-base text-white/80">
                Book a personalized appointment with our team. We'll make sure
                you walk in—and glow out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
