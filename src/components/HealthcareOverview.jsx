import React from "react";
import { Users, Award, MapPin, Clock, Heart, Shield, Star, TrendingUp } from "lucide-react";
import not from '../assets/checkups.png';

const HealthcareOverview = () => {
  const stats = [
    { 
      number: "3+", 
      label: "Expert Doctors",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    { 
      number: "700+", 
      label: "Happy Patients",
      icon: <Heart className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    { 
      number: "40+", 
      label: "Years Experience",
      icon: <Clock className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
    { 
      number: "1500+", 
      label: "Surgeries Performed",
      icon: <Award className="w-8 h-8" />,
      color: "from-green-500 to-green-600"
    },
  ];

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Care",
      description: "Advanced medical facilities with state-of-the-art equipment"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Expert Team",
      description: "Highly qualified doctors and medical professionals"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Modern Technology",
      description: "Latest medical technology for accurate diagnosis"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-green-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                  Healthcare Excellence
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Comprehensive Healthcare
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-600">
                  All In One Place
                </span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                From preventive health checkups to specialized departments and mobile medical units, 
                we provide complete healthcare solutions tailored to your needs with cutting-edge technology 
                and compassionate care.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex-shrink-0 p-2 bg-gradient-to-r from-green-100 to-green-100 rounded-lg text-green-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Our Services
              </button>
              <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Book Consultation
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-green-600/10"></div>
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-green-600/20 to-transparent rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-green-600/20 to-transparent rounded-full"></div>
              
              <img
                src={not}
                alt="Medical team providing comprehensive healthcare services"
                className="w-full h-[500px] object-cover relative z-10"
              />
              
              {/* Floating card overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900">24/7 - 365 days Emergency Services Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-green-600/10 rounded-3xl"></div>
          
          <div className="relative bg-gradient-to-r from-gray-900 to-green-900 rounded-3xl p-12 shadow-2xl">
            {/* Section header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">
                Our Healthcare Impact
              </h3>
              <p className="text-green-100 text-lg max-w-2xl mx-auto">
                Trusted by thousands of patients and recognized for our commitment to excellence in healthcare delivery
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center">
                  <div className="relative">
                    {/* Icon background */}
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                    
                    {/* Number */}
                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-green-100 font-medium text-lg">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom text */}
            <div className="text-center mt-12">
              <p className="text-green-100 text-lg">
                Join thousands of satisfied patients who trust us with their healthcare needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareOverview;
