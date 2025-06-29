"use client";

import React, { useState } from "react";
import Select from "react-select";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const bookedDates = [new Date(2024, 8, 5), new Date(2024, 8, 10)];
const specialDates = [new Date(2024, 8, 8), new Date(2024, 8, 15)];

const timeOptions = [
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "12:00", label: "12:00 PM" },
];

const serviceOptions = [
  { value: "facial", label: "Facial Treatment" },
  { value: "massage", label: "Full Body Massage" },
  { value: "hair", label: "Hair Styling" },
  { value: "nails", label: "Nail Art" },
];

const customSelectStyles = {
  control: (provided: any) => ({
    ...provided,
    backgroundColor: "transparent",
    borderColor: "#ffffff",
    color: "#ffffff",
    padding: "2px",
    borderRadius: "0.375rem",
    minHeight: "44px",
  }),
  input: (base: any) => ({
    ...base,
    color: "white",
  }),
  singleValue: (base: any) => ({
    ...base,
    color: "white",
  }),
  placeholder: (base: any) => ({
    ...base,
    color: "#e5e5e5",
  }),
  menu: (base: any) => ({
    ...base,
    backgroundColor: "#B69951",
    color: "#fff",
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isFocused ? "#B69951" : "transparent",
    color: "#fff",
    cursor: "pointer",
  }),
};

const Appointment: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="relative min-h-screen call-bg">
      <div className="absolute inset-0 bg-[#000000a8] bg-opacity-80 z-10" />

      <div className="relative z-10 flex items-center justify-center min-h-screen pt-12 pb-12 ">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-4">
            {/* Booking Form */}
            <div className="w-full max-w-full   lg:w-lg">
              <div className="bg-[#b69951c0] p-6 md:p-10 rounded-lg shadow-lg text-black">
                <form className="space-y-4">
                  <h1 className="text-xl lg:text-2xl gafiya uppercase text-white">
                    Book your slot
                  </h1>

                  {/* Name & Email (inline) */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block play-regular text-base md:text-xl mb-1 text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full bg-transparent border text-white poppins-regular border-white rounded-md text-sm px-4 py-3 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block play-regular text-base md:text-xl mb-1 text-white">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-transparent border text-white poppins-regular border-white rounded-md text-sm px-4 py-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Phone & Service (inline) */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block play-regular text-base md:text-xl mb-1 text-white">
                        Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone"
                        className="w-full bg-transparent border text-white poppins-regular border-white rounded-md text-sm px-4 py-3 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block play-regular text-base md:text-xl mb-1 text-white">
                        Select Service
                      </label>
                      <Select
                        options={serviceOptions}
                        value={selectedService}
                        onChange={setSelectedService}
                        placeholder="Search or choose"
                        isSearchable
                        styles={customSelectStyles}
                      />
                    </div>
                  </div>

                  {/* Time Dropdown */}
                  <div>
                      <label className="block play-regular text-base md:text-xl mb-1 text-white">
                      Select Time
                    </label>
                    <Select
                      options={timeOptions}
                      value={selectedTime}
                      onChange={setSelectedTime}
                      placeholder="Choose a time"
                      styles={customSelectStyles}
                    />
                  </div>

                  {/* Date Picker - optional if enabled later */}
                  {/* <div>
                    <label className="block play-regular text-xl mb-1 text-white">
                      Select Date
                    </label>
                    <DayPicker
                      mode=\"single\"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      modifiers={{
                        booked: bookedDates,
                        special: specialDates,
                      }}
                      modifiersStyles={{
                        booked: {
                          backgroundColor: \"#e5e7eb\",
                          color: \"#9ca3af\",
                          pointerEvents: \"none\",
                        },
                        special: {
                          backgroundColor: \"#B69951\",
                          color: \"white\",
                        },
                      }}
                      className=\"bg-white rounded-md p-2\"
                    />
                  </div> */}

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-white text-sm md:text-base hover:opacity-90 text-[#B69951] play-bold px-6 py-3 lg:py-4 rounded-4xl mt-4 lg:mt-8"
                  >
                    Book Appointment
                  </button>
                </form>
              </div>
            </div>

            {/* CTA Section */}
            <div className="w-full lg:w-1/2 text-white space-y-4 max-w-xl text-center lg:text-left">
              <h1 className="text-2xl lg:text-4xl gafiya uppercase ">
                Make your reservation
              </h1>
              <p className="text-sm lg:text-base text-white/80">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
                facere, soluta magnam molestias itaque ad sint fugit architecto
                incidunt iste culpa perspiciatis possimus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
