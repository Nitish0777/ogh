import React, { useState, useEffect } from 'react';
import { CheckCircle, UserCheck, Microscope, Shield, Stethoscope, ArrowDown, Phone, MapPin } from 'lucide-react';
import Specialists from '../components/about/Specialists';
import Testimonials from '../components/about/Testimonials';
import Accreditations from '../components/about/Accreditations';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contentBoxes = [
    {
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: "Comprehensive Health Checkups",
      description: "From routine diagnostics to specialized preventive screenings, we provide complete health checkup facilities under one roof, ensuring early detection and timely treatment.",
      gradient: "from-green-50 to-green-100",
      hoverGradient: "hover:from-green-100 hover:to-green-200"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: "Occupational Health & Counseling",
      description: "With a dedicated focus on workplace health, we conduct pre-employment and periodic health checkups along with medical counseling to support employee wellness and safety.",
      gradient: "from-green-50 to-green-100",
      hoverGradient: "hover:from-green-100 hover:to-green-200"
    },
    {
      icon: <Microscope className="w-12 h-12 text-green-600" />,
      title: "Advanced Facilities & Technology",
      description: "Our hospitals are equipped with modern infrastructure including digital X-ray, pathology labs, audiometry, ECG, and PFT rooms, designed to deliver accurate results and seamless patient care.",
      gradient: "from-green-50 to-green-100",
      hoverGradient: "hover:from-green-100 hover:to-green-200"
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-green-600" />,
      title: "Experienced & Qualified Doctors",
      description: "Led by highly skilled specialists across General Surgery, Gynecology, and Oncology, our team ensures every patient receives expert guidance and treatment backed by years of experience.",
      gradient: "from-green-50 to-green-100",
      hoverGradient: "hover:from-green-100 hover:to-green-200"
    }
  ];

  const scrollToContent = () => {
    document.getElementById('content-section').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-900 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
              Expert Care for Healthy Living
            </h1>
            <p className="text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed mb-12 text-green-100">
              We deliver high-quality, affordable, and ethical healthcare through our centres in 
              Koparkhairne and Ulwe, Navi Mumbai. Our services include general care, specialized 
              treatments, and occupational health solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Book Appointment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Find Locations
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToContent}
            className="absolute bottom-13 m-3 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <ArrowDown className="w-8 h-8 text-white" />
          </button>
        </div>
      </section>

      {/* Content Boxes */}
      <section id="content-section" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Why Choose Our Healthcare Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the comprehensive care and advanced medical solutions that make us the trusted choice for families across Navi Mumbai.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {contentBoxes.map((box, index) => (
              <div 
                key={index} 
                className={`group bg-gradient-to-br ${box.gradient} ${box.hoverGradient} rounded-2xl shadow-lg hover:shadow-2xl p-8 transform hover:-translate-y-2 transition-all duration-500 cursor-pointer border border-gray-100`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-md group-hover:shadow-lg transition-shadow duration-300">
                    {box.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {box.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors duration-300">
                      {box.description}
                    </p>
                  </div>
                </div>
                
                {/* Hover Effect Line */}
                <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:via-green-400 transition-all duration-500"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 md:p-12 shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Experience Quality Healthcare?
              </h3>
              <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied patients who trust us with their health and wellness journey.
              </p>
              <button className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Schedule Your Visit Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <Accreditations />

      {/* Specialists */}
      <Specialists />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default AboutUs;
