import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DepartmentDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const departmentDetails = {
    1: {
      title: "General & Laparoscopic Surgery",
      subtitle: "Precise, Safe, and Patient-Centered Surgical Care",
      description: "The Department of General & Laparoscopic Surgery at Om Gagangiri Hospital provides a complete range of surgical services — from routine procedures to complex interventions. Led by experienced surgeons, we emphasize minimally invasive techniques that ensure precision, safety, and faster recovery.",
      expertise: [
        "Laparoscopic gallbladder, appendix, and hernia surgeries",
        "Gastrointestinal and abdominal procedures",
        "Abscess drainage and wound management",
        "Piles, fissure, and fistula surgeries",
        "Biopsy and minor surgical interventions"
      ],
      approach: "We follow a multidisciplinary approach, combining modern surgical technology with compassionate pre- and post-operative care. Each surgery is preceded by detailed diagnostics and followed by close monitoring, ensuring a seamless healing journey.",
      hours: {
        opd: "11:00 am – 1:00 pm | 7:00 pm – 9:00 pm",
        ipdIcuOt: "24×7",
        emergency: "Available round the clock"
      }
    },
    2: {
      title: "Gynaecology & Obstetrics",
      subtitle: "Comprehensive Women's Health — From Adolescence to Motherhood",
      description: "Our Gynaecology & Obstetrics Department is dedicated to women's health and wellness at every stage of life. From preconception counselling to advanced obstetric care, we ensure safe motherhood, healthy deliveries, and compassionate support.",
      expertise: [
        "Antenatal and postnatal care",
        "High-risk pregnancy management",
        "Family planning and fertility evaluation",
        "Menstrual disorder management",
        "Gynaecological surgeries and preventive screenings"
      ],
      approach: "Our team of experienced gynaecologists offers personalized attention, privacy, and trust. We combine medical expertise with emotional care, making every step of a woman's health journey safe and reassuring.",
      hours: {
        opd: "11:00 am – 1:00 pm | 7:00 pm – 9:00 pm",
        emergency: "Emergency Maternity Support: 24×7"
      }
    },
    3: {
      title: "Paediatrics",
      subtitle: "Nurturing Health, One Child at a Time",
      description: "The Paediatrics Department at OmGagangiri Hospital and Occupational Services provides specialized care for newborns, infants, and children. Our paediatricians focus on preventive health, early diagnosis, and holistic treatment in a child-friendly environment.",
      expertise: [
        "Newborn and neonatal care",
        "Immunizations and growth tracking",
        "Management of paediatric infections and allergies",
        "Developmental assessments and nutritional guidance"
      ],
      approach: "We work closely with parents to ensure every child receives the right care at the right time. Our emphasis is on preventive health and emotional well-being — helping children grow strong, confident, and healthy.",
      hours: {
        opd: "11:00 am – 1:00 pm | 7:00 pm – 9:00 pm",
        emergency: "Emergency Paediatric Support: 24×7"
      }
    },
    4: {
      title: "General Medicine",
      subtitle: "Comprehensive Medical Care for Everyday Health",
      description: "The Department of General Medicine forms the backbone of OmGagangiri Hospital and Occupational Services, offering preventive, diagnostic, and therapeutic services for a wide range of health conditions. Our physicians manage everything from acute illnesses to long-term chronic diseases.",
      expertise: [
        "Lifestyle and metabolic disorders (diabetes, hypertension, thyroid)",
        "Infectious diseases and fevers",
        "Allergic and respiratory conditions",
        "Preventive health and wellness screening"
      ],
      approach: "We believe in continuous care, treating the illness while focusing on lifestyle modification and preventive health. Every patient receives a tailored plan for recovery and sustained wellness.",
      hours: {
        opd: "11:00 am – 1:00 pm | 7:00 pm – 9:00 pm",
        emergency: "Emergency Medical Care: 24×7"
      }
    },
    5: {
      title: "Orthopaedics",
      subtitle: "Restoring Mobility, Relieving Pain",
      description: "Our Orthopaedics Department offers advanced care for bones, joints, and muscles. Whether it's a fracture, ligament tear, or chronic joint pain, we provide accurate diagnosis, surgical expertise, and personalized rehabilitation.",
      expertise: [
        "Fracture and trauma management",
        "Joint replacement and arthroscopic surgeries",
        "Sports injury treatment",
        "Spine and orthopaedic rehabilitation"
      ],
      approach: "We focus on restoring function and movement through comprehensive treatment and physiotherapy support. Every plan is designed to ensure mobility, independence, and confidence.",
      hours: {
        opd: "11:00 am – 1:00 pm | 7:00 pm – 9:00 pm",
        emergency: "Emergency Ortho Support: 24×7"
      }
    },
    6: {
      title: "Urology",
      subtitle: "Advanced Urological Care with Precision",
      description: "Our Urology Department offers comprehensive treatment for urinary tract and male reproductive health disorders. With modern diagnostic tools and minimally invasive procedures, we ensure both effectiveness and patient comfort.",
      expertise: [
        "Kidney stones and prostate care",
        "Urinary tract infections",
        "Male fertility evaluation",
        "Endoscopic and laser procedures"
      ],
      approach: "We emphasize early diagnosis, discreet consultations, and customized treatment plans. Patient comfort and privacy are our top priorities throughout care.",
      hours: {
        opd: "11:00 am – 1:00 pm | 7:00 pm – 9:00 pm",
        emergency: "Emergency Urology Support: 24×7"
      }
    },
    7: {
      title: "Plastic & Reconstructive Surgery",
      subtitle: "Restoring Form, Function, and Confidence",
      description: "The Department of Plastic & Reconstructive Surgery at OmGagangiri Hospital and Occupational Services combines art with science, offering procedures that heal, restore, and enhance. We handle trauma cases, post-surgical reconstructions, and aesthetic improvements with utmost precision.",
      expertise: [
        "Burn and post-trauma reconstruction",
        "Scar revision and wound management",
        "Cosmetic enhancements and corrective procedures"
      ],
      approach: "Our surgeons provide compassionate and confidential consultations, ensuring results that improve both appearance and quality of life.",
      hours: {
        otIcu: "24×7",
        opd: "By Appointment"
      }
    },
    8: {
      title: "Nephrology",
      subtitle: "Comprehensive Kidney Care",
      description: "Our Nephrology department focuses on early detection, treatment, and management of kidney-related disorders. With a preventive and patient-centric approach, we aim to enhance renal health and prevent complications.",
      expertise: [
        "Chronic kidney disease management",
        "Hypertension and electrolyte balance",
        "Preventive kidney health programs"
      ],
      approach: "We focus on early intervention and comprehensive management to preserve kidney function and improve quality of life through personalized treatment plans.",
      hours: {
        opd: "11:00 am – 1:00 pm | 7:00 pm – 9:00 pm",
        emergency: "Emergency Nephrology Support: 24×7"
      }
    },
    9: {
      title: "Psychiatry",
      subtitle: "Compassionate Mental Health Support",
      description: "Our Psychiatry Department is a space of trust and understanding, helping patients navigate emotional challenges, stress, and psychological conditions with professional care.",
      expertise: [
        "Counselling and psychotherapy",
        "Stress and anxiety management",
        "Depression and mood disorder treatment"
      ],
      approach: "We maintain complete confidentiality and empathy. Each treatment plan blends therapy, medication, and mindfulness-based interventions to promote long-term well-being.",
      hours: {
        opd: "11:00 am – 1:00 pm | 7:00 pm – 9:00 pm"
      }
    },
    10: {
      title: "Pathology",
      subtitle: "Precision in Every Diagnosis",
      description: "Lab Yatharth, the dedicated pathology division of OmGagangiri Hospital and Occupational Services, offers reliable, fast, and accurate diagnostic testing. With advanced lab technology and skilled technicians, we deliver dependable results that support all clinical departments.",
      expertise: [
        "Haematology, biochemistry, and microbiology",
        "Histopathology and cytology",
        "Pre-employment and corporate testing"
      ],
      approach: "We ensure accuracy and timeliness in every test, supporting clinical decisions with reliable diagnostic data and maintaining the highest quality standards.",
      hours: {
        lab: "9:00 am – 9:00 pm",
        emergency: "Emergency Lab Support: Available 24×7"
      }
    },
    11: {
      title: "Anaesthesiology",
      subtitle: "Ensuring Comfort and Safety During Every Procedure",
      description: "Our Anaesthesiology team is involved at every stage of surgical and diagnostic care, from pre-operative evaluation to post-anaesthesia recovery. Patient safety, comfort, and precision are at the heart of every procedure.",
      expertise: [
        "Pre-operative risk assessment",
        "General and regional anaesthesia",
        "Pain and sedation management",
        "Post-operative monitoring"
      ],
      approach: "We provide comprehensive anaesthesia care with continuous monitoring and personalized pain management to ensure patient safety and comfort throughout all procedures.",
      hours: {
        otIcu: "24×7"
      }
    }
  };

  const department = departmentDetails[id];

  if (!department) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Department Not Found</h1>
          <button
            onClick={() => navigate('/departments')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
          >
            Back to Departments
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <button
            onClick={() => navigate('/departments')}
            className="mb-6 text-blue-200 hover:text-white flex items-center"
          >
            ← Back to Departments
          </button>
          <h1 className="text-4xl font-bold mb-4">{department.title}</h1>
          <h2 className="text-2xl text-blue-100 mb-4">{department.subtitle}</h2>
          <p className="text-lg text-blue-100 max-w-4xl leading-relaxed">
            {department.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Core Expertise</h3>
              <ul className="space-y-3">
                {department.expertise.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Approach</h3>
              <p className="text-gray-700 leading-relaxed">{department.approach}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Operating Hours</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">OPD:</span>
                  <br />
                  <span className="text-gray-600">{department.hours.opd}</span>
                </div>
                {department.hours.ipdIcuOt && (
                  <div>
                    <span className="font-semibold text-gray-700">IPD/ICU/OT:</span>
                    <br />
                    <span className="text-gray-600">{department.hours.ipdIcuOt}</span>
                  </div>
                )}
                {department.hours.emergency && (
                  <div>
                    <span className="font-semibold text-gray-700">Emergency:</span>
                    <br />
                    <span className="text-gray-600">{department.hours.emergency}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Book an Appointment</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Ready to schedule your consultation? Contact us today.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg w-full font-semibold transition-colors duration-200">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetail;