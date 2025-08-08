import type { VercelRequest, VercelResponse } from '@vercel/node';
import { randomUUID } from "crypto";

// Simple in-memory storage for Vercel deployment
class MemStorage {
  private static instance: MemStorage;
  private services: any[] = [];
  private testimonials: any[] = [];
  private galleryItems: any[] = [];

  constructor() {
    if (MemStorage.instance) {
      return MemStorage.instance;
    }
    this.seedData();
    MemStorage.instance = this;
  }

  private seedData() {
    this.services = [
      {
        id: randomUUID(),
        name: "Preventive Care",
        slug: "preventive-care",
        description: "Regular cleanings, scaling, polishing, and checkups to maintain optimal oral health and prevent dental issues.",
        category: "preventive",
        basePrice: "25000",
        duration: "60 minutes",
        features: ["Deep cleaning and scaling", "Oral health assessments", "Fluoride treatments", "Dental x-rays"],
        isActive: true
      },
      {
        id: randomUUID(),
        name: "Cosmetic Dentistry",
        slug: "cosmetic-dentistry",
        description: "Transform your smile with teeth whitening, veneers, and Hollywood smile makeovers for confidence-boosting results.",
        category: "cosmetic",
        basePrice: "80000",
        duration: "90 minutes",
        features: ["Professional teeth whitening", "Porcelain veneers", "Smile makeovers", "Composite bonding"],
        isActive: true
      },
      {
        id: randomUUID(),
        name: "Restorative Dentistry",
        slug: "restorative-dentistry",
        description: "Complete restoration solutions including fillings, crowns, bridges, and implants to restore function and appearance.",
        category: "restorative",
        basePrice: "60000",
        duration: "120 minutes",
        features: ["Dental fillings and root canals", "Crowns and bridges", "Dental implants", "Tooth extractions"],
        isActive: true
      },
      {
        id: randomUUID(),
        name: "Pediatric Dentistry",
        slug: "pediatric-dentistry",
        description: "Gentle, child-friendly dental care using our Tell-Show-Do approach to ensure comfort and positive experiences.",
        category: "pediatric",
        basePrice: "20000",
        duration: "45 minutes",
        features: ["Child-friendly examinations", "Preventive care for kids", "Comfort-focused approach", "Parent education"],
        isActive: true
      },
      {
        id: randomUUID(),
        name: "Orthodontics",
        slug: "orthodontics",
        description: "Invisible aligners and modern orthodontic solutions for straight, perfectly aligned teeth without traditional braces.",
        category: "orthodontic",
        basePrice: "150000",
        duration: "30 minutes",
        features: ["Clear invisible aligners", "Teeth alignment correction", "Bite adjustment therapy", "Progress monitoring"],
        isActive: true
      },
      {
        id: randomUUID(),
        name: "Virtual Consultations",
        slug: "virtual-consultations",
        description: "Convenient online consultations for treatment planning, follow-ups, and dental health advice from anywhere.",
        category: "virtual",
        basePrice: "10000",
        duration: "30 minutes",
        features: ["Remote consultations", "Treatment planning", "Follow-up appointments", "Digital prescriptions"],
        isActive: true
      }
    ];

    this.testimonials = [
      {
        id: randomUUID(),
        name: "Adaeze Okwu",
        location: "HR Manager, Ikoyi",
        rating: "5.0",
        content: "The Dentist came to our office in VI and gave the entire team dental checkups. It was so convenient and professional. No more struggling with Lagos traffic to get to a dental clinic!",
        service: "Preventive Care",
        isVisible: true,
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        name: "Funmi Adeleke",
        location: "Bride, Lekki",
        rating: "5.0",
        content: "The bridal teeth whitening package was perfect! Dr. Yemisi made my smile camera-ready for my wedding. I got my treatment at home. Highly recommend!",
        service: "Cosmetic Dentistry",
        isVisible: true,
        createdAt: new Date()
      },
      {
        id: randomUUID(),
        name: "Chike Okafor",
        location: "Son of Patient, Festac",
        rating: "5.0",
        content: "My elderly mother couldn't travel to a clinic anymore. The home visit service was a godsend. Professional, gentle, and caring treatment right in our living room.",
        service: "Preventive Care",
        isVisible: true,
        createdAt: new Date()
      }
    ];

    this.galleryItems = [
      {
        id: randomUUID(),
        title: "Professional Whitening",
        category: "whitening",
        beforeImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400",
        afterImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400",
        description: "8 shades whiter in just 3 sessions with our advanced whitening system.",
        treatmentType: "Whitening",
        duration: "3 Sessions",
        isVisible: true
      },
      {
        id: randomUUID(),
        title: "Complete Makeover",
        category: "veneers",
        beforeImage: "https://pixabay.com/get/g3ca954fbceacf2297e09ae62fd2def23b3daa1af93cbe459d7c4844d873a125fcb5f46dbe60e05258648c8701daa8ca9e557f4f576df507621349e56bd270b3b_1280.jpg",
        afterImage: "https://pixabay.com/get/g3ca954fbceacf2297e09ae62fd2def23b3daa1af93cbe459d7c4844d873a125fcb5f46dbe60e05258648c8701daa8ca9e557f4f576df507621349e56bd270b3b_1280.jpg",
        description: "Porcelain veneers created a perfect Hollywood smile for this bride-to-be.",
        treatmentType: "Veneers",
        duration: "Hollywood Smile",
        isVisible: true
      },
      {
        id: randomUUID(),
        title: "Tooth Restoration",
        category: "restoration",
        beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
        afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
        description: "Complete restoration of damaged teeth with natural-looking crowns.",
        treatmentType: "Restoration",
        duration: "Crown & Bridge",
        isVisible: true
      }
    ];
  }

  getServices() {
    return this.services.filter(service => service.isActive);
  }

  getTestimonials() {
    return this.testimonials.filter(testimonial => testimonial.isVisible);
  }

  getGalleryItems() {
    return this.galleryItems.filter(item => item.isVisible);
  }
}

const storage = new MemStorage();

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { url } = req;

  try {
    if (url?.includes('/api/services')) {
      const services = storage.getServices();
      return res.status(200).json(services);
    }

    if (url?.includes('/api/testimonials')) {
      const testimonials = storage.getTestimonials();
      return res.status(200).json(testimonials);
    }

    if (url?.includes('/api/gallery')) {
      const gallery = storage.getGalleryItems();
      return res.status(200).json(gallery);
    }

    // Handle appointments creation
    if (url?.includes('/api/appointments') && req.method === 'POST') {
      // Basic appointment creation logic
      const appointmentData = req.body;
      const newAppointment = {
        id: randomUUID(),
        ...appointmentData,
        createdAt: new Date()
      };
      
      return res.status(201).json(newAppointment);
    }

    // Handle contact form submission
    if (url?.includes('/api/contacts') && req.method === 'POST') {
      const contactData = req.body;
      const newContact = {
        id: randomUUID(),
        ...contactData,
        status: 'new',
        createdAt: new Date()
      };
      
      return res.status(201).json(newContact);
    }

    return res.status(404).json({ error: 'Not found' });

  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}