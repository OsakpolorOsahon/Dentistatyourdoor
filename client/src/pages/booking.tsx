import { useState } from "react";
import BookingWizard from "@/components/booking/booking-wizard";

export default function Booking() {
  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold text-medical-blue mb-4">
              Book Your Appointment
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Schedule your dental appointment in just a few simple steps. Choose your service, location, and preferred time.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Wizard */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingWizard />
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-montserrat font-bold text-medical-blue mb-4">
            Need Help Booking?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is here to assist you with your appointment booking process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2348029093223">
              <button className="bg-medical-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200">
                <i className="fas fa-phone mr-2"></i>
                Call Us: +234 802 909 3223
              </button>
            </a>
            <a href="https://wa.me/2348029093223" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200">
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp Support
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
