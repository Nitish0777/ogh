import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import carouselImage from '../assets/emergency.jpeg'

const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: carouselImage,
      title: 'Your Trusted Partner in Complete Healthcare',
      subtitle: 'At Om Gagangiri Hospital & Occupational Health, we combine expert care and advanced facilities to deliver reliable, affordable, and patient-focused healthcare.'
    },
    {
      image: carouselImage,
      title: 'Advanced Medical Technology',
      subtitle: 'State-of-the-art equipment and cutting-edge medical technology for precise diagnosis and treatment.'
    },
    {
      image: carouselImage,
      title: 'Expert Healthcare Professionals',
      subtitle: 'Our team of experienced doctors and specialists are dedicated to providing the highest quality care.'
    },
    {
      image: carouselImage,
      title: '24/7 Emergency Services',
      subtitle: 'Round-the-clock emergency care with rapid response times and comprehensive medical support.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[800px] overflow-hidden">
      {/* Carousel slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="h-full bg-cover bg-center relative"
              style={{
                backgroundImage: slide.image,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
                  <div className="max-w-2xl">
                    <div className="mb-9">
                      <span className="text-red-400 text-sm font-medium tracking-wider uppercase">
                        Total Health Care Solution
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 mb-9 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      BOOK AN APPOINTMENT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselBanner;