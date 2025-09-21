import React from "react";
import { useInView } from "react-intersection-observer";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const testimonials = [
    {
      quote:
        "Geoffrey transformed our online presence completely. The 30% increase in organic traffic and 50% improvement in page load times exceeded our expectations. His technical expertise combined with business understanding makes him invaluable.",
      author: "Healthcare Industry Client",
      role: "Operations Manager",
      company: "Healthcare Sector",
      rating: 5,
    },
    {
      quote:
        "The QR-based asset tracking system Geoffrey implemented saved us thousands in equipment costs. His ability to understand our business needs and translate them into technical solutions is exceptional.",
      author: "Operations Manager",
      role: "IT Director",
      company: "Technology Sector",
      rating: 5,
    },
    {
      quote:
        "Working with Geoffrey was a game-changer for our development process. His mentorship improved our team's code quality by 30% and significantly reduced debugging time. Highly recommended!",
      author: "Development Team Lead",
      role: "Senior Developer",
      company: "Software Company",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary-50">
      <div ref={ref} className="space-y-16">
        {/* Section Header */}
        <div
          className={`text-center space-y-4 ${
            inView ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-secondary-900">
            What Clients Say About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              Working With Me
            </span>
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Real feedback from businesses that have experienced measurable
            improvements through our collaboration
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-full mx-auto"></div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${inView ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 p-8 h-full group hover:-translate-y-1">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-8 h-8 text-primary-600 opacity-20" />
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-warning-400 text-warning-400"
                      />
                    ))}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-secondary-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-secondary-100 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
                      <span className="text-primary-600 font-semibold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-secondary-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-secondary-600">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary-600 font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center ${
            inView ? "animate-fade-in delay-1000" : "opacity-0"
          }`}
        >
          <div className="bg-white rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help your business achieve similar results
              with proven strategies and innovative solutions.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-medium hover:shadow-strong"
            >
              Start Your Success Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
