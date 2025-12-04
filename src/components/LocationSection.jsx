import { MapPin, Phone, Clock, Stethoscope, Users, Car, Ambulance, Shield, Navigation, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import hospital from '../assets/hospital.jpg';
import ogh from '../assets/ogh.jpg';
import Book from '../assets/Book.jpg';
import { doctors, allDepartments } from '../data/doctorsData';

const LocationsSection = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showDirectionsModal, setShowDirectionsModal] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState('');

  // Filter departments to only show those with available doctors
  const availableDepartments = allDepartments.filter(dept => 
    doctors.some(doctor => doctor.department === dept.value && doctor.available)
  );

  // Filter doctors based on selected department and availability
  const getAvailableDoctors = () => {
    if (!selectedDepartment) {
      return doctors.filter(doctor => doctor.available);
    }
    return doctors.filter(doctor => 
      doctor.department === selectedDepartment && doctor.available
    );
  };

  const locations = [
    {
      image: hospital,
      title: "Om Gagangiri Hospital & & Occupational Health Services",
      address: "Plot no. 77, Shubham CHS Ltd, near Bharat bank, Sector 18, KoparKhairane, Navi Mumbai, Maharashtra 400709",
      phone: "+91 7666 6711 11",
      coordinates: { lat: 19.1009, lng: 73.0080 },
      googleMapsUrl: "https://maps.app.goo.gl/29UgHtm617PTsD5j7",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4668.470000216144!2d73.0036525!3d19.1023521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0d74a19ed0d%3A0x312e6327aa3ca230!2sOm%20Gagangiri%20Hospital%20%26%20Occupational%20Health%20Services!5e1!3m2!1sen!2sin!4v1764870295655!5m2!1sen!2sin",
      description: "Our flagship hospital featuring state-of-the-art facilities with 200+ beds, advanced ICU, emergency services, and specialized departments including cardiology, neurology, and orthopedics.",
      services: ["24/7 - 365 days Emergency", "ICU", "Surgery", "Diagnostics"],
      hours: "24/7 - 365 days Available",
      features: [
        { icon: <Ambulance className="w-4 h-4" />, text: "Emergency Services" },
        { icon: <Car className="w-4 h-4" />, text: "Free Parking" },
        { icon: <Shield className="w-4 h-4" />, text: "Insurance Accepted" }
      ]
    },
    {
      image: ogh,
      title: "OGH Health Services, Ulwe",
      address: "Sector 20, Ulwe, Navi Mumbai - 410206",
      phone: "+91 7666 6711 11",
      coordinates: { lat: 19.0330, lng: 73.0297 },
      googleMapsUrl: "https://maps.app.goo.gl/GhMdTNn5HtwQ2Yia8",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4672.080425434498!2d73.0328133!3d18.973992799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3004b4fd4cd%3A0xd65e82b6d0ee4ae7!2sOGH%20HEALTH%20SSERVICES!5e1!3m2!1sen!2sin!4v1764870962945!5m2!1sen!2sin",
      description: "A modern healthcare facility specializing in preventive care, health checkups, pathology services, and outpatient consultations for the growing Ulwe community.",
      services: ["Health Checkups", "Pathology", "OPD"],
      hours: "Mon-Sat: 8AM-8PM",
      features: [
        { icon: <Users className="w-4 h-4" />, text: "Corporate Packages" },
        { icon: <Stethoscope className="w-4 h-4" />, text: "Specialist Consultations" },
        { icon: <Car className="w-4 h-4" />, text: "Ample Parking" }
      ]
    }
  ];

  const handleGetDirections = (location) => {
    setSelectedLocation(location);
    setShowDirectionsModal(true);
  };

  const openInGoogleMaps = (location) => {
    window.open(location.googleMapsUrl, '_blank');
  };

  const openDirectionsToLocation = (location) => {
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`;
    window.open(directionsUrl, '_blank');
  };

  const DirectionsModal = () => {
    if (!showDirectionsModal || !selectedLocation) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
          {/* Modal Header */}
          <div className="bg-green-600 text-white p-6 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-bold">Get Directions</h3>
              <p className="text-green-100 mt-1">{selectedLocation.title}</p>
            </div>
            <button 
              onClick={() => setShowDirectionsModal(false)}
              className="p-2 hover:bg-green-700 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6">
            {/* Address and Contact Info */}
            <div className="mb-6">
              <div className="flex items-start mb-3">
                <MapPin className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <p className="text-gray-700">{selectedLocation.address}</p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <a href={`tel:${selectedLocation.phone}`} className="text-green-600 font-semibold hover:underline">
                  {selectedLocation.phone}
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <iframe
                  src={selectedLocation.googleMapsEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${selectedLocation.title}`}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => openInGoogleMaps(selectedLocation)}
                className="flex items-center justify-center border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Open in Maps
              </button>
              
              <button
                onClick={() => navigator.share && navigator.share({
                  title: selectedLocation.title,
                  text: selectedLocation.address,
                  url: selectedLocation.googleMapsUrl
                })}
                className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Share Location
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Operating Hours</h4>
              <p className="text-green-700">{selectedLocation.hours}</p>
              
              <h4 className="font-semibold text-green-800 mb-2 mt-4">Available Services</h4>
              <div className="flex flex-wrap gap-2">
                {selectedLocation.services.map((service, idx) => (
                  <span key={idx} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <MapPin className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="text-green-600">Locations</span>
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
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
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
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
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
                      <span key={idx} className="bg-green-50 text-green-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
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
                  <button 
                    onClick={() => handleGetDirections(location)}
                    className="w-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 sm:px-6 py-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
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
                src={Book}
                alt="Doctor consultation" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    24/7 - 365 days Emergency Care
                  </h3>
                  <p className="text-green-100 mb-8 text-lg">
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
                  <div className="bg-green-600 rounded-xl p-6">
                    <div className="flex items-center justify-center text-white">
                      <Clock className="w-8 h-8 mr-4" />
                      <div className="text-left">
                        <div className="text-2xl font-bold">+91 9833 5710 31</div>
                        <div className="text-green-100">Regular Appointments</div>
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
                  Book Your <span className="text-green-600">Appointment</span>
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">Last Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your last name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">Department *</label>
                    <select 
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-sm sm:text-base" 
                      required
                      value={selectedDepartment}
                      onChange={(e) => setSelectedDepartment(e.target.value)}
                    >
                      <option value="">Select Department</option>
                      {availableDepartments.map(dept => (
                        <option key={dept.value} value={dept.value}>
                          {dept.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs sm:text-sm font-semibold text-slate-700">Preferred Doctor</label>
                    <select className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-sm sm:text-base">
                      <option value="">Any Available Doctor</option>
                      {getAvailableDoctors().map(doctor => (
                        <option key={doctor.id} value={doctor.id}>
                          {doctor.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-700">Preferred Date *</label>
                  <input
                    type="date"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 text-sm sm:text-base"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs sm:text-sm font-semibold text-slate-700">Additional Message</label>
                  <textarea
                    placeholder="Please describe your symptoms or concerns..."
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 resize-none text-sm sm:text-base"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
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
            Quick Access to <span className="text-green-600">Hospital Services</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="bg-red-50 group-hover:bg-red-100 rounded-xl p-4 mb-3 transition-colors">
                <Ambulance className="w-8 h-8 text-red-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-slate-800">Emergency</h4>
              <p className="text-sm text-gray-600">24/7 - 365 days Available</p>
            </div>
            
            <div className="text-center group cursor-pointer">
              <div className="bg-green-50 group-hover:bg-green-100 rounded-xl p-4 mb-3 transition-colors">
                <Stethoscope className="w-8 h-8 text-green-600 mx-auto" />
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
              <div className="bg-blue-50 group-hover:bg-blue-100 rounded-xl p-4 mb-3 transition-colors">
                <MapPin className="w-8 h-8 text-blue-600 mx-auto" />
              </div>
              <h4 className="font-semibold text-slate-800">Locations</h4>
              <p className="text-sm text-gray-600">Find Nearest</p>
            </div>
          </div>
        </div>
      </div>

      {/* Directions Modal */}
      <DirectionsModal />
    </div>
  );
};

export default LocationsSection;
