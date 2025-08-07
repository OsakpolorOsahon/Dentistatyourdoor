import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Service } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

export default function Services() {
  const { data: services = [], isLoading } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  if (isLoading) {
    return (
      <div className="pt-16 lg:pt-20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-6 w-[600px] mx-auto" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-[400px] rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold text-medical-blue mb-4">
              Our Dental Services
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive range of dental services, from preventive care to advanced cosmetic procedures, all delivered with the highest standards of professional care.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-medical-blue to-medical-teal flex items-center justify-center">
                  <i className={`text-white text-6xl ${getServiceIcon(service.category)}`}></i>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <i className={`text-medical-teal text-xl mr-3 ${getServiceIcon(service.category)}`}></i>
                    <h3 className="text-xl font-montserrat font-semibold text-medical-blue">{service.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  {service.features && (
                    <ul className="text-sm text-gray-500 space-y-1 mb-4">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index}>• {feature}</li>
                      ))}
                    </ul>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    {service.basePrice && (
                      <div className="text-lg font-bold text-medical-blue">
                        ₦{parseInt(service.basePrice).toLocaleString()}
                      </div>
                    )}
                    {service.duration && (
                      <div className="text-sm text-gray-500">
                        {service.duration}
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Link href={`/services/${service.slug}`} className="flex-1">
                      <Button variant="outline" className="w-full text-medical-blue border-medical-blue hover:bg-medical-blue hover:text-white">
                        Learn More
                      </Button>
                    </Link>
                    <Link href="/booking" className="flex-1">
                      <Button className="w-full bg-medical-blue text-white hover:bg-opacity-90">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-medical-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-white mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and experience the convenience of premium dental care at your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button className="bg-white text-medical-blue px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-gray-50 transition-colors duration-200">
                Book Appointment
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-white hover:text-medical-blue transition-colors duration-200">
                Contact Us
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
