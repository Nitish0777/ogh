import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "OmGagangiri Hospital and Occupational Services – Koparkhairne",
      subtitle: "Comprehensive Multi-Specialty Care Under One Roof",
      description: "Our flagship hospital in Koparkhairne offers advanced medical care across multiple specialties — from General Surgery and Orthopedics to Gynecology, Pediatrics, and Internal Medicine. Backed by a team of expert consultants and modern infrastructure, we ensure each patient receives precise diagnosis, effective treatment, and personalized attention.",
      highlights: [
        "24×7 Emergency, ICU, and Operation Theatre",
        "Expert consultants across key specialties",
        "Patient-centric care with advanced medical technology"
      ],
      route: "/services/hospital-koparkhairne",
      icon: "🏥",
      color: "from-green-500 to-green-600"
    },
    {
      id: 2,
      title: "OGH Health Checkup Services",
      subtitle: "Preventive, Corporate & Onsite Health Programs",
      description: "Good health starts with awareness, and our Health Checkup division ensures just that. From pre-employment medical assessments to large-scale onsite screenings, we deliver preventive healthcare designed for both individuals and organizations.",
      highlights: [
        "Certified Pre-Employment & Annual Checkups",
        "Mobile Health Units for Onsite Screenings",
        "Occupational Health Expertise & Corporate Tie-ups"
      ],
      route: "/services/health-checkup",
      icon: "🩺",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Lab Yatharth – Pathology & Diagnostics",
      subtitle: "Precision Testing for Confident Clinical Decisions",
      description: "Lab Yatharth, our in-house diagnostic division, forms the backbone of accurate treatment. Every test is performed using modern analyzers and stringent quality controls to ensure fast and reliable results.",
      highlights: [
        "Full-service diagnostic lab (Blood, Urine, Histopathology, Microbiology)",
        "Extended hours for convenience (9 AM to 9 PM)",
        "Emergency sample processing for admitted patients"
      ],
      route: "/services/lab-yatharth",
      icon: "🔬",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      title: "OGH Ulwe Centre",
      subtitle: "Certified Diagnostic & Pre-Employment Health Facility",
      description: "Expanding OGH's trusted care to the growing Ulwe region, this center specializes in accredited health and occupational medical services. Recognized by authorities including DISH, DGI, JNPT, OGUK, and international maritime bodies.",
      highlights: [
        "Certified by national and international health authorities",
        "Complete occupational health testing (X-Ray, ECG, PFT, Audiometry, Vision)",
        "Integrated support from Lab Yatharth for all pathology needs"
      ],
      route: "/services/ulwe-centre",
      icon: "🏢",
      color: "from-green-500 to-green-600"
    }
  ];

  const handleLearnMore = (route) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-50">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-700 text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-300 opacity-20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-300 opacity-15 rounded-full animate-ping"></div>
          <div className="absolute top-32 right-1/4 w-20 h-20 bg-green-300 opacity-10 rounded-full animate-pulse"></div>
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

        {/* Floating Service Icons */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-20 animate-float">
            <span className="text-6xl">🏥</span>
          </div>
          <div className="absolute top-32 right-16 animate-float-delayed">
            <span className="text-5xl">🩺</span>
          </div>
          <div className="absolute bottom-32 left-16 animate-bounce-slow">
            <span className="text-4xl">🔬</span>
          </div>
          <div className="absolute bottom-20 right-32 animate-pulse-slow">
            <span className="text-5xl">🏢</span>
          </div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">
            {/* Service Icons Row */}
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">🏥</span>
              </div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">🩺</span>
              </div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">🔬</span>
              </div>
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <span className="text-2xl">🏢</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Our Services
              <span className="block text-3xl md:text-4xl text-green-200 mt-4 font-medium">
                Excellence in Healthcare
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 mb-10">
              At OmGagangiri Hospital and Occupational Services, healthcare goes beyond treatment — 
              it's about <span className="text-yellow-300 font-semibold">trust</span>, 
              <span className="text-green-300 font-semibold"> continuity</span>, and 
              <span className="text-cyan-300 font-semibold"> expertise</span> across every stage of life.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4</div>
                <div className="text-green-200 text-sm">Service Divisions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-green-200 text-sm">Emergency Care</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-green-200 text-sm">Expert Staff</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10K+</div>
                <div className="text-green-200 text-sm">Patients Served</div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
              Explore All Services
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                index % 2 === 0 ? 'lg:mt-0' : 'lg:mt-8'
              }`}
            >
              {/* Card Header */}
              <div className={`bg-gradient-to-r ${service.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 text-6xl opacity-20 transform rotate-12 translate-x-4 -translate-y-2">
                  {service.icon}
                </div>
                <div className="relative z-10">
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2 leading-tight">{service.title}</h3>
                  <p className="text-green-100 font-medium">{service.subtitle}</p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.description}</p>
                
                <div className="mb-8">
                  <h5 className="font-bold text-gray-800 mb-4 flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Key Highlights
                  </h5>
                  <ul className="space-y-3">
                    {service.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start group">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleLearnMore(service.route)}
                  className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center group`}
                >
                  Learn More
                  <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Experience World-Class Healthcare?
            </h2>
            <p className="text-xl text-green-100 mb-10 leading-relaxed">
              We are pleased to offer you the chance to access trusted, affordable, and comprehensive healthcare under one roof.
            </p>
            <button className="bg-white text-green-600 hover:bg-gray-50 font-bold py-4 px-10 rounded-xl transition-all duration-300 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Make an Appointment
            </button>
          </div>
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
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3s ease-in-out infinite 1s; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Services;
