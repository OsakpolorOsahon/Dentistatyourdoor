import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Service, Testimonial, GalleryItem } from "@shared/schema";
import TestimonialsSection from "@/components/testimonials/testimonials-section";
import SmileGallery from "@/components/gallery/smile-gallery";

export default function Home() {
  const { data: services = [] } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const { data: galleryItems = [] } = useQuery<GalleryItem[]>({
    queryKey: ["/api/gallery"],
  });

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-montserrat font-bold text-medical-blue leading-tight">
                  Premium Dental Care 
                  <span className="text-medical-teal block">Delivered to Your Doorstep</span>
                </h1>
                <p className="text-base lg:text-xl text-gray-600 leading-relaxed">
                  Skip the traffic, eliminate the stress. Our mobile dental clinic brings world-class dental care directly to your home or office in Lagos.
                </p>
              </div>
              
              {/* Key Benefits */}
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                  <i className="fas fa-home text-medical-teal text-sm"></i>
                  <span className="text-xs sm:text-sm font-medium">Home Visits</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                  <i className="fas fa-building text-medical-teal text-sm"></i>
                  <span className="text-xs sm:text-sm font-medium">Office Visits</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                  <i className="fas fa-video text-medical-teal text-sm"></i>
                  <span className="text-xs sm:text-sm font-medium">Virtual Consults</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/booking">
                  <Button className="w-full sm:w-auto bg-medical-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-montserrat font-semibold text-base sm:text-lg hover:bg-opacity-90 transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Book Appointment
                  </Button>
                </Link>
                <Link href="/services/virtual-consultations">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-medical-teal text-medical-teal px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-montserrat font-semibold text-base sm:text-lg hover:bg-medical-teal hover:text-white transition-all duration-200">
                    Virtual Consultation
                  </Button>
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-medical-blue">7+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-medical-blue">1000+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-medical-blue">5★</div>
                  <div className="text-sm text-gray-600">Patient Rating</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <img 
                src="https://pixabay.com/get/g6a2980461caf3ffb50bb12b957c25980fbf4c66fa7753a4239cc7a7cb2cbf1004b9fcadbea3c95c142ecd84e0f6544e11539e9fdfaa2b81f1e7b37d08d607d01_1280.jpg" 
                alt="Mobile dental clinic van providing doorstep dental care" 
                className="rounded-2xl shadow-2xl w-full" 
              />
              
              {/* Floating Service Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-medical-teal rounded-lg flex items-center justify-center">
                    <i className="fas fa-tooth text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-medical-blue">Emergency Care</div>
                    <div className="text-sm text-gray-600">Available 24/7</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4 hidden lg:block">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-medical-blue rounded-lg flex items-center justify-center">
                    <i className="fas fa-shield-alt text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold text-medical-blue">Licensed</div>
                    <div className="text-sm text-gray-600">BDS Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Preview */}
      <section className="py-16 lg:py-24 bg-medical-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-white mb-4">
              Book Your Appointment in 3 Easy Steps
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Our simple booking process gets you the dental care you need, when and where you need it.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-2">Choose Service</h3>
              <p className="text-blue-100">Select from our comprehensive dental services including cleanings, cosmetic work, and emergency care.</p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-2">Pick Location</h3>
              <p className="text-blue-100">Choose between home visit, office visit, or our Lekki/Festac clinic locations.</p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-white mb-2">Confirm & Pay</h3>
              <p className="text-blue-100">Select your preferred date and time, then securely complete your booking with payment.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link href="/booking">
              <Button className="bg-white text-medical-blue px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg">
                Start Booking Process
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-medical-blue mb-4">
              Comprehensive Dental Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From routine cleanings to advanced cosmetic procedures, we bring the full spectrum of dental care directly to you.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-medical-blue to-medical-teal flex items-center justify-center">
                  <i className={`text-white text-6xl ${getServiceIcon(service.category)}`}></i>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <i className={`text-medical-teal text-xl mr-3 ${getServiceIcon(service.category)}`}></i>
                    <h3 className="text-xl font-montserrat font-semibold text-medical-blue">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
                  <ul className="text-sm text-gray-500 space-y-1 mb-4">
                    {service.features?.slice(0, 3).map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="ghost" className="text-medical-blue font-semibold hover:text-medical-teal transition-colors duration-200 p-0">
                      Learn More <i className="fas fa-arrow-right ml-1"></i>
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-medical-blue text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-all duration-200">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Smile Gallery Preview */}
      <SmileGallery items={galleryItems.slice(0, 3)} isPreview />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Special Offers Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-medical-teal to-medical-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-white mb-4">
              Special Offers & Packages
            </h2>
            <p className="text-lg text-blue-100">
              Limited-time deals and package discounts for our premium dental services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Offer 1 */}
            <div className="bg-white rounded-xl p-8 text-center relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-red-500 text-white px-4 py-1 text-sm font-bold transform rotate-12 translate-x-3 -translate-y-1">
                HOT DEAL
              </div>
              <i className="fas fa-heart text-medical-teal text-4xl mb-4"></i>
              <h3 className="text-xl font-montserrat font-bold text-medical-blue mb-2">Bridal Package</h3>
              <p className="text-gray-600 mb-4">Perfect smile for your special day</p>
              <div className="text-3xl font-bold text-medical-blue mb-2">₦150,000</div>
              <div className="text-sm text-gray-500 line-through mb-4">₦200,000</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Professional teeth whitening</li>
                <li>• Dental cleaning & polishing</li>
                <li>• Pre-wedding consultation</li>
                <li>• Touch-up session included</li>
              </ul>
              <Link href="/booking">
                <Button className="bg-medical-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 w-full">
                  Book Bridal Package
                </Button>
              </Link>
            </div>
            
            {/* Offer 2 */}
            <div className="bg-white rounded-xl p-8 text-center relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 text-sm font-bold transform rotate-12 translate-x-3 -translate-y-1">
                FAMILY
              </div>
              <i className="fas fa-users text-medical-teal text-4xl mb-4"></i>
              <h3 className="text-xl font-montserrat font-bold text-medical-blue mb-2">Family Discount</h3>
              <p className="text-gray-600 mb-4">Book adult treatment, get child treatment free</p>
              <div className="text-3xl font-bold text-medical-blue mb-2">50% OFF</div>
              <div className="text-sm text-gray-500 mb-4">Child's first visit</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• Adult cleaning + child cleaning</li>
                <li>• Family dental health assessment</li>
                <li>• Home visit convenience</li>
                <li>• Flexible scheduling</li>
              </ul>
              <Link href="/booking">
                <Button className="bg-medical-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 w-full">
                  Book Family Package
                </Button>
              </Link>
            </div>
            
            {/* Offer 3 */}
            <div className="bg-white rounded-xl p-8 text-center relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-bold transform rotate-12 translate-x-3 -translate-y-1">
                CORPORATE
              </div>
              <i className="fas fa-building text-medical-teal text-4xl mb-4"></i>
              <h3 className="text-xl font-montserrat font-bold text-medical-blue mb-2">Corporate Wellness</h3>
              <p className="text-gray-600 mb-4">On-site dental care for your team</p>
              <div className="text-3xl font-bold text-medical-blue mb-2">₦25,000</div>
              <div className="text-sm text-gray-500 mb-4">Per employee</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• On-site office visits</li>
                <li>• Group checkup discounts</li>
                <li>• Employee wellness program</li>
                <li>• Flexible scheduling</li>
              </ul>
              <Link href="/contact">
                <Button className="bg-medical-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 w-full">
                  Get Corporate Quote
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-blue-100 mb-4">All packages include free consultation and personalized treatment plan</p>
            <Link href="/special-offers">
              <Button className="bg-white text-medical-blue px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-gray-50 transition-colors duration-200">
                View All Offers
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function getServiceIcon(category: string): string {
  switch (category) {
    case 'preventive': return 'fas fa-shield-alt';
    case 'cosmetic': return 'fas fa-star';
    case 'restorative': return 'fas fa-tools';
    case 'pediatric': return 'fas fa-heart';
    case 'orthodontic': return 'fas fa-align-center';
    case 'virtual': return 'fas fa-video';
    default: return 'fas fa-tooth';
  }
}
