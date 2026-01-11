import React, { useState, useEffect } from "react";
import "./CertificationsSection.css";
import certifi1 from "../assets/certifi_1.jpeg";
import certifi2 from "../assets/certifi_2.jpeg";
import certifi3 from "../assets/certifi_3.jpeg";
import certifi4 from "../assets/certifi_4.jpeg";
import certifi5 from "../assets/certifi_5.jpeg";
import certifi6 from "../assets/certifi_6.jpeg";
import certifi7 from "../assets/certifi_7.jpeg";
import certifi8 from "../assets/certifi_8.jpeg";
import certifi9 from "../assets/certifi_9.jpeg";
import certifi10 from "../assets/certifi_10.jpeg";
import certifi11 from "../assets/certifi_11.jpeg";
import certifi12 from "../assets/certifi_12.jpeg";
import certifi13 from "../assets/certifi_13.jpeg";

function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert]);

  const certifications = [
    {
      id: 1,
      title: "Certification 1",
      image: certifi1,
    },
    {
      id: 2,
      title: "Certification 2",
      image: certifi2,
    },
    {
      id: 3,
      title: "Certification 3",
      image: certifi3,
    },
    {
      id: 4,
      title: "Certification 4",
      image: certifi4,
    },
    {
      id: 5,
      title: "Certification 5",
      image: certifi5,
    },
    {
      id: 6,
      title: "Certification 6",
      image: certifi6,
    },
    {
      id: 7,
      title: "Certification 7",
      image: certifi7,
    },
    {
      id: 8,
      title: "Certification 8",
      image: certifi8,
    },
    {
      id: 9,
      title: "Certification 9",
      image: certifi9,
    },
    {
      id: 10,
      title: "Certification 10",
      image: certifi10,
    },
    {
      id: 11,
      title: "Certification 11",
      image: certifi11,
    },
    {
      id: 12,
      title: "Certification 12",
      image: certifi12,
    },
    {
      id: 13,
      title: "Certification 13",
      image: certifi13,
    },
  ];

  return (
    <>
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
                className="min-w-max flex-shrink-0 p-5 bg-gray-50 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCert(cert)}
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
                className="min-w-max flex-shrink-0 p-5 bg-gray-50 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedCert(cert)}
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

    {/* Modal for enlarged certification view */}
    {selectedCert && (
      <div 
        className="fixed inset-0 backdrop-blur-md  bg-opacity-30 flex items-center justify-center z-50 p-4"
        onClick={() => setSelectedCert(null)}
      >
        <div 
          className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-red-600 text-2xl font-bold shadow-lg "
          >
            &times;
          </button>
          <img
            src={selectedCert.image}
            alt={selectedCert.title}
            className="max-w-full max-h-[80vh] object-contain mx-auto"
          />
          <h3 className="text-center text-xl font-semibold mt-4 text-gray-800">
            {selectedCert.title}
          </h3>
        </div>
      </div>
    )}
    </>
  );
}

export default CertificationsSection;
