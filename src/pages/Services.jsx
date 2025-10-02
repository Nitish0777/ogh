import React from "react";

const Services = () => {
  const services = [
    {
      title: "Pathology Lab",
      description: "Our advanced pathology lab offers accurate diagnostic testing with quick turnaround times, supporting precise treatment decisions for patients.",
    },
    {
      title: "Radiology",
      description: "Equipped with modern imaging technology, our radiology department provides X-rays, ultrasounds, and other diagnostic scans with high clarity and reliability.",
    },
    {
      title: "Pre-employment Checkups",
      description: "We conduct comprehensive pre-employment health screenings to ensure workforce well-being and compliance with occupational health standards.",
    },
    {
      title: "Mobile Annual Checkup Buses",
      description: "Our mobile health buses bring annual checkups directly to organizations, enabling convenient, on-site preventive healthcare for employees.",
    },
    {
      title: "OGH Health Service, Ulwe (New Extension)",
      description: "Expanding our reach with the Ulwe center, we deliver quality healthcare services and diagnostic solutions closer to the community.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">What We Do</h2>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors duration-200">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            We are pleased to offer you the chance to access trusted, affordable, and comprehensive healthcare under one roof.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg">
            Make an Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
