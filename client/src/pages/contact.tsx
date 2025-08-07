import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertContact) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <div className="pt-16 lg:pt-20">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold text-medical-blue mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600">
              Ready to transform your smile? Contact us for consultations or appointments.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-montserrat font-semibold text-medical-blue mb-6">Send us a Message</h3>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter first name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter last name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter email address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="Enter phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Service Location</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select location" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="home-visit">Home Visit</SelectItem>
                              <SelectItem value="office-visit">Office Visit</SelectItem>
                              <SelectItem value="lekki-clinic">Lekki Clinic</SelectItem>
                              <SelectItem value="festac-clinic">Festac Clinic</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              rows={4} 
                              placeholder="Tell us about your dental needs..." 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-medical-blue text-white py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-montserrat font-semibold text-medical-blue mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-medical-teal rounded-lg flex items-center justify-center">
                        <i className="fas fa-phone text-white"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-medical-blue">Phone</div>
                        <div className="text-gray-600">+234 802 909 3223</div>
                        <div className="text-gray-600">+234 802 226 8510</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-medical-teal rounded-lg flex items-center justify-center">
                        <i className="fas fa-envelope text-white"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-medical-blue">Email</div>
                        <div className="text-gray-600">dentist@dentistatyourdoor.com</div>
                        <div className="text-gray-600">reception@dentistatyourdoor.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-medical-teal rounded-lg flex items-center justify-center">
                        <i className="fas fa-clock text-white"></i>
                      </div>
                      <div>
                        <div className="font-semibold text-medical-blue">Business Hours</div>
                        <div className="text-gray-600">Mon-Fri: 9:00 AM - 5:00 PM</div>
                        <div className="text-gray-600">Sat: 9:00 AM - 2:00 PM</div>
                        <div className="text-gray-600">Sun: Closed</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Clinic Locations */}
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-montserrat font-semibold text-medical-blue mb-6">Clinic Locations</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="font-semibold text-medical-blue mb-2">Lekki Clinic</div>
                      <p className="text-gray-600 text-sm">26 Akin Leigh, off Admiralty Way, off Wole Olateju, Lekki Phase 1, Lagos</p>
                    </div>
                    <div>
                      <div className="font-semibold text-medical-blue mb-2">Festac Clinic</div>
                      <p className="text-gray-600 text-sm">Amuwo Odofin Local Government Council Complex, Festac Town, Lagos</p>
                    </div>
                  </div>
                  
                  {/* Map placeholder */}
                  <div className="mt-6 bg-gray-100 rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <i className="fas fa-map-marker-alt text-2xl mb-2"></i>
                      <div>Interactive Map</div>
                      <div className="text-sm">(Service areas: Lekki, Festac, VI, Ikoyi)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-medical-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-white mb-4">
            Need Emergency Dental Care?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            We provide 24/7 emergency dental services. Don't wait - call us immediately for urgent dental issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+2348029093223">
              <Button className="bg-red-500 text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-red-600 transition-colors duration-200">
                <i className="fas fa-phone mr-2"></i>
                Call Emergency Line
              </Button>
            </a>
            <a href="https://wa.me/2348029093223" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-500 text-white px-8 py-4 rounded-lg font-montserrat font-semibold text-lg hover:bg-green-600 transition-colors duration-200">
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
