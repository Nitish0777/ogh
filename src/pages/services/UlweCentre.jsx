import React from "react";
import { useNavigate } from "react-router-dom";

const UlweCentre = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate('/services')}
            className="mb-6 text-teal-200 hover:text-white flex items-center transition-colors duration-200"
          >
            ← Back to Services
          </button>
          <div className="max-w-4xl">
            <div className="text-5xl mb-4">🏢</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              OGH Ulwe Centre
            </h1>
            <p className="text-xl text-teal-100">
              Certified Diagnostic & Pre-Employment Health Facility
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Certified Excellence in Ulwe</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Expanding OGH's trusted care to the growing Ulwe region, this center specializes in accredited health and occupational medical services. Recognized by authorities including DISH, DGI, JNPT, OGUK, and international maritime bodies, OGH Ulwe ensures compliance with global medical standards.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The facility provides a complete range of diagnostic tests, pre-employment screenings, and corporate health certifications, all under one roof.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Certifications</h3>
              <ul className="space-y-3">
                {["DISH Certified", "DGI Approved", "JNPT Recognized", "OGUK Certified", "International Maritime Standards", "ISO Compliant"].map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Testing Services</h3>
              <ul className="space-y-3">
                {["X-Ray Imaging", "ECG Testing", "Pulmonary Function Test (PFT)", "Audiometry", "Vision Testing", "Blood Work", "Medical Fitness Certificates"].map((service, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Specialized Programs</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-teal-50 rounded-lg">
                <h4 className="font-semibold text-teal-800">Maritime Medical</h4>
                <p className="text-sm text-teal-600 mt-2">International seafarer medical certifications</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800">Corporate Health</h4>
                <p className="text-sm text-blue-600 mt-2">Customized corporate wellness programs</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800">Pre-Employment</h4>
                <p className="text-sm text-green-600 mt-2">Comprehensive job fitness assessments</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate('/book-appointment')}
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Book Medical Examination
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UlweCentre;
