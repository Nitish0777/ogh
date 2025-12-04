import React from "react";
import { useNavigate } from "react-router-dom";

const HospitalKoparkhairne = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-600 text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-300 opacity-20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300 opacity-15 rounded-full animate-ping"></div>
        </div>
        
        {/* Medical Cross Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-8 h-full">
            {[...Array(32)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="w-8 h-8 relative">
                  <div className="absolute inset-0 bg-white transform rotate-45"></div>
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-white transform -translate-y-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full backdrop-blur-sm border border-white border-opacity-30">
                <span className="text-4xl">🏥</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Om Gagangiri Hospital
              <span className="block text-3xl md:text-5xl text-green-200 mt-2">
                Koparkhairne
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-8 text-green-100 font-medium">
              Comprehensive Multi-Specialty Care Under One Roof
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-90 mb-10">
              Advanced medical care across multiple specialties with expert consultants, 
              modern infrastructure, and 24×7 emergency services.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Appointment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-xl transition-all duration-300">
                Emergency Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the page content */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <button 
            onClick={() => navigate('/services')}
            className="inline-flex items-center text-green-600 hover:text-green-800 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to All Services
          </button>
        </div>
        
        {/* Page content here */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Specialties & Services</h2>
          {/* Add more content as needed */}
        </div>
      </div>
    </div>
  );
};

export default HospitalKoparkhairne;
