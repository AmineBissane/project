import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingForm from '@/components/booking/BookingForm';
import { VehicleType, vehicles } from '@/types/booking';
import { ArrowLeft, Car, Bus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CategoryPage: React.FC = () => {
  const { type } = useParams<{ type: string }>();
  const navigate = useNavigate();
  
  // Find the vehicle based on the type parameter
  const vehicleType = type as VehicleType;
  const vehicle = vehicles.find(v => v.type === vehicleType);
  
  // If no matching vehicle is found, redirect to home page
  useEffect(() => {
    if (!vehicle) {
      navigate('/');
    }
  }, [vehicle, navigate]);
  
  if (!vehicle) {
    return null;
  }
  
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <Button 
          variant="outline"
          size="sm" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
        
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg shadow-sm p-6 md:p-8">
          <div className="flex items-center gap-4 mb-6">
            {vehicleType === 'car' ? (
              <Car className="h-12 w-12 text-primary" />
            ) : (
              <Bus className="h-12 w-12 text-primary" />
            )}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">Book Your {vehicle.name}</h1>
              <p className="text-muted-foreground">Fill in your details below to book your {vehicleType === 'car' ? 'luxury sedan' : 'premium van'} ride.</p>
            </div>
          </div>
          
          <BookingForm vehicleType={vehicleType} vehicle={vehicle} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;