import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Users, Car, Bus } from 'lucide-react';
import { Vehicle } from '@/types/booking';

interface CategoryCardProps {
  vehicle: Vehicle;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ vehicle }) => {
  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/34644004824`, '_blank');
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg group h-full flex flex-col">
      <div className="relative h-48 bg-muted flex items-center justify-center">
        {vehicle.type === 'car' ? (
          <Car className="h-24 w-24 text-primary" strokeWidth={1.5} />
        ) : (
          <Bus className="h-24 w-24 text-primary" strokeWidth={1.5} />
        )}
        <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground px-3 py-1 rounded-full flex items-center">
          <Users size={16} className="mr-1" />
          <span className="text-sm font-medium">Max {vehicle.maxPassengers}</span>
        </div>
      </div>
      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold">{vehicle.name}</h3>
        <p className="text-muted-foreground">{vehicle.description}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="space-y-2">
          {vehicle.features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Starting from</span>
            <span className="font-bold text-lg">{vehicle.pricePerKm.toFixed(2)} €/km</span>
          </div>
          <Button 
            onClick={handleWhatsAppRedirect} 
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Select & Book
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;