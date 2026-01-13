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
import award1 from "../assets/award_1.mp4";
import award2 from "../assets/award_2.jpeg";
import award3 from "../assets/award_3.jpeg";
import award4 from "../assets/award_4.mp4";
import ogh1 from "../assets/ogh.jpg";
import ogh2 from "../assets/ogh_cm.jpg";
import ogh3 from "../assets/ogh_waiting.JPG";
import ogh4 from "../assets/ogh_intro.JPG";
import ogh5 from "../assets/ogh_cabin.JPG";
import ogh6 from "../assets/ogh_bloodcollection.JPG";

const Gallery = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (selectedCert || selectedVideo || selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCert, selectedVideo, selectedImage]);

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

  // Real awards images and videos
  const awards = [
    { id: 1, title: 'Healthcare Excellence Award', url: award2 },
    { id: 2, title: 'Medical Innovation Recognition', url: award3 },
    { id: 3, title: 'Award Ceremony Video', url: award1, isVideo: true },
    { id: 4, title: 'Recognition Event', url: award4, isVideo: true },
  ];

  // Real hospital images
  const images = [
    { id: 1, title: '', url: ogh1 },
    { id: 2, title: '', url: ogh2 },
    { id: 3, title: '', url: ogh3 },
    { id: 4, title: '', url: ogh4 },
    { id: 5, title: '', url: ogh5 },
    { id: 6, title: '', url: ogh6 },
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
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
        title === 'Videos' ? '' : 'lg:grid-cols-3'
      }`}>
        {images.map((image) => (
          <div 
            key={image.id} 
            className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white ${
              title === 'Certifications' || title === 'Videos' || title === 'Images' || image.isVideo ? 'cursor-pointer' : ''
            }`}
            onClick={
              title === 'Certifications' ? () => setSelectedCert(image) : 
              title === 'Videos' || image.isVideo ? () => setSelectedVideo(image) : 
              title === 'Images' ? () => setSelectedImage(image) :
              undefined
            }
          >
            <div className={`overflow-hidden ${
              title === 'Certifications' ? 'aspect-[3/4]' : 'aspect-video'
            }`}>
              <img 
                src={image.url} 
                alt={image.title}
                className={`w-full h-full group-hover:scale-110 transition-transform duration-500 ${
                  title === 'Certifications' ? 'object-contain bg-gray-50' : 'object-cover'
                }`}
              />
              {/* Video Play Button Overlay */}
              {(title === 'Videos' || image.isVideo) && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all duration-300">
                  <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="w-0 h-0 border-l-[16px] border-l-emerald-600 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              )}
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

      {/* Modal for video view */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-red-600 text-2xl font-bold shadow-lg z-10"
            >
              &times;
            </button>
            <video
              src={selectedVideo.url}
              controls
              autoPlay
              className="max-w-full max-h-[80vh] mx-auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Modal for enlarged image view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 backdrop-blur-md bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-red-500 text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-red-600 text-2xl font-bold shadow-lg"
            >
              &times;
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            <div className="text-center mt-4 px-4">
              <h3 className="text-xl font-semibold text-gray-800">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
