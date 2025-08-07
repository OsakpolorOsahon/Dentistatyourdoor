import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function SpecialOffers() {
  const offers = [
    {
      id: "bridal-package",
      title: "Bridal Package",
      subtitle: "Perfect smile for your special day",
      price: "₦150,000",
      originalPrice: "₦200,000",
      badge: "HOT DEAL",
      badgeColor: "bg-red-500",
      icon: "fas fa-heart",
      features: [
        "Professional teeth whitening",
        "Dental cleaning & polishing",
        "Pre-wedding consultation",
        "Touch-up session included",
        "Bridal dental health assessment",
        "Emergency contact during wedding week"
      ],
      description: "Get camera-ready for your wedding day with our comprehensive bridal dental package. Perfect for brides who want a flawless smile on their special day.",
      validity: "Valid until March 31, 2024",
    },
    {
      id: "family-discount",
      title: "Family Discount",
      subtitle: "Book adult treatment, get child treatment free",
      price: "50% OFF",
      originalPrice: "Child's first visit",
      badge: "FAMILY",
      badgeColor: "bg-green-500",
      icon: "fas fa-users",
      features: [
        "Adult cleaning + child cleaning",
        "Family dental health assessment",
        "Home visit convenience",
        "Flexible scheduling",
        "Educational session for children",
        "Family dental care plan"
      ],
      description: "Bring the whole family together for dental care. When you book an adult treatment, your child's first visit is completely free.",
      validity: "Ongoing offer",
    },
    {
      id: "corporate-wellness",
      title: "Corporate Wellness",
      subtitle: "On-site dental care for your team",
      price: "₦25,000",
      originalPrice: "Per employee",
      badge: "CORPORATE",
      badgeColor: "bg-blue-500",
      icon: "fas fa-building",
      features: [
        "On-site office visits",
        "Group checkup discounts",
        "Employee wellness program",
        "Flexible scheduling",
        "Bulk appointment booking",
        "Corporate health reporting"
      ],
      description: "Invest in your team's health with our corporate wellness program. We bring professional dental care directly to your office.",
      validity: "Minimum 10 employees",
    },
    {
      id: "senior-care",
      title: "Senior Care Special",
      subtitle: "Gentle dental care for seniors",
      price: "₦20,000",
      originalPrice: "₦30,000",
      badge: "SENIOR",
      badgeColor: "bg-purple-500",
      icon: "fas fa-heart-pulse",
      features: [
        "Gentle examination techniques",
        "Home visit convenience",
        "Medication review included",
        "Family member consultation",
        "Comfortable positioning",
        "Extended appointment time"
      ],
      description: "Specialized dental care designed for seniors with comfortable, gentle techniques and convenient home visits.",
      validity: "Ages 65 and above",
    },
    {
      id: "teeth-whitening",
      title: "Professional Whitening",
      subtitle: "Hollywood-level teeth whitening",
      price: "₦35,000",
      originalPrice: "₦50,000",
      badge: "LIMITED",
      badgeColor: "bg-yellow-500",
      icon: "fas fa-star",
      features: [
        "3-session whitening treatment",
        "8+ shades whiter guaranteed",
        "Custom whitening trays",
        "Take-home maintenance kit",
        "Progress monitoring",
        "Touch-up session included"
      ],
      description: "Achieve a Hollywood-level smile with our professional whitening treatment. Get up to 8 shades whiter in just 3 sessions.",
      validity: "Limited time offer",
    },
    {
      id: "emergency-package",
      title: "Emergency Care Package",
      subtitle: "24/7 emergency dental services",
      price: "₦15,000",
      originalPrice: "Emergency consultation",
      badge: "24/7",
      badgeColor: "bg-red-600",
      icon: "fas fa-ambulance",
      features: [
        "24/7 emergency availability",
        "Immediate pain relief",
        "Emergency consultation",
        "Urgent treatment options",
        "Follow-up care included",
        "Payment plan available"
      ],
      description: "Don't suffer in pain. Our emergency dental care package provides immediate relief and treatment when you need it most.",
      validity: "Always available",
    },
  ];

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-medical-teal to-medical-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold text-white mb-4">
              Special Offers & Packages
            </h1>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Take advantage of our limited-time deals and package discounts for premium dental services. Quality care at exceptional value.
            </p>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-xl p-8 text-center relative overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 shadow-lg border">
                <div className={`absolute top-0 right-0 ${offer.badgeColor} text-white px-4 py-1 text-sm font-bold transform rotate-12 translate-x-3 -translate-y-1`}>
                  {offer.badge}
                </div>
                <i className={`${offer.icon} text-medical-teal text-4xl mb-4`}></i>
                <h3 className="text-xl font-montserrat font-bold text-medical-blue mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.subtitle}</p>
                <div className="text-3xl font-bold text-medical-blue mb-2">{offer.price}</div>
                <div className="text-sm text-gray-500 line-through mb-4">{offer.originalPrice}</div>
                
                <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left">
                  {offer.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
                
                <p className="text-xs text-gray-500 mb-4 italic">{offer.validity}</p>
                
                <Link href="/booking">
                  <Button className="bg-medical-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 w-full">
                    Book This Package
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms & Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-montserrat font-bold text-medical-blue mb-8 text-center">
            Terms & Conditions
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <strong className="text-medical-blue">General Terms:</strong>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• All offers are subject to availability and may be withdrawn at any time</li>
                  <li>• Prices are inclusive of consultation fees and basic materials</li>
                  <li>• Payment must be made in full at the time of booking</li>
                  <li>• Cancellations must be made at least 24 hours in advance</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-medical-blue">Package Specific:</strong>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• Family packages apply to immediate family members only</li>
                  <li>• Corporate packages require minimum booking quantities</li>
                  <li>• Emergency services are subject to additional fees for after-hours calls</li>
                  <li>• Whitening results may vary based on individual tooth condition</li>
                </ul>
              </div>
              
              <div>
                <strong className="text-medical-blue">Service Areas:</strong>
                <p className="mt-2">All packages are available for home visits within Lagos (Lekki, Festac, VI, Ikoyi) and at our clinic locations. Additional travel fees may apply for areas outside our standard service zones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-medical-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-white mb-4">
            Questions About Our Offers?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Our team is ready to help you choose the perfect package for your dental needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-medical-blue px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-gray-50 transition-colors duration-200">
                Contact Us
              </Button>
            </Link>
            <a href="tel:+2348029093223">
              <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white hover:text-medical-blue transition-colors duration-200">
                Call for Details
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
