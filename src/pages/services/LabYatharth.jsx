import React from "react";
import { useNavigate } from "react-router-dom";

const LabYatharth = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate('/services')}
            className="mb-6 text-purple-200 hover:text-white flex items-center transition-colors duration-200"
          >
            ← Back to Services
          </button>
          <div className="max-w-4xl">
            <div className="text-5xl mb-4">🔬</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Lab Yatharth – Pathology & Diagnostics
            </h1>
            <p className="text-xl text-purple-100">
              Precision Testing for Confident Clinical Decisions
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Advanced Diagnostic Excellence</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Lab Yatharth, our in-house diagnostic division, forms the backbone of accurate treatment. Every test is performed using modern analyzers and stringent quality controls to ensure fast and reliable results.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From routine pathology to advanced microbiology, cytology, and biochemistry, our services support both hospital in-patients and walk-in clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Laboratory Services</h3>
              <ul className="space-y-3">
                {["Blood Tests", "Urine Analysis", "Histopathology", "Microbiology", "Biochemistry", "Cytology", "Immunology", "Hormone Testing"].map((service, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Advantages</h3>
              <ul className="space-y-3">
                {["Modern Analyzers", "Quality Controls", "Fast Results", "Extended Hours (9 AM - 9 PM)", "Emergency Processing", "Walk-in Friendly", "Digital Reports", "Expert Technicians"].map((advantage, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {advantage}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Operating Hours</h3>
            <p className="text-lg text-gray-600">
              <span className="font-semibold">Daily:</span> 9:00 AM to 9:00 PM
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Emergency sample processing available 24/7 for admitted patients
            </p>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate('/book-appointment')}
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Book Lab Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabYatharth;
