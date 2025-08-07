import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertAppointmentSchema, type InsertAppointment, type Service } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

type BookingStep = 1 | 2 | 3 | 4;

interface BookingFormData extends InsertAppointment {}

export default function BookingWizard() {
  const [currentStep, setCurrentStep] = useState<BookingStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: services = [] } = useQuery<Service[]>({
    queryKey: ["/api/services"],
  });

  const form = useForm<BookingFormData>({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      patientName: "",
      email: "",
      phone: "",
      service: "",
      location: "",
      address: "",
      appointmentDate: "",
      appointmentTime: "",
      notes: "",
      status: "pending",
      paymentStatus: "pending",
    },
  });

  const appointmentMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      const response = await apiRequest("POST", "/api/appointments", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Appointment booked successfully!",
        description: "We'll contact you shortly to confirm your appointment details.",
      });
      form.reset();
      setCurrentStep(1);
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to book appointment",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: BookingFormData) => {
    setIsSubmitting(true);
    appointmentMutation.mutate(data);
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 4) as BookingStep);
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1) as BookingStep);
  };

  const validateStep = async (step: BookingStep): Promise<boolean> => {
    switch (step) {
      case 1:
        return await form.trigger("service");
      case 2:
        return await form.trigger(["location", "address"]);
      case 3:
        return await form.trigger(["appointmentDate", "appointmentTime"]);
      case 4:
        return await form.trigger(["patientName", "email", "phone"]);
      default:
        return true;
    }
  };

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      nextStep();
    }
  };

  const getStepTitle = (step: BookingStep): string => {
    switch (step) {
      case 1: return "Choose Service";
      case 2: return "Select Location";
      case 3: return "Pick Date & Time";
      case 4: return "Your Details";
      default: return "";
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-center space-x-4 md:space-x-8">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="flex items-center">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors duration-200
                ${currentStep >= step 
                  ? 'bg-medical-blue text-white' 
                  : 'bg-gray-200 text-gray-500'
                }
              `}>
                {step}
              </div>
              <div className={`
                ml-2 text-sm font-medium transition-colors duration-200
                ${currentStep >= step ? 'text-medical-blue' : 'text-gray-500'}
              `}>
                {getStepTitle(step as BookingStep)}
              </div>
              {step < 4 && (
                <div className={`
                  w-8 h-px mx-4 transition-colors duration-200
                  ${currentStep > step ? 'bg-medical-blue' : 'bg-gray-200'}
                `} />
              )}
            </div>
          ))}
        </div>
      </div>

      <Card className="shadow-lg">
        <CardContent className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Step 1: Service Selection */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-montserrat font-bold text-medical-blue mb-2">
                      Choose Your Service
                    </h2>
                    <p className="text-gray-600">Select the dental service you need</p>
                  </div>

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.id} value={service.name}>
                                <div className="flex items-center justify-between w-full">
                                  <span>{service.name}</span>
                                  {service.basePrice && (
                                    <span className="ml-4 text-medical-blue font-semibold">
                                      ₦{parseInt(service.basePrice).toLocaleString()}
                                    </span>
                                  )}
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {form.watch("service") && (
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold text-medical-blue mb-2">Service Details</h3>
                      {(() => {
                        const selectedService = services.find(s => s.name === form.watch("service"));
                        return selectedService ? (
                          <div className="text-sm text-gray-600">
                            <p className="mb-2">{selectedService.description}</p>
                            <div className="flex justify-between">
                              <span>Duration: {selectedService.duration || "Varies"}</span>
                              {selectedService.basePrice && (
                                <span className="font-semibold">
                                  Starting from ₦{parseInt(selectedService.basePrice).toLocaleString()}
                                </span>
                              )}
                            </div>
                          </div>
                        ) : null;
                      })()}
                    </div>
                  )}
                </div>
              )}

              {/* Step 2: Location Selection */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-montserrat font-bold text-medical-blue mb-2">
                      Select Location
                    </h2>
                    <p className="text-gray-600">Choose where you'd like to receive treatment</p>
                  </div>

                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Treatment Location</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select location type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="home-visit">
                              <div className="flex items-center">
                                <i className="fas fa-home text-medical-teal mr-3"></i>
                                <div>
                                  <div className="font-semibold">Home Visit</div>
                                  <div className="text-sm text-gray-500">We come to your home</div>
                                </div>
                              </div>
                            </SelectItem>
                            <SelectItem value="office-visit">
                              <div className="flex items-center">
                                <i className="fas fa-building text-medical-teal mr-3"></i>
                                <div>
                                  <div className="font-semibold">Office Visit</div>
                                  <div className="text-sm text-gray-500">We come to your workplace</div>
                                </div>
                              </div>
                            </SelectItem>
                            <SelectItem value="lekki-clinic">
                              <div className="flex items-center">
                                <i className="fas fa-clinic-medical text-medical-teal mr-3"></i>
                                <div>
                                  <div className="font-semibold">Lekki Clinic</div>
                                  <div className="text-sm text-gray-500">Visit our Lekki location</div>
                                </div>
                              </div>
                            </SelectItem>
                            <SelectItem value="festac-clinic">
                              <div className="flex items-center">
                                <i className="fas fa-clinic-medical text-medical-teal mr-3"></i>
                                <div>
                                  <div className="font-semibold">Festac Clinic</div>
                                  <div className="text-sm text-gray-500">Visit our Festac location</div>
                                </div>
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {(form.watch("location") === "home-visit" || form.watch("location") === "office-visit") && (
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Address</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please provide your complete address including landmarks"
                              className="min-h-20"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  {form.watch("location") === "lekki-clinic" && (
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold text-medical-blue mb-2">Lekki Clinic Address</h3>
                      <p className="text-sm text-gray-600">
                        26 Akin Leigh, off Admiralty Way, off Wole Olateju, Lekki Phase 1, Lagos
                      </p>
                    </div>
                  )}

                  {form.watch("location") === "festac-clinic" && (
                    <div className="bg-blue-50 rounded-lg p-4">
                      <h3 className="font-semibold text-medical-blue mb-2">Festac Clinic Address</h3>
                      <p className="text-sm text-gray-600">
                        Amuwo Odofin Local Government Council Complex, Festac Town, Lagos
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Date & Time Selection */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-montserrat font-bold text-medical-blue mb-2">
                      Pick Date & Time
                    </h2>
                    <p className="text-gray-600">Choose your preferred appointment slot</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="appointmentDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Date</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="appointmentTime"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Time</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12">
                                <SelectValue placeholder="Select time slot" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="09:00">9:00 AM</SelectItem>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="12:00">12:00 PM</SelectItem>
                              <SelectItem value="13:00">1:00 PM</SelectItem>
                              <SelectItem value="14:00">2:00 PM</SelectItem>
                              <SelectItem value="15:00">3:00 PM</SelectItem>
                              <SelectItem value="16:00">4:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 mb-2">
                      <i className="fas fa-info-circle mr-2"></i>
                      Appointment Notes
                    </h3>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Appointments are subject to availability</li>
                      <li>• We'll confirm your slot within 2 hours</li>
                      <li>• Please allow extra time for mobile visits</li>
                      <li>• Same-day appointments available for emergencies</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Step 4: Patient Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-montserrat font-bold text-medical-blue mb-2">
                      Your Details
                    </h2>
                    <p className="text-gray-600">Tell us about yourself so we can provide the best care</p>
                  </div>

                  <FormField
                    control={form.control}
                    name="patientName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} className="h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your@email.com" {...field} className="h-12" />
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
                            <Input type="tel" placeholder="+234 xxx xxx xxxx" {...field} className="h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any specific concerns, allergies, or requests..."
                            className="min-h-20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Booking Summary */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-medical-blue mb-4">Booking Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service:</span>
                        <span className="font-medium">{form.watch("service")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Location:</span>
                        <span className="font-medium">{form.watch("location")?.replace("-", " ")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Date:</span>
                        <span className="font-medium">{form.watch("appointmentDate")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Time:</span>
                        <span className="font-medium">{form.watch("appointmentTime")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="px-8 py-3"
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Previous
                </Button>

                {currentStep < 4 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="bg-medical-blue text-white px-8 py-3 hover:bg-opacity-90"
                  >
                    Next
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-medical-blue text-white px-8 py-3 hover:bg-opacity-90"
                  >
                    {isSubmitting ? "Booking..." : "Book Appointment"}
                    <i className="fas fa-check ml-2"></i>
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
