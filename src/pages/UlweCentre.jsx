import React from "react";
import { useNavigate } from "react-router-dom";

const UlweCentre = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-600 via-cyan-600 to-blue-600 text-white py-24 overflow-hidden">
        {/* Professional Building Silhouettes */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-20">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <rect x="0" y="100" width="100" height="100" fill="white"/>
            <rect x="150" y="80" width="80" height="120" fill="white"/>
            <rect x="280" y="60" width="120" height="140" fill="white"/>
            <rect x="450" y="90" width="90" height="110" fill="white"/>
            <rect x="600" y="70" width="100" height="130" fill="white"/>
            <rect x="750" y="85" width="110" height="115" fill="white"/>
            <rect x="900" y="95" width="85" height="105" fill="white"/>
            <rect x="1030" y="75" width="95" height="125" fill="white"/>
          </svg>
        </div>

        {/* Certification Badges Animation */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-20 left-20 animate-badge-float">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl text-teal-600">✓</span>
            </div>
          </div>
          <div className="absolute top-32 right-32 animate-badge-float-delayed">
            <div className="w-12 h-12 bg-cyan-300 rounded-full flex items-center justify-center">
              <span className="text-lg text-teal-700">🏆</span>
            </div>
          </div>
          <div className="absolute bottom-40 left-32 animate-pulse">
            <div className="w-14 h-14 bg-blue-300 rounded-full flex items-center justify-center">
              <span className="text-xl text-blue-700">🎖️</span>
            </div>
          </div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 grid-rows-8 h-full gap-4 p-8">
            {[...Array(96)].map((_, i) => (
              <div key={i} className="border border-white"></div>
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full backdrop-blur-sm border border-white border-opacity-30">
                <span className="text-4xl">🏢</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              OGH Ulwe Centre
              <span className="block text-3xl md:text-5xl text-teal-200 mt-2">
                Certified Excellence
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-8 text-teal-100 font-medium">
              Certified Diagnostic & Pre-Employment Health Facility
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-90 mb-10">
              Expanding OGH's trusted care to Ulwe with accredited occupational health services 
              recognized by national and international authorities.
            </p>
            
            {/* Certifications */}
            <div className="mb-10">
              <p className="text-teal-200 mb-4 font-medium">Certified by:</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">DISH</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">DGI</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">JNPT</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">OGUK</span>
                <span className="bg-white bg-opacity-20 px-4 py-2 rounded-full">Maritime Bodies</span>
              </div>
            </div>
            
            {/* Services Icons */}
            <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mb-10 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl mb-2">📋</div>
                <div className="text-xs text-teal-200">X-Ray</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">💓</div>
                <div className="text-xs text-teal-200">ECG</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🫁</div>
                <div className="text-xs text-teal-200">PFT</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">👂</div>
                <div className="text-xs text-teal-200">Audiometry</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">👁️</div>
                <div className="text-xs text-teal-200">Vision Test</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Certified
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 font-bold py-4 px-8 rounded-xl transition-all duration-300">
                View Certifications
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
            className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l5.293 5.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to All Services
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes badge-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes badge-float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-5deg); }
        }
        .animate-badge-float { animation: badge-float 4s ease-in-out infinite; }
        .animate-badge-float-delayed { animation: badge-float-delayed 4s ease-in-out infinite 2s; }
      `}</style>
    </div>
  );
};

export default UlweCentre;
