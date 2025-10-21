import React from 'react';
import { User } from 'lucide-react';

const Specialists = () => {
  const specialists = [
    {
      name: "Dr. Prakash Shendge",
      specialty: "General Surgeon",
      description: "Expert in general and laparoscopic surgeries with years of trusted experience in patient care.",
      image: "/images/dr-prakash.jpg"
    },
    {
      name: "Dr. Rekha Kaushal",
      specialty: "Gynecology & Obstetrics",
      description: "Specialist in women's health, pregnancy care, childbirth, and gynecological procedures.",
      image: "/images/dr-rekha.jpg"
    },
    {
      name: "Dr. J. N. Kaushal",
      specialty: "Oncology",
      description: "Highly experienced oncologist specializing in cancer care, including surgery, chemotherapy, and treatment planning.",
      image: "/images/dr-jn-kaushal.jpg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Specialists</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialists.map((doctor, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-300 rounded-full flex items-center justify-center">
                  <User className="w-16 h-16 text-gray-600" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{doctor.name}</h3>
                <p className="text-green-600 font-medium mb-3">{doctor.specialty}</p>
                <p className="text-gray-600 leading-relaxed">{doctor.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialists;
