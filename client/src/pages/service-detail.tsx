import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Service } from "@shared/schema";
import { Skeleton } from "@/components/ui/skeleton";

export default function ServiceDetail() {
  const { slug } = useParams();
  
  const { data: service, isLoading, error } = useQuery<Service>({
    queryKey: [`/api/services/${slug}`],
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="pt-16 lg:pt-20 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <Skeleton className="h-16 w-96" />
            <Skeleton className="h-64 w-full" />
            <div className="grid md:grid-cols-2 gap-8">
              <Skeleton className="h-48" />
              <Skeleton className="h-48" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !service) {
    return (
      <div className="pt-16 lg:pt-20 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-montserrat font-bold text-medical-blue mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link href="/services">
            <Button className="bg-medical-blue text-white">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-24 h-24 bg-medical-blue rounded-full flex items-center justify-center mx-auto mb-6">
              <i className={`text-white text-4xl ${getServiceIcon(service.category)}`}></i>
            </div>
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold text-medical-blue mb-4">
              {service.name}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Service Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-montserrat font-bold text-medical-blue mb-4">
                  What's Included
                </h2>
                {service.features && (
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check-circle text-medical-teal mr-3 mt-1"></i>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-montserrat font-semibold text-medical-blue mb-4">
                  Service Details
                </h3>
                <div className="space-y-3">
                  {service.duration && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold text-medical-blue">{service.duration}</span>
                    </div>
                  )}
                  {service.basePrice && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Starting Price:</span>
                      <span className="font-semibold text-medical-blue">
                        ₦{parseInt(service.basePrice).toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-semibold text-medical-blue capitalize">{service.category}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Section */}
            <div className="space-y-8">
              <div className="bg-medical-blue rounded-lg p-8 text-white">
                <h3 className="text-xl font-montserrat font-semibold mb-4">
                  Ready to Book?
                </h3>
                <p className="text-blue-100 mb-6">
                  Schedule your appointment and choose between home visit, office visit, or clinic appointment.
                </p>
                <Link href="/booking">
                  <Button className="w-full bg-white text-medical-blue hover:bg-gray-50 font-montserrat font-semibold py-3">
                    Book This Service
                  </Button>
                </Link>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-montserrat font-semibold text-medical-blue">
                  Available Locations
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <i className="fas fa-home text-medical-teal"></i>
                    <div>
                      <div className="font-semibold">Home Visit</div>
                      <div className="text-sm text-gray-600">We come to your home</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <i className="fas fa-building text-medical-teal"></i>
                    <div>
                      <div className="font-semibold">Office Visit</div>
                      <div className="text-sm text-gray-600">We come to your workplace</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <i className="fas fa-clinic-medical text-medical-teal"></i>
                    <div>
                      <div className="font-semibold">Clinic Visit</div>
                      <div className="text-sm text-gray-600">Visit our Lekki or Festac clinic</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-montserrat font-bold text-medical-blue mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-medical-blue mb-2">How long does the appointment take?</h3>
              <p className="text-gray-600">
                Most appointments take between 30-90 minutes depending on the service. {service.duration && `This service typically takes ${service.duration}.`}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-medical-blue mb-2">Do you accept insurance?</h3>
              <p className="text-gray-600">
                We work with most major insurance providers. Please contact us with your insurance details for verification.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-medical-blue mb-2">What should I prepare for a home visit?</h3>
              <p className="text-gray-600">
                We bring all necessary equipment. Just ensure you have a clean, well-lit space and access to water and electricity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-montserrat font-bold text-medical-blue mb-12 text-center">
            Other Services You Might Like
          </h2>
          <div className="text-center">
            <Link href="/services">
              <Button className="bg-medical-blue text-white px-8 py-3 rounded-lg font-montserrat font-semibold hover:bg-opacity-90 transition-colors duration-200">
                View All Services
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
