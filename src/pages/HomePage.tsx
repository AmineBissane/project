import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import WelcomeHeader from '@/components/home/WelcomeHeader';
import CategoryCard from '@/components/home/CategoryCard';
import { vehicles } from '@/types/booking';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <WelcomeHeader />
      
      {/* Vehicle Categories */}
      <section id="luxury-fleet" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Luxury Fleet</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect vehicle for your journey. Whether you're traveling solo, with family, or in a group, we have the ideal solution for your transportation needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {vehicles.map((vehicle) => (
              <CategoryCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Premium Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the highest level of comfort and reliability with our extensive range of premium taxi services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"></path>
                  <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"></path>
                  <circle cx="7" cy="18" r="2"></circle>
                  <path d="M15 18H9"></path>
                  <circle cx="17" cy="18" r="2"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Airport Transfers</h3>
              <p className="text-muted-foreground">
                Reliable and comfortable transfers to and from Luxembourg Airport and other major airports in the region.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <path d="M8 6v6"></path>
                  <path d="M15 6v6"></path>
                  <path d="M2 12h19.6"></path>
                  <path d="M18 18H2V8h16"></path>
                  <path d="M22 12v7a1 1 0 0 1-1 1h-7"></path>
                  <circle cx="16" cy="16" r="2"></circle>
                  <circle cx="8" cy="16" r="2"></circle>
                  <path d="M10 16h3"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Business Travel</h3>
              <p className="text-muted-foreground">
                Professional and discreet service for business meetings, conferences, and corporate events.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <path d="M12 2H2v10h10V2z"></path>
                  <path d="M12 12H2v10h10V12z"></path>
                  <path d="M22 2h-10v20h10V2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">City Tours</h3>
              <p className="text-muted-foreground">
                Discover Luxembourg and surrounding areas with our knowledgeable drivers as your personal guides.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h4"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Long Distance</h3>
              <p className="text-muted-foreground">
                Comfortable journeys to neighboring countries and major European cities with our premium vehicles.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Special Events</h3>
              <p className="text-muted-foreground">
                Elegant transportation for weddings, celebrations, and special occasions with personalized service.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md border border-border">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-primary"
                >
                  <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Journeys</h3>
              <p className="text-muted-foreground">
                Tailored transportation solutions for your specific needs, including multi-day services.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Translate Lux Taxi</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We pride ourselves on delivering an exceptional service experience from start to finish.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col justify-between bg-card p-6 rounded-lg border border-border shadow-sm">
              <div>
                <h3 className="text-xl font-semibold mb-3">Professional Drivers</h3>
                <p className="text-muted-foreground mb-4">
                  All our drivers are professionally trained, multilingual, and thoroughly familiar with Luxembourg and surrounding regions.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2" />
                  <span>Professional and courteous</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2" />
                  <span>Multilingual (EN, FR, DE, LU)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2" />
                  <span>Local knowledge and experience</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col justify-between bg-card p-6 rounded-lg border border-border shadow-sm">
              <div>
                <h3 className="text-xl font-semibold mb-3">Premium Vehicles</h3>
                <p className="text-muted-foreground mb-4">
                  Our fleet consists of high-quality, regularly maintained vehicles equipped with modern amenities for your comfort.
                </p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2" />
                  <span>Luxury sedans and spacious vans</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2" />
                  <span>Air conditioning and WiFi</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#D4AF37] mr-2" />
                  <span>Regular maintenance and cleaning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0 bg-cover bg-center brightness-[0.25]" style={{ backgroundImage: "url('https://images.pexels.com/photos/243206/pexels-photo-243206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready for a Premium Ride Experience?</h2>
            <p className="text-gray-200 mb-8">
              Book your journey today and experience the perfect blend of comfort, reliability, and luxury.
            </p>
            <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#B8960C] text-black font-medium">
              <Link to="/booking">Book Your Ride Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;