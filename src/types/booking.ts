export type BookingDetails = {
  firstName: string;
  lastName: string;
  passportNumber: string;
  email: string;
  phoneNumber: string;
  numAdults: number;
  numChildren: number;
  pickupType: 'airport' | 'trainStation' | 'custom';
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: Date | undefined;
  pickupTime: string;
  specialRequests?: string;
};

export type VehicleType = 'car' | 'van';

export interface Vehicle {
  id: string;
  name: string;
  type: VehicleType;
  imageUrl: string; // Already added
  maxPassengers: number; // Add this
  pricePerKm: number; // Add this
  description: string; // Add this
  features: string[]; // Add this
}

export const vehicles: Vehicle[] = [
  {
    id: 'car-1',
    type: 'car',
    name: 'Luxury Sedan',
    imageUrl: '/images/luxury-sedan.jpg',
    maxPassengers: 4,
    pricePerKm: 2.5,
    description: 'Comfortable and stylish sedan perfect for city travel and airport transfers.',
    features: ['Air conditioning', 'WiFi', 'Leather seats', 'Professional driver', 'Complimentary water'],
  },
  {
    id: 'van-1',
    type: 'van',
    name: 'Premium Van',
    imageUrl: '/images/premium-van.jpg',
    maxPassengers: 7,
    pricePerKm: 3.5,
    description: 'Spacious van ideal for groups, families or extra luggage requirements.',
    features: ['Air conditioning', 'WiFi', 'Spacious seating', 'Extra luggage space', 'Professional driver', 'Complimentary refreshments'],
  },
];