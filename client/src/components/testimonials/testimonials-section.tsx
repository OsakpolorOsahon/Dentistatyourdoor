import { Testimonial } from "@shared/schema";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (testimonials.length === 0) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-medical-blue mb-4">
            What Our Patients Say
          </h2>
          <p className="text-gray-600 mb-8">
            We're working on gathering more patient testimonials. Check back soon!
          </p>
          <Link href="/contact">
            <Button className="bg-medical-blue text-white">
              Share Your Experience
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-medical-blue mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600">
            Real stories from real patients who chose our mobile dental care
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-8 relative">
              {/* Star Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas fa-star ${
                        i < Math.floor(parseFloat(testimonial.rating || "5")) 
                          ? 'text-yellow-400' 
                          : 'text-gray-300'
                      }`}
                    ></i>
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {testimonial.rating}/5
                </span>
              </div>
              
              {/* Quote */}
              <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              {/* Patient Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-medical-blue rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-medical-blue">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  {testimonial.service && (
                    <div className="text-xs text-medical-teal font-medium">
                      {testimonial.service}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-gray-200">
                <i className="fas fa-quote-right text-2xl"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Show more testimonials if available */}
        {testimonials.length > 3 && (
          <div className="text-center mt-12">
            <div className="grid lg:grid-cols-3 gap-8 mt-8">
              {testimonials.slice(3, 6).map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 rounded-xl p-8 relative">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`fas fa-star ${
                            i < Math.floor(parseFloat(testimonial.rating || "5")) 
                              ? 'text-yellow-400' 
                              : 'text-gray-300'
                          }`}
                        ></i>
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {testimonial.rating}/5
                    </span>
                  </div>
                  
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-medical-teal rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-medical-blue">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                      {testimonial.service && (
                        <div className="text-xs text-medical-teal font-medium">
                          {testimonial.service}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 text-gray-200">
                    <i className="fas fa-quote-right text-2xl"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-xl font-montserrat font-semibold text-medical-blue mb-4">
            Ready to Join Our Happy Patients?
          </h3>
          <p className="text-gray-600 mb-6">
            Experience the same quality care and convenience that our patients love.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button className="bg-medical-blue text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-colors duration-200">
                Book Your Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-medical-blue text-medical-blue px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-medical-blue hover:text-white transition-colors duration-200">
                Get Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
