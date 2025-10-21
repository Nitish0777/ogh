import React from "react";
import { useNavigate } from "react-router-dom";

const HealthCheckup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-600 text-white py-24 overflow-hidden">
        {/* Animated Health Icons */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-20 animate-float">
            <span className="text-6xl">💚</span>
          </div>
          <div className="absolute top-32 right-16 animate-float-delayed">
            <span className="text-5xl">🩺</span>
          </div>
          <div className="absolute bottom-32 left-16 animate-bounce-slow">
            <span className="text-4xl">📊</span>
          </div>
          <div className="absolute bottom-20 right-32 animate-pulse-slow">
            <span className="text-5xl">⚕️</span>
          </div>
        </div>

        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="healthPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="10" r="2" fill="white" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#healthPattern)"/>
            </svg>
          </div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full backdrop-blur-sm border border-white border-opacity-30">
                <span className="text-4xl">🩺</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              OGH Health Checkup Services
              <span className="block text-3xl md:text-5xl text-green-200 mt-2">
                 Preventive, Corporate & Onsite Health Programs
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-8 text-green-100 font-medium">
              Comprehensive Health Screenings
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-90 mb-10">
              Comprehensive health screenings and preventive care programs designed for 
              individuals and organizations to maintain optimal health.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mb-10 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-green-200 text-sm">Companies Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10K+</div>
                <div className="text-green-200 text-sm">Health Checkups</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-green-200 text-sm">Support</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Checkup
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-xl transition-all duration-300">
                Corporate Packages
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
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3s ease-in-out infinite 1s; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default HealthCheckup;
