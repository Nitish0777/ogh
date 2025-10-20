import React from "react";
import { useNavigate } from "react-router-dom";

const HealthCheckup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate('/services')}
            className="mb-6 text-green-200 hover:text-white flex items-center transition-colors duration-200"
          >
            ← Back to Services
          </button>
          <div className="max-w-4xl">
            <div className="text-5xl mb-4">🩺</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              OGH Health Checkup Services
            </h1>
            <p className="text-xl text-green-100">
              Preventive, Corporate & Onsite Health Programs
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Comprehensive Health Assessment</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Good health starts with awareness, and our Health Checkup division ensures just that. From pre-employment medical assessments to large-scale onsite screenings, we deliver preventive healthcare designed for both individuals and organizations.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Equipped with mobile medical buses, modern diagnostic tools, and certified medical teams, we make quality health evaluation accessible, compliant, and efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Services Offered</h3>
              <ul className="space-y-3">
                {["Pre-Employment Medical Exams", "Annual Health Checkups", "Corporate Health Programs", "Onsite Medical Screenings", "Occupational Health Assessments", "Fitness Certifications"].map((service, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {["Mobile Health Units", "Certified Medical Teams", "Quick Report Generation", "Corporate Tie-ups", "Onsite Screening Capability", "Compliance with Standards"].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate('/book-appointment')}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Schedule Health Checkup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthCheckup;
