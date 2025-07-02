'use client';

import React, { useState } from 'react';
import Select from 'react-select';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const bookedDates = [new Date(2024, 8, 5), new Date(2024, 8, 10)];
const specialDates = [new Date(2024, 8, 8), new Date(2024, 8, 15)];

const timeOptions = [
  { value: '10:00', label: '10:00 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '12:00', label: '12:00 PM' },
];

const serviceOptions = [
  { value: 'facial', label: 'Facial Treatment' },
  { value: 'massage', label: 'Full Body Massage' },
  { value: 'hair', label: 'Hair Styling' },
  { value: 'nails', label: 'Nail Art' },
];

// ✅ Updated to plain JS—no ": any"
const customSelectStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'transparent',
    borderColor: '#ffffff',
    color: '#ffffff',
    padding: '2px',
    borderRadius: '0.375rem',
    minHeight: '44px',
  }),
  input: (base) => ({ ...base, color: 'white' }),
  singleValue: (base) => ({ ...base, color: 'white' }),
  placeholder: (base) => ({ ...base, color: '#e5e5e5' }),
  menu: (base) => ({ ...base, backgroundColor: '#B69951', color: '#fff' }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? '#B69951' : 'transparent',
    color: '#fff',
    cursor: 'pointer',
  }),
};

export default function FormWrapper() {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="bg-[#b69951c0] p-6 md:p-10 rounded-lg shadow-lg text-black">
      <form className="space-y-4">
        <h1 className="text-xl lg:text-2xl gafiya uppercase text-white">Book your slot</h1>

        {/* Contact Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-white">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent border text-white border-white rounded-md text-sm px-4 py-3"
            />
          </div>
          <div>
            <label className="block text-white">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border text-white border-white rounded-md text-sm px-4 py-3"
            />
          </div>
        </div>

        {/* Phone & Service */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-white">Phone</label>
            <input
              type="tel"
              placeholder="Enter your phone"
              className="w-full bg-transparent border text-white border-white rounded-md text-sm px-4 py-3"
            />
          </div>
          <div>
            <label className="block text-white">Select Service</label>
            <Select
              options={serviceOptions}
              value={selectedService}
              onChange={setSelectedService}
              styles={customSelectStyles}
              placeholder="Choose a service"
            />
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <label className="block text-white">Select Time</label>
          <Select
            options={timeOptions}
            value={selectedTime}
            onChange={setSelectedTime}
            styles={customSelectStyles}
            placeholder="Choose a time"
          />
        </div>

        {/* Date Picker (optional) */}
        {/* Uncomment if you want to use it */}
        {/* 
        <div>
          <label className="block text-white">Select Date</label>
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            modifiers={{ booked: bookedDates, special: specialDates }}
            modifiersStyles={{
              booked: { backgroundColor: '#e5e7eb', color: '#9ca3af', pointerEvents: 'none' },
              special: { backgroundColor: '#B69951', color: 'white' },
            }}
            className="bg-white rounded-md p-2"
          />
        </div>
        */}

        <button
          type="submit"
          className="w-full bg-white text-[#B69951] px-6 py-3 lg:py-4 rounded-4xl mt-4"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}
