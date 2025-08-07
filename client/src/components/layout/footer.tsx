import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-medical-blue text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-montserrat font-bold">
              Dentist<span className="text-medical-teal">@</span>YourDoor
            </h3>
            <p className="text-blue-100 text-sm">
              Nigeria's premier mobile dental clinic, bringing world-class dental care directly to your doorstep since 2017.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/dentistatyourdoor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-medical-teal rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors duration-200"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-medical-teal rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors duration-200"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a 
                href="https://wa.me/2348029093223" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-medical-teal rounded-full flex items-center justify-center hover:bg-opacity-80 transition-colors duration-200"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><Link href="/services/preventive-care"><span className="hover:text-white transition-colors duration-200 cursor-pointer">Preventive Care</span></Link></li>
              <li><Link href="/services/cosmetic-dentistry"><span className="hover:text-white transition-colors duration-200 cursor-pointer">Cosmetic Dentistry</span></Link></li>
              <li><Link href="/services/restorative-dentistry"><span className="hover:text-white transition-colors duration-200 cursor-pointer">Restorative Dentistry</span></Link></li>
              <li><Link href="/services/pediatric-dentistry"><span className="hover:text-white transition-colors duration-200 cursor-pointer">Pediatric Dentistry</span></Link></li>
              <li><Link href="/services/virtual-consultations"><span className="hover:text-white transition-colors duration-200 cursor-pointer">Virtual Consultations</span></Link></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li><Link href="/booking"><span className="hover:text-white transition-colors duration-200 cursor-pointer">Book Appointment</span></Link></li>
              <li><Link href="/gallery"><span className="hover:text-white transition-colors duration-200 cursor-pointer">Smile Gallery</span></Link></li>
              <li><Link href="/special-offers"><span className="hover:text-white transition-colors duration-200 cursor-pointer">Special Offers</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-white transition-colors duration-200 cursor-pointer">Emergency Care</span></Link></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-montserrat font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-blue-100 text-sm">
              <div>+234 802 909 3223</div>
              <div>+234 802 226 8510</div>
              <div>dentist@dentistatyourdoor.com</div>
              <div className="pt-2">
                <div className="font-semibold text-white">Service Areas:</div>
                <div>Lekki • Festac • VI • Ikoyi</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-blue-100 text-sm">
            © 2024 Dentist At Your Door. All rights reserved.
          </div>
          <div className="flex space-x-6 text-blue-100 text-sm mt-4 md:mt-0">
            <span className="hover:text-white transition-colors duration-200 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors duration-200 cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors duration-200 cursor-pointer">Medical Disclaimer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
