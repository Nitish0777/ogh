import React from "react";
import { useNavigate } from "react-router-dom";

const LabYatharth = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-700 text-white py-24 overflow-hidden">
        {/* DNA Helix Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-2 h-96 bg-white rounded-full transform rotate-45 animate-spin-slow"></div>
          <div className="absolute top-20 right-20 w-2 h-96 bg-green-300 rounded-full transform -rotate-45 animate-spin-reverse"></div>
        </div>

        {/* Scientific Elements */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-32 left-32 animate-pulse-slow">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 2v6h6V2H9zm4 4h-2V4h2v2zM7 9v6h10V9H7zm8 4H9v-2h6v2z"/>
            </svg>
          </div>
          <div className="absolute bottom-32 right-32 animate-bounce-slow">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>

        {/* Molecular Structure Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="flex justify-center items-center h-full">
            <div className="relative w-96 h-96">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-white rounded-full"
                  style={{
                    top: `${50 + 40 * Math.sin(i * Math.PI / 4)}%`,
                    left: `${50 + 40 * Math.cos(i * Math.PI / 4)}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Icon */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-white bg-opacity-20 rounded-full backdrop-blur-sm border border-white border-opacity-30">
                <span className="text-4xl">🔬</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Lab Yatharth
              <span className="block text-3xl md:text-5xl text-green-200 mt-2">
                Pathology & Diagnostics
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl mb-8 text-green-100 font-medium">
              Precision Testing for Confident Clinical Decisions
            </p>
            
            {/* Description */}
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed opacity-90 mb-10">
              State-of-the-art diagnostic laboratory with modern analyzers and stringent 
              quality controls ensuring fast, accurate, and reliable results.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-2xl mb-2">🩸</div>
                <div className="text-sm text-green-200">Blood Tests</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🦠</div>
                <div className="text-sm text-green-200">Microbiology</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔬</div>
                <div className="text-sm text-green-200">Histopathology</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-sm text-green-200">Quick Results</div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Book Lab Test
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold py-4 px-8 rounded-xl transition-all duration-300">
                View Test Menu
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
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(-45deg); }
          to { transform: rotate(-405deg); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 20s linear infinite; }
      `}</style>
    </div>
  );
};

export default LabYatharth;
