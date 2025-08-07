# Dentist At Your Door - Mobile Dental Clinic Website

## Overview

This is a premium mobile dental care website for "Dentist At Your Door," Nigeria's first mobile dental clinic operating in Lagos since 2017. The application provides a comprehensive platform for booking dental appointments, showcasing services, displaying patient testimonials, and managing a gallery of smile transformations. The site emphasizes convenience, luxury, and professional healthcare delivery directly to patients' homes, offices, or clinic locations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design tokens following the brand color palette (Medical Blue #002060, Soft Teal #66CCCC, White #FFFFFF, Charcoal Grey #333333)
- **Typography**: Google Fonts integration with Montserrat for headings and Open Sans for body text
- **UI Components**: shadcn/ui component library providing consistent, accessible components
- **Icons**: Font Awesome for comprehensive icon coverage
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API structure with proper HTTP status codes and error handling
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas for runtime type validation across client and server

### Component Architecture
- **Layout Components**: Header with navigation, Footer with contact information
- **Page Components**: Home, Services, Gallery, About, Contact, Booking, Special Offers
- **Feature Components**: Booking wizard, testimonials section, gallery display
- **UI Components**: Reusable components following shadcn/ui patterns

### State Management
- **Server State**: TanStack Query for server state management, caching, and synchronization
- **Form State**: React Hook Form with Zod validation for type-safe form handling
- **Local State**: React hooks for component-level state management

### Data Layer
- **Schema Definition**: Centralized schema definitions using Drizzle ORM with PostgreSQL dialect
- **Type Generation**: Automatic TypeScript type generation from database schemas
- **Validation**: Zod schemas derived from database schemas for consistent validation

## External Dependencies

### Database
- **Drizzle ORM**: Modern TypeScript ORM for database operations
- **PostgreSQL**: Production database (configured but using in-memory storage for development)
- **Neon Database**: Serverless PostgreSQL provider for production deployment

### UI and Styling
- **Radix UI**: Headless, accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for consistent styling
- **Google Fonts**: Web font service for Montserrat and Open Sans typography
- **Font Awesome**: Icon library for comprehensive iconography

### Development Tools
- **Vite**: Build tool and development server with hot module replacement
- **TypeScript**: Static type checking and enhanced development experience
- **ESBuild**: Fast JavaScript bundler for production builds

### Third-party Services
- **WhatsApp Business**: Floating WhatsApp integration for customer support
- **Replit**: Development environment integration with runtime error handling

### Communication
- **Email Integration**: Contact form submissions (ready for email service integration)
- **Phone Integration**: Direct calling links for appointment booking
- **Social Media**: Instagram and Facebook integration for brand presence

The architecture prioritizes user experience with fast loading times, mobile responsiveness, and intuitive navigation while maintaining professional healthcare standards and brand consistency throughout the application.