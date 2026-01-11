import React from "react";
import { useParams, useLocation, Navigate } from "react-router-dom";
import { doctors } from "../data/doctorsData";

const DoctorDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  
  // Get doctor data from location state or find by ID
  const doctorFromState = location.state?.doctor;
  const doctorFromData = doctors.find(doc => doc.id === parseInt(id));
  const doctor = doctorFromState || doctorFromData;

  // If doctor not found, redirect to doctors page
  if (!doctor) {
    return <Navigate to="/doctors" replace />;
  }

  // If doctor doesn't have full details, redirect to doctors page
  if (!doctor.introduction) {
    return <Navigate to="/doctors" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Doctor Header */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 bg-green-600 p-8 text-white text-center">
              <div className="w-32 h-32 bg-white rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-2xl font-bold mb-2">{doctor.name}</h1>
              <p className="text-green-100">{doctor.specialization}</p>
              <p className="text-green-200 text-sm mt-2">{doctor.experience} Experience</p>
            </div>
            <div className="md:w-2/3 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Introducing Myself</h2>
              {doctor.introduction && doctor.introduction.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Educational Qualifications */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-green-600 pb-2">
              My Educational Qualifications
            </h3>
            <ul className="space-y-3">
              {doctor.qualifications && doctor.qualifications.map((qualification, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-700">{qualification}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-green-600 pb-2">
              My Skills
            </h3>
            <ul className="space-y-3">
              {doctor.skills && doctor.skills.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expertise Areas */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-green-600 pb-2">
              Expertise Areas
            </h3>
            <ul className="space-y-3">
              {doctor.expertise && doctor.expertise.map((area, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-600 mr-2">•</span>
                  <span className="text-gray-700">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Make Appointment */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-green-600 pb-2">
              Make Appointment
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700 font-medium">Availability:</span>
                <span className="text-gray-600">{doctor.availability}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition duration-300 font-medium">
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
