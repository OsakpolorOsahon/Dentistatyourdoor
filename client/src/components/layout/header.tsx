import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme/theme-provider";
import logoPath from "@assets/20250807_234819 (1)_1754607259860.jpg";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <div className="flex items-center space-x-3 cursor-pointer">
                <img 
                  src={logoPath} 
                  alt="Dentist At Your Door Logo" 
                  className="h-10 lg:h-12 w-auto"
                />
                <h1 className="text-xl lg:text-2xl font-montserrat font-bold text-medical-blue dark:text-white">
                  Dentist<span className="text-medical-teal">@</span>YourDoor
                </h1>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span className={`cursor-pointer transition-colors duration-200 ${
                  location === item.href 
                    ? "text-medical-blue dark:text-medical-teal font-semibold" 
                    : "text-medical-gray dark:text-gray-300 hover:text-medical-blue dark:hover:text-medical-teal"
                }`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
          
          {/* Navigation & Menu */}
          <div className="flex items-center space-x-4">
            {/* Settings Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-medical-gray dark:text-gray-300 hover:text-medical-blue dark:hover:text-medical-teal">
                  <i className="fas fa-cog text-xl"></i>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={toggleTheme} className="cursor-pointer">
                  <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} mr-2`}></i>
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/booking" className="cursor-pointer w-full">
                    <i className="fas fa-calendar-plus mr-2"></i>
                    Book Appointment
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="cursor-pointer w-full">
                    <i className="fas fa-envelope mr-2"></i>
                    Contact Us
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" className="lg:hidden text-medical-gray dark:text-gray-300 hover:text-medical-blue dark:hover:text-medical-teal">
                  <i className="fas fa-bars text-xl"></i>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white dark:bg-gray-900">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <span 
                        className={`block py-2 px-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                          location === item.href 
                            ? "bg-medical-blue text-white" 
                            : "text-medical-gray dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                  <Link href="/special-offers">
                    <span 
                      className="block py-2 px-4 rounded-lg cursor-pointer text-medical-gray dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                      onClick={() => setIsOpen(false)}
                    >
                      Special Offers
                    </span>
                  </Link>
                  <div className="pt-4 space-y-2">
                    <Link href="/booking">
                      <Button 
                        className="w-full bg-medical-blue text-white font-montserrat font-semibold"
                        onClick={() => setIsOpen(false)}
                      >
                        Book Appointment
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      onClick={() => {
                        toggleTheme();
                        setIsOpen(false);
                      }}
                      className="w-full border-medical-blue text-medical-blue dark:border-medical-teal dark:text-medical-teal font-montserrat font-semibold"
                    >
                      <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'} mr-2`}></i>
                      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
