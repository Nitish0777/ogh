import React from 'react';
import DepartmentCard from '../components/DepartmentCard';

const Departments = () => {
  const departments = [
    {
      id: 1,
      title: "General Surgery",
      description: "Comprehensive surgical care including general and laparoscopic procedures, delivered with safety and precision.",
      icon: "🏥"
    },
    {
      id: 2,
      title: "Gynecology & Obstetrics",
      description: "Complete women's healthcare from pregnancy to delivery and postpartum support, with expert guidance.",
      icon: "👶"
    },
    {
      id: 3,
      title: "Oncology",
      description: "Specialized cancer care with surgery, chemotherapy, and early detection for holistic treatment.",
      icon: "🎗️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Care Across Specialties
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              We bring together expertise, technology, and compassion to deliver specialized treatments. 
              Every patient receives care tailored to their health needs.
            </p>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Departments</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map(department => (
            <DepartmentCard
              key={department.id}
              title={department.title}
              description={department.description}
              icon={department.icon}
            />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need Help Finding the Right Department?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experienced staff is here to guide you to the appropriate specialist for your specific needs. 
              Contact us for personalized assistance.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
