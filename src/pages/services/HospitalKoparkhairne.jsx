import React from "react";
import { useNavigate } from "react-router-dom";

const HospitalKoparkhairne = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white py-20 min-h-[70vh] flex items-center">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/services')}
            className="absolute top-8 left-8 text-white/80 hover:text-white flex items-center transition-colors duration-200 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            ← Services
          </button>
          
          <div className="text-center max-w-6xl mx-auto">
            {/* Icon and Badge */}
            <div className="flex justify-center items-center mb-8">
              <div className="bg-white/20 p-6 rounded-full backdrop-blur-sm">
                <span className="text-5xl">🏥</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              OmGagangiri Hospital
            </h1>
            
            <div className="text-lg md:text-xl lg:text-2xl text-green-100 mb-4 font-medium">
              Occupational Health Services • Koparkhairne
            </div>
            
            <p className="text-lg md:text-xl text-green-50 mb-12 max-w-4xl mx-auto leading-relaxed">
              Advanced Multi-Specialty Healthcare with Compassionate Care
            </p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-green-100 text-sm font-medium">Emergency Care</div>
              </div>
              
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <div className="text-green-100 text-sm font-medium">Expert Doctors</div>
              </div>
              
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">10+</div>
                <div className="text-green-100 text-sm font-medium">Specialties</div>
              </div>
              
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="text-3xl font-bold text-white mb-2">15+</div>
                <div className="text-green-100 text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
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
              className="bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300"
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
