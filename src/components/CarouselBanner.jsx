import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import healthcare from '../assets/Healthcare.png';
import pathalogy from '../assets/pathalogy.png';
import drbanner from '../assets/doctorbanner.png';
import emergency from '../assets/emergecy.png'; 
import ulwebanner from '../assets/ulwebanner.png';

const CarouselBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const slides = [
    {
      image: healthcare,
      title: 'Your Trusted Partner in Complete Healthcare',
      subtitle: 'At Om Gagangiri Hospital & Occupational Health Services, we combine expert care and advanced facilities to deliver reliable, affordable, and patient-focused healthcare.',
      cta: 'Learn More',
      link: '/about'
    },
    {
      image: pathalogy,
      title: 'Advanced Medical Technology',
      subtitle: 'State-of-the-art equipment and cutting-edge medical technology for precise diagnosis and treatment.',
      cta: 'Our Services',
      link: '/services'
    },
    {
      image: drbanner,
      title: 'Expert Healthcare Professionals',
      subtitle: 'Our team of experienced doctors and specialists are dedicated to providing the highest quality care.',
      cta: 'Meet Our Doctors',
      link: '/doctors'
    },
    {
      image: emergency,
      title: '24/7 - 365 days Emergency Services',
      subtitle: 'Round-the-clock emergency care with rapid response times and comprehensive medical support.',
      cta: 'Emergency Contact',
      link: '/emergency'
    },
    {
      image: ulwebanner,
      title: 'Comprehensive Health Services in Ulwe',
      subtitle: 'Delivering precision, care, and reliability, our Ulwe branch brings Om Gagangiri Hospital & Occupational Health Services\' recognized medical standards to the community, ensuring accessible and expert healthcare every day.',
      cta: 'Know More',
      link: '/services/ulwe-centre'
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

  const handleNavigation = (link) => {
    if (link.startsWith('#')) {
      // Scroll to section
      const element = document.getElementById(link.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to page
      navigate(link);
    }
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
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
            
            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
                <div className="max-w-3xl">
                  <div className="mb-4 sm:mb-6">
                    <div className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-green-600/90 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4 text-white shadow-lg">
                      Healthcare Excellence
                    </div>
                  </div>
                  
                  <div className="mb-6 bg-black/30 backdrop-blur-sm rounded-lg p-5 inline-block max-w-full">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-3">
                      {slide.title.split(' ').map((word, i) => (
                        <span key={i} className={i < 2 ? 'text-green-400' : ''}>{word} </span>
                      ))}
                    </h1>
+
                    <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-white drop-shadow-xl">
                      {slide.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <button 
                      onClick={() => handleNavigation(slide.link)}
                      className="w-full sm:w-1/2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 shadow-xl backdrop-blur-sm"
                    >
                      {slide.cta}
                    </button>
                    <button 
                      onClick={() => handleNavigation('/book-appointment')}
                      className="w-full sm:w-1/2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-xl backdrop-blur-sm"
                    >
                      Book an Appointment
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
        className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 sm:p-4 rounded-full transition-all duration-300 z-20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 sm:p-4 rounded-full transition-all duration-300 z-20 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <ChevronRight size={20} className="sm:w-6 sm:h-6" />
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative overflow-hidden rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${
              index === currentSlide 
                ? 'w-8 sm:w-12 h-2 sm:h-3 bg-green-500' 
                : 'w-2 sm:w-3 h-2 sm:h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === currentSlide && (
              <div className="absolute inset-0 bg-green-400 rounded-full animate-pulse" />
            )}
          </button>
        ))}
      </div>

      {/* Slide Counter & Controls */}
    </div>
  );
};

export default CarouselBanner;