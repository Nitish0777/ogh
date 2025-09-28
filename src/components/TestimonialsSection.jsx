import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Rashid Shah",
      title: "Expert doctors!",
      content: "I highly rely on them for various kinds of treatments",
      rating: 5
    },
    {
      name: "Priya Koul",
      title: "Amazing service!",
      content: "Their diverse range of department treat and cure numerous diseases",
      rating: 5
    },
    {
      name: "John Smith",
      title: "Professional care!",
      content: "The medical staff is incredibly professional and caring. They made my treatment experience comfortable.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      title: "Outstanding facility!",
      content: "Modern equipment and excellent doctors. I received the best possible care for my condition.",
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            We served over 1,00,000+ Patients
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Their trust is our greatest achievement. Here's what our patients and families have to say about their experience with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Current testimonial */}
            <div className="bg-white rounded-lg shadow-lg p-8 relative">
              <Quote className="w-12 h-12 text-red-200 absolute top-4 right-4" />
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {testimonials[currentTestimonial].title}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {testimonials[currentTestimonial].content}
                </p>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Next testimonial preview */}
            <div className="bg-white rounded-lg shadow-lg p-8 relative opacity-75">
              <Quote className="w-12 h-12 text-red-200 absolute top-4 right-4" />
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {testimonials[(currentTestimonial + 1) % testimonials.length].title}
                </h3>
                <p className="text-blue-600 font-medium mb-4">
                  {testimonials[(currentTestimonial + 1) % testimonials.length].name}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {testimonials[(currentTestimonial + 1) % testimonials.length].content}
                </p>
              </div>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-600 p-3 rounded-full shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;