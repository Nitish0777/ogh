import React from 'react';
import { Calendar, Clock, Phone, ArrowRight, CheckCircle } from 'lucide-react';

const ServiceCards = () => {
  const services = [
    {
      icon: <Calendar className="w-16 h-16 text-blue-600" />,
      title: 'Book an Appointment Online',
      subtitle: '24/7 Service',
      description: 'Easily schedule your consultation anytime with our user-friendly online appointment system.',
      buttonText: 'MAKE APPOINTMENT',
      buttonColor: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
      features: ['Online Booking', 'Instant Confirmation', 'Flexible Scheduling']
    },
    {
      icon: <Clock className="w-16 h-16 text-indigo-600" />,
      title: 'Working Hours',
      subtitle: 'Timing Schedule',
      schedules: [
        { days: 'Monday - Friday', time: 'Available 24/7' },
        { days: 'Saturday - Sunday', time: 'Available 24/7' },
        { days: 'Emergency Services', time: 'Round the Clock' }
      ],
      backgroundColor: 'bg-gradient-to-br from-indigo-50 to-blue-50'
    },
    {
      icon: <Phone className="w-16 h-16 text-green-600" />,
      title: 'Emergency Helpline',
      subtitle: 'Call: 098335 71031',
      description: 'For urgent medical assistance, we offer round-the-clock emergency support with rapid response.',
      highlight: true,
      features: ['24/7 Availability', 'Rapid Response', 'Expert Medical Staff'],
      buttonText: 'CALL NOW',
      buttonColor: 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience comprehensive healthcare services designed for your convenience and peace of mind
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:transform hover:-translate-y-2 ${
                service.highlight 
                  ? 'bg-gradient-to-br from-green-50 via-white to-green-50 ring-2 ring-green-200 shadow-xl' 
                  : service.backgroundColor || 'bg-white shadow-lg'
              }`}
            >
              {/* Card Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-600 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-green-600 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
              </div>

              <div className="relative p-8 lg:p-10">
                <div className="flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="mb-8 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-green-100 rounded-full transform group-hover:scale-110 transition-transform duration-300"></div>
                    <div className="relative bg-white rounded-full p-4 shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Title and Subtitle */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <div className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-6">
                    {service.subtitle}
                  </div>

                  {/* Description */}
                  {service.description && (
                    <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  )}

                  {/* Features List */}
                  {service.features && (
                    <div className="space-y-3 mb-8 w-full">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center justify-center text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Schedules */}
                  {service.schedules && (
                    <div className="space-y-4 mb-8 w-full">
                      {service.schedules.map((schedule, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-700 font-medium">{schedule.days}</span>
                            <span className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">
                              {schedule.time}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Button */}
                  {service.buttonText && (
                    <button className={`group/btn ${service.buttonColor} text-white px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2`}>
                      <span>{service.buttonText}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  )}

                  {/* Emergency Note */}
                  {service.highlight && (
                    <div className="mt-6 p-4 bg-green-50 rounded-xl border border-green-200">
                      <p className="text-sm text-green-700 font-medium">
                        🚨 Call now for immediate medical assistance
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-lg mb-6">
            Need immediate assistance? Our medical team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
              View All Services
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;