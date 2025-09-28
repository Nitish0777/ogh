import React from 'react';
import { Calendar, Clock, Phone } from 'lucide-react';

const ServiceCards = () => {
  const services = [
    {
      icon: <Calendar className="w-12 h-12 text-blue-600" />,
      title: 'Book an Appointment Online',
      subtitle: '24/7 Service',
      description: 'Easily schedule your consultation anytime with our online appointment system.',
      buttonText: 'MAKE APPOINTMENT',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: 'Working Hours',
      subtitle: 'Timing Schedule',
      schedules: [
        { days: 'Sun - Wed', time: 'Available 24/7' },
        { days: 'Thu - Fri', time: 'Available 24/7' },
        { days: 'Sat - Sun', time: 'Available 24/7' }
      ]
    },
    {
      icon: <Phone className="w-12 h-12 text-green-600" />,
      title: 'Call: 098335 71031',
      subtitle: 'Emergency Helpline',
      description: 'For urgent medical assistance, we offer round-the-clock emergency support.',
      highlight: true
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 ${
                service.highlight ? 'ring-2 ring-green-200' : ''
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {service.title}
                </h3>
                
                <p className="text-sm text-blue-600 font-medium mb-4 uppercase tracking-wide">
                  {service.subtitle}
                </p>

                {service.description && (
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                )}

                {service.schedules && (
                  <div className="space-y-3 mb-6 w-full">
                    {service.schedules.map((schedule, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{schedule.days}:</span>
                        <span className="text-blue-600 font-medium">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                )}

                {service.buttonText && (
                  <button className={`${service.buttonColor} text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md`}>
                    {service.buttonText}
                  </button>
                )}

                {service.highlight && (
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">Call now for immediate assistance</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;