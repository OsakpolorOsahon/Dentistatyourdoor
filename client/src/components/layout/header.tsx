import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion } from "framer-motion";
import logoPath from "@assets/20250807_234819 (1)_1754607259860.jpg";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/">
                <div className="flex items-center space-x-2 lg:space-x-3 cursor-pointer">
                <img 
                  src={logoPath} 
                  alt="Dentist At Your Door Logo" 
                  className="h-8 lg:h-12 w-auto"
                  loading="eager"
                  decoding="async"
                  data-testid="img-logo"
                />
                <h1 className="text-lg lg:text-2xl font-montserrat font-bold text-medical-blue">
                  Dentist<span className="text-medical-teal">@</span>YourDoor
                </h1>
                </div>
              </Link>
            </motion.div>
          </div>
          
          {/* Desktop Navigation */}
          <motion.nav 
            className="hidden lg:flex space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {navigation.map((item) => (
              <motion.div key={item.name} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                <Link href={item.href}>
                  <span className={`cursor-pointer transition-colors duration-200 ${
                  location === item.href 
                    ? "text-medical-blue font-semibold" 
                    : "text-medical-gray hover:text-medical-blue"
                }`}>
                    {item.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.nav>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  className="lg:hidden text-medical-gray hover:text-medical-blue"
                  aria-label="Open navigation menu"
                  data-testid="button-mobile-menu"
                >
                  <i className="fas fa-bars text-xl" aria-hidden="true"></i>
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <span 
                        className={`block py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                          location === item.href 
                            ? "bg-medical-blue text-white" 
                            : "text-medical-gray hover:bg-gray-100"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                  <Link href="/special-offers">
                    <span 
                      className="block py-2 px-4 rounded-lg cursor-pointer text-medical-gray hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Special Offers
                    </span>
                  </Link>
                  <div className="pt-4">
                    <Link href="/booking">
                      <Button 
                        className="w-full bg-medical-blue text-white font-montserrat font-semibold"
                        onClick={() => setIsOpen(false)}
                      >
                        Book Appointment
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
