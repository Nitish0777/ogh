import React from 'react';
import { useNavigate } from 'react-router-dom';
import DepartmentCard from '../components/DepartmentCard';

const Departments = () => {
  const navigate = useNavigate();

  const departments = [
    {
      id: 1,
      title: "General & Laparoscopic Surgery",
      description: "From routine procedures to complex interventions, our surgical team performs a wide range of general, laparoscopic, and minimally invasive surgeries with precision and safety.",
      icon: "🏥",
      keyProcedures: [
        "Hernia, appendix, and gallbladder surgeries",
        "Gastrointestinal and abdominal procedures", 
        "Minimally invasive laparoscopic techniques"
      ]
    },
    {
      id: 2,
      title: "Gynaecology & Obstetrics",
      description: "Comprehensive care for women through every stage of life, from adolescence to motherhood and beyond, focusing on maternal health and reproductive wellness.",
      icon: "👶",
      keyProcedures: [
        "Antenatal and postnatal care",
        "High-risk pregnancy management",
        "Gynaecological surgeries and fertility evaluation"
      ]
    },
    {
      id: 3,
      title: "Paediatrics",
      description: "Holistic healthcare for infants, children, and adolescents with emphasis on preventive care, timely vaccinations, and accurate diagnosis.",
      icon: "👶",
      keyProcedures: [
        "Newborn and neonatal care",
        "Immunizations and growth monitoring", 
        "Treatment of paediatric infections and conditions"
      ]
    },
    {
      id: 4,
      title: "General Medicine",
      description: "The foundation of our healthcare system, managing a wide spectrum of acute and chronic illnesses with precision and continuous care.",
      icon: "🩺",
      keyProcedures: [
        "Lifestyle and metabolic disorders",
        "Infectious diseases",
        "Preventive health and routine screenings"
      ]
    },
    {
      id: 5,
      title: "Orthopaedics",
      description: "Dedicated to restoring mobility and improving quality of life through specialized surgical and non-surgical treatments.",
      icon: "🦴",
      keyProcedures: [
        "Trauma and fracture management",
        "Joint replacement and arthroscopic surgery",
        "Physiotherapy and rehabilitation support"
      ]
    },
    {
      id: 6,
      title: "Urology",
      description: "Specialized care for urinary tract and male reproductive health using advanced diagnostic and surgical techniques.",
      icon: "🫘",
      keyProcedures: [
        "Kidney stone and prostate treatment",
        "Urinary tract infection management",
        "Endoscopic and minimally invasive surgeries"
      ]
    },
    {
      id: 7,
      title: "Plastic & Reconstructive Surgery",
      description: "Beyond aesthetics, we restore form, function, and confidence through advanced reconstructive techniques.",
      icon: "✨",
      keyProcedures: [
        "Post-trauma and burn reconstruction",
        "Aesthetic and corrective surgeries",
        "Scar revision and wound care"
      ]
    },
    {
      id: 8,
      title: "Nephrology",
      description: "Focused on prevention, diagnosis, and management of kidney diseases with comprehensive diagnostic support.",
      icon: "🫘",
      keyProcedures: [
        "Chronic kidney disease management",
        "Electrolyte and hypertension control",
        "Preventive kidney health programs"
      ]
    },
    {
      id: 9,
      title: "Psychiatry",
      description: "Compassionate counselling, therapy, and medical management to help overcome stress, anxiety, and emotional challenges.",
      icon: "🧠",
      keyProcedures: [
        "Counselling and psychotherapy",
        "Stress and anxiety management",
        "Treatment for mood and behavioural disorders"
      ]
    },
    {
      id: 10,
      title: "Pathology",
      description: "Lab Yatharth supports every clinical department with accurate, timely diagnostic services for faster treatment decisions.",
      icon: "🔬",
      keyProcedures: [
        "Haematology, biochemistry, and microbiology",
        "Histopathology and cytology",
        "Pre-employment and corporate testing"
      ]
    },
    {
      id: 11,
      title: "Anaesthesiology",
      description: "Ensuring patient safety and comfort during surgical and diagnostic procedures with the highest standards of clinical vigilance.",
      icon: "💉",
      keyProcedures: [
        "Pre-operative evaluation and anaesthesia planning",
        "Pain management and sedation support",
        "Continuous intra-operative monitoring"
      ]
    }
  ];

  const handleLearnMore = (departmentId) => {
    navigate(`/departments/${departmentId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Care Across Specialties
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-6">
              We bring together expertise, technology, and compassion to deliver specialized treatments. 
              Every patient receives care tailored to their health needs.
            </p>
            <p className="text-lg text-blue-100 max-w-5xl mx-auto leading-relaxed">
              At OmGagangiri Hospital and Occupational Services, our multi-specialty departments combine clinical excellence with personalized care. 
              Each division is led by experienced consultants supported by advanced infrastructure, ensuring that every patient benefits from 
              accurate diagnosis, precise treatment, and compassionate follow-up.
            </p>
            <p className="text-lg text-blue-100 mt-4 font-medium">
              Explore our key specialties below:
            </p>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Departments</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map(department => (
            <DepartmentCard
              key={department.id}
              title={department.title}
              description={department.description}
              icon={department.icon}
              keyProcedures={department.keyProcedures}
              onLearnMore={() => handleLearnMore(department.id)}
            />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need Help Finding the Right Department?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experienced staff is here to guide you to the appropriate specialist for your specific needs. 
              Contact us for personalized assistance.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Departments;
