import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';
import { doctors } from '../data/doctorsData';

const Doctors = () => {
  const navigate = useNavigate();

  const handleDoctorClick = (doctor) => {
    // Only navigate if doctor has full details (introduction field)
    if (doctor.introduction) {
      navigate(`/doctor/${doctor.id}`, { state: { doctor } });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Specialized Doctors
            </h1>
            <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
              We bring together a team of highly qualified specialists, offering expertise across diverse medical fields to ensure complete care for our patients.
            </p>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Doctors
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our medical professionals are dedicated to providing exceptional healthcare with years of experience and specialized training.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div 
              key={doctor.id} 
              className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${
                doctor.introduction ? 'cursor-pointer' : 'cursor-default'
              }`}
              onClick={() => handleDoctorClick(doctor)}
            >
              {/* Doctor Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100 flex items-center justify-center">
                {doctor.image ? (
                  <img 
                    src={doctor.image} 
                    alt={doctor.name}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <User className="text-gray-400 w-20 h-20" />
                )}
              </div>

              {/* Doctor Info */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-green-600 font-semibold text-lg">
                    {doctor.specialization}
                  </p>
                </div>

                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{doctor.experience} Experience</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                    </svg>
                    <span>{doctor.education}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{doctor.availability}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                  {doctor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our experienced doctors are here to provide you with the best medical care. 
            Book your appointment today and take the first step towards better health.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition duration-200">
              Book Appointment
            </button>
            <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-50 transition duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-red-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold mb-2">Emergency Services Available 24/7 - 365 days</h3>
          <p className="text-red-100 mb-4">For medical emergencies, call us immediately</p>
            <div className="flex justify-center items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span className="text-xl font-bold">Emergency: +91 98335 71031 / +91 76666 71111</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
