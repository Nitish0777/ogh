import React from "react";
import "./CertificationsSection.css";

function CertificationsSection() {
  const certifications = [
    {
      id: 1,
      title: "ISO 9001:2015",
      image: "https://via.placeholder.com/200x250?text=ISO+9001",
    },
    {
      id: 2,
      title: "Joint Commission",
      image: "https://via.placeholder.com/200x250?text=Joint+Commission",
    },
    {
      id: 3,
      title: "NABH Accreditation",
      image: "https://via.placeholder.com/200x250?text=NABH",
    },
    {
      id: 4,
      title: "AABB Certified",
      image: "https://via.placeholder.com/200x250?text=AABB",
    },
    {
      id: 5,
      title: "CAP Accredited",
      image: "https://via.placeholder.com/200x250?text=CAP",
    },
    {
      id: 6,
      title: "ISO 27001:2013",
      image: "https://via.placeholder.com/200x250?text=ISO+27001",
    },
  ];

  return (
    <section className="py-16 px-5 bg-gradient-to-r from-green-100 to-emerald-100">
      <div className="w-full max-w-full mx-auto px-0">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Our Certifications
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12">
          Accredited and Recognized Globally
        </p>

        <div className="overflow-hidden bg-white rounded-lg shadow-lg p-5 mx-5">
          <div className="flex gap-6 animate-infinite-scroll">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="min-w-max flex-shrink-0 p-5 bg-gray-50 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-48 h-56 object-cover rounded-md mb-4"
                />
                <h3 className="text-center text-gray-800 font-semibold">
                  {cert.title}
                </h3>
              </div>
            ))}
            {certifications.map((cert) => (
              <div
                key={`${cert.id}-duplicate`}
                className="min-w-max flex-shrink-0 p-5 bg-gray-50 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-48 h-56 object-cover rounded-md mb-4"
                />
                <h3 className="text-center text-gray-800 font-semibold">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificationsSection;
