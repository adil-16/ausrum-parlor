import React from 'react';

const ServiceListing = ({ services, title }) => {
  // Mapping placeholder font classes to actual Tailwind classes
  // In a real setup, you'd integrate custom fonts properly.
  const getFontClass = (fontName) => {
    switch (fontName) {
      case 'gafiya': return 'font-extrabold'; // Simulating a heavy, distinctive font
      case 'milker': return 'font-bold';     // Simulating a bold font for service names
      case 'poppins-medium': return 'font-medium'; // Simulating Poppins Medium
      case 'poppins-black': return 'font-black';   // Simulating Poppins Black
      default: return 'font-sans'; // Default to a general sans-serif
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white max-w-4xl mx-auto my-24">
      <h2 className={`text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 mb-8 sm:mb-10 tracking-tight leading-tight ${getFontClass('gafiya')}`}>
        {title}
      </h2>

      <div className="space-y-6 sm:space-y-8 mb-10 p-4">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col justify-between items-start gap-2">
            <div className="flex items-baseline w-full gap-4">
              <h3 className={`text-lg lg:text-xl text-gray-800 whitespace-nowrap ${getFontClass('milker')}`}>
                {service.name}
              </h3>
              <div className="flex-grow border-b-2 border-gray-100" />
              <span className={`text-lg text-gray-900 whitespace-nowrap ${getFontClass('poppins-black')}`}>
                Rs. {service.price}
              </span>
            </div>
            <p className={`text-sm md:text-base text-black mt-2 ${getFontClass('poppins-medium')}`}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-end w-full">
        <button className="mt-3 bg-[#B69951] text-white py-3 px-16 rounded-full shadow-xl transform hover:scale-105 transition duration-300 ease-in-out font-medium">
          Explore
        </button>
      </div>
    </section>
  );
};

export default ServiceListing;
