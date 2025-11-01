import React from "react";
import { useNavigate } from "react-router-dom";

const HospitalKoparkhairne = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <button 
            onClick={() => navigate('/services')}
            className="mb-6 text-blue-200 hover:text-white flex items-center transition-colors duration-200"
          >
            ← Back to Services
          </button>
          <div className="max-w-4xl">
            <div className="text-5xl mb-4">🏥</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              OmGagangiri Hospital and & Occupational Health Services – Koparkhairne
            </h1>
            <p className="text-xl text-blue-100">
              Comprehensive Multi-Specialty Care Under One Roof
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Our Flagship Hospital</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our flagship hospital in Koparkhairne offers advanced medical care across multiple specialties — from General Surgery and Orthopedics to Gynecology, Pediatrics, and Internal Medicine. Backed by a team of expert consultants and modern infrastructure, we ensure each patient receives precise diagnosis, effective treatment, and personalized attention.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Round-the-clock emergency, ICU, and surgical facilities guarantee that care is always within reach when it's needed most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Key Specialties</h3>
              <ul className="space-y-3">
                {["General Surgery", "Orthopedics", "Gynecology", "Pediatrics", "Internal Medicine", "Emergency Medicine", "ICU Care"].map((specialty, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {specialty}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Facilities</h3>
              <ul className="space-y-3">
                {["24×7 Emergency Services", "Modern ICU", "Fully Equipped Operation Theatre", "Advanced Diagnostic Equipment", "Expert Medical Team", "Patient-Centric Care"].map((facility, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate('/book-appointment')}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalKoparkhairne;
