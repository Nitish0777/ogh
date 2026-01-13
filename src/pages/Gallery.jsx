import React, { useState, useEffect } from 'react';
import { Award, Trophy, Image as ImageIcon, Video } from 'lucide-react';
import certifi1 from "../assets/certifi_1.jpeg";
import certifi2 from "../assets/certifi_2.jpeg";
import certifi3 from "../assets/certifi_3.jpeg";
import certifi4 from "../assets/certifi_4.jpeg";
import certifi5 from "../assets/certifi_5.jpeg";
import certifi6 from "../assets/certifi_6.jpeg";
import certifi7 from "../assets/certifi_7.jpeg";
import certifi8 from "../assets/certtficate.jpg";
import certifi9 from "../assets/certifi_9.jpeg";
import certifi10 from "../assets/certifi_10.jpeg";
import certifi11 from "../assets/certifi_11.jpeg";
import certifi12 from "../assets/certifi_12.jpeg";
import certifi13 from "../assets/certifi_13.jpeg";

const Gallery = () => {
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

  // Real certification images from CertificationsSection
  const certifications = [
    { id: 5, title: '', url: certifi5 },
    { id: 6, title: '', url: certifi6 },
    { id: 7, title: '', url: certifi7 },
    { id: 8, title: '', url: certifi8 },
    { id: 9, title: '', url: certifi9 },
    { id: 10, title: '', url: certifi10 },
    { id: 12, title: '', url: certifi12 },
    { id: 13, title: '', url: certifi13 },
  ];

  // Dummy awards images
  const awards = [
    { id: 1, title: 'Best Hospital Award 2025', url: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Best+Hospital+2025' },
    { id: 2, title: 'Healthcare Excellence Award', url: 'https://via.placeholder.com/400x300/d97706/ffffff?text=Excellence+Award' },
    { id: 3, title: 'Patient Care Award', url: 'https://via.placeholder.com/400x300/b45309/ffffff?text=Patient+Care+Award' },
    { id: 4, title: 'Community Service Award', url: 'https://via.placeholder.com/400x300/92400e/ffffff?text=Community+Service' },
    { id: 5, title: 'Medical Innovation Award', url: 'https://via.placeholder.com/400x300/f59e0b/ffffff?text=Innovation+Award' },
    { id: 6, title: 'Top Healthcare Provider 2024', url: 'https://via.placeholder.com/400x300/d97706/ffffff?text=Top+Provider+2024' },
  ];

  // Dummy images
  const images = [
    { id: 1, title: 'Hospital Exterior View', url: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Hospital+Exterior' },
    { id: 2, title: 'Modern Reception Area', url: 'https://via.placeholder.com/400x300/2563eb/ffffff?text=Reception+Area' },
    { id: 3, title: 'Advanced Medical Equipment', url: 'https://via.placeholder.com/400x300/1d4ed8/ffffff?text=Medical+Equipment' },
    { id: 4, title: 'Patient Care Facilities', url: 'https://via.placeholder.com/400x300/1e40af/ffffff?text=Patient+Care' },
    { id: 5, title: 'Surgery Theater', url: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=Surgery+Theater' },
    { id: 6, title: 'Diagnostic Laboratory', url: 'https://via.placeholder.com/400x300/2563eb/ffffff?text=Laboratory' },
    { id: 7, title: 'Consultation Rooms', url: 'https://via.placeholder.com/400x300/1d4ed8/ffffff?text=Consultation+Rooms' },
    { id: 8, title: 'Emergency Department', url: 'https://via.placeholder.com/400x300/1e40af/ffffff?text=Emergency+Dept' },
    { id: 9, title: 'ICU Facilities', url: 'https://via.placeholder.com/400x300/3b82f6/ffffff?text=ICU+Facilities' },
  ];

  // Dummy videos
  const videos = [
    { id: 1, title: 'Hospital Tour', url: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Hospital+Tour', isVideo: true },
    { id: 2, title: 'Patient Testimonials', url: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Patient+Testimonials', isVideo: true },
    { id: 3, title: 'Medical Facilities Overview', url: 'https://via.placeholder.com/400x300/6d28d9/ffffff?text=Facilities+Overview', isVideo: true },
    { id: 4, title: 'Doctor Interviews', url: 'https://via.placeholder.com/400x300/5b21b6/ffffff?text=Doctor+Interviews', isVideo: true },
    { id: 5, title: 'Health Awareness Campaign', url: 'https://via.placeholder.com/400x300/8b5cf6/ffffff?text=Health+Campaign', isVideo: true },
    { id: 6, title: 'Community Health Programs', url: 'https://via.placeholder.com/400x300/7c3aed/ffffff?text=Community+Programs', isVideo: true },
  ];



  const GallerySection = ({ title, images, icon: Icon, description }) => (
    <div className="mb-16">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center mb-4">
          <Icon className="w-10 h-10 text-emerald-600 mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">{title}</h2>
        </div>
        {description && (
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div 
            key={image.id} 
            className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white ${title === 'Certifications' ? 'cursor-pointer' : ''}`}
            onClick={title === 'Certifications' ? () => setSelectedCert(image) : undefined}
          >
            <div className="aspect-video overflow-hidden">
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            {image.isVideo && (
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                <Video className="w-3 h-3 mr-1" />
                Video
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-semibold text-lg">{image.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
            Explore our certifications, awards, images, and videos that showcase our commitment to excellence in healthcare
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Certifications Section */}
        <GallerySection 
          title="Certifications"
          images={certifications}
          icon={Award}
          description="Our official certifications and accreditations that validate our commitment to quality healthcare"
        />

        {/* Awards Section */}
        <GallerySection 
          title="Awards"
          images={awards}
          icon={Trophy}
          description="Recognition and awards honoring our excellence in healthcare services"
        />

        {/* Videos Section */}
        <GallerySection 
          title="Videos"
          images={videos}
          icon={Video}
          description="Watch our hospital tours, patient stories, and community health initiatives"
        />

        {/* Images Section */}
        <GallerySection 
          title="Images"
          images={images}
          icon={ImageIcon}
          description="A visual journey through our state-of-the-art facilities and healthcare services"
        />
      </div>

      {/* Call to Action */}
      <div className="bg-emerald-50 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Experience World-Class Healthcare
          </h2>
          <p className="text-gray-600 mb-6">
            Visit us today and experience the difference in quality care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/book-appointment" 
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Book Appointment
            </a>
            <a 
              href="/contact" 
              className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-emerald-600"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Modal for enlarged certification view */}
      {selectedCert && (
        <div 
          className="fixed inset-0 backdrop-blur-md bg-opacity-30 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-red-600 text-2xl font-bold shadow-lg"
            >
              &times;
            </button>
            <img
              src={selectedCert.url}
              alt={selectedCert.title}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
