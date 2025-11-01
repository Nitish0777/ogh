import React from 'react';
import { useNavigate } from 'react-router-dom';
import prakash from '../../assets/prakash.jpeg'
import rekha from '../../assets/rekha_kaushal.jpeg'
import shirish from '../../assets/shri.avif'

const Specialists = () => {
  const navigate = useNavigate();

  const specialists = [
    {
      name: "Dr. Prakash Shendge",
      specialty: "General Surgeon",
      description: "Expert in general and laparoscopic surgeries with years of trusted experience in patient care.",
      image: prakash
    },
    {
      name: "Dr. Rekha Kaushal",
      specialty: "Gynecology & Obstetrics",
      description: "Specialist in women's health, pregnancy care, childbirth, and gynecological procedures.",
      image: rekha
    },
    {
      name: "Dr. Shirish Shetty",
      specialty: "Oncology",
      description: "Highly experienced oncologist specializing in cancer care, including surgery, chemotherapy, and treatment planning.",
      image: shirish
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
              <div className="h-64 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{doctor.name}</h3>
                <p className="text-green-600 font-medium mb-3">{doctor.specialty}</p>
                <p className="text-gray-600 leading-relaxed">{doctor.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/doctors')}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};

export default Specialists;
