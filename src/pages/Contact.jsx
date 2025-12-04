import React, { useState } from "react";
import { MapPin, Phone, Clock, Navigation, X, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    queryTopic: "",
    phoneNumber: "",
    message: ""
  });

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showDirectionsModal, setShowDirectionsModal] = useState(false);

  const locations = [
    {
      title: "Om Gagangiri Hospital & Occupational Health Services",
      address: "Plot no. 77, Shubham CHS Ltd, near Bharat bank, Sector 18, KoparKhairane, Navi Mumbai, Maharashtra 400709",
      phone: "+91 7666 6711 11",
      coordinates: { lat: 19.1009, lng: 73.0080 },
      googleMapsUrl: "https://maps.app.goo.gl/29UgHtm617PTsD5j7",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4668.470000216144!2d73.0036525!3d19.1023521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0d74a19ed0d%3A0x312e6327aa3ca230!2sOm%20Gagangiri%20Hospital%20%26%20Occupational%20Health%20Services!5e1!3m2!1sen!2sin!4v1764870295655!5m2!1sen!2sin",
      description: "Providing multi-specialty care with advanced diagnostics, surgery, and emergency services.",
      services: ["24/7 - 365 days Emergency", "ICU", "Surgery", "Diagnostics"],
      hours: "24/7 - 365 days Available"
    },
    {
      title: "OGH Health Services, Ulwe",
      address: "Sector 20, Ulwe, Navi Mumbai - 410206",
      phone: "+91 7666 6711 11",
      coordinates: { lat: 19.0330, lng: 73.0297 },
      googleMapsUrl: "https://maps.app.goo.gl/GhMdTNn5HtwQ2Yia8",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4672.080425434498!2d73.0328133!3d18.973992799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3004b4fd4cd%3A0xd65e82b6d0ee4ae7!2sOGH%20HEALTH%20SSERVICES!5e1!3m2!1sen!2sin!4v1764870962945!5m2!1sen!2sin",
      description: "Newly opened branch provides quality healthcare close to home, with services that include general health consultations, pre-employment check-ups, and a dedicated pathology unit.",
      services: ["Health Checkups", "Pathology", "OPD"],
      hours: "Mon-Sat: 8AM-8PM"
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">Get in Touch</h2>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Call & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Call Us</h3>
                <div className="text-3xl mb-2">📞</div>
                <p className="text-green-600 font-semibold">+91 7666 6711 11</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
                <div className="text-3xl mb-2">✉️</div>
                <p className="text-green-600 font-semibold break-all">drprakash@gagangirihospital.com</p>
              </div>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Locations</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-green-600 mb-3">Koparkhairne (Main Hospital)</h4>
                  <p className="text-gray-600 mb-3">
                    Providing multi-specialty care with advanced diagnostics, surgery, and emergency services.
                  </p>
                  <p className="text-gray-800 font-semibold mb-4">Sector 18, Koparkhairne, Navi Mumbai</p>
                  <button 
                    onClick={() => handleGetDirections(locations[0])}
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    View Location
                  </button>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-green-600 mb-3">Ulwe (Health Services Centre)</h4>
                  <p className="text-gray-600 mb-3">
                    Newly opened branch provides quality healthcare close to home, with services that include general health consultations, pre-employment check-ups, and a dedicated pathology unit.
                  </p>
                  <p className="text-gray-800 font-semibold mb-4">Sector 23, Ulwe, Navi Mumbai</p>
                  <button 
                    onClick={() => handleGetDirections(locations[1])}
                    className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    View Location
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Write to Us</h3>
            <p className="text-gray-600 mb-6">
              We're here to answer your queries, book appointments, or guide you to the right specialist. Fill in the form below, and our team will connect with you at the earliest.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Phone Number *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="queryTopic" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Query Topic *
                </label>
                <select
                  id="queryTopic"
                  name="queryTopic"
                  value={formData.queryTopic}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="">Select a topic</option>
                  <option value="appointment">Book Appointment</option>
                  <option value="emergency">Emergency Services</option>
                  <option value="general">General Inquiry</option>
                  <option value="services">Services Information</option>
                  <option value="billing">Billing & Insurance</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-vertical"
                  placeholder="Enter your message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Directions Modal */}
      <DirectionsModal />
    </div>
  );
};

export default Contact;
