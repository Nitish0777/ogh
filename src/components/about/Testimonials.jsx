import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      title: "Good Support!",
      message: "I highly rely on them for various kinds of treatments.",
      author: "Rishab Shah",
      rating: 5
    },
    {
      title: "Amazing Service!",
      message: "Their diverse range of departments treat and cure numerous diseases.",
      author: "Priya Vora",
      rating: 5
    },
    {
      title: "Expert Doctors!",
      message: "They have the best and most experienced doctors. Highly recommend!",
      author: "Neerav Singh",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">What They Say About Us</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Quote className="w-6 h-6 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800">{testimonial.title}</h3>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.message}"
              </p>
              
              <div className="border-t pt-4">
                <p className="text-gray-800 font-medium">— {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
