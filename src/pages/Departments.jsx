import { useNavigate } from 'react-router-dom';
import DepartmentCard from '../components/DepartmentCard';

const Departments = () => {
  const navigate = useNavigate();

  const departments = [
    {
      id: 1,
      title: "General & Laparoscopic Surgery",
      description: "From routine procedures to complex interventions, our surgical team performs a wide range of general, laparoscopic, and minimally invasive surgeries with precision and safety.",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-emerald-700 text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-300 opacity-20 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-emerald-300 opacity-15 rounded-full animate-ping"></div>
          <div className="absolute top-32 right-1/4 w-20 h-20 bg-lime-300 opacity-10 rounded-full animate-pulse"></div>
        </div>
        
        {/* Medical Cross Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-8 h-full">
            {[...Array(32)].map((_, i) => (
              <div key={i} className="flex items-center justify-center">
                <div className="w-8 h-8 relative">
                  <div className="absolute inset-0 bg-white transform rotate-45"></div>
                  <div className="absolute top-1/2 left-0 w-full h-1 bg-white transform -translate-y-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Department Icons */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-16 left-20 animate-float">
            <span className="text-6xl">🏥</span>
          </div>
          <div className="absolute top-32 right-16 animate-float-delayed">
            <span className="text-5xl">👩‍⚕️</span>
          </div>
          <div className="absolute bottom-32 left-16 animate-bounce-slow">
            <span className="text-4xl">🔬</span>
          </div>
          <div className="absolute bottom-20 right-32 animate-pulse-slow">
            <span className="text-5xl">🩺</span>
          </div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-5xl mx-auto">  
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Comprehensive Care
              <span className="block text-3xl md:text-4xl text-green-200 mt-4 font-medium">
                Across Specialties
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed opacity-90 mb-10">
              We bring together <span className="text-yellow-300 font-semibold">expertise</span>, 
              <span className="text-lime-300 font-semibold"> technology</span>, and 
              <span className="text-emerald-300 font-semibold"> compassion</span> to deliver specialized treatments. 
              Every patient receives care tailored to their health needs.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4+</div>
                <div className="text-green-200 text-sm">service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-green-200 text-sm">Expert Care</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">8+</div>
                <div className="text-green-200 text-sm">Specialists</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-green-200 text-sm">Operations</div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
              Scroll Down
            </button>
          </div>
        </div>
      </div>

      {/* Departments Section */}
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Departments</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {departments.map(department => (
            <DepartmentCard
              key={department.id}
              title={department.title}
              description={department.description}
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
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Contact Us Today
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3s ease-in-out infinite 1s; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Departments;