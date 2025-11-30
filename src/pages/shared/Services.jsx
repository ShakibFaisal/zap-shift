import React from "react";
import img from '../../assets/service.png'

const services = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
   
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  
  
  },
  {
    title: "Fulfillment Solution",
    description:
      "We offer customized service with inventory management support, online order processing, packaging, and after-sales support.",
    icon: "/icons/delivery.png",
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
   
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow customers to return or exchange their products with online merchants.",
   
  },
];

const Services = () => {
  return (
    <div className="bg-[#002F36] rounded-3xl px-6 py-16 lg:px-16 my-10">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Our Services
        </h2>
        <p className="text-gray-300 mt-3">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          From personal packages to business shipments — we deliver on time, every time.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div
            key={i}
            className={`card shadow-md border border-gray-100 p-6 rounded-2xl bg-[#FFEDEE] 
              ${service.highlight ? "bg-[#D4F58B]" : "bg-[#FFEDEE]"}`}
          >
            <img
              src={img}
              
              className="w-16 h-16 mx-auto mb-4 opacity-80"
            />
            <h3 className="text-center font-semibold text-lg mb-2">
              {service.title}
            </h3>
            <p className="text-center text-sm text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
