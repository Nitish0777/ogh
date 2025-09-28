import React from 'react';
import { MapPin, Phone } from 'lucide-react';

const LocationsSection = () => {
  const locations = [
    {
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Neurosurgery",
      description: "Advanced neurological treatments with experienced specialists and cutting-edge technology.",
      buttonText: "VIEW DETAILS"
    },
    {
      image: "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Eye Care & Surgery",
      description: "Comprehensive eye care services including advanced surgical procedures and treatments.",
      buttonText: "VIEW DETAILS"
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Our Locations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We have multiple locations to serve you better with the same quality care and professional service you expect from our medical team.
          </p>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {locations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={location.image} 
                alt={location.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {location.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {location.description}
                </p>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold text-sm transition-colors">
                  {location.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Appointment Booking Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Doctor image with contact */}
          <div className="relative">
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=500&h=600&fit=crop" 
                alt="Doctor consultation" 
                className="w-full h-150 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-slate-800 bg-opacity-90 p-6">
                <div className="flex items-center text-white">
                  <Phone className="w-6 h-8 mr-3" />
                  <div>
                    <div className="text-2xl font-bold">+91 7666 6711 11</div>
                    <div className="text-sm text-gray-300">Call for appointment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Appointment form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Book an appointment
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Department</option>
                  <option>Neurosurgery</option>
                  <option>Eye Care</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                </select>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Doctor</option>
                  <option>Dr. Smith Johnson</option>
                  <option>Dr. Sarah Wilson</option>
                  <option>Dr. Michael Brown</option>
                </select>
              </div>
              <input
                type="date"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                BOOK APPOINTMENT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationsSection;