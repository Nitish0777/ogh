import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    queryTopic: "",
    phoneNumber: "",
    message: ""
  });

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
                <p className="text-green-600 font-semibold">+91 9833571031</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Email Us</h3>
                <div className="text-3xl mb-2">✉️</div>
                <p className="text-green-600 font-semibold break-all">info@omgagangirihospital.com</p>
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
                  <p className="text-gray-800 font-semibold">Sector 18, Koparkhairne, Navi Mumbai</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h4 className="text-xl font-bold text-green-600 mb-3">Ulwe (Health Services Centre)</h4>
                  <p className="text-gray-600 mb-3">
                    Newly opened branch provides quality healthcare close to home, with services that include general health consultations, pre-employment check-ups, and a dedicated pathology unit.
                  </p>
                  <p className="text-gray-800 font-semibold">Sector 19, Ulwe, Navi Mumbai</p>
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
    </div>
  );
};

export default Contact;
