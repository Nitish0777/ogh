import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Users, Heart } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Rashid Shah",
      title: "Expert doctors!",
      content: "I highly rely on them for various kinds of treatments. The level of expertise and care I received was exceptional. Every doctor I consulted was knowledgeable and took time to explain my condition thoroughly.",
      rating: 5,
      location: "Mumbai",
      avatar: "RS",
      bgColor: "from-blue-500 to-purple-600"
    },
    {
      name: "Priya Koul",
      title: "Amazing service!",
      content: "Their diverse range of departments treat and cure numerous diseases. The facility is well-equipped with modern technology and the staff is incredibly supportive throughout the treatment process.",
      rating: 5,
      location: "Delhi",
      avatar: "PK",
      bgColor: "from-green-500 to-teal-600"
    },
    {
      name: "John Smith",
      title: "Professional care!",
      content: "The medical staff is incredibly professional and caring. They made my treatment experience comfortable and stress-free. I felt confident in their hands from day one.",
      rating: 5,
      location: "Bangalore",
      avatar: "JS",
      bgColor: "from-orange-500 to-red-600"
    },
    {
      name: "Sarah Johnson",
      title: "Outstanding facility!",
      content: "Modern equipment and excellent doctors. I received the best possible care for my condition. The hospital environment is clean, modern, and very welcoming for patients and families.",
      rating: 5,
      location: "Chennai",
      avatar: "SJ",
      bgColor: "from-pink-500 to-rose-600"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change testimonial every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-50 py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-600 to-transparent rounded-full transform -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-green-600 to-transparent rounded-full transform translate-x-40 translate-y-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-green-600 to-green-600 text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide">
              Patient Stories
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            We served over{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-600">
              1,00,000+
            </span>{' '}
            Patients
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Their trust is our greatest achievement. Here's what our patients and families have to say about their 
            life-changing experience with our healthcare services.
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-green-600 mx-auto mt-8 rounded-full"></div>
          
          {/* Stats */}
          <div className="flex justify-center items-center space-x-12 mt-12">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-full mb-2 mx-auto">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">1L+</div>
              <div className="text-sm text-gray-600">Happy Patients</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-full mb-2 mx-auto">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4.9</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-full mb-2 mx-auto">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-5xl mx-auto mb-16">
          <div className="bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-600 to-transparent rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-600 to-transparent rounded-full"></div>
            </div>

            {/* Quote icon */}
            <div className="absolute top-8 right-8">
              <Quote className="w-16 h-16 text-green-200" />
            </div>

            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-8 h-8 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  "{testimonials[currentTestimonial].title}"
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                  {testimonials[currentTestimonial].content}
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center justify-center space-x-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${testimonials[currentTestimonial].bgColor} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                  {testimonials[currentTestimonial].avatar}
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-bold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-green-600 font-medium">
                    Patient from {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green-50 text-green-600 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-green-50 text-green-600 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Previews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => {
            if (index === currentTestimonial) return null;
            return (
              <div
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                  index === (currentTestimonial + 1) % testimonials.length ? 'ring-2 ring-green-200' : ''
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-10 h-10 bg-gradient-to-r ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {testimonial.content}
                </p>
                <div className="flex space-x-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`transition-all duration-300 ${
                index === currentTestimonial
                  ? 'w-12 h-3 bg-gradient-to-r from-green-600 to-green-600 rounded-full'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;