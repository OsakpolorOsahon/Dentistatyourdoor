import { type User, type InsertUser, type Appointment, type InsertAppointment, type Service, type InsertService, type Testimonial, type InsertTestimonial, type GalleryItem, type InsertGalleryItem, type Contact, type InsertContact } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Appointments
  getAppointments(): Promise<Appointment[]>;
  getAppointment(id: string): Promise<Appointment | undefined>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  updateAppointment(id: string, updates: Partial<Appointment>): Promise<Appointment | undefined>;

  // Services
  getServices(): Promise<Service[]>;
  getService(id: string): Promise<Service | undefined>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  getVisibleTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;

  // Gallery
  getGalleryItems(): Promise<GalleryItem[]>;
  getVisibleGalleryItems(): Promise<GalleryItem[]>;
  getGalleryItemsByCategory(category: string): Promise<GalleryItem[]>;
  createGalleryItem(item: InsertGalleryItem): Promise<GalleryItem>;

  // Contacts
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private appointments: Map<string, Appointment> = new Map();
  private services: Map<string, Service> = new Map();
  private testimonials: Map<string, Testimonial> = new Map();
  private galleryItems: Map<string, GalleryItem> = new Map();
  private contacts: Map<string, Contact> = new Map();

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Seed services
    const services: Omit<Service, 'id'>[] = [
      {
        name: "Preventive Care",
        slug: "preventive-care",
        description: "Regular cleanings, scaling, polishing, and checkups to maintain optimal oral health and prevent dental issues.",
        category: "preventive",
        basePrice: "25000",
        duration: "60 minutes",
        features: ["Deep cleaning and scaling", "Oral health assessments", "Fluoride treatments", "Dental x-rays"],
        isActive: true,
      },
      {
        name: "Cosmetic Dentistry",
        slug: "cosmetic-dentistry",
        description: "Transform your smile with teeth whitening, veneers, and Hollywood smile makeovers for confidence-boosting results.",
        category: "cosmetic",
        basePrice: "80000",
        duration: "90 minutes",
        features: ["Professional teeth whitening", "Porcelain veneers", "Smile makeovers", "Composite bonding"],
        isActive: true,
      },
      {
        name: "Restorative Dentistry",
        slug: "restorative-dentistry",
        description: "Complete restoration solutions including fillings, crowns, bridges, and implants to restore function and appearance.",
        category: "restorative",
        basePrice: "60000",
        duration: "120 minutes",
        features: ["Dental fillings and root canals", "Crowns and bridges", "Dental implants", "Tooth extractions"],
        isActive: true,
      },
      {
        name: "Pediatric Dentistry",
        slug: "pediatric-dentistry",
        description: "Gentle, child-friendly dental care using our Tell-Show-Do approach to ensure comfort and positive experiences.",
        category: "pediatric",
        basePrice: "20000",
        duration: "45 minutes",
        features: ["Child-friendly examinations", "Preventive care for kids", "Comfort-focused approach", "Parent education"],
        isActive: true,
      },
      {
        name: "Orthodontics",
        slug: "orthodontics",
        description: "Invisible aligners and modern orthodontic solutions for straight, perfectly aligned teeth without traditional braces.",
        category: "orthodontic",
        basePrice: "150000",
        duration: "30 minutes",
        features: ["Clear invisible aligners", "Teeth alignment correction", "Bite adjustment therapy", "Progress monitoring"],
        isActive: true,
      },
      {
        name: "Virtual Consultations",
        slug: "virtual-consultations",
        description: "Convenient online consultations for treatment planning, follow-ups, and dental health advice from anywhere.",
        category: "virtual",
        basePrice: "10000",
        duration: "30 minutes",
        features: ["Remote consultations", "Treatment planning", "Follow-up appointments", "Digital prescriptions"],
        isActive: true,
      },
    ];

    services.forEach(service => {
      const id = randomUUID();
      this.services.set(id, { ...service, id });
    });

    // Seed testimonials
    const testimonials: Omit<Testimonial, 'id' | 'createdAt'>[] = [
      {
        name: "Adaeze Okwu",
        location: "HR Manager, Ikoyi",
        rating: "5.0",
        content: "Dr. Yemisi came to our office in VI and gave the entire team dental checkups. It was so convenient and professional. No more struggling with Lagos traffic to get to a dental clinic!",
        service: "Preventive Care",
        isVisible: true,
      },
      {
        name: "Funmi Adeleke",
        location: "Bride, Lekki",
        rating: "5.0",
        content: "The bridal teeth whitening package was perfect! Dr. Yemisi made my smile camera-ready for my wedding. She even came to my home for the treatment. Highly recommend!",
        service: "Cosmetic Dentistry",
        isVisible: true,
      },
      {
        name: "Chike Okafor",
        location: "Son of Patient, Festac",
        rating: "5.0",
        content: "My elderly mother couldn't travel to a clinic anymore. The home visit service was a godsend. Professional, gentle, and caring treatment right in our living room.",
        service: "Preventive Care",
        isVisible: true,
      },
    ];

    testimonials.forEach(testimonial => {
      const id = randomUUID();
      this.testimonials.set(id, { ...testimonial, id, createdAt: new Date() });
    });

    // Seed gallery items
    const galleryItems: Omit<GalleryItem, 'id'>[] = [
      {
        title: "Professional Whitening",
        category: "whitening",
        beforeImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400",
        afterImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400",
        description: "8 shades whiter in just 3 sessions with our advanced whitening system.",
        treatmentType: "Whitening",
        duration: "3 Sessions",
        isVisible: true,
      },
      {
        title: "Complete Makeover",
        category: "veneers",
        beforeImage: "https://pixabay.com/get/g3ca954fbceacf2297e09ae62fd2def23b3daa1af93cbe459d7c4844d873a125fcb5f46dbe60e05258648c8701daa8ca9e557f4f576df507621349e56bd270b3b_1280.jpg",
        afterImage: "https://pixabay.com/get/g3ca954fbceacf2297e09ae62fd2def23b3daa1af93cbe459d7c4844d873a125fcb5f46dbe60e05258648c8701daa8ca9e557f4f576df507621349e56bd270b3b_1280.jpg",
        description: "Porcelain veneers created a perfect Hollywood smile for this bride-to-be.",
        treatmentType: "Veneers",
        duration: "Hollywood Smile",
        isVisible: true,
      },
      {
        title: "Tooth Restoration",
        category: "restoration",
        beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
        afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
        description: "Complete restoration of damaged teeth with natural-looking crowns.",
        treatmentType: "Restoration",
        duration: "Crown & Bridge",
        isVisible: true,
      },
    ];

    galleryItems.forEach(item => {
      const id = randomUUID();
      this.galleryItems.set(id, { ...item, id });
    });
  }

  // Users
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Appointments
  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async getAppointment(id: string): Promise<Appointment | undefined> {
    return this.appointments.get(id);
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = randomUUID();
    const appointment: Appointment = { 
      ...insertAppointment, 
      id,
      createdAt: new Date()
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async updateAppointment(id: string, updates: Partial<Appointment>): Promise<Appointment | undefined> {
    const appointment = this.appointments.get(id);
    if (!appointment) return undefined;
    
    const updated = { ...appointment, ...updates };
    this.appointments.set(id, updated);
    return updated;
  }

  // Services
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values()).filter(service => service.isActive);
  }

  async getService(id: string): Promise<Service | undefined> {
    return this.services.get(id);
  }

  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    return Array.from(this.services.values()).find(service => service.slug === slug);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const id = randomUUID();
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getVisibleTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(testimonial => testimonial.isVisible);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      createdAt: new Date()
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // Gallery
  async getGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values());
  }

  async getVisibleGalleryItems(): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values()).filter(item => item.isVisible);
  }

  async getGalleryItemsByCategory(category: string): Promise<GalleryItem[]> {
    return Array.from(this.galleryItems.values()).filter(item => item.category === category && item.isVisible);
  }

  async createGalleryItem(insertItem: InsertGalleryItem): Promise<GalleryItem> {
    const id = randomUUID();
    const item: GalleryItem = { ...insertItem, id };
    this.galleryItems.set(id, item);
    return item;
  }

  // Contacts
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id,
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }
}

export const storage = new MemStorage();
