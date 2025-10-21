import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import emergencyImage from '../assets/emergency.jpeg';

const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      image: emergencyImage,
      title: 'Your Trusted Partner in Complete Healthcare',
      subtitle: 'At Om Gagangiri Hospital & Occupational Health, we combine expert care and advanced facilities to deliver reliable, affordable, and patient-focused healthcare.',
      cta: 'Book an Appointment'
    },
    {
      image: emergencyImage,
      title: 'Advanced Medical Technology',
      subtitle: 'State-of-the-art equipment and cutting-edge medical technology for precise diagnosis and treatment.',
      cta: 'Our Services'
    },
    {
      image: emergencyImage,
      title: 'Expert Healthcare Professionals',
      subtitle: 'Our team of experienced doctors and specialists are dedicated to providing the highest quality care.',
      cta: 'Meet Our Doctors'
    },
    {
      image: emergencyImage,
      title: '24/7 Emergency Services',
      subtitle: 'Round-the-clock emergency care with rapid response times and comprehensive medical support.',
      cta: 'Emergency Contact'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-gray-900">
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-16">
                <div className="max-w-3xl text-white">
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-blue-600/90 rounded-full text-sm font-semibold mb-4">
                      Healthcare Excellence
                    </div>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                    {slide.title.split(' ').map((word, i) => (
                      <span key={i} className={i < 2 ? 'text-blue-400' : ''}>{word} </span>
                    ))}
                  </h1>
                  
                  <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-gray-200">
                    {slide.subtitle}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                      {slide.cta}
                    </button>
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modern Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 z-20 border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 z-20 border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'w-12 h-3 bg-blue-500' 
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-blue-400 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter & Controls */}
    </div>
  );
};

export default CarouselBanner;