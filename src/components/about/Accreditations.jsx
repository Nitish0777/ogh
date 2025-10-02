import React from 'react';
import { FileCheck, Award, Shield } from 'lucide-react';

const Accreditations = () => {
  const accreditations = [
    {
      icon: <FileCheck className="w-10 h-10 text-blue-600" />,
      title: "ISO 9001-2015",
      description: "Certified for Hospital Services"
    },
    {
      icon: <Award className="w-10 h-10 text-green-600" />,
      title: "NABH Entry Level Accreditation",
      description: "For Hospital Standards"
    },
    {
      icon: <Shield className="w-10 h-10 text-purple-600" />,
      title: "ISO 45000-2018",
      description: "Certified for Occupational Health Services"
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Accreditations</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accreditations.map((accreditation, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                {accreditation.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{accreditation.title}</h3>
              <p className="text-gray-600">{accreditation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
