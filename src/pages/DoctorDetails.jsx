import React from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
// Import Dr. Prakash's image
import doctor1 from '../assets/prakash.jpeg';

const DoctorDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  
  // Only allow access to Dr. Prakash Shendge (id: 1)
  if (id !== '1') {
    return <Navigate to="/doctors" replace />;
  }

  // Get doctor data from location state or use default data for Dr. Prakash
  const doctor = location.state?.doctor || {
    id: 1,
    name: 'Dr. Prakash Shendge',
    specialization: 'General & Laparoscopic Surgeon',
    image: doctor1,
    experience: '26+ Years',
    education: 'MBBS, MS (General Surgery)',
    availability: 'Mon - Fri: 11:00 AM - 1:00 PM & 7 PM to 9 PM'
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Doctor Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 p-8 text-white text-center">
              <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-blue-100">{doctor.specialization}</p>
              <p className="text-blue-200 text-sm mt-2">{doctor.experience} Experience</p>
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introducing Myself</h2>
              <p className="text-gray-600 leading-relaxed">
                I bring over 26 years of medical experience, including 18 years as a surgical specialist, 
                with a focus on laparoscopic and trauma surgery. My journey began with an MBBS followed by 
                M.S. (General Surgery) from L.T.M.C. Sion, Mumbai University. Over the years, I have 
                successfully handled complex surgical cases, emergency trauma care, and advanced minimally 
                invasive procedures.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                I was actively involved in treating victims of the June 2003 Mulund bomb blasts, where my 
                work in trauma surgery was recognized and appreciated by the then Chief Minister of 
                Maharashtra, Mr. Sushil Kumar Shinde. My commitment is to provide safe, ethical, and 
                effective surgical solutions to every patient.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Educational Qualifications */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
              My Educational Qualifications
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">MBBS – Mumbai University</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">MS – General Surgery – L.T.M.C. Sion, Mumbai University</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">FCPS – General Surgery – College of Physicians & Surgeons, Mumbai</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">DNB – General Surgery – National Board of Examinations, New Delhi</span>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
              My Skills
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Advanced laparoscopic surgery</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Trauma & emergency surgical care</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Complex general surgeries</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Post-operative recovery & patient care</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Surgical counseling & preventive health</span>
              </li>
            </ul>
          </div>

          {/* Expertise Areas */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
              Expertise Areas
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Minimally invasive laparoscopic procedures</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Hernia, appendix & gallbladder surgeries</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Trauma and critical care surgery</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Gastrointestinal & abdominal surgeries</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span className="text-gray-700">Preventive and corporate surgical health checkups</span>
              </li>
            </ul>
          </div>

          {/* Make Appointment */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-blue-600 pb-2">
              Make Appointment
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Availability:</span>
                <span className="text-gray-600">{doctor.availability}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 font-medium">
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
