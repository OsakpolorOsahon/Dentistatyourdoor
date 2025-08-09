import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold text-medical-blue mb-4">
              About Dentist At Your Door
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Pioneering mobile dental care in Nigeria since 2017, making quality dental care accessible to everyone in Lagos.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* About Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-medical-blue mb-4">
                  Meet Dr. Yemisi Akintonwa
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Founder of Nigeria's first mobile dental clinic, Dr. Yemisi has been revolutionizing dental care accessibility since 2017. With her BDS certification and passion for patient-centered care, she brings premium dental services directly to your doorstep.
                </p>
              </div>
              
              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-medical-blue">7+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-medical-blue">1000+</div>
                  <div className="text-sm text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-medical-blue">2</div>
                  <div className="text-sm text-gray-600">Clinic Locations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-medical-blue">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Care</div>
                </div>
              </div>
              
              {/* Achievements */}
              <div className="space-y-4">
                <h3 className="text-xl font-montserrat font-semibold text-medical-blue">Recognition & Awards</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-award text-medical-teal"></i>
                    <span className="text-gray-600">Featured in BusinessDay Nigeria</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-award text-medical-teal"></i>
                    <span className="text-gray-600">Tony Elumelu Foundation Entrepreneur</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-award text-medical-teal"></i>
                    <span className="text-gray-600">BellaNaija Healthcare Innovation Feature</span>
                  </div>
                </div>
              </div>
              
              {/* Mission Statement */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-montserrat font-semibold text-medical-blue mb-2">Our Mission</h3>
                <p className="text-gray-600 italic">
                  "To make quality dental care accessible to everyone in Lagos by bringing professional treatment directly to our patients, eliminating barriers like traffic, time constraints, and dental anxiety."
                </p>
              </div>
            </div>
            
            {/* About Image */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=700" 
                alt="Dr. Yemisi Akintonwa professional portrait in dental clinic" 
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
                decoding="async"
                data-testid="img-doctor-portrait" 
              />
              
              {/* Floating Credentials */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <i className="fas fa-certificate text-medical-blue text-2xl mb-2"></i>
                  <div className="font-semibold text-medical-blue">BDS Certified</div>
                  <div className="text-sm text-gray-600">Licensed Dentist</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-medical-blue text-white rounded-xl shadow-lg p-4">
                <div className="text-center">
                  <i className="fas fa-handshake text-white text-2xl mb-2"></i>
                  <div className="font-semibold">Founded 2017</div>
                  <div className="text-sm text-blue-100">Innovation Leader</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-medical-blue mb-4">
              Our Story
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-montserrat font-semibold text-medical-blue mb-4">The Beginning (2017)</h3>
              <p className="text-gray-600 leading-relaxed">
                Dr. Yemisi Akintonwa recognized a critical gap in Nigeria's healthcare system. Many patients were missing crucial dental appointments due to Lagos traffic, work commitments, or dental anxiety. This insight sparked the creation of Nigeria's first mobile dental clinic.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-montserrat font-semibold text-medical-blue mb-4">Innovation & Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Starting with home visits, we expanded to include office visits for corporate wellness programs and established permanent clinics in Lekki and Festac. Our "Tell-Show-Do" approach has made dental care accessible to families, busy professionals, and elderly patients across Lagos.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-montserrat font-semibold text-medical-blue mb-4">Recognition & Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Our innovative approach has been featured in BusinessDay Nigeria and BellaNaija. As a Tony Elumelu Foundation entrepreneur, Dr. Yemisi continues to lead the transformation of healthcare delivery in Nigeria, serving over 1000 happy patients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-medical-blue mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in warm, professional, and reassuring dental care that eliminates clinical coldness and puts patients first.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-heart text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-medical-blue mb-2">Patient-Centered Care</h3>
              <p className="text-gray-600">Every treatment plan is customized to meet individual patient needs, preferences, and comfort levels.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-home text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-medical-blue mb-2">Convenience First</h3>
              <p className="text-gray-600">We bring professional dental care to your preferred location, eliminating travel stress and time constraints.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-award text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-medical-blue mb-2">Excellence Standards</h3>
              <p className="text-gray-600">We maintain the highest standards of professional care using modern equipment and proven techniques.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 lg:py-24 bg-medical-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-white mb-4">
              We Serve All of Lagos
            </h2>
            <p className="text-lg text-blue-100">
              Our mobile dental clinic and fixed locations serve patients across Lagos Island and Mainland
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="font-montserrat font-semibold text-white mb-2">Lekki</h3>
              <p className="text-blue-100 text-sm">Phase 1, Ajah, Sangotedo</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="font-montserrat font-semibold text-white mb-2">Victoria Island</h3>
              <p className="text-blue-100 text-sm">VI, Ikoyi, Lagos Island</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="font-montserrat font-semibold text-white mb-2">Festac</h3>
              <p className="text-blue-100 text-sm">Amuwo-Odofin, Satellite</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-medical-teal rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-car text-white text-2xl"></i>
              </div>
              <h3 className="font-montserrat font-semibold text-white mb-2">Mobile Service</h3>
              <p className="text-blue-100 text-sm">Anywhere in Lagos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-medical-blue mb-4">
            Experience the Difference
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have chosen convenient, professional dental care at their doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button className="bg-medical-blue text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200">
                Book Your Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-medical-blue text-medical-blue px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-medical-blue hover:text-white transition-colors duration-200">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
