import React from 'react';
import { MapPin, Phone, Clock, Stethoscope, Users, Car, Ambulance, Shield } from 'lucide-react';
import not from '../assets/not.png';

const LocationsSection = () => {
  const locations = [
    {
      image: not,
      title: "Koparkhairne Medical Center",
      address: "Plot No. 123, Sector 10, Koparkhairne, Navi Mumbai - 400709",
      phone: "+91 7666 6711 11",
      description: "Our flagship hospital featuring state-of-the-art facilities with 200+ beds, advanced ICU, emergency services, and specialized departments including cardiology, neurology, and orthopedics.",
      buttonText: "VIEW DETAILS",
      services: ["24/7 Emergency", "ICU", "Surgery", "Diagnostics"],
      hours: "24/7 Available",
      features: [
        { icon: <Ambulance className="w-4 h-4" />, text: "Emergency Services" },
        { icon: <Car className="w-4 h-4" />, text: "Free Parking" },
        { icon: <Shield className="w-4 h-4" />, text: "Insurance Accepted" }
      ]
    },
    {
      image: not,
      title: "Ulwe Health Center",
      address: "Sector 20, Ulwe, Navi Mumbai - 410206",
      phone: "+91 9876 5432 10",
      description: "A modern healthcare facility specializing in preventive care, health checkups, pathology services, and outpatient consultations for the growing Ulwe community.",
      buttonText: "VIEW DETAILS",
      services: ["Health Checkups", "Pathology", "OPD", "Vaccination"],
      hours: "Mon-Sat: 8AM-8PM",
      features: [
        { icon: <Users className="w-4 h-4" />, text: "Corporate Packages" },
        { icon: <Stethoscope className="w-4 h-4" />, text: "Specialist Consultations" },
        { icon: <Car className="w-4 h-4" />, text: "Ample Parking" }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <MapPin className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-blue-600">Locations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Strategically located across Navi Mumbai to provide accessible, world-class healthcare services. 
            Each facility is equipped with modern technology and staffed by experienced medical professionals.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Image Section */}
              <div className="relative">
                <img 
                  src={location.image} 
                  alt={location.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  {location.hours}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 lg:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {location.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 lg:p-8">
                {/* Address and Contact */}
                <div className="flex items-start mb-4">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {location.address}
                  </p>
                </div>
                
                <div className="flex items-center mb-6">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mr-3 flex-shrink-0" />
                  <a href={`tel:${location.phone}`} className="text-green-600 font-semibold hover:underline text-sm sm:text-base">
                    {location.phone}
                  </a>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                  {location.description}
                </p>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
                    Key Services
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {location.services.map((service, idx) => (
                      <span key={idx} className="bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-800 mb-3 uppercase tracking-wider">
                    Facilities
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {location.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <span className="text-green-600 mr-2">{feature.icon}</span>
                        <span className="text-xs sm:text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 hover:shadow-lg">
                    {location.buttonText}
                  </button>
                  <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 sm:px-6 py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200">
                    GET DIRECTIONS
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Booking Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Doctor image with contact */}
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900">
              <img 
                src={not}
                alt="Doctor consultation" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    24/7 Emergency Care
                  </h3>
                  <p className="text-blue-100 mb-8 text-lg">
                    Our medical team is always ready to provide immediate care when you need it most.
                  </p>
                  
                  {/* Emergency Contact */}
                  <div className="bg-red-600 rounded-xl p-6 mb-6">
                    <div className="flex items-center justify-center text-white">
                      <Phone className="w-8 h-8 mr-4" />
                      <div className="text-left">
                        <div className="text-2xl font-bold">+91 7666 6711 11</div>
                        <div className="text-red-100">Emergency Helpline</div>
                      </div>
                    </div>
                  </div>

                  {/* Regular Appointment */}
                  <div className="bg-blue-600 rounded-xl p-6">
                    <div className="flex items-center justify-center text-white">
                      <Clock className="w-8 h-8 mr-4" />
                      <div className="text-left">
                        <div className="text-2xl font-bold">+91 9876 5432 10</div>
                        <div className="text-blue-100">Regular Appointments</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Appointment form */}
            <div className="p-6 sm:p-8 lg:p-12">
              <div className="mb-6 lg:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                  Book Your <span className="text-blue-600">Appointment</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Schedule your consultation with our experienced medical professionals. We'll confirm your appointment within 24 hours.
                </p>
              </div>
              
              <form className="space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">First Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your first name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">Last Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">Department *</label>
                    <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base" required>
                      <option value="">Select Department</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="emergency">Emergency Care</option>
                      <option value="general">General Medicine</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">Preferred Doctor</label>
                    <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base">
                      <option value="">Any Available Doctor</option>
                      <option value="dr-smith">Dr. Smith Johnson</option>
                      <option value="dr-sarah">Dr. Sarah Wilson</option>
                      <option value="dr-michael">Dr. Michael Brown</option>
                      <option value="dr-emily">Dr. Emily Davis</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-700">Preferred Date *</label>
                  <input
                    type="date"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-700">Additional Message</label>
                  <textarea
                    placeholder="Please describe your symptoms or concerns..."
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                >
                  BOOK APPOINTMENT
                </button>
                
                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  * Required fields. We'll contact you within 24 hours to confirm your appointment.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
            Quick Access to <span className="text-blue-600">Hospital Services</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group cursor-pointer">
              <div className="bg-red-50 group-hover:bg-red-100 rounded-xl p-4 mb-3 transition-colors">
                <Ambulance className="w-8 h-8 text-red-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-slate-800">Emergency</h4>
              <p className="text-sm text-gray-600">24/7 Available</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="bg-blue-50 group-hover:bg-blue-100 rounded-xl p-4 mb-3 transition-colors">
                <Stethoscope className="w-8 h-8 text-blue-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-slate-800">OPD</h4>
              <p className="text-sm text-gray-600">Mon-Sat</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="bg-green-50 group-hover:bg-green-100 rounded-xl p-4 mb-3 transition-colors">
                <Users className="w-8 h-8 text-green-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-slate-800">Checkups</h4>
              <p className="text-sm text-gray-600">Book Online</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="bg-purple-50 group-hover:bg-purple-100 rounded-xl p-4 mb-3 transition-colors">
                <Shield className="w-8 h-8 text-purple-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-slate-800">Insurance</h4>
              <p className="text-sm text-gray-600">All Major Plans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;