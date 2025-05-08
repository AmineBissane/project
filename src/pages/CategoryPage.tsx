import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingForm from '@/components/booking/BookingForm';
import { VehicleType, vehicles } from '@/types/booking';
import { ArrowLeft } from 'lucide-react';
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
          className="bg-white text-black hover:bg-gray-200 border border-gray-300"
          size="sm" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
        
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-lg shadow-sm p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Book Your {vehicle.name}</h1>
          <p className="text-muted-foreground mb-8">Fill in your details below to book your {vehicleType === 'car' ? 'luxury sedan' : 'premium van'} ride.</p>
          
          <BookingForm vehicleType={vehicleType} vehicle={vehicle} />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;